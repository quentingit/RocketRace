## 🚀 RocketRace

<table>
  <tr>
    <td>
      <img src="./docs/icon.png" alt="RocketRace Icon" width="100px">
    </td>
    <td>
      <strong>RocketRace</strong> est une application web développée avec <strong>NextJS</strong>, conçue pour interagir avec un serveur <strong>GraphQL</strong> afin de simuler des courses de fusées en temps réel.  
      <br><br>
      Inspirée par l'esthétique rétro des <strong>bornes d'arcade des années 80</strong>, l'application offre une expérience visuelle immersive avec des animations pixelisées et une ambiance futuriste.
    </td>
  </tr>
</table>

<p align="center">
  <img src="./docs/accueil.gif" alt="Animation de la page d'accueil Rocket Race" width="100%">
</p>

<br/>

## 🌟 Ce que vous pouvez faire

- **🎯 Sélectionnez vos fusées favorites**  
  Choisissez parmi une liste d'options uniques, chacune avec son propre style et ses caractéristiques.

- **🚀 Lancez des courses en temps réel**  
  Profitez d'une intégration directe avec le serveur **GraphQL** pour suivre l'évolution des courses en direct.

- **🎮 Revivez l'excitation des jeux d'arcade**  
  Plongez dans un univers où la nostalgie des **bornes d'arcade des années 80** est enrichie par des animations modernes et pixelisées 🚀✨

<br/><br/>

---


## 🎥 Preview


<p align="center">
  <table style="table-layout: fixed; width: 80%; margin: auto;">
    <tr>
      <td align="center" style="width: 50%;">
        <img src="./docs/course.gif" alt="Animation d'une course Rocket Race" style="width: 100%; ">
        <br>
        <strong>Selection & Simulation</strong>
      </td>
      <td align="center" style="width: 50%;">
        <img src="./docs/historique.gif" alt="Animation de l'historique Rocket Race" style="width: 100%;">
        <br>
        <strong>Historique & Suivi </strong>
      </td>
    </tr>
  </table>
</p>

<br>
<br>

# 🔧 Stack Technique

#### Développement Frontend
- **Next.js** : Framework React pour le rendu côté serveur et les applications modernes.
- **React** : Librairie JavaScript pour construire des interfaces utilisateur interactives.
- **TypeScript** : Super-ensemble de JavaScript pour un typage statique et une meilleure maintenabilité du code.
- **TailwindCSS** : Framework CSS utilitaire pour un développement rapide et des designs modernes.
- **Clsx** : Simplifie la gestion conditionnelle des classes CSS dans les composants.

#### Outils de Build et de Qualité
- **Turbopack** : Outil de développement rapide pour optimiser les performances.
- **ESLint** : Outil de linting pour identifier et corriger les erreurs de code.
- **Prettier** : Formateur de code pour garantir un style de code uniforme.
- **Next.js Lint** : Configurations spécifiques pour respecter les bonnes pratiques avec Next.js.

#### Gestion de Données et API
- **Apollo Client** : Gestionnaire de requêtes GraphQL pour le frontend.
- **GraphQL** : Langage de requête structuré pour interagir avec l'API.
- **GraphQL-WS** : Gestion des abonnements en temps réel pour GraphQL.
- **Zustand** : Librairie de gestion d'état légère et efficace.

#### Déploiement
- **Vercel** : Plateforme de déploiement continu pour héberger l'application et gérer automatiquement les changements.


<br/>

# 🗂️ Structure 

 <img src="./docs/arborescence.png" alt="Arborescence RocketRace" style="width: 30%;">


