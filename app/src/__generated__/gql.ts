/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation StartRace($rocket1: ID!, $rocket2: ID!) {\n    startRace(rocket1: $rocket1, rocket2: $rocket2) {\n      id\n      rocket1 {\n        id\n        exploded\n        progress\n      }\n      rocket2 {\n        id\n        exploded\n        progress\n      }\n    }\n  }\n": types.StartRaceDocument,
    "\n  query Rockets {\n    rockets {\n      id\n      name\n      image\n      description\n    }\n  }\n": types.RocketsDocument,
    "\n  query GetRace($raceId: ID!) {\n    race(id: $raceId) {\n      id\n      winner\n      rocket1 {\n        id\n        exploded\n        progress\n      }\n      rocket2 {\n        id\n        exploded\n        progress\n      }\n    }\n  }\n": types.GetRaceDocument,
    "\n  subscription RocketProgress($raceId: ID!, $rocketId: ID!) {\n    rocketProgress(raceId: $raceId, rocketId: $rocketId) {\n      raceId\n      rocketId\n      progress\n      exploded\n    }\n  }\n": types.RocketProgressDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation StartRace($rocket1: ID!, $rocket2: ID!) {\n    startRace(rocket1: $rocket1, rocket2: $rocket2) {\n      id\n      rocket1 {\n        id\n        exploded\n        progress\n      }\n      rocket2 {\n        id\n        exploded\n        progress\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation StartRace($rocket1: ID!, $rocket2: ID!) {\n    startRace(rocket1: $rocket1, rocket2: $rocket2) {\n      id\n      rocket1 {\n        id\n        exploded\n        progress\n      }\n      rocket2 {\n        id\n        exploded\n        progress\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Rockets {\n    rockets {\n      id\n      name\n      image\n      description\n    }\n  }\n"): (typeof documents)["\n  query Rockets {\n    rockets {\n      id\n      name\n      image\n      description\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetRace($raceId: ID!) {\n    race(id: $raceId) {\n      id\n      winner\n      rocket1 {\n        id\n        exploded\n        progress\n      }\n      rocket2 {\n        id\n        exploded\n        progress\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRace($raceId: ID!) {\n    race(id: $raceId) {\n      id\n      winner\n      rocket1 {\n        id\n        exploded\n        progress\n      }\n      rocket2 {\n        id\n        exploded\n        progress\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription RocketProgress($raceId: ID!, $rocketId: ID!) {\n    rocketProgress(raceId: $raceId, rocketId: $rocketId) {\n      raceId\n      rocketId\n      progress\n      exploded\n    }\n  }\n"): (typeof documents)["\n  subscription RocketProgress($raceId: ID!, $rocketId: ID!) {\n    rocketProgress(raceId: $raceId, rocketId: $rocketId) {\n      raceId\n      rocketId\n      progress\n      exploded\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;