import { transformRocketData } from './transformRocketData';
import { RaceEnriched, RocketInteraction } from '@appTypes/enrichedTypes';
import { GetRaceQuery, Race } from 'src/__generated__/graphql';

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
  fetchedData: GetRaceQuery
): RaceEnriched => ({
  id: race.id,
  rocket1: transformRocketData(
    race.rocket1 as RocketInteraction,
    fetchedData.race?.rocket1.exploded,
    fetchedData.race?.rocket1.progress
  ),
  rocket2: transformRocketData(
    race.rocket2 as RocketInteraction,
    fetchedData.race?.rocket2.exploded,
    fetchedData.race?.rocket2.progress
  ),
  winner: fetchedData.race?.winner ?? undefined,
});
