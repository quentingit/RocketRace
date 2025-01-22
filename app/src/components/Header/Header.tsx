import { getButtonClasses } from "@utils/buttonStyles";
import Link from "next/link";

type HeaderProps = {
  toggleMusic: () => void;
  isMuted: boolean;
};

const Header = ({ toggleMusic, isMuted }: HeaderProps) => (
  <header className="bg-black text-green-400 py-4 px-6 border-b-4 border-green-400 shadow-[0_0_15px_#00ff00]">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1>
        <Link
          href="/"
          className="text-2xl font-pixel tracking-wide animate-flicker"
        >
          Rocket Race
        </Link>
      </h1>

      <nav className="space-x-8 flex items-center">
        <Link
          href="/"
          className="hover:text-green-300 font-pixel tracking-wider transition-colors"
        >
          Accueil
        </Link>
        <Link
          href="/historique"
          className="hover:text-green-300 font-pixel tracking-wider transition-colors"
        >
          Historique
        </Link>
        {/* Bouton pour activer/désactiver la musique */}
        <button
          onClick={toggleMusic}
          className={getButtonClasses(isMuted)}
          title={isMuted ? "Activer la musique" : "Couper la musique"}
        >
          {isMuted ? "🔇" : "🎵"}
        </button>
      </nav>
    </div>
  </header>
);

export default Header;
