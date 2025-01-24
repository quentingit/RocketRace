"use client";

import React from "react";

type ErrorHandlerProps = {
  errorMessage: string;
  onRetry: () => void;
};

const ErrorHandler = ({ errorMessage, onRetry }: ErrorHandlerProps) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-neon-red p-4 bg-stars animate-stars">
    {/* Titre en néon avec effet rétro */}
    <h1 className="text-4xl font-pixel text-neon-yellow mb-4 animate-crt-flicker">
      ⚠️ Erreur !
    </h1>

    {/* Message d'erreur détaillé */}
    <p className="mb-6 font-pixel text-neon-blue text-center">{errorMessage}</p>

    {/* Bouton pour réessayer avec animation rétro */}
    <button
      onClick={onRetry}
      className="px-6 py-3 font-pixel text-white bg-gradient-to-r from-neon-blue to-neon-green neon-border-green shadow-neon hover:scale-110 transition-transform animate-pulse"
    >
      Réessayer
    </button>
  </div>
);

export default ErrorHandler;
