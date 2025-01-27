import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Asteroids from './Asteroids';

describe('Asteroids', () => {
  it('renders the correct number of asteroids', () => {
    render(<Asteroids />);
    const asteroidImages = screen.getAllByAltText('Astéroïde');
    expect(asteroidImages).toHaveLength(8); // Default count is 8
  });

  it('applies the correct size to asteroids', () => {
    render(<Asteroids size={16} />);
    const asteroidImages = screen.getAllByAltText('Astéroïde');
    asteroidImages.forEach((asteroid) => {
      expect(asteroid).toHaveClass('w-16 h16');
    });
  });

  it('renders asteroids with unique indices in their class names', () => {
    const { container } = render(<Asteroids />);
    const asteroidDivs = container.querySelectorAll('.asteroid');
    const classNames = Array.from(asteroidDivs).map(
      (div) => div.className.match(/asteroid-\d+/)?.[0]
    );
    const uniqueClassNames = new Set(classNames);
    expect(classNames.length).toEqual(uniqueClassNames.size);
  });
  it('does not allow interaction with asteroids (pointer-events-none)', () => {
    const { container } = render(<Asteroids />);
    const parentDiv = container.firstChild as HTMLDivElement;
    expect(parentDiv).toHaveClass('pointer-events-none');
  });
});
