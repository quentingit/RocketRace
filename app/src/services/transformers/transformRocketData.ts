import { Rocket } from "@/types/graphql";

/**
 * Transforme les données d'une fusée en combinant les informations de base
 * et des données supplémentaires récupérées.
 *
 * @param {Rocket} rocket - Les informations principales de la fusée.
 * @param {Object} [fetchedRocketData] - Les données supplémentaires récupérées.
 * @param {boolean | null} [fetchedRocketData.exploded] - Indique si la fusée a explosé.
 * @param {number | null} [fetchedRocketData.progress] - La progression de la fusée.
 *
 * @returns {Object} Les données transformées de la fusée, combinant les informations de base et supplémentaires.
 *
 * @property {string} id - L'identifiant unique de la fusée.
 * @property {string} name - Le nom de la fusée.
 * @property {string} image - L'URL de l'image de la fusée.
 * @property {boolean | null} exploded - État de la fusée (explosée ou non).
 * @property {number | null} progress - Progression de la fusée (en pourcentage).
 */
export const transformRocketData = (
  rocket: Rocket,
  fetchedRocketData?: { exploded?: boolean | null; progress?: number | null }
) => ({
  id: rocket.id,
  name: rocket.name,
  image: rocket.image,
  exploded: fetchedRocketData?.exploded || null,
  progress: fetchedRocketData?.progress || null,
});
