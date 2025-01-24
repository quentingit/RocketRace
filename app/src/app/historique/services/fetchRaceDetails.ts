import client from "src/lib/apollo-client";
import { transformRaceData } from "../../../transformers";
import {
  GetRaceDocument,
  GetRaceQuery,
  GetRaceQueryVariables,
  Race,
} from "src/__generated__/graphql";
import { RaceEnriched } from "@appTypes/enrichedTypes";

// Fonction pour récupérer les détails des courses
export const fetchRaceDetails = async (
  history: Race[]
): Promise<RaceEnriched[]> => {
  const raceDetails = await Promise.all(
    history.map(async (race: Race) => {
      try {
        const { data } = await client.query<
          GetRaceQuery,
          GetRaceQueryVariables
        >({
          query: GetRaceDocument,
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
        return null;
      }
    })
  );

  // Filtre les valeurs nulles
  return raceDetails.filter(
    (detail): detail is RaceEnriched => detail !== null
  );
};
