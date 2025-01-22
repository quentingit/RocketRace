"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import { useEffect, useRef, useState } from "react";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import { useAudio } from "@hooks/useAudio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Rocket Race - Suivez la course en temps réel",
//   description:
//     "Gérez et suivez des courses de fusées palpitantes en temps réel grâce à Rocket Race.",
//   keywords: [
//     "Rocket Race",
//     "Fusées",
//     "Next.js",
//     "GraphQL",
//     "Courses en temps réel",
//     "Animation spatiale",
//   ],
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//   },
//   themeColor: "#000000", // Couleur principale de l'application
//   openGraph: {
//     title: "Rocket Race",
//     description: "Rejoignez l'aventure des courses de fusées avec Rocket Race.",
//     url: "https://rocket-race.vercel.app",
//     siteName: "Rocket Race",
//     images: [
//       {
//         url: "/og-image.jpg", // Assurez-vous d'ajouter une image dans public/
//         width: 1200,
//         height: 630,
//         alt: "Rocket Race - Courses de fusées",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const musicSource = "/music.mp3";
  const { audioRef, isMuted, toggleMusic } = useAudio();

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        onMouseEnter={() => {
          if (audioRef.current && !isMuted) {
            audioRef.current
              .play()
              .then(() => {})
              .catch((e) => {
                console.error(
                  "Erreur lors de la lecture de la musique après hover :",
                  e
                );
              });
          }
        }}
      >
        <ApolloProvider client={client}>
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

          <div className="flex flex-col min-h-screen">
            <Header toggleMusic={toggleMusic} isMuted={isMuted} />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ApolloProvider>
      </body>
    </html>
  );
}
