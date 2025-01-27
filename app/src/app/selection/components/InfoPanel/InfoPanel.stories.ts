import { Meta, StoryObj } from '@storybook/react';
import InfoPanel from './InfoPanel';

const meta: Meta<typeof InfoPanel> = {
  title: 'Components/InfoPanel',
  component: InfoPanel,
  parameters: {
    layout: 'centered', // Centers the component for better visualization
  },
  args: {
    numberRockets: 5,
    selectedRocketNames: 'Falcon, Apollo',
  },
};

export default meta;

type Story = StoryObj<typeof InfoPanel>;

export const Default: Story = {};
export const NoRocketsSelected: Story = {
  args: {
    numberRockets: 5,
    selectedRocketNames: '',
  },
};
export const ManyRocketsSelected: Story = {
  args: {
    numberRockets: 10,
    selectedRocketNames: 'Falcon, Apollo, Dragon, Starship',
  },
};
