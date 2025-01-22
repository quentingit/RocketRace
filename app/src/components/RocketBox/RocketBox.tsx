import Image from "next/image";
import clsx from "clsx";
import { RocketInteraction } from "@types/graphql";

type RocketBoxProps = {
  rocketData?: RocketInteraction;
  rocketExploded?: boolean;
  isLeading: boolean;
  borderColorClass: string;
  rocketColorClass: string;
  textColorClass: string;
  progress: number;
};

const RocketBox = ({
  rocketData,
  rocketExploded = false,
  isLeading,
  borderColorClass,
  rocketColorClass,
  textColorClass,
  progress,
}: RocketBoxProps) => {
  console.log("progress", progress);

  const containerClasses = clsx(
    "relative flex flex-col items-center justify-between p-6 rounded-lg bg-black bg-opacity-75 shadow-lg transition-transform",
    isLeading ? "scale-105 z-20" : "scale-95 z-10",
    !rocketExploded && "bg-stars animate-stars-speed",
    borderColorClass
  );

  const leadingBadge = isLeading ? (
    <div
      className={clsx(
        "absolute top-2 left-2 bg-black bg-opacity-70 font-pixel px-4 py-2 rounded-md text-sm border border-neon-green shadow-neon",
        textColorClass
      )}
    >
      🚀 En tête
    </div>
  ) : null;

  const imageClasses = clsx(
    rocketColorClass,
    "relative mx-auto object-cover transition-transform duration-300 z-10",
    rocketExploded ? "opacity-50 scale-75" : "scale-100",
    !rocketExploded && "animate-shake"
  );

  const fireOrExplosion = !rocketExploded ? (
    <>
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-5 rocket-fire"></div>
      <div className="rocket-fire"></div>
    </>
  ) : (
    <div className="explosion-fire"></div>
  );

  return (
    <div className={containerClasses}>
      {leadingBadge}
      <div className="relative">
        <Image
          width={150}
          height={150}
          src={rocketData?.image || "/placeholder.png"}
          alt={rocketData?.name || "Rocket"}
          className={imageClasses}
        />
        {fireOrExplosion}
      </div>

      <h2
        className={clsx(
          "text-2xl md:text-3xl font-pixel text-center mt-4 animate-crt-flicker drop-shadow-md",
          textColorClass
        )}
      >
        {rocketData?.name || "Rocket"}
      </h2>
      <p
        className={clsx(
          "text-6xl font-pixel animate-crt-flicker mt-4 drop-shadow-lg",
          textColorClass
        )}
      >
        {progress}%
      </p>
    </div>
  );
};

export default RocketBox;
