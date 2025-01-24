"use client";

import Link from "next/link";

import { useRaceHistory } from "./hooks/useRaceHistory";
import RaceItem from "./components/RaceItem/RaceItem";

const Historique: React.FC = () => {
  const { raceDetails, raceHistory, isRaceDetailsEmpty, handleClearHistory } =
    useRaceHistory();

  if (raceHistory.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900 font-pixel">
        <p className="text-2xl mb-4">Aucune course enregistrée.</p>
        <Link href="/" className="text-neon-green hover:underline">
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  const renderRaceItems = () =>
    raceDetails.map((race) => <RaceItem key={race.id} race={race} />);

  const isRaceDetails = raceDetails.length > 0;

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white font-pixel">
      <h1 className="text-4xl mb-6 text-neon-green animate-crt-flicker text-center">
        Historique des Courses
      </h1>

      {isRaceDetailsEmpty && (
        <p className="text-center text-neon-yellow">
          Chargement des données...
        </p>
      )}

      {isRaceDetails && <ul className="space-y-6">{renderRaceItems()}</ul>}

      <div className="mt-8 text-center">
        <button
          onClick={handleClearHistory}
          className="px-6 py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-colors mb-4"
        >
          Tout effacer
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-neon-blue text-white rounded-md hover:bg-neon-green transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
};

export default Historique;