| **Dossier**     | **Description**                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------|
| `app/`           | Contient la structure des pages principales de l'application, avec des routes dynamiques (par exemple, `/race/[id]`). Inclut les sous-répertoires pour les fonctionnalités comme l'`historique` et la `sélection`. |
| `components/`    | Regroupe tous les composants réutilisables, tels que `Header`, `Footer`, `RocketCard`, et des éléments spécifiques comme `RaceItem` ou `WinnerMessage`. Chaque composant est organisé dans son propre dossier. |
| `graphql/`       | Centralise les requêtes GraphQL (`queries.ts`), mutations (`mutations.ts`) et abonnements (`subscriptions.ts`) pour interagir avec l'API GraphQL de manière structurée. |
| `hooks/`         | Contient des hooks personnalisés pour encapsuler des logiques spécifiques, comme `useRocketSelection` pour la gestion des fusées ou `useRaceManager` pour la gestion des courses. |
| `lib/`           | Comprend des configurations globales comme `apollo-client.ts` pour Apollo GraphQL et des stores Zustand (`useRaceStore.ts`, `useRaceHistoryStore.ts`). |
| `services/`      | Inclut la logique métier, comme la transformation des données (`transformers/`) et la gestion des appels API (`fetchRaceDetails.ts`). Structure le code pour une séparation claire des responsabilités. |
| `styles/`        | Regroupe les styles globaux (via `globals.css`) pour définir les thèmes et les classes communes, avec une intégration de TailwindCSS. |
| `types/`         | Déclare les types TypeScript, avec des fichiers comme `graphql.ts` (types pour les données GraphQL) et `enriched.ts` (types enrichis pour les données manipulées dans l'application). |
| `utils/`         | Contient des utilitaires spécifiques, comme `buttonStyles.ts`, pour centraliser les styles ou les helpers partagés. |



L'utilisation des alias dans le fichier `tsconfig.json` permet un **accès rapide et organisé** aux différents dossiers.


Alias dans `tsconfig.json` :

```json
{
  "compilerOptions": {
    ...
    "paths": {
      "@components/*": ["src/components/*"],
      "@graphql/*": ["src/graphql/*"],
      "@hooks/*": ["src/hooks/*"],
      "@lib/*": ["src/lib/*"],
      "@services/*": ["src/services/*"],
      "@types/*": ["src/types/*"],
      "@utils/*": ["src/utils/*"]
    }
    ...
}
```
<br/><br/>



# 🖥️ Les Écrans de l'Application 

| **Écran**            | **Description**                                                                                                                                                                                                                                          |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Page d'Accueil**    | - Simule une télévision rétro avec un bouton “Allumer” (géré avec `sessionStorage` pour n'afficher qu'une seule fois).<br>- Une fois allumé, mène à l'écran principal.<br>- **Accès direct** : possibilité de se rendre à la page de sélection ou à l'historique. |
| **Page de Sélection** | - Permet de **sélectionner deux fusées** parmi une liste récupérée via une **query GraphQL**.<br>- Affichage des fusées avec nom, image et description.<br>- **Gestion d’état** : Zustland stocke les fusées sélectionnées, prêtes pour le lancement.                                               |
| **Page de Course**    | Affiche une course en **temps réel** avec suivi des positions grâce aux **GraphQL Subscriptions**.<br><br> **Deux modes d’accès possibles** :<br>  1. Depuis la page de sélection : les données sont récupérées via **Zustand**.<br>  2. Par une URL directe : les données sont récupérées via une **query GraphQL**.<br><br> **État de la course** :<br>  - **Course en cours** : progression en direct suivie de l’affichage des résultats (avec **query** et **subscriptions**).<br>  - **Course terminée** : affichage uniquement de l’écran de résultat (avec **query**).<br><br> **Gestion des résultats** :<br>  - Si une fusée atteint l’arrivée, elle est déclarée **gagnante**.<br>  - Si une fusée explose, l’adversaire est déclaré **gagnant**, avec un écran adapté. |                                                                                                       |
| **Page d’Historique** | - Liste toutes les courses effectuées avec détails sur les fusées participantes.<br>- Indique si la course est terminée ou toujours en cours.<br>       |


<br/><br/>


# 🚀 Gestion de la Persistance des Données

Dans **RocketRace**, la persistance des données est un enjeu majeur pour garantir une expérience fluide, que ce soit pour les courses, l'écran d'accueil, ou l'historique. Voici les choix techniques adoptés pour gérer ces aspects.



## **1. Gestion des Données de Course avec Zustand**

### Contexte
Initialement, un **Context** React a été utilisé pour gérer la persistance des données entre la sélection des deux vaisseaux et le lancement de la course sur une nouvelle page. Cependant, cette approche ne permettait pas de **recharger la page** sans perdre les données, ce qui nuisait à l'expérience utilisateur.

### Solution
L'utilisation de **Zustand** a été choisie comme alternative légère à Redux pour une gestion efficace et simple de l'état global. Avec l'ajout de la **middleware persist**, les données sont automatiquement sauvegardées dans le **localStorage**, permettant ainsi de :
- Maintenir la persistance des données en cas de rechargement de page.
- Offrir une configuration minimale sans la complexité d'autres outils comme Redux.

### Exemple de Code avec Zustand
Voici un exemple de gestion des données d'une course avec **Zustand** et la middleware **persist** :

```typescript
import { RaceEnriched } from "src/types/enriched";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type RaceStore = {
  raceData: RaceEnriched | null;
  setRaceData: (data: RaceEnriched | null) => void;
  resetRaceData: () => void;
};

const useRaceStore = create<RaceStore>()(
  persist(
    (set) => ({
      raceData: null as RaceEnriched | null,
      setRaceData: (data: RaceEnriched | null) => set({ raceData: data }),
      resetRaceData: () => set({ raceData: null }),
    }),
    {
      name: "race-storage", // Clé utilisée dans le localStorage
    }
  )
);

export default useRaceStore;
```

Dans un composant, l’utilisation est simple :


```typescript
const raceData = useRaceStore((state) => state.raceData);
const setRaceData = useRaceStore((state) => state.setRaceData);
const resetRaceData = useRaceStore((state) => state.resetRaceData);
```

## 2. Gestion de l’Historique des Courses

### Contexte
Au départ, l’historique des courses (tableau de scores) était stocké dans le **localStorage**. Cependant, avec l’introduction de **Zustand**, j'ai décidé d’utiliser le même store pour centraliser la gestion de ces données.

### Solution avec Zustand
En utilisant **Zustand** avec la middleware **persist**, l’historique est sauvegardé de manière persistante et accessible en permanence. Cela permet de :
- Centraliser la logique d’état global pour une meilleure maintenabilité.
- Réduire la dépendance à des appels directs au **localStorage**.
- Simplifier la gestion des données à travers l'application.

## 3. Gestion de l’Écran d’Accueil avec Session Storage

### Contexte
L’écran d’accueil, représentant une télévision rétro avec un bouton **“Allumer”**, nécessite une persistance limitée au **cycle de vie de l’onglet**. Il est essentiel que cet écran ne s’affiche qu’une seule fois par onglet, même si l’utilisateur revient sur la page d’accueil.

### Solution
Le **sessionStorage** a été utilisé pour répondre à ces besoins spécifiques, car il permet de :
- **Persister des données uniquement pour l’onglet en cours.**
- **Supprimer les données dès que l’onglet est fermé.**

Grâce à cette approche, l’écran d’accueil ne réapparaît pas après avoir été vu une fois, offrant une expérience utilisateur fluide et immersive.

```typescript
useEffect(() => {
  const hasSeenOverlay = sessionStorage.getItem("hasSeenOverlay");
  if (!hasSeenOverlay) {
    setShowOverlay(true);
  } else {
    setShowOverlay(false);
  }
}, []);

const handleOverlayClose = () => {
  setIsPoweringOn(true); // Animation d'allumage
  setTimeout(() => {
    setShowOverlay(false);
    sessionStorage.setItem("hasSeenOverlay", "true"); // Marquer comme vu
  }, 2000); // Durée de l'animation
};

```

<br/><br/>

# 🌐 Gestion Données : Intégration GraphQL & Transformation Données
<br/>

## **📡 Interaction avec GraphQL**

- Les données de l'application, comme les informations sur les courses et les fusées, sont récupérées via des **queries** et mises à jour en temps réel grâce aux **subscriptions**.
- Les mutations permettent d'envoyer des actions spécifiques, comme lancer une course.
 

### 1️⃣ **Subscriptions** : Suivi en temps réel des fusées

Les **subscriptions** permettent de suivre en direct la progression et l'état des fusées lors de la course. Elles ne sont activées que si toutes les informations nécessaires sont déjà disponibles (par exemple, si l'utilisateur vient de la page de sélection).

