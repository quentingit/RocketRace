import { Meta, StoryObj } from '@storybook/react';
import RocketShips from './RocketShips';
import { Ship } from '../../types/ship';

const meta: Meta<typeof RocketShips> = {
  title: 'Components/RocketShips',
  component: RocketShips,
  parameters: {
    layout: 'fullscreen', // Ensures the component uses the full screen for better visualization
  },
};

export default meta;

type Story = StoryObj<typeof RocketShips>;

const mockShips: Ship[] = [
  {
    id: 1,
    left: 20,
    size: 50,
    duration: 5,
    bottom: 0,
  },
  {
    id: 2,
    left: 50,
    size: 70,
    duration: 7,
    bottom: 0,
  },
  {
    id: 3,
    left: 80,
    size: 40,
    duration: 4,
    bottom: 0,
  },
];

export const Default: Story = {
  args: {
    ships: mockShips,
  },
};
