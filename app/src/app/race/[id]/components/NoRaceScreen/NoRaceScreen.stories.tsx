import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NoRaceScreen from './NoRaceScreen';

const meta: Meta<typeof NoRaceScreen> = {
  title: 'Components/NoRaceScreen',
  component: NoRaceScreen,
  parameters: {
    layout: 'fullscreen', // Ensures full-screen visualization for better context
  },
};

export default meta;

type Story = StoryObj<typeof NoRaceScreen>;

export const Default: Story = {
  decorators: [(Story) => <Story />],
};
