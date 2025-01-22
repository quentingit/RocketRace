import { useEffect, useRef, useState } from "react";

export const useAudio = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Lecture de l'audio sur la première interaction utilisateur
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((error) =>
            console.error("Erreur lors de la lecture de la musique :", error)
          );
        document.removeEventListener("click", playAudio);
      }
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  // Fonction pour basculer la lecture de l'audio
  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsMuted(false))
          .catch((error) =>
            console.error("Erreur lors de la lecture de la musique :", error)
          );
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  return { audioRef, isMuted, toggleMusic };
};
