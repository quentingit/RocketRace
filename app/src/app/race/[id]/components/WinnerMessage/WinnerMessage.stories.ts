import { Meta, StoryObj } from '@storybook/react';
import WinnerMessage from './WinnerMessage';
import { RaceEnriched, RocketInteraction } from '@appTypes/enrichedTypes';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const mockRouter: AppRouterInstance = {
  push: () => {},
  replace: () => {},
  back: () => {},
  prefetch: () => Promise.resolve(),
  forward: () => {},
  refresh: () => {},
};

const mockRaceData: RaceEnriched = {
  id: '1',
  rocket1: {
    id: '1',
    name: 'Falcon 9',
    image: '/rocket.png',
    description: 'Reusable rocket by SpaceX.',
  } as RocketInteraction,
  rocket2: {
    id: '2',
    name: 'Starship',
    image: '/rocket.png',
    description: 'SpaceX deep space rocket.',
  } as RocketInteraction,
};

const meta: Meta<typeof WinnerMessage> = {
  title: 'Components/WinnerMessage',
  component: WinnerMessage,
  args: {
    winner: 'Falcon 9',
    width: 800,
    height: 600,
    raceData: mockRaceData,
    router: mockRouter,
    rocketNameExploded: undefined,
  },
};

export default meta;

type Story = StoryObj<typeof WinnerMessage>;

export const Default: Story = {};

export const WithExplosion: Story = {
  args: {
    rocketNameExploded: 'Starship',
  },
};
