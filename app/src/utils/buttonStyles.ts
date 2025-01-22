import clsx from "clsx";

/**
 * Génère les classes CSS pour le bouton de lancement en fonction de son état.
 *
 * @param isDisabled - Indique si le bouton est désactivé.
 * @returns Une chaîne de caractères contenant les classes CSS appropriées.
 */
export const getLaunchButtonClasses = (isDisabled: boolean): string =>
  clsx(
    "relative mt-10 px-10 py-5 rounded-full text-3xl font-pixel text-white bg-gradient-to-r from-neon-yellow to-orange-500 transition-transform transform hover:scale-125",
    isDisabled
      ? "opacity-50 cursor-not-allowed"
      : "hover:from-yellow-400 hover:to-orange-400 glow-btn active:scale-95 animate-crt-flicker"
  );

/**
 * Génère les classes CSS pour l'effet de halo du bouton de lancement en fonction de son état.
 *
 * @param isDisabled - Indique si le bouton est désactivé.
 * @returns Une chaîne de caractères contenant les classes CSS appropriées pour l'effet de halo.
 */
export const getLaunchButtonGlowClasses = (isDisabled: boolean): string =>
  clsx(
    "absolute inset-0 bg-radial-gradient at-center from-transparent via-yellow-300/20 to-transparent rounded-full blur-xl opacity-70",
    isDisabled ? "hidden" : "animate-pulse"
  );

/**
 * Génère les classes CSS pour le bouton de contrôle de la musique.
 * @param isMuted - Indique si la musique est coupée.
 * @returns Les classes CSS pour le bouton.
 */
export const getButtonClasses = (isMuted: boolean): string =>
  clsx(
    "ml-4 flex items-center justify-center h-12 w-12 rounded-full border-2 transition-transform hover:scale-110 border-green-400",
    isMuted
      ? "bg-gray-800 border-neon-yellow shadow-neon text-neon-green"
      : "bg-black border-neon-yellow shadow-neon text-neon-green"
  );
