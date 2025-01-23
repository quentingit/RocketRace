"use client";

import { useRocketSelection } from "@hooks/useRocketSelection";
import RocketCard from "@components/RocketCard/RocketCard";
import { RocketInteraction } from "@types/enriched";
import LoadingIndicator from "@components/common/LoadingIndicator/LoadingIndicator";
import ErrorHandler from "@components/common/ErrorHandler/ErrorHandler";
import clsx from "clsx";
import InfoPanel from "@components/InfoPanel/InfoPanel";

const getLaunchButtonClasses = (isDisabled: boolean): string =>
  clsx(
    "relative mt-10 px-10 py-5 rounded-full text-3xl font-pixel text-white bg-gradient-to-r from-neon-yellow to-orange-500 transition-transform transform hover:scale-125",
    isDisabled
      ? "opacity-50 cursor-not-allowed"
      : "hover:from-yellow-400 hover:to-orange-400 glow-btn active:scale-95 animate-crt-flicker"
  );
const getLaunchButtonGlowClasses = (isDisabled: boolean): string =>
  clsx(
    "absolute inset-0 bg-radial-gradient at-center from-transparent via-yellow-300/20 to-transparent rounded-full blur-xl opacity-70",
    isDisabled ? "hidden" : "animate-pulse"
  );

const Selection = () => {
  const {
    loading,
    error,
    rockets,
    refetch,
    selectedRockets,
    selectedRocketNames,
    toggleRocketSelection,
    handleLaunch,
    launching,
  } = useRocketSelection();

  const numberRockets = rockets.length;
  const isLaunchDisabled = selectedRockets.length < 2 || launching;

  if (loading) {
    return <LoadingIndicator message="Chargement des fusées..." />;
  }

  if (error) {
    return (
      <ErrorHandler
        errorMessage="Erreur lors du chargement des fusées."
        onRetry={refetch}
      />
    );
  }

  const renderedRockets = rockets.map((rocket: RocketInteraction) => (
    <RocketCard
      key={rocket.id}
      rocket={rocket}
      isSelected={selectedRockets.some((selected) => selected.id === rocket.id)}
      launching={launching}
      onToggleSelection={toggleRocketSelection}
    />
  ));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-black to-gray-900 text-white bg-stars animate-stars">
      <h1 className="text-5xl font-pixel text-neon-green animate-crt-flicker mb-10">
        Sélectionnez vos fusées
      </h1>

      <InfoPanel
        numberRockets={numberRockets}
        selectedRocketNames={selectedRocketNames}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 animate-fade-in m-4">
        {renderedRockets}
      </div>

      <button
        onClick={handleLaunch}
        disabled={isLaunchDisabled}
        className={getLaunchButtonClasses(isLaunchDisabled)}
      >
        <span className={getLaunchButtonGlowClasses(isLaunchDisabled)}></span>
        <span>🚀 Lancer la course !</span>
      </button>
    </div>
  );
};

export default Selection;
