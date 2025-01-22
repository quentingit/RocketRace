import { gql } from "@apollo/client";

export const START_RACE = gql`
  mutation StartRace($rocket1: ID!, $rocket2: ID!) {
    startRace(rocket1: $rocket1, rocket2: $rocket2) {
      id
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
