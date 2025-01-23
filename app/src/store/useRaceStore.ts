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
      name: "race-storage",
    }
  )
);

export default useRaceStore;
