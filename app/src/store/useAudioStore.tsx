"use client";

import { create } from "zustand";

type AudioStore = {
  isMuted: boolean;
  toggleMusic: () => void;
  audioRef: HTMLAudioElement | null;
  setAudioRef: (ref: HTMLAudioElement) => void;
};

export const useAudioStore = create<AudioStore>((set) => ({
  isMuted: true,
  audioRef: null,

  setAudioRef: (ref: HTMLAudioElement) =>
    set(() => ({
      audioRef: ref,
    })),

  toggleMusic: () =>
    set((state) => {
      if (state.audioRef) {
        if (state.audioRef.paused) {
          state.audioRef.play().catch((error) => {
            console.error("Erreur lors de la lecture de la musique :", error);
          });
          return { isMuted: false };
        } else {
          state.audioRef.pause();
          return { isMuted: true };
        }
      }
      return state;
    }),
}));
