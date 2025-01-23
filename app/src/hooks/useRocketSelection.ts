// hooks/useRocketSelection.jsx
import { useState } from "react";
import { useQuery, useMutation, ApolloError } from "@apollo/client";
import { useRouter } from "next/navigation";
import { GET_ROCKETS } from "@graphql/queries";
import { START_RACE } from "@graphql/mutations";
import useRaceStore from "src/store/useRaceStore";
import useRaceHistoryStore from "src/store/useRaceHistoryStore";
import { RocketInteraction } from "@types/enriched";
import { Rocket } from "@types/graphql";

type UseRocketSelectionResult = {
  loading: boolean;
  error: ApolloError | null;
  rockets: RocketInteraction[];
  refetch: () => Promise<any>;
  selectedRockets: RocketInteraction[];
  selectedRocketNames: string;
  toggleRocketSelection: (rocket: RocketInteraction) => void;
  handleLaunch: () => Promise<void>;
  launching: boolean;
};

export const useRocketSelection = (): UseRocketSelectionResult => {
  const { loading, data, error, refetch } = useQuery(GET_ROCKETS);
  const [startRace] = useMutation(START_RACE);
  const [selectedRockets, setSelectedRockets] = useState<RocketInteraction[]>(
    []
  );
  const [launching, setLaunching] = useState<boolean>(false);
  const router = useRouter();

  const setRaceData = useRaceStore((state) => state.setRaceData);
  const addRace = useRaceHistoryStore((state) => state.addRace);

  // Ajouter ou retirer une fusée de la sélection
  const toggleRocketSelection = (rocket: RocketInteraction) => {
    if (selectedRockets.some((selected) => selected.id === rocket.id)) {
      setSelectedRockets(selectedRockets.filter((r) => r.id !== rocket.id));
    } else if (selectedRockets.length < 2) {
      setSelectedRockets([...selectedRockets, rocket]);
    }
  };

  // Gérer le lancement de la course
  const handleLaunch = async () => {
    if (selectedRockets.length < 2) return;

    setLaunching(true);

    try {
      const { data } = await startRace({
        variables: {
          rocket1: selectedRockets[0].id,
          rocket2: selectedRockets[1].id,
        },
      });

      const newRace = {
        id: data.startRace.id,
        rocket1: selectedRockets[0],
        rocket2: selectedRockets[1],
      };

      addRace(newRace);
      setRaceData(newRace);

      router.push(`/race/${data.startRace.id}`);
    } catch (err) {
      console.error(err);
      alert("Erreur lors du lancement de la course !");
    } finally {
      setLaunching(false);
    }
  };

  const selectedRocketNames = selectedRockets
    .map((rocket) => rocket.name)
    .join(", ");

  return {
    loading,
    error,
    rockets: data?.rockets || [],
    refetch,
    selectedRockets,
    selectedRocketNames,
    toggleRocketSelection,
    handleLaunch,
    launching,
  };
};
