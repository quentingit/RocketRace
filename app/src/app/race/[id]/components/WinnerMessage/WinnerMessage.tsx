import Image from "next/image";
import Confetti from "react-confetti";
import { RaceEnriched } from "@types/enrichedTypes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type WinnerMessageProps = {
  winner: string;
  width: number;
  height: number;
  raceData: RaceEnriched;
  router: AppRouterInstance;
  rocketNameExploded?: string;
};

const WinnerMessage = ({
  winner,
  width,
  height,
  raceData,
  router,
  rocketNameExploded,
}: WinnerMessageProps) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 z-20 animate-fade-in">
    {/* Confettis */}
    <Confetti width={width} height={height} />

    {/* Trophée animé */}
    <div className="flex flex-col items-center mb-6">
      <div className="relative">
        <div className="text-neon-yellow text-9xl animate-pulse-neon mb-4">
          🏆
        </div>
      </div>
      <h1 className="text-5xl font-pixel text-neon-green mb-4 animate-crt-flicker">
        {winner} a triomphé !
      </h1>
    </div>

    {/* Message d'explosion */}
    {rocketNameExploded && (
      <div className="bg-black bg-opacity-70 px-6 py-4 rounded-md shadow-lg text-neon-red font-pixel text-center animate-crt-flicker mb-6">
        💥 La fusée{" "}
        <span className="text-neon-yellow">{rocketNameExploded}</span> a explosé
        !
      </div>
    )}

    {/* Image du vaisseau gagnant avec effet zoom */}
    <div className="relative mb-6">
      <Image
        src={
          winner === raceData?.rocket1?.name
            ? raceData?.rocket1?.image
            : raceData?.rocket2?.image
        }
        alt={`Vaisseau gagnant - ${winner}`}
        width={200}
        height={200}
        className="object-cover rounded-md neon-rocket-yellow shadow-lg transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-neon-yellow px-4 py-1 rounded-md shadow-md text-neon-yellow font-pixel animate-bounce">
        Champion 🚀
      </div>
    </div>

    {/* Boutons d'action rétro */}
    <div className="flex space-x-6">
      <button
        onClick={() => router.push("/")}
        className="px-10 py-4 font-pixel text-2xl bg-neon-blue text-white rounded-md shadow-neon transition-transform transform hover:scale-110 active:scale-90"
      >
        Accueil
      </button>
      <button
        onClick={() => router.push("/selection")}
        className="px-10 py-4 font-pixel text-2xl bg-neon-green text-white rounded-md shadow-neon transition-transform transform hover:scale-110 active:scale-90"
      >
        Rejouer !
      </button>
      <button
        onClick={() => router.push("/historique")}
        className="px-10 py-4 font-pixel text-2xl bg-neon-yellow text-white rounded-md shadow-neon transition-transform transform hover:scale-110 active:scale-90"
      >
        🏆
      </button>
    </div>
  </div>
);

export default WinnerMessage;
