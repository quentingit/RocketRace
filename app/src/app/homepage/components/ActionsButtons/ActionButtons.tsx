import Link from 'next/link';

const ActionButtons = () => (
  <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 z-10 animate-crt-flicker">
    <Link
      href="/selection"
      className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold rounded-md shadow-lg hover:scale-110 transition-transform duration-300 text-2xl glow-button tracking-widest"
    >
      <span className="absolute inset-0 bg-radial-gradient from-transparent via-yellow-400/20 to-transparent blur-xl opacity-75"></span>
      🚀 Commencer
    </Link>

    <Link
      href="/historique"
      className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold rounded-md shadow-lg hover:scale-110 transition-transform duration-300 text-2xl glow-button tracking-widest"
    >
      <span className="absolute inset-0 bg-radial-gradient from-transparent via-blue-400/20 to-transparent blur-xl opacity-75"></span>
      📜 Historique
    </Link>
  </div>
);

export default ActionButtons;
