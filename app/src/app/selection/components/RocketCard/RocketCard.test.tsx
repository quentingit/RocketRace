import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RocketCard from './RocketCard';
import { RocketInteraction } from '@appTypes/enrichedTypes';

describe('RocketCard', () => {
  const mockRocket: RocketInteraction = {
    id: '1',
    name: 'Falcon 9',
    description: 'Reusable rocket by SpaceX.',
    image: '/falcon9.png',
  } as RocketInteraction;

  it('renders the rocket name and description', () => {
    render(
      <RocketCard
        rocket={mockRocket}
        isSelected={false}
        launching={false}
        onToggleSelection={() => {}}
      />
    );

    expect(screen.getByText(/Falcon 9/i)).toBeInTheDocument();
    expect(screen.getByText(/Reusable rocket by SpaceX./i)).toBeInTheDocument();
  });

  it('applies the correct class when selected', () => {
    render(
      <RocketCard
        rocket={mockRocket}
        isSelected={true}
        launching={false}
        onToggleSelection={() => {}}
      />
    );

    const card = screen.getByText(/Falcon 9/i).closest('div');
    expect(card).toHaveClass('neon-border-green');
  });

  it('applies the correct class when launching', () => {
    render(
      <RocketCard
        rocket={mockRocket}
        isSelected={true}
        launching={true}
        onToggleSelection={() => {}}
      />
    );

    const card = screen.getByText(/Falcon 9/i).closest('div');
    expect(card).toHaveClass('animate-rocket-launch');
  });

  it('calls onToggleSelection when clicked', () => {
    const mockOnToggleSelection = vi.fn();

    render(
      <RocketCard
        rocket={mockRocket}
        isSelected={false}
        launching={false}
        onToggleSelection={mockOnToggleSelection}
      />
    );

    const card = screen.getByText(/Falcon 9/i).closest('div');
    fireEvent.click(card!);

    expect(mockOnToggleSelection).toHaveBeenCalledWith(mockRocket);
  });

  it('displays the rocket image with correct alt text', () => {
    render(
      <RocketCard
        rocket={mockRocket}
        isSelected={false}
        launching={false}
        onToggleSelection={() => {}}
      />
    );

    const image = screen.getByAltText(/Falcon 9/i);
    expect(image.getAttribute('src')).toMatch(
      /^\/_next\/image\?url=%2Ffalcon9/
    );
  });
});
