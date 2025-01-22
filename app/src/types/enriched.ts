import { Rocket, RocketProgress } from "./graphql";

export type RocketInteraction = Rocket & RocketProgress;

export type RaceEnriched = {
  id: string;
  rocket1: RocketInteraction;
  rocket2: RocketInteraction;
  winner?: string;
};
