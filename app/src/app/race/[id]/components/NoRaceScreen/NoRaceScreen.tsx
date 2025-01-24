"use client";
import { useRouter } from "next/navigation";
import clsx from "clsx";

const NoRaceScreen = () => {
  const router = useRouter();
  return (
    <div className="bg-stars animate-stars  flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-pixel space-y-4">
      <p className="text-xl text-center px-4 mb-10">
        Votre course n&apos;existe pas dans ce système solaire !
      </p>

      <div className="flex space-x-4">
        <button
          onClick={() => router.push("/")}
          className={clsx(
            "px-6 py-3 bg-neon-blue text-white rounded-md shadow-neon transition-transform hover:scale-105"
          )}
        >
          Accueil
        </button>
      </div>
      <p className="mt-10 text-sm italic text-center text-gray-400 p-20">
        P.S. Si vous avez déjà commencé une course, veuillez patienter
        jusqu&apos;à sa fin. Sachez qu&apos;une course peut prendre jusqu’à 30
        secondes.
      </p>
    </div>
  );
};

export default NoRaceScreen;
