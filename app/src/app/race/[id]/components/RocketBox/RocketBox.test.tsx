import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RocketBox from './RocketBox';
import { RocketInteraction } from '@appTypes/enrichedTypes';

describe('RocketBox', () => {
  const mockRocketData: RocketInteraction = {
    id: '1',
    name: 'Falcon 9',
    description: 'Reusable rocket by SpaceX',
    image: '/falcon9.png',
  } as RocketInteraction;

  it('renders rocket name and progress', () => {
    render(
      <RocketBox
        rocketData={mockRocketData}
        rocketExploded={false}
        isLeading={false}
        borderColorClass="border-neon-blue"
        rocketColorClass="neon-rocket-blue"
        textColorClass="text-neon-blue"
        progress={75}
      />
    );

    expect(screen.getByText(/Falcon 9/i)).toBeInTheDocument();
    expect(screen.getByText(/75%/i)).toBeInTheDocument();
  });

  it('renders "En tête" badge if the rocket is leading', () => {
    render(
      <RocketBox
        rocketData={mockRocketData}
        rocketExploded={false}
        isLeading={true}
        borderColorClass="border-neon-blue"
        rocketColorClass="neon-rocket-blue"
        textColorClass="text-neon-blue"
        progress={75}
      />
    );

    expect(screen.getByText(/🚀 En tête/i)).toBeInTheDocument();
  });

  it('renders explosion effects when the rocket has exploded', () => {
    const { container } = render(
      <RocketBox
        rocketData={mockRocketData}
        rocketExploded={true}
        isLeading={false}
        borderColorClass="border-neon-blue"
        rocketColorClass="neon-rocket-blue"
        textColorClass="text-neon-blue"
        progress={0}
      />
    );

    const explosion = container.querySelector('.explosion-fire');
    expect(explosion).toBeInTheDocument();
  });

  it('renders fire effects when the rocket is not exploded', () => {
    const { container } = render(
      <RocketBox
        rocketData={mockRocketData}
        rocketExploded={false}
        isLeading={false}
        borderColorClass="border-neon-blue"
        rocketColorClass="neon-rocket-blue"
        textColorClass="text-neon-blue"
        progress={50}
      />
    );

    const fire = container.querySelector('.rocket-fire');
    expect(fire).toBeInTheDocument();
  });

  it('renders a placeholder image if no rocket data is provided', () => {
    render(
      <RocketBox
        rocketData={undefined}
        rocketExploded={false}
        isLeading={false}
        borderColorClass="border-neon-blue"
        rocketColorClass="neon-rocket-blue"
        textColorClass="text-neon-blue"
        progress={0}
      />
    );

    const placeholderImage = screen.getByAltText(/Rocket/i);
    expect(placeholderImage.getAttribute('src')).toMatch(
      /^\/_next\/image\?url=%2Fplaceholder/
    );
  });
});
