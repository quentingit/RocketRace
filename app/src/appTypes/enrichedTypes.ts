import { Rocket, RocketProgress } from 'src/__generated__/graphql';

export type RocketInteraction = Rocket & RocketProgress;

export type RaceEnriched = {
  id: string;
  rocket1: RocketInteraction;
  rocket2: RocketInteraction;
  winner?: string;
};
