import { Meta, StoryObj } from '@storybook/react';
import ActionButtons from './ActionButtons';

const meta: Meta<typeof ActionButtons> = {
  title: 'Components/ActionButtons',
  component: ActionButtons,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ActionButtons>;

export const Default: Story = {};
