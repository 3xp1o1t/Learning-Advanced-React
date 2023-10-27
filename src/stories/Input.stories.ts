import type { Meta, StoryObj } from '@storybook/react';

import Input from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'App/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
    },
    backgroundColor: { control: { type: 'inline-radio' } },
    variantOpacity: {
      options: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
      control: 'select',
    },
    radius: {
      control: { type: 'range', min: 0, max: 20, step: 2 },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    size: 'small',
    backgroundColor: 'emerald',
    variantOpacity: 500,
    radius: 8,
    placeholder: 'Primary input',
    enable: false,
  },
};
