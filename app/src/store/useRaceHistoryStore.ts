import { Race } from 'src/__generated__/graphql';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RaceHistoryStore {
  history: Race[];
  addRace: (race: Race) => void;
  clearHistory: () => void;
}

const useRaceHistoryStore = create<RaceHistoryStore>()(
  persist(
    (set) => ({
      history: [],
      addRace: (race) =>
        set((state) => ({
          history: [...state.history, race],
        })),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'race-history-storage',
    }
  )
);

export default useRaceHistoryStore;
