export type RocketProgressData = {
  exploded?: boolean | null;
  progress?: number | null;
};

export type FetchedRaceData = {
  race?: {
    rocket1?: RocketProgressData;
    rocket2?: RocketProgressData;
    winner?: string | null;
  };
};
