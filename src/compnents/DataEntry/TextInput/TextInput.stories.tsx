import type { Meta, StoryObj } from '@storybook/react';
import TextInput, {   } from './TextInput.js';

const meta: Meta<typeof TextInput> = {
  title: 'DataEntry/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'TextInput is a simple and reusable input component for text entry.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<TextInputProps>;

// Default state
export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
  },
};

// With pre-filled value
export const WithValue: Story = {
  args: {
    placeholder: 'Enter text here',
    value: 'Pre-filled',
  },
};

// Disabled input
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

// With an error message
export const WithErrorMessage: Story = {
  args: {
    placeholder: 'Enter your name',
    errorMessage: 'Name is required.',
  },
};

// Custom placeholder
export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Type your email address',
  },
};
