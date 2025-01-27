import { Meta, StoryObj } from '@storybook/react';
import Asteroids from './Asteroids';

const meta: Meta<typeof Asteroids> = {
  title: 'Components/Asteroids',
  component: Asteroids,
  args: {
    size: 12, // Default size
  },
};

export default meta;

type Story = StoryObj<typeof Asteroids>;

export const Default: Story = {};

export const SmallAsteroids: Story = {
  args: {
    size: 8,
  },
};

export const LargeAsteroids: Story = {
  args: {
    size: 20,
  },
};