```typescript
// GQL: subscription pour la progression de la fusée 1
const { data: rocket1Progress } = useSubscription(ROCKET_PROGRESS, {
  variables: { raceId: raceData?.id, rocketId: raceData?.rocket1?.id },
  skip: !raceData || !raceData.rocket1 || Boolean(raceData?.winner), // Pas de subscription si les données sont manquantes ou si un vainqueur est déjà déclaré
});

// GQL: subscription pour la progression de la fusée 2
const { data: rocket2Progress } = useSubscription(ROCKET_PROGRESS, {
  variables: { raceId: raceData?.id, rocketId: raceData?.rocket2?.id },
  skip: !raceData || !raceData.rocket2 || Boolean(raceData?.winner), // Même logique que pour la fusée 1
});
```

**Conditions pour activer les subscriptions**

- Les informations sur la course (**raceData**) doivent déjà être disponibles.
- Un vainqueur ne doit pas être déclaré (pas de besoin de suivi si la course est terminée).
- Si l’utilisateur arrive sur la page via une **URL directe** (par exemple `/race/4b116ca6-4cbe-490c-a0ad-5c9be63fa326`), les **subscriptions** ne sont pas utilisées immédiatement, car les informations sur la course doivent d’abord être récupérées via des **queries**.


### 2️⃣ Queries : Récupération initiale des données

