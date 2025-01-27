import { describe, it, expect } from 'vitest';
import { RocketInteraction } from '@appTypes/enrichedTypes';
import { Rocket } from 'src/__generated__/graphql';
import { transformRocketData } from '@transformers/transformRocketData';

describe('transformRocketData', () => {
  const mockRocket: Rocket = {
    id: '1',
    name: 'Falcon 9',
    image: '/falcon9.png',
    description: 'A reusable rocket by SpaceX.',
  };

  it('transforms rocket data correctly with all inputs', () => {
    const result: RocketInteraction = transformRocketData(mockRocket, true, 75);

    expect(result).toEqual({
      id: '1',
      name: 'Falcon 9',
      image: '/falcon9.png',
      description: 'A reusable rocket by SpaceX.',
      exploded: true,
      progress: 75,
    });
  });

  it('defaults exploded to false when not provided', () => {
    const result: RocketInteraction = transformRocketData(mockRocket);

    expect(result.exploded).toBe(false);
  });

  it('defaults progress to 0 when not provided', () => {
    const result: RocketInteraction = transformRocketData(mockRocket, false);

    expect(result.progress).toBe(0);
  });

  it('handles null values for exploded and progress correctly', () => {
    const result: RocketInteraction = transformRocketData(
      mockRocket,
      null,
      null
    );

    expect(result).toEqual({
      id: '1',
      name: 'Falcon 9',
      image: '/falcon9.png',
      description: 'A reusable rocket by SpaceX.',
      exploded: false,
      progress: 0,
    });
  });

  it('retains the description, name, and image correctly', () => {
    const result: RocketInteraction = transformRocketData(
      mockRocket,
      false,
      50
    );

    expect(result.name).toBe(mockRocket.name);
    expect(result.image).toBe(mockRocket.image);
    expect(result.description).toBe(mockRocket.description);
  });
});
