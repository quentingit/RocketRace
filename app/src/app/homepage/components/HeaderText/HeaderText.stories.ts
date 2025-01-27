import { Meta, StoryObj } from '@storybook/react';
import HeaderText from './HeaderText';

const meta: Meta<typeof HeaderText> = {
  title: 'Components/HeaderText',
  component: HeaderText,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof HeaderText>;

export const Default: Story = {};