- Lorsque l’utilisateur arrive sur la page via une **URL directe** (et non via l’écran de sélection), les informations nécessaires sur la course et les fusées doivent être récupérées à l’aide de **queries**.
  
```typescript
// GQL: récupérer les informations de la course
const {
  loading: loadingRace,
  error: raceError,
  data: fetchedRaceData,
} = useQuery(GET_RACE, {
  variables: { raceId }, // ID de la course
  fetchPolicy: "network-only", // Force un rafraîchissement des données, car elles changent rapidement pendant la course
  skip: !raceId, // Ne lance pas la requête si l'ID de la course n'est pas disponible
});

// GQL: récupérer les informations sur les fusées
const { loading: loadingRockets, data: rocketsData } = useQuery(GET_ROCKETS, {
  skip: !!raceData, // on active la requete si on a pas les données de courses
});
```

<br/><br/>


## **🔄 Transformation des Données**

- Les données brutes récupérées via l'API GraphQL sont transformées pour être compatibles avec le format attendu par l'application.
- Une gestion claire des transformations garantit que l'interface utilisateur affiche toujours des données cohérentes et bien structurées.
- **Exemple :** La transformation des informations des fusées et des courses est effectuée à l'aide de fonctions spécifiques pour enrichir ou filtrer les données nécessaires.


### Hook Personnalisé : useRaceData

le  hook useRaceManager gère la récupération et la transformation des données de course et les enregistre dans Zustand.

```typescript



  const raceData = useRaceStore((state) => state.raceData);
  const setRaceData = useRaceStore((state) => state.setRaceData);
  ...
  useEffect(() => {
    // Si les données de course ne sont pas encore disponibles, les transformer
   // fetchedRaceData : Données brutes récupérées via GraphQL sur la course.
   // rocketsData :  Liste complète des fusées disponibles récupérée via GraphQL
    if (!raceData && fetchedRaceData?.race && rocketsData) {
      const { race: fetchedRace } = fetchedRaceData;

      // Transformation des données brutes en données enrichies
      const transformedRace = transformDetailedRaceData(
        fetchedRace,
        fetchedRaceData,
        rocketsData.rockets
      );

      // Si la transformation a réussi, mettre à jour Zustand
      if (transformedRace) {
        setRaceData(transformedRace);
      }
    }
  }, [raceData, fetchedRaceData, rocketsData, setRaceData]);
  ...
};
```


### Fonctions de Transformation

Ces fonctions restent dans des fichiers distincts, par exemple dans `src/services/transformers/transformDetailedRaceData.tsx`.

---

### **1. Transformation des Données d’une Course**


```typescript
/**
 * Transforme les données d'une course pour enrichir les informations des fusées.
 *
 * @param race - Données principales de la course.
 * @param fetchedData - Données supplémentaires récupérées via GraphQL.
 * @param rockets - Liste complète des fusées disponibles.
 * @returns Données enrichies de la course ou `null` si les fusées sont invalides.
 */
export const transformDetailedRaceData = (
  race: Race,
  fetchedData: FetchedRaceData,
  rockets: Rocket[]
): RaceEnriched | null => {
  const getRocketDetails = (rocketId: string): Rocket | null =>
    rockets.find((rocket) => rocket.id === rocketId) || null;

  const rocket1Details = getRocketDetails(race.rocket1.id);
  const rocket2Details = getRocketDetails(race.rocket2.id);

  if (rocket1Details && rocket2Details) {
    return {
      id: race.id,
      rocket1: transformRocketData(rocket1Details, fetchedData.race?.rocket1),
      rocket2: transformRocketData(rocket2Details, fetchedData.race?.rocket2),
      winner: fetchedData.race?.winner || null,
    };
  }

  return null;
};
```


### **2. Transformation des Données d’une Fusée**



```typescript
/**
 * Transforme les données d'une fusée en enrichissant ses informations avec des données supplémentaires.
 *
 * @param rocket - Données principales de la fusée (ID, nom, image).
 * @param fetchedRocketData - Données supplémentaires récupérées (progression, explosion).
 * @returns Données enrichies de la fusée.
 */
export const transformRocketData = (
  rocket: Rocket,
  fetchedRocketData?: { exploded?: boolean | null; progress?: number | null }
) => ({
  id: rocket.id,
  name: rocket.name,
  image: rocket.image,
  exploded: fetchedRocketData?.exploded || null,
  progress: fetchedRocketData?.progress || null,
});
```

