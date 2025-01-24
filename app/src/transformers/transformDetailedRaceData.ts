import { transformRocketData } from "src/transformers";
import { RaceEnriched, RocketInteraction } from "@types/enrichedTypes";
import { GetRaceQuery, Race, Rocket } from "src/__generated__/graphql";

/**
 * Transforme les données détaillées d'une course en combinant les informations principales de la course,
 * des fusées disponibles, et des données supplémentaires récupérées.
 *
 * @param {Race} race - Les informations principales de la course.
 * @param {FetchedRaceData} fetchedData - Les données supplémentaires récupérées concernant la course.
 * @param {Rocket[]} rockets - La liste complète des fusées disponibles, utilisée pour obtenir les détails des fusées.
 * @returns {RaceEnriched | null} Les données enrichies de la course, incluant les informations des fusées et du gagnant.
 * Retourne `null` si les détails des fusées ne sont pas valides.
 *
 * @property {string} id - L'identifiant unique de la course.
 * @property {Object} rocket1 - Les données enrichies de la première fusée, combinant ses informations de base et des données supplémentaires.
 * @property {Object} rocket2 - Les données enrichies de la seconde fusée, combinant ses informations de base et des données supplémentaires.
 * @property {string | null} winner - L'identifiant de la fusée gagnante, ou `null` si la course n'a pas encore de gagnant.
 *
 * @example
 * const race = {
 *   id: "race1",
 *   rocket1: { id: "rocket1" },
 *   rocket2: { id: "rocket2" }
 * };
 *
 * const fetchedData = {
 *   race: {
 *     rocket1: { exploded: false, progress: 50 },
 *     rocket2: { exploded: true, progress: 80 },
 *     winner: "rocket2"
 *   }
 * };
 *
 * const rockets = [
 *   { id: "rocket1", name: "Apollo", image: "/apollo.png" },
 *   { id: "rocket2", name: "Falcon", image: "/falcon.png" }
 * ];
 *
 * const result = transformDetailedRaceData(race, fetchedData, rockets);
 * console.log(result);
 * // {
 * //   id: "race1",
 * //   rocket1: { id: "rocket1", name: "Apollo", image: "/apollo.png", exploded: false, progress: 50 },
 * //   rocket2: { id: "rocket2", name: "Falcon", image: "/falcon.png", exploded: true, progress: 80 },
 * //   winner: "rocket2"
 * // }
 */

export const transformDetailedRaceData = (
  race: Race,
  fetchedData: GetRaceQuery,
  rockets: Rocket[]
): RaceEnriched | null => {
  //on get les infos d'une fusée
  const getRocketDetails = (rocketId: string): Rocket | null =>
    rockets.find((rocket) => rocket.id === rocketId) || null;

  const rocket1Details = getRocketDetails(race.rocket1.id);
  const rocket2Details = getRocketDetails(race.rocket2.id);

  // Si les deux fusées sont valides, on crée notre course
  if (rocket1Details && rocket2Details) {
    const raceTransformation: RaceEnriched = {
      id: race.id,
      rocket1: transformRocketData(
        rocket1Details,
        fetchedData.race?.rocket1.exploded,
        fetchedData.race?.rocket1.progress
      ) as RocketInteraction,
      rocket2: transformRocketData(
        rocket2Details,
        fetchedData.race?.rocket2.exploded,
        fetchedData.race?.rocket2.progress
      ) as RocketInteraction,
      winner: fetchedData?.race?.winner ?? undefined,
    };

    return raceTransformation as RaceEnriched;
  }
  return null;
};
