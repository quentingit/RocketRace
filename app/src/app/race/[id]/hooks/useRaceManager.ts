import { useQuery, useSubscription } from "@apollo/client";

import { transformDetailedRaceData } from "src/transformers";

import { RaceEnriched } from "@types/enrichedTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  GetRaceDocument,
  GetRaceQuery,
  GetRaceQueryVariables,
  RocketProgressDocument,
  RocketProgressSubscription,
  RocketProgressSubscriptionVariables,
  RocketsDocument,
  RocketsQuery,
  RocketsQueryVariables,
} from "src/__generated__/graphql";
import useRaceStore from "src/store/useRaceStore";

type UseRaceManagerResult = {
  raceData: RaceEnriched | null;
  loading: boolean;
  rocketsError: Error | null;
  raceError: Error | null;
  refetchRockets: () => void;
  refetchRace: () => void;
  rocketNameExploded?: string;
  winner?: string;
  rocketProgress1: number;
  rocketProgress2: number;
  isRocket1Leading: boolean;
  rocket1Exploded: boolean;
  rocket2Exploded: boolean;
};

const useRaceManager = (): UseRaceManagerResult => {
  // Store Zustand : donnée d'une course
  const raceData = useRaceStore((state) => state.raceData);
  const setRaceData = useRaceStore((state) => state.setRaceData);
  const resetRaceData = useRaceStore((state) => state.resetRaceData);

  const [subscriptionState, setSubscriptionState] = useState({
    date: Date.now(),
    count: 0,
  });

  const [resetDone, setResetDone] = useState(false); // Suivi du reset effectué
  // param
  const { id: raceId } = useParams();

  // GQL: get race
  const {
    loading: loadingRace,
    data: fetchedRaceData,
    error: raceError,
    refetch: refetchRace,
  } = useQuery<GetRaceQuery, GetRaceQueryVariables>(GetRaceDocument, {
    variables: { raceId: Array.isArray(raceId) ? raceId[0] : raceId || "" },
    fetchPolicy: "network-only",
    skip: !raceId,
  });

  const {
    loading: loadingRockets,
    data: rocketsData,
    error: rocketsError,
    refetch: refetchRockets,
  } = useQuery<RocketsQuery, RocketsQueryVariables>(RocketsDocument, {
    skip: !!raceData,
  });

  //si la course existe
  useEffect(() => {
    if (raceData?.id !== raceId) {
      resetRaceData();
      refetchRace();
    }
  }, [raceData?.id, raceId, resetRaceData, refetchRace]);

  //si la course a bien été finie
  useEffect(() => {
    if (!resetDone && fetchedRaceData?.race?.id) {
      resetRaceData();
      setResetDone(true); // Marque le reset comme effectué
    }
  }, [fetchedRaceData, raceData, raceId, resetRaceData, resetDone]);

  // Effect pour initialiser raceData avec les données récupérées
  useEffect(() => {
    if (!raceData && fetchedRaceData?.race && rocketsData) {
      const { race: fetchedRace } = fetchedRaceData;

      // Transformation des données de la course
      const transformedRace = transformDetailedRaceData(
        fetchedRace,
        fetchedRaceData,
        rocketsData.rockets
      );

      if (transformedRace) {
        setRaceData(transformedRace);
      }
    }
  }, [raceData, fetchedRaceData, rocketsData, setRaceData]);

  // GQL: subscription fusées
  const { data: rocket1Progress } = useSubscription<
    RocketProgressSubscription,
    RocketProgressSubscriptionVariables
  >(RocketProgressDocument, {
    variables: {
      raceId: raceData?.id ?? "",
      rocketId: raceData?.rocket1?.id ?? "",
    },
    skip: !raceData?.rocket1 || Boolean(raceData?.winner),
    onSubscriptionData: () => {
      setSubscriptionState((prev) => ({
        date: Date.now(),
        count: prev.count + 1,
      }));
    },
  });

  const { data: rocket2Progress } = useSubscription<
    RocketProgressSubscription,
    RocketProgressSubscriptionVariables
  >(RocketProgressDocument, {
    variables: {
      raceId: raceData?.id ?? "",
      rocketId: raceData?.rocket2?.id ?? "",
    },
    skip: !raceData?.rocket2 || Boolean(raceData?.winner),
    onSubscriptionData: () => {
      setSubscriptionState((prev) => ({
        date: Date.now(),
        count: prev.count + 1,
      }));
    },
  });

  // Si l'utilisateur vient de la page de sélection et que les subscriptions sont déjà terminées
  // on recharge les données pour afficher le résultat
  useEffect(() => {
    if (!raceData) return;

    const intervalId = setInterval(() => {
      const now = Date.now();
      if (
        now - subscriptionState.date > 2000 &&
        subscriptionState.count === 0
      ) {
        refetchRace();
        clearInterval(intervalId);
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [subscriptionState, refetchRace, raceData]);

  // var : progression et état fusées
  const rocketProgress1 =
    rocket1Progress?.rocketProgress.progress ||
    raceData?.rocket1?.progress ||
    0;
  const rocketProgress2 =
    rocket2Progress?.rocketProgress.progress ||
    raceData?.rocket2?.progress ||
    0;
  const isRocket1Leading = rocketProgress1 > rocketProgress2;

  const rocket1Exploded =
    rocket1Progress?.rocketProgress.exploded ?? raceData?.rocket1?.exploded;
  const rocket2Exploded =
    rocket2Progress?.rocketProgress.exploded ?? raceData?.rocket2?.exploded;

  const rocketNameExploded = rocket1Exploded
    ? raceData?.rocket1.name
    : rocket2Exploded
    ? raceData?.rocket2.name
    : undefined;

  const winner = rocket1Exploded
    ? raceData?.rocket2.name
    : rocket2Exploded
    ? raceData?.rocket1.name
    : rocketProgress1 >= 100
    ? raceData?.rocket1.name
    : rocketProgress2 >= 100
    ? raceData?.rocket2.name
    : undefined;

  const loading = loadingRace || loadingRockets;

  return {
    raceData,
    loading,
    rocketNameExploded,
    winner,
    rocketsError: (rocketsError as Error) || null, // si tu veux forcer en Error
    raceError: (raceError as Error) || null,
    refetchRockets,
    refetchRace,
    rocketProgress1,
    rocketProgress2,
    isRocket1Leading,
    rocket1Exploded: Boolean(rocket1Exploded),
    rocket2Exploded: Boolean(rocket2Exploded),
  };
};

export default useRaceManager;
