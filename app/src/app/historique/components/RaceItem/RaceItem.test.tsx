import React from 'react';
import { render, screen } from '@testing-library/react';
import RaceItem from './RaceItem';
import '@testing-library/jest-dom';
import { Race } from 'src/__generated__/graphql';
import { RocketInteraction } from '@appTypes/enrichedTypes';

const mockRace: Race = {
  id: 'race-123',
  rocket1: {
    id: 'rocket-1',
    name: 'Falcon 9',
    image: '/falcon9.png',
  } as RocketInteraction,
  rocket2: {
    id: 'rocket-2',
    name: 'Starship',
    image: '/starship.png',
  } as RocketInteraction,
  winner: 'rocket-1',
};

describe('RaceItem', () => {
  it('renders the race ID correctly', () => {
    render(<RaceItem race={mockRace} />);
    const raceIdElement = screen.getByText(/Course ID : race-123/i);
    expect(raceIdElement).toBeInTheDocument();
  });

  it('renders the names of the rockets', () => {
    render(<RaceItem race={mockRace} />);
    const rocketNames = screen.getAllByText('Falcon 9');
    expect(rocketNames).toHaveLength(2); //twice because win
    expect(screen.getByText('Starship')).toBeInTheDocument();
  });

  it('renders the winner correctly', () => {
    render(<RaceItem race={mockRace} />);
    const rocketNames = screen.getAllByText('Falcon 9');
    expect(rocketNames).toHaveLength(2); //twice because win
    const winnerLabel = screen.getByText(/Gagnant :/i);
    expect(winnerLabel).toBeInTheDocument();
  });

  it("shows 'Course en cours' if there is no winner", () => {
    const raceWithoutWinner = { ...mockRace, winner: null };
    render(<RaceItem race={raceWithoutWinner} />);
    const winnerElement = screen.getByText('Course en cours');
    expect(winnerElement).toBeInTheDocument();
  });

  it('renders images with the correct alt text', () => {
    render(<RaceItem race={mockRace} />);
    const falconImage = screen.getByAltText('Falcon 9');
    const starshipImage = screen.getByAltText('Starship');

    // Vérifie que le src commence par "/_next/image?url=%2Ffalcon9.png"
    expect(falconImage.getAttribute('src')).toMatch(
      /^\/_next\/image\?url=%2Ffalcon9/
    );

    // Vérifie que le src commence par "/_next/image?url=%2Fstarship.png"
    expect(starshipImage.getAttribute('src')).toMatch(
      /^\/_next\/image\?url=%2Fstarship/
    );
  });

  it('renders a link to the race page', () => {
    render(<RaceItem race={mockRace} />);
    const raceLink = screen.getByRole('link', {
      name: /Course ID : race-123/i,
    });
    expect(raceLink).toHaveAttribute('href', '/race/race-123');
  });
});
