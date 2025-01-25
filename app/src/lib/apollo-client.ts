import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  from,
  ApolloLink,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition, Observable } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";

const createTimeoutLink = (timeout = 5000) => {
  return new ApolloLink((operation, forward) => {
    return new Observable((observer) => {
      const timeoutId = setTimeout(() => {
        observer.error(new Error("La requête a dépassé le délai imparti."));
      }, timeout);

      const subscription = forward(operation).subscribe({
        next: (result) => {
          clearTimeout(timeoutId);
          observer.next(result);
        },
        error: (err) => {
          clearTimeout(timeoutId);
          observer.error(err);
        },
        complete: () => {
          clearTimeout(timeoutId);
          observer.complete();
        },
      });

      return () => {
        clearTimeout(timeoutId);
        if (subscription) subscription.unsubscribe();
      };
    });
  });
};

// 1. Lien de Retry avec configuration
const retryLink = new RetryLink({
  attempts: {
    max: 2, // Nombre maximum de tentatives
    retryIf: (error) => {
      console.warn(`[Apollo Retry] Retrying due to error:`, error);
      return !!error;
    },
  },
  delay: {
    jitter: true,
  },
});

// 2. Lien de Timeout personnalisé
const timeoutLink = createTimeoutLink(5000); // Timeout fixé à 5 secondes

// 3. Lien de gestion des erreurs
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// 4. Lien HTTP
const httpLink = new HttpLink({
  uri: "https://container-service-1.5w9nttkswwxhj.eu-west-3.cs.amazonlightsail.com/graphql",
  credentials: "same-origin",
});

// 5. Lien WebSocket pour les subscriptions
const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: "wss://container-service-1.5w9nttkswwxhj.eu-west-3.cs.amazonlightsail.com/graphql",
        })
      )
    : null;

// 6. Split Link pour déterminer le type de requête
const splitLink =
  typeof window !== "undefined" && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

// 7. Combiner tous les liens avec l'ordre approprié
const link = from([
  retryLink, // RetryLink en premier pour intercepter les erreurs
  timeoutLink, // TimeoutLink après RetryLink
  errorLink, // ErrorLink pour log les erreurs
  splitLink, // SplitLink pour gérer les requêtes HTTP et WebSocket
]);

// 8. Création du client Apollo
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});

export default client;
