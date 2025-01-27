import React from 'react';
import Image from 'next/image';

const Asteroids = ({ size = 12 }: { size?: number }) => {
  const asteroidCount = 8; // Nombre total d'astéroïdes
  const asteroids = Array.from({ length: asteroidCount });
  const classNameSizeAsteroid = `w-${size} h${size}`; //taille asteroid

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {asteroids.map((_, index) => (
        <div
          key={index}
          className={`absolute asteroid asteroid-${index + 1} opacity-0`}
        >
          <Image
            src={'/asteroid.png'}
            alt="Astéroïde"
            width={50}
            height={50}
            className={classNameSizeAsteroid}
          />
        </div>
      ))}
    </div>
  );
};

export default Asteroids;
