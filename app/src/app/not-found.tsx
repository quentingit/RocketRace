'use client';

import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-neon-red p-4 bg-stars animate-stars">
    <h1 className="text-6xl font-pixel text-neon-yellow mb-4 animate-crt-flicker">
      404 - Page Non Trouvée
    </h1>

    <p className="mb-6 font-pixel text-neon-blue text-center">
      Oups ! La page que vous recherchez n&apos;existe pas ou a été déplacée.
    </p>

    <Link
      href="/"
      className="px-6 py-3 font-pixel text-white bg-gradient-to-r from-neon-blue to-neon-green neon-border-green shadow-neon hover:scale-110 transition-transform animate-pulse"
    >
      Retour à l&apos;accueil
    </Link>
  </div>
);

export default NotFoundPage;
