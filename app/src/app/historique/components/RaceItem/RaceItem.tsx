import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Race } from "src/__generated__/graphql";
import { RocketInteraction } from "@types/enrichedTypes";

const getWinnerName = (
  winnerId: string | null | undefined,
  rocket1: RocketInteraction,
  rocket2: RocketInteraction
): string => {
  if (!winnerId) return "Course en cours";
  return winnerId === rocket1.id ? rocket1.name : rocket2.name;
};

type RaceItemProps = {
  race: Race;
};

const RaceItem = ({ race }: RaceItemProps) => {
  const rockets: RocketInteraction[] = [
    race.rocket1 as RocketInteraction,
    race.rocket2 as RocketInteraction,
  ];
  const winnerName = getWinnerName(
    race.winner,
    race.rocket1 as RocketInteraction,
    race.rocket2 as RocketInteraction
  );

  const renderRockets = rockets.map((rocket) => (
    <div key={rocket.id} className="flex flex-col items-center">
      <Image
        src={rocket.image}
        alt={rocket.name}
        width={100}
        height={100}
        className="rounded-md"
      />
      <p className="mt-2 text-neon-yellow">{rocket.name}</p>
    </div>
  ));

  return (
    <li
      key={race.id}
      className="border-b border-gray-700 pb-4 hover:bg-gray-800 transition"
    >
      <Link
        href={`/race/${race.id}`}
        rel="noopener noreferrer"
        className="block p-4"
      >
        <p className="text-xl mb-2">Course ID : {race.id}</p>
        <div className="flex mt-4">
          <div className="flex space-x-10">{renderRockets}</div>
          <div className="flex items-center ml-10 border-l-2 border-neon-green pl-6">
            <span className="text-2xl font-bold text-neon-blue mr-2">
              Gagnant :
            </span>
            <span className="text-2xl font-bold text-neon-green">
              {winnerName}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RaceItem;
