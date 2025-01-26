'use client';

import { useRocketGameHome } from './hooks/useRocketGameHome';
import OverlayWithTVEffect from './components/OverlayWithTVEffect/OverlayWithTVEffect';
import RocketShips from './components/RocketShips/RocketShips';
import HeaderText from './components/HeaderText/HeaderText';
import ActionButtons from './components/ActionsButtons/ActionButtons';

const HomePage = () => {
  const shipCount = 8;
  const { ships, showOverlay, isPoweringOn, handleOverlayClose } =
    useRocketGameHome(shipCount);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white bg-stars animate-stars font-pixel">
        {/* Surimpression façon télévision */}
        {showOverlay && (
          <OverlayWithTVEffect
            isPoweringOn={isPoweringOn}
            onClose={handleOverlayClose}
            buttonText="Allumer !"
          />
        )}

        {/* Contenu principal */}
        {!showOverlay && (
          <>
            <RocketShips ships={ships} />
            <HeaderText />
            <ActionButtons />
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
