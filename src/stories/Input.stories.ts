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
      options: ['default', 'medium', 'large'],
      control: 'select',
    },
    variant: {
      options: ['default', 'bold'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    variant: 'default',
    value: '',
  },
};
export const Disabled: Story = {
  args: {
    variant: 'disabled',
    readOnly: true,
    placeholder: 'Readonly',
  },
};
