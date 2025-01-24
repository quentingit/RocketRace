import { GET_RACE } from "@graphql/queries";
import client from "src/lib/apollo-client";
import { transformRaceData } from "./transformers";
import { Race, RaceEnriched } from "@types/graphql";

// Fonction pour récupérer les détails des courses
export const fetchRaceDetails = async (
  history: Race[]
): Promise<RaceEnriched[]> => {
  const details = await Promise.all(
    history.map(async (race) => {
      try {
        const { data } = await client.query({
          query: GET_RACE,
          variables: { raceId: race.id },
          fetchPolicy: "network-only",
        });

        // Transformation des données
        return transformRaceData(race, data);
      } catch (error) {
        console.error(
          `Erreur lors du chargement de la course ${race.id}:`,
          error
        );
        return null; // Retourne null en cas d'erreur
      }
    })
  );

  // Filtre les valeurs nulles
  return details.filter((detail): detail is RaceEnriched => detail !== null);
};
