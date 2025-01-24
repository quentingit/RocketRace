"use client";

import { useEffect, useRef } from "react";
import { useAudioStore } from "src/store/useAudioStore";

type AudioWrapperProps = {
  musicSource: string;
};

const AudioPlayer = ({ musicSource }: AudioWrapperProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const setAudioRef = useAudioStore((state) => state.setAudioRef);

  useEffect(() => {
    if (audioRef.current) {
      setAudioRef(audioRef.current);

      // Forcer la lecture suite à une interaction utilisateur
      const handleUserInteraction = () => {
        if (audioRef.current) {
          audioRef.current.play().catch((error) => {
            console.error("Erreur lors de la lecture de la musique :", error);
          });
          document.removeEventListener("click", handleUserInteraction);
        }
      };

      document.addEventListener("click", handleUserInteraction);

      return () => {
        document.removeEventListener("click", handleUserInteraction);
      };
    }
  }, [setAudioRef]);

  return (
    <div>
      <audio
        ref={audioRef}
        src={musicSource}
        autoPlay={false}
        loop
        muted={false}
        onError={(e) =>
          console.error("Erreur lors du chargement de la musique :", e)
        }
      />
    </div>
  );
};

export default AudioPlayer;
