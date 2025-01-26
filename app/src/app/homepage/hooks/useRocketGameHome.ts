import { useEffect, useState } from 'react';
import { Ship } from '../types/ship';

export const useRocketGameHome = (shipCount: number) => {
  const [ships, setShips] = useState<Ship[]>([]);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isPoweringOn, setIsPoweringOn] = useState(false);

  const generateShips = (count: number): Ship[] => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      bottom: Math.random() * 100,
      duration: Math.random() * 10 + 5,
      size: Math.random() * 40 + 30,
    }));
  };

  useEffect(() => {
    //accueil : generation des rockets
    setShips(generateShips(shipCount));

    // accueil : on verifie que l'overlay ("Allumer !") a déjà été vu dans cet onglet
    const hasSeenOverlay = sessionStorage.getItem('hasSeenOverlay');
    if (!hasSeenOverlay) {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  }, [shipCount]);

  const handleOverlayClose = () => {
    setIsPoweringOn(true);
    setTimeout(() => {
      setShowOverlay(false);
      sessionStorage.setItem('hasSeenOverlay', 'true');
    }, 2000);
  };

  return { ships, showOverlay, isPoweringOn, handleOverlayClose };
};
