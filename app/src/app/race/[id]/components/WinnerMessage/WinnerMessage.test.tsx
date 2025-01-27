import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WinnerMessage from './WinnerMessage';
import { RaceEnriched, RocketInteraction } from '@appTypes/enrichedTypes';
import { vi } from 'vitest';

// Mock react-confetti to avoid canvas rendering issues
vi.mock('react-confetti', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-confetti">Confetti</div>,
  };
});

// Mock router
const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  prefetch: vi.fn().mockResolvedValue(undefined),
  refresh: vi.fn(),
};

const mockRaceData: RaceEnriched = {
  id: '1',
  rocket1: {
    id: '1',
    name: 'Falcon 9',
    image: '/falcon9.png',
    description: 'Reusable rocket by SpaceX.',
  } as RocketInteraction,
  rocket2: {
    id: '2',
    name: 'Starship',
    image: '/starship.png',
    description: 'SpaceX deep space rocket.',
  } as RocketInteraction,
};

describe('WinnerMessage', () => {
  it('renders the winner message and trophy', () => {
    render(
      <WinnerMessage
        winner="Falcon 9"
        width={800}
        height={600}
        raceData={mockRaceData}
        router={mockRouter}
      />
    );

    const trophyElement = screen.getByTestId('trophy');
    expect(trophyElement).toBeInTheDocument();
    expect(screen.getByText(/Falcon 9 a triomphé !/i)).toBeInTheDocument();
    expect(screen.getByTestId('mock-confetti')).toBeInTheDocument();
  });

  it('renders the explosion message when a rocket exploded', () => {
    render(
      <WinnerMessage
        winner="Falcon 9"
        width={800}
        height={600}
        raceData={mockRaceData}
        router={mockRouter}
        rocketNameExploded="Starship"
      />
    );

    expect(
      screen.getByText(/La fusée Starship a explosé !/i)
    ).toBeInTheDocument();
  });

  it('renders the winning rocket image with the correct alt text', () => {
    render(
      <WinnerMessage
        winner="Falcon 9"
        width={800}
        height={600}
        raceData={mockRaceData}
        router={mockRouter}
      />
    );

    const image = screen.getByAltText(/Vaisseau gagnant - Falcon 9/i);
    expect(image.getAttribute('src')).toMatch(
      /^\/_next\/image\?url=%2Ffalcon9/
    );
  });

  it('navigates to the correct pages when buttons are clicked', () => {
    render(
      <WinnerMessage
        winner="Falcon 9"
        width={800}
        height={600}
        raceData={mockRaceData}
        router={mockRouter}
      />
    );

    const homeButton = screen.getByRole('button', { name: /Accueil/i });
    const replayButton = screen.getByRole('button', { name: /Rejouer !/i });
    const historyButton = screen.getByRole('button', { name: /🏆/i });

    fireEvent.click(homeButton);
    expect(mockRouter.push).toHaveBeenCalledWith('/');

    fireEvent.click(replayButton);
    expect(mockRouter.push).toHaveBeenCalledWith('/selection');

    fireEvent.click(historyButton);
    expect(mockRouter.push).toHaveBeenCalledWith('/historique');
  });
});
