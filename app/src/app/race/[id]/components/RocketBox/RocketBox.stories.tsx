import { Meta, StoryObj } from '@storybook/react';
import RocketBox from './RocketBox';
import { RocketInteraction } from '@appTypes/enrichedTypes';

const meta: Meta<typeof RocketBox> = {
  title: 'Components/RocketBox',
  component: RocketBox,
  args: {
    rocketData: {
      id: '1',
      name: 'Falcon 9',
      description: 'Reusable rocket by SpaceX',
      image: '/rocket.png',
    } as RocketInteraction,
    rocketExploded: false,
    isLeading: false,
    borderColorClass: 'border-neon-blue',
    rocketColorClass: 'neon-rocket-blue',
    textColorClass: 'text-neon-blue',
    progress: 75,
  },
};

export default meta;

type Story = StoryObj<typeof RocketBox>;

export const Default: Story = {};

export const LeadingRocket: Story = {
  args: {
    isLeading: true,
  },
};

export const ExplodedRocket: Story = {
  args: {
    rocketExploded: true,
  },
};

export const CustomProgress: Story = {
  args: {
    progress: 50,
  },
};
