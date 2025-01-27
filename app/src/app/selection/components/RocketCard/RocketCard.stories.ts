import { Meta, StoryObj } from '@storybook/react';
import RocketCard from './RocketCard';
import { RocketInteraction } from '@appTypes/enrichedTypes';
import { Rocket } from 'src/__generated__/graphql';

const meta: Meta<typeof RocketCard> = {
  title: 'Components/RocketCard',
  component: RocketCard,
  args: {
    isSelected: false,
    launching: false,
    onToggleSelection: () => alert('Toggled!'),
  },
  argTypes: {
    onToggleSelection: { action: 'clicked' }, // To log actions in Storybook
  },
};

export default meta;

type Story = StoryObj<typeof RocketCard>;

const mockRocket: Rocket = {
  id: '1',
  name: 'Falcon 9',
  description: 'Reusable rocket by SpaceX.',
  image: '/rocket.png',
};

export const Default: Story = {
  args: {
    rocket: mockRocket as RocketInteraction,
  },
};

export const Selected: Story = {
  args: {
    rocket: mockRocket as RocketInteraction,
    isSelected: true,
  },
};

export const Launching: Story = {
  args: {
    rocket: mockRocket as RocketInteraction,
    isSelected: true,
    launching: true,
  },
};
