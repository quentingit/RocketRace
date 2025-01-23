"use client";

import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

type ClientApolloProviderProps = {
  children: ReactNode;
};

export default function ClientApolloProvider({
  children,
}: ClientApolloProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
