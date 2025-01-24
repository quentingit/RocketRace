// hooks/useRocketSelection.jsx
import { useState } from "react";
import { useQuery, useMutation, ApolloError } from "@apollo/client";
import { useRouter } from "next/navigation";
import useRaceStore from "src/store/useRaceStore";
import useRaceHistoryStore from "src/store/useRaceHistoryStore";

import {
  Race,
  RocketsDocument,
  RocketsQuery,
  RocketsQueryVariables,
  StartRaceDocument,
  StartRaceMutation,
  StartRaceMutationVariables,
} from "src/__generated__/graphql";
import { RaceEnriched, RocketInteraction } from "@types/enrichedTypes";

type UseRocketSelectionResult = {
  loading: boolean;
  error?: ApolloError;
  rockets: RocketInteraction[];
  // refetch renvoie un Promise avec le résultat du type RocketsQuery :
  refetch: () => Promise<unknown>;
  selectedRockets: RocketInteraction[];
  selectedRocketNames: string;
  toggleRocketSelection: (rocket: RocketInteraction) => void;
  handleLaunch: () => Promise<void>;
  launching: boolean;
};

export const useRocketSelection = (): UseRocketSelectionResult => {
  const { loading, data, error, refetch } = useQuery<
    RocketsQuery,
    RocketsQueryVariables
  >(RocketsDocument);

  const [startRace] = useMutation<
    StartRaceMutation,
    StartRaceMutationVariables
  >(StartRaceDocument);

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

    setTimeout(async () => {
      try {
        const { data } = await startRace({
          variables: {
            rocket1: selectedRockets[0].id,
            rocket2: selectedRockets[1].id,
          },
        });

        if (!data?.startRace) {
          throw new Error("Les données de la course sont introuvables.");
        }

        const newRace: Race = {
          id: data.startRace.id,
          rocket1: selectedRockets[0],
          rocket2: selectedRockets[1],
        };

        addRace(newRace);
        setRaceData(newRace as RaceEnriched);

        router.push(`/race/${data?.startRace.id}`);
      } catch (err) {
        console.error(err);
        alert("Erreur lors du lancement de la course !");
      } finally {
      }
    }, 300);
  };

  const selectedRocketNames = selectedRockets
    .map((rocket) => rocket.name)
    .join(", ");

  return {
    loading,
    error,
    // `data?.rockets` est un tableau de `Rocket` (type codegen).
    // Si tu veux le transformer en RocketInteraction, à toi de mapper
    // ou d’adapter les champs si nécessaire.
    rockets: (data?.rockets as RocketInteraction[]) || [],
    refetch,
    selectedRockets,
    selectedRocketNames,
    toggleRocketSelection,
    handleLaunch,
    launching,
  };
};
