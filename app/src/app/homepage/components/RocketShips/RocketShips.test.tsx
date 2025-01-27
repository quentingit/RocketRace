import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For DOM-specific assertions
import RocketShips from './RocketShips';
import { Ship } from '../../types/ship';

describe('RocketShips', () => {
  const mockShips: Ship[] = [
    { id: 1, left: 20, size: 50, duration: 5, bottom: 0 },
    { id: 2, left: 50, size: 70, duration: 7, bottom: 0 },
    { id: 3, left: 80, size: 40, duration: 4, bottom: 0 },
  ];

  it('renders the correct number of rockets', () => {
    render(<RocketShips ships={mockShips} />);
    const images = screen.getAllByAltText('Rocket');
    expect(images).toHaveLength(mockShips.length);
  });

  it('applies correct styles for each rocket', () => {
    render(<RocketShips ships={mockShips} />);

    const rockets = screen.getAllByAltText('Rocket');

    rockets.forEach((rocket, index) => {
      const ship = mockShips[index];
      expect(rocket.parentElement).toHaveStyle(`left: ${ship.left}%`);
      expect(rocket.parentElement).toHaveStyle(
        `animationDuration: ${ship.duration}s`
      );
    });
  });

  it('uses the correct image source', () => {
    render(<RocketShips ships={mockShips} />);
    const images = screen.getAllByAltText('Rocket');
    images.forEach((img) => {
      expect(img.getAttribute('src')).toMatch(/^\/_next\/image\?url=%2Frocket/);
    });
  });
});
