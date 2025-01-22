"use client";

import Link from "next/link";
import Image from "next/image";
import { useRocketGameHome } from "@hooks/useRocketGameHome";

const Home = () => {
  const shipCount = 8;
  const { ships, showOverlay, isPoweringOn, handleOverlayClose } =
    useRocketGameHome(shipCount);

  const renderedShips = ships.map((ship) => (
    <div
      key={ship.id}
      className="absolute animate-fly-up"
      style={{
        left: `${ship.left}%`,
        bottom: "-10%", // Départ du bas de l'écran
        animationDuration: `${ship.duration}s`,
      }}
    >
      <Image
        src="/rocket.png"
        alt="Rocket"
        width={ship.size}
        height={ship.size}
        className="object-contain neon-rocket-yellow transition-transform hover:scale-110"
      />
    </div>
  ));

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white bg-stars animate-stars font-pixel">
      {/* Surimpression façon télévision */}
      {showOverlay && (
        <div
          className={`fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center ${
            isPoweringOn ? "animate-tv-power-on" : ""
          }`}
        >
          {/* Effet de lignes cathodiques */}
          <div className="absolute inset-0 bg-stripes opacity-25 pointer-events-none"></div>

          {/* Texte de bienvenue */}
          {!isPoweringOn && (
            <button
              onClick={handleOverlayClose}
              className="text-5xl mb-10 md:text-6xl font-extrabold text-neon-green tracking-widest animate-crt-flicker-button"
            >
              Allumer !
            </button>
          )}
        </div>
      )}

      {/* Contenu principal */}
      {!showOverlay && (
        <>
          {/* Vaisseaux en mouvement */}
          <div className="absolute inset-0 overflow-hidden z-0">
            {renderedShips}
          </div>

          {/* Titre de l'application */}
          <h1 className="text-5xl mb-10 md:text-6xl font-extrabold animate-pulse text-neon-blue z-10 tracking-widest animate-crt-flicker">
            🚀 Rocket Race
          </h1>

          {/* Description */}
          <p className="text-lg mb-20 md:text-xl text-center max-w-2xl animate-slide-up z-10 text-neon-green tracking-wider animate-crt-flicker">
            Bienvenue dans <span className="text-neon-yellow">Rocket Race</span>{" "}
            ! Sélectionnez vos fusées préférées et suivez leur course en temps
            réel.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 z-10 animate-crt-flicker">
            <Link
              href="/selection"
              className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold rounded-md shadow-lg hover:scale-110 transition-transform duration-300 text-2xl glow-button tracking-widest"
            >
              <span className="absolute inset-0 bg-radial-gradient from-transparent via-yellow-400/20 to-transparent blur-xl opacity-75"></span>
              🚀 Commencer
            </Link>

            <Link
              href="/historique"
              className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold rounded-md shadow-lg hover:scale-110 transition-transform duration-300 text-2xl glow-button tracking-widest"
            >
              <span className="absolute inset-0 bg-radial-gradient from-transparent via-blue-400/20 to-transparent blur-xl opacity-75"></span>
              📜 Historique
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
