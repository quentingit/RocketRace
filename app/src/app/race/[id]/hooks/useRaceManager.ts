import { useQuery, useSubscription } from "@apollo/client";
import { GET_RACE, GET_ROCKETS } from "@graphql/queries";
import { ROCKET_PROGRESS } from "@graphql/subscriptions";
import { transformDetailedRaceData } from "@services/transformers";

import { RaceEnriched } from "@types/enriched";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useRaceStore from "src/store/useRaceStore";

type UseRaceManagerResult = {
  raceData: RaceEnriched | null;
  loading: boolean;
  rocketsError: Error | null;
  raceError: Error | null;
  refetchRockets: any;
  refetchRace: any;
  rocketNameExploded: string | null;
  winner: string | null;
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
  } = useQuery(GET_RACE, {
    variables: { raceId },
    fetchPolicy: "network-only",
    skip: !raceId,
  });

  // GQL : get rockets
  const {
    loading: loadingRockets,
    data: rocketsData,
    error: rocketsError,
    refetch: refetchRockets,
  } = useQuery(GET_ROCKETS, {
    skip: !!raceData,
  });

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
  const { data: rocket1Progress } = useSubscription(ROCKET_PROGRESS, {
    variables: { raceId: raceData?.id, rocketId: raceData?.rocket1?.id },
    skip: !raceData || !raceData.rocket1 || Boolean(raceData?.winner),
    onSubscriptionData: () => {
      setSubscriptionState((prevState) => ({
        date: Date.now(),
        count: prevState.count + 1,
      }));
    },
  });

  const { data: rocket2Progress } = useSubscription(ROCKET_PROGRESS, {
    variables: { raceId: raceData?.id, rocketId: raceData?.rocket2?.id },
    skip: !raceData || !raceData.rocket2 || Boolean(raceData?.winner),
    onSubscriptionData: () => {
      setSubscriptionState((prevState) => ({
        date: Date.now(),
        count: prevState.count + 1,
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
    : null;

  const winner = rocket1Exploded
    ? raceData?.rocket2.name
    : rocket2Exploded
    ? raceData?.rocket1.name
    : rocketProgress1 >= 100
    ? raceData?.rocket1.name
    : rocketProgress2 >= 100
    ? raceData?.rocket2.name
    : null;

  const loading = loadingRace || loadingRockets;

  return {
    raceData,
    loading,
    rocketNameExploded,
    winner,
    rocketsError,
    raceError,
    refetchRockets,
    refetchRace,
    rocketProgress1,
    rocketProgress2,
    isRocket1Leading,
    rocket1Exploded,
    rocket2Exploded,
  };
};

export default useRaceManager;
