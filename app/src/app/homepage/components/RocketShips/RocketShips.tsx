import React from 'react';
import Image from 'next/image';
import { Ship } from '../../types/ship';

type RocketShipsProps = {
  ships: Ship[];
};

const RocketShips = ({ ships }: RocketShipsProps) => (
  <div className="absolute inset-0 overflow-hidden z-0">
    {ships.map((ship) => (
      <div
        key={ship.id}
        className="absolute animate-fly-up"
        style={{
          left: `${ship.left}%`,
          bottom: '-10%', // Départ du bas de l'écran
          animationDuration: `${ship.duration}s`,
        }}
      >
        <Image
          src="/rocket.png"
          alt="Rocket"
          width={ship.size}
          height={ship.size}
          className="object-contain neon-rocket-yellow transition-transform hover:scale-110"
        />
      </div>
    ))}
  </div>
);

export default RocketShips;
