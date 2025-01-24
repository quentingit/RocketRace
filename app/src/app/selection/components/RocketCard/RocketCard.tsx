import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { RocketInteraction } from "@appTypes/enrichedTypes";

interface RocketCardProps {
  rocket: RocketInteraction;
  isSelected: boolean;
  launching: boolean;
  onToggleSelection: (rocket: RocketInteraction) => void;
}

const RocketCard: React.FC<RocketCardProps> = ({
  rocket,
  isSelected,
  launching,
  onToggleSelection,
}) => {
  const rocketClass = clsx(
    "relative border-4 rounded-lg p-4 shadow-lg text-center bg-black bg-opacity-75 text-white cursor-pointer transition-transform transform hover:scale-105",
    isSelected ? "neon-border-green" : "neon-border-blue",
    launching && isSelected && "animate-pulse",
    isSelected ? "selected-rocket" : "pulsating selected-rocket",
    launching && isSelected && "animate-rocket-launch"
  );

  return (
    <div
      key={rocket.id}
      onClick={() => onToggleSelection(rocket)}
      className={rocketClass}
    >
      <Image
        src={rocket.image}
        alt={rocket.name}
        width={150}
        height={150}
        className="object-contain mx-auto rounded-md neon-rocket-green animate-floating"
      />
      <h2 className="mt-4 font-pixel text-neon-yellow">{rocket.name}</h2>
      <p className="text-sm font-pixel text-neon-gray">{rocket.description}</p>
    </div>
  );
};

export default RocketCard;
