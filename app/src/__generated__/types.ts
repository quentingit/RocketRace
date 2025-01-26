export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  AccountNumber: { input: any; output: any };
  BigInt: { input: any; output: any };
  Byte: { input: any; output: any };
  CountryCode: { input: any; output: any };
  Cuid: { input: any; output: any };
  Currency: { input: any; output: any };
  DID: { input: any; output: any };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  Duration: { input: any; output: any };
  EmailAddress: { input: any; output: any };
  GUID: { input: any; output: any };
  HSL: { input: any; output: any };
  HSLA: { input: any; output: any };
  HexColorCode: { input: any; output: any };
  Hexadecimal: { input: any; output: any };
  IBAN: { input: any; output: any };
  IP: { input: any; output: any };
  IPv4: { input: any; output: any };
  IPv6: { input: any; output: any };
  ISBN: { input: any; output: any };
  ISO8601Duration: { input: any; output: any };
  JSON: { input: any; output: any };
  JSONObject: { input: any; output: any };
  JWT: { input: any; output: any };
  Latitude: { input: any; output: any };
  LocalDate: { input: any; output: any };
  LocalEndTime: { input: any; output: any };
  LocalTime: { input: any; output: any };
  Locale: { input: any; output: any };
  Long: { input: any; output: any };
  Longitude: { input: any; output: any };
  MAC: { input: any; output: any };
  NegativeFloat: { input: any; output: any };
  NegativeInt: { input: any; output: any };
  NonEmptyString: { input: any; output: any };
  NonNegativeFloat: { input: any; output: any };
  NonNegativeInt: { input: any; output: any };
  NonPositiveFloat: { input: any; output: any };
  NonPositiveInt: { input: any; output: any };
  ObjectID: { input: any; output: any };
  PhoneNumber: { input: any; output: any };
  Port: { input: any; output: any };
  PositiveFloat: { input: any; output: any };
  PositiveInt: { input: any; output: any };
  PostalCode: { input: any; output: any };
  RGB: { input: any; output: any };
  RGBA: { input: any; output: any };
  RoutingNumber: { input: any; output: any };
  SafeInt: { input: any; output: any };
  SemVer: { input: any; output: any };
  Time: { input: any; output: any };
  TimeZone: { input: any; output: any };
  Timestamp: { input: any; output: any };
  URL: { input: any; output: any };
  USCurrency: { input: any; output: any };
  UUID: { input: any; output: any };
  UnsignedFloat: { input: any; output: any };
  UnsignedInt: { input: any; output: any };
  UtcOffset: { input: any; output: any };
  Void: { input: any; output: any };
};

export type Mutation = {
  __typename?: 'Mutation';
  startRace: Race;
};

export type MutationStartRaceArgs = {
  rocket1: Scalars['ID']['input'];
  rocket2: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  race?: Maybe<Race>;
  rockets: Array<Rocket>;
};

export type QueryRaceArgs = {
  id: Scalars['ID']['input'];
};

export type Race = {
  __typename?: 'Race';
  id: Scalars['ID']['output'];
  rocket1: RocketProgress;
  rocket2: RocketProgress;
  winner?: Maybe<Scalars['ID']['output']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type RocketProgress = {
  __typename?: 'RocketProgress';
  exploded: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  progress: Scalars['Int']['output'];
};

export type RocketProgressEvent = {
  __typename?: 'RocketProgressEvent';
  exploded: Scalars['Boolean']['output'];
  progress: Scalars['Int']['output'];
  raceId: Scalars['ID']['output'];
  rocketId: Scalars['ID']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  rocketProgress: RocketProgressEvent;
};

export type SubscriptionRocketProgressArgs = {
  raceId: Scalars['ID']['input'];
  rocketId: Scalars['ID']['input'];
};

export type StartRaceMutationVariables = Exact<{
  rocket1: Scalars['ID']['input'];
  rocket2: Scalars['ID']['input'];
}>;

export type StartRaceMutation = {
  __typename?: 'Mutation';
  startRace: {
    __typename?: 'Race';
    id: string;
    rocket1: {
      __typename?: 'RocketProgress';
      id: string;
      exploded: boolean;
      progress: number;
    };
    rocket2: {
      __typename?: 'RocketProgress';
      id: string;
      exploded: boolean;
      progress: number;
    };
  };
};

export type RocketsQueryVariables = Exact<{ [key: string]: never }>;

export type RocketsQuery = {
  __typename?: 'Query';
  rockets: Array<{
    __typename?: 'Rocket';
    id: string;
    name: string;
    image: string;
    description: string;
  }>;
};

export type GetRaceQueryVariables = Exact<{
  raceId: Scalars['ID']['input'];
}>;

export type GetRaceQuery = {
  __typename?: 'Query';
  race?: {
    __typename?: 'Race';
    id: string;
    winner?: string | null;
    rocket1: {
      __typename?: 'RocketProgress';
      id: string;
      exploded: boolean;
      progress: number;
    };
    rocket2: {
      __typename?: 'RocketProgress';
      id: string;
      exploded: boolean;
      progress: number;
    };
  } | null;
};

export type RocketProgressSubscriptionVariables = Exact<{
  raceId: Scalars['ID']['input'];
  rocketId: Scalars['ID']['input'];
}>;

export type RocketProgressSubscription = {
  __typename?: 'Subscription';
  rocketProgress: {
    __typename?: 'RocketProgressEvent';
    raceId: string;
    rocketId: string;
    progress: number;
    exploded: boolean;
  };
};
