import { Race, RaceEnriched } from "@/types/graphql";
import { FetchedRaceData } from "./types";
import { transformRocketData } from "./transformRocketData";

/**
 * Transforme les données d'une course en combinant les informations principales
 * avec des données supplémentaires récupérées.
 *
 * @param {Race} race - Les informations principales de la course.
 * @param {FetchedRaceData} fetchedData - Les données supplémentaires récupérées concernant la course.
 *
 * @returns {RaceEnriched} Les données transformées de la course, incluant les informations des deux fusées et du gagnant.
 *
 * @property {string} id - L'identifiant unique de la course.
 * @property {Object} rocket1 - Les données de la première fusée, combinées avec des données supplémentaires.
 * @property {Object} rocket2 - Les données de la seconde fusée, combinées avec des données supplémentaires.
 * @property {string | null} winner - L'identifiant de la fusée gagnante, ou `null` si la course n'a pas encore de gagnant.
 */
export const transformRaceData = (
  race: Race,
  fetchedData: FetchedRaceData
): RaceEnriched => ({
  id: race.id,
  rocket1: transformRocketData(race.rocket1, fetchedData.race?.rocket1),
  rocket2: transformRocketData(race.rocket2, fetchedData.race?.rocket2),
  winner: fetchedData.race?.winner || null,
});
