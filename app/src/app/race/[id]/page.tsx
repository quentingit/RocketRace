"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import Confetti from "react-confetti";
import useWindowSize from "@hooks/useWindowSize";
import NoRaceScreen from "@components/NoRaceScreen/NoRaceScreen";
import RocketBox from "@components/RocketBox/RocketBox";
import WinnerMessage from "@components/WinnerMessage/WinnerMessage";
import useRaceManager from "@hooks/useRaceManager";

const Race = () => {
  const {
    raceData,
    loading,
    raceError,
    rocketNameExploded,
    winner,
    rocketProgress1,
    rocketProgress2,
    isRocket1Leading,
    rocket1Exploded,
    rocket2Exploded,
  } = useRaceManager();
  const { width, height } = useWindowSize();
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-neon-yellow font-pixel">
        Chargement de la course...
      </div>
    );
  }

  if (raceError) {
    return (
      <div className="flex items-center justify-center min-h-screen text-neon-red font-pixel">
        Erreur : Impossible de charger la course.
      </div>
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
