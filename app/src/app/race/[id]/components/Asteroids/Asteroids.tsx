import Image from "next/image";

const Asteroids = () => {
  const asteroidCount = 8; // Nombre total d'astéroïdes
  const asteroids = Array.from({ length: asteroidCount });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {asteroids.map((_, index) => (
        <div
          key={index}
          className={`absolute asteroid asteroid-${index + 1} opacity-0`}
        >
          <Image
            src="/asteroid.png"
            alt="Astéroïde"
            width={50}
            height={50}
            className="w-12 h-12" // Ajustez la taille selon vos besoins
          />
        </div>
      ))}
    </div>
  );
};

export default Asteroids;
