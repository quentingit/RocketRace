"use client";

import { useRocketSelection } from "@hooks/useRocketSelection";
import RocketCard from "@components/RocketCard/RocketCard";
import {
  getLaunchButtonClasses,
  getLaunchButtonGlowClasses,
} from "@utils/buttonStyles";
import { RocketInteraction } from "@types/enriched";

const InfoPanel = ({
  numberRockets,
  selectedRocketNames,
}: {
  numberRockets: number;
  selectedRocketNames: string;
}) => (
  <div className="text-lg font-pixel text-neon-blue mb-10 text-center animate-crt-flicker">
    <p>Total Fusées : {numberRockets}</p>
    <p>
      Sélectionnées :{" "}
      <span className="text-neon-yellow">{selectedRocketNames}</span>
    </p>
  </div>
);

const RocketSelection = () => {
  const {
    loading,
    error,
    rockets,
    selectedRockets,
    selectedRocketNames,
    toggleRocketSelection,
    handleLaunch,
    launching,
  } = useRocketSelection();

  const numberRockets = rockets.length;
  const isLaunchDisabled = selectedRockets.length < 2 || launching;

  if (loading)
    return <p className="font-pixel text-neon-green">Chargement...</p>;
  if (error)
    return <p className="font-pixel text-neon-red">Erreur : {error.message}</p>;

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

export default RocketSelection;
