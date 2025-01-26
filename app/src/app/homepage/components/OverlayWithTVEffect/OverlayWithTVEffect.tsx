'use client';

type OverlayWithTVEffectProps = {
  isPoweringOn: boolean;
  onClose: () => void;
  buttonText?: string;
};

const OverlayWithTVEffect = ({
  isPoweringOn,
  onClose,
  buttonText = 'Allumer !',
}: OverlayWithTVEffectProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center ${
        isPoweringOn ? 'animate-tv-power-on' : ''
      }`}
    >
      {/* Effet de lignes cathodiques */}
      <div className="absolute inset-0 bg-stripes opacity-25 pointer-events-none"></div>

      {!isPoweringOn && (
        <button
          onClick={onClose}
          className="text-5xl mb-10 md:text-6xl font-extrabold text-neon-green tracking-widest animate-crt-flicker-button"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default OverlayWithTVEffect;
