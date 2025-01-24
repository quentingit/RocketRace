"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import Confetti from "react-confetti";
import useWindowSize from "@hooks/useWindowSize";
import ErrorHandler from "@components/ErrorHandler/ErrorHandler";
import LoadingIndicator from "@components/LoadingIndicator/LoadingIndicator";
import useRaceManager from "./hooks/useRaceManager";
import NoRaceScreen from "./components/NoRaceScreen/NoRaceScreen";
import WinnerMessage from "./components/WinnerMessage/WinnerMessage";
import RocketBox from "./components/RocketBox/RocketBox";

const Race = () => {
  const {
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
  } = useRaceManager();
  const { width, height } = useWindowSize();
  const router = useRouter();

  const handleRefetch = async () => {
    try {
      if (rocketsError) {
        await refetchRockets();
      }
      if (raceError) {
        await refetchRace();
      }
    } catch (error) {
      console.error("Erreur lors de la tentative de rechargement :", error);
    }
  };

  if (loading) {
    return <LoadingIndicator message=" Chargement de la course..." />;
  }

  if (rocketsError || raceError) {
    return (
      <ErrorHandler
        errorMessage="Erreur lors du chargement de la course"
        onRetry={undefined}
        //onRetry={refetch}
      />
    );
  }

  if (!raceData) {
    return <NoRaceScreen />;
  }

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white bg-stars animate-stars",
        !winner && "glitch-bg"
      )}
    >
      <div className="absolute inset-0 bg-stars animate-stars"></div>
      {winner && (
        <WinnerMessage
          winner={winner}
          width={width}
          height={height}
          raceData={raceData}
          router={router}
          rocketNameExploded={rocketNameExploded}
        />
      )}

      {winner && <Confetti width={width} height={height} />}

      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl font-pixel text-neon-green animate-crt-flicker z-10">
        Suivi de la course
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl z-10">
        <RocketBox
          rocketData={raceData.rocket1}
          rocketExploded={rocket1Exploded}
          isLeading={isRocket1Leading}
          borderColorClass="border-blue-500 neon-border-green"
          rocketColorClass="neon-rocket-green"
          textColorClass="text-neon-green"
          progress={rocketProgress1}
        />
        <RocketBox
          rocketData={raceData.rocket2}
          rocketExploded={rocket2Exploded}
          isLeading={!isRocket1Leading}
          borderColorClass="border-red-500 neon-border-blue"
          rocketColorClass="neon-rocket-blue"
          textColorClass="text-neon-blue"
          progress={rocketProgress2}
        />
      </div>
    </div>
  );
};

export default Race;
