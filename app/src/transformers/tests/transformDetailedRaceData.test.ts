import { describe, it, expect, vi } from 'vitest';
import { GetRaceQuery, Race, Rocket } from 'src/__generated__/graphql';
import { transformDetailedRaceData } from '@transformers/transformDetailedRaceData';
import { transformRocketData } from '@transformers/transformRocketData';

// Mock transformRocketData
vi.mock('@transformers/transformRocketData', () => ({
  transformRocketData: vi.fn((rocket, exploded, progress) => ({
    id: rocket.id,
    name: rocket.name,
    image: rocket.image,
    exploded: !!exploded,
    progress: progress || 0,
  })),
}));

describe('transformDetailedRaceData', () => {
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

  const mockRockets: Rocket[] = [
    { id: '1', name: 'Apollo', image: '/apollo.png', description: '' },
    { id: '2', name: 'Falcon', image: '/falcon.png', description: '' },
  ];

  it('transforms race data correctly when all inputs are valid', () => {
    const result = transformDetailedRaceData(
      mockRace,
      mockFetchedData,
      mockRockets
    );

    expect(transformRocketData).toHaveBeenCalledTimes(2);
    expect(result).toEqual({
      id: 'race1',
      rocket1: {
        id: '1',
        name: 'Apollo',
        image: '/apollo.png',
        exploded: false,
        progress: 50,
      },
      rocket2: {
        id: '2',
        name: 'Falcon',
        image: '/falcon.png',
        exploded: true,
        progress: 80,
      },
      winner: 'rocket2',
    });
  });
});
