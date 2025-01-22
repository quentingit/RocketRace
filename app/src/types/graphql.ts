export interface RocketProgress {
  id: string;
  progress: number;
  exploded: boolean;
}

export interface Rocket {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Race {
  id: string;
  rocket1: RocketProgress;
  rocket2: RocketProgress;
  winner?: string;
}
export interface RocketProgressEvent {
  raceId: string;
  rocketId: string;
  progress: number;
  exploded: boolean;
}

// Type Rocket Interaction : avec les détails complets des fusées
export type RocketInteraction = Rocket & RocketProgress;

// Interface enrichie
export interface RaceEnriched {
  id: string;
  rocket1: RocketInteraction;
  rocket2: RocketInteraction;
  winner?: string;
}
