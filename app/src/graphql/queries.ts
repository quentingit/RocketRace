import { gql } from "@apollo/client";

export const GET_ROCKETS = gql`
  query Rockets {
    rockets {
      id
      name
      image
      description
    }
  }
`;

export const GET_RACE = gql`
  query GetRace($raceId: ID!) {
    race(id: $raceId) {
      id
      winner
      rocket1 {
        id
        exploded
        progress
      }
      rocket2 {
        id
        exploded
        progress
      }
    }
  }
`;
