import { useEffect, useState } from 'react';
import useRaceHistoryStore from 'src/store/useRaceHistoryStore';
import { fetchRaceDetails } from 'src/app/historique/services/fetchRaceDetails';
import { RaceEnriched } from '@appTypes/enrichedTypes';

export const useRaceHistory = () => {
  const [raceDetails, setRaceDetails] = useState<RaceEnriched[]>([]);
  const raceHistory = useRaceHistoryStore((state) => state.history);
  const clearHistory = useRaceHistoryStore((state) => state.clearHistory);

  // Charger les détails de chaque course à partir des IDs
  useEffect(() => {
    const loadDetails = async () => {
      if (raceHistory.length > 0) {
        const details: RaceEnriched[] = await fetchRaceDetails(raceHistory);
        setRaceDetails(details);
      }
    };

    loadDetails();
  }, [raceHistory]);

  const handleClearHistory = () => {
    clearHistory();
    setRaceDetails([]);
  };

  return {
    raceDetails,
    raceHistory,
    isRaceDetailsEmpty: raceDetails.length === 0,
    handleClearHistory,
  };
};
