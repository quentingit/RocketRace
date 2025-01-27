import { Meta, StoryObj } from '@storybook/react';
import OverlayWithTVEffect from './OverlayWithTVEffect';

const meta: Meta<typeof OverlayWithTVEffect> = {
  title: 'Components/OverlayWithTVEffect',
  component: OverlayWithTVEffect,
  args: {
    isPoweringOn: false,
    buttonText: 'Allumer !',
  },
};

export default meta;

type Story = StoryObj<typeof OverlayWithTVEffect>;

export const Default: Story = {
  args: {
    isPoweringOn: false,
    onClose: () => alert('Overlay fermé !'),
  },
};

export const PoweringOn: Story = {
  args: {
    isPoweringOn: true,
    onClose: () => alert('Overlay en cours de démarrage !'),
  },
};
