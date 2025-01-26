'use client';

import { useRouter } from 'next/navigation';
import clsx from 'clsx';

const NoRaceScreen = () => {
  const router = useRouter();

  return (
    <div className="bg-stars animate-stars flex flex-col items-center justify-center min-h-screen bg-black text-neon-red font-pixel space-y-8">
      <h1 className="text-4xl text-neon-yellow animate-crt-flicker">
        Pas de Course Trouvée !
      </h1>

      <p className="text-xl text-center px-6 text-neon-blue animate-slide-up">
        La course que vous cherchez n&apos;existe pas dans ce système solaire !
      </p>

      <div className="flex space-x-4">
        <button
          onClick={() => router.push('/')}
          className={clsx(
            'px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green text-white rounded-md shadow-neon font-bold hover:scale-110 transition-transform duration-300'
          )}
        >
          🚀 Retour à l&apos;Accueil
        </button>
      </div>
    </div>
  );
};

export default NoRaceScreen;
