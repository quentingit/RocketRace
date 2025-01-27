import { describe, it, expect } from 'vitest';
import { Race, GetRaceQuery } from 'src/__generated__/graphql';
import { transformRaceData } from '@transformers/transformRaceData';
import { transformRocketData } from '@transformers/transformRocketData';

// Mock de la fonction transformRocketData
vi.mock('../transformRocketData', () => ({
  transformRocketData: vi.fn((rocket, exploded, progress) => ({
    id: rocket.id,
    exploded: !!exploded,
    progress: progress || 0,
  })),
}));

describe('transformRaceData', () => {
  const mockRace: Race = {
    id: 'race1',
    rocket1: { id: '1', exploded: false, progress: 0 },
    rocket2: { id: '2', exploded: false, progress: 0 },
  };

  const mockFetchedData: GetRaceQuery = {
    race: {
      id: 'race1',
      rocket1: { id: '1', exploded: false, progress: 50 },
      rocket2: { id: '2', exploded: true, progress: 80 },
      winner: 'rocket2',
    },
  };

  it('transforms race data correctly with valid inputs', () => {
    const result = transformRaceData(mockRace, mockFetchedData);

    expect(transformRocketData).toHaveBeenCalledTimes(2);

    expect(result).toEqual({
      id: 'race1',
      rocket1: {
        id: '1',
        exploded: false,
        progress: 50,
      },
      rocket2: {
        id: '2',
        exploded: true,
        progress: 80,
      },
      winner: 'rocket2',
    });
  });

  it('returns undefined winner when no winner is provided in fetched data', () => {
    const fetchedDataWithoutWinner = {
      ...mockFetchedData,
      race: {
        ...mockFetchedData.race,
        winner: null,
      },
    } as GetRaceQuery;

    const result = transformRaceData(mockRace, fetchedDataWithoutWinner);

    expect(result.winner).toBeUndefined();
  });

  it('calls transformRocketData with correct arguments', () => {
    transformRaceData(mockRace, mockFetchedData);

    expect(transformRocketData).toHaveBeenCalledWith(
      mockRace.rocket1,
      mockFetchedData.race?.rocket1.exploded,
      mockFetchedData.race?.rocket1.progress
    );

    expect(transformRocketData).toHaveBeenCalledWith(
      mockRace.rocket2,
      mockFetchedData.race?.rocket2.exploded,
      mockFetchedData.race?.rocket2.progress
    );
  });
});
