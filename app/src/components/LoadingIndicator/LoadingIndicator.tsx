// components/LoadingIndicator/LoadingIndicator.jsx
"use client";

import React from "react";

const LoadingIndicator = ({ message = "Chargement..." }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-neon-yellow bg-stars animate-stars">
    {/* Titre principal */}
    <h1 className="text-3xl font-pixel text-neon-green animate-crt-flicker mb-6">
      RocketRace
    </h1>

    {/* Message de chargement */}
    <p className="text-xl font-pixel text-neon-yellow animate-pulse mb-6">
      {message}
    </p>

    {/* Animation de l'icône et cercle lumineux */}
    <div className="relative flex items-center justify-center">
      <div className="absolute w-20 h-20 border-4 border-transparent border-t-neon-green border-r-neon-blue border-b-neon-yellow border-l-neon-red rounded-full animate-spin-slow"></div>

      {/* Icône de fusée animée */}
      <div className="relative animate-bounce">
        <span className="text-5xl">🚀</span>
      </div>
    </div>
  </div>
);

export default LoadingIndicator;
