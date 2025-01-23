
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





