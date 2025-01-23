
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

## 🌟 Ce que vous pouvez faire

- **🎯 Sélectionnez vos fusées favorites**  
  Choisissez parmi une liste d'options uniques, chacune avec son propre style et ses caractéristiques.

- **🚀 Lancez des courses en temps réel**  
  Profitez d'une intégration directe avec le serveur **GraphQL** pour suivre l'évolution des courses en direct.

- **🎮 Revivez l'excitation des jeux d'arcade**  
  Plongez dans un univers où la nostalgie des **bornes d'arcade des années 80** est enrichie par des animations modernes et pixelisées.

---

Plongez dans l'univers de **RocketRace** : une expérience unique mêlant **magie rétro** et **puissance des technologies modernes**. 🚀✨

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

## **Stack technique**

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


---

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

---


# 🚀 Gestion de la Persistance des Données

Dans **RocketRace**, la persistance des données est un enjeu majeur pour garantir une expérience fluide, que ce soit pour les courses, l'écran d'accueil, ou l'historique. Voici les choix techniques adoptés pour gérer ces aspects.

---

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

