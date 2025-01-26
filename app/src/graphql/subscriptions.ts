import { gql } from '@apollo/client';

export const ROCKET_PROGRESS = gql`
  subscription RocketProgress($raceId: ID!, $rocketId: ID!) {
    rocketProgress(raceId: $raceId, rocketId: $rocketId) {
      raceId
      rocketId
      progress
      exploded
    }
  }
`;
