import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Toast from './Toast.js';

const meta: Meta<typeof Toast> = {
  title: ' Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Toast is a lightweight notification component that provides non-blocking feedback to the user. It is typically used for success, error, or informational messages that appear temporarily and auto-dismiss after a set period.'

      },
    },
  },
};

export default meta;

const Template: StoryFn<{ message: string; type?: 'success' | 'error' | 'info' }> = (args) => <Toast {...args} />;

// Default Toast
export const Default = Template.bind({});
Default.args = {
  message: 'This is a toast message',
};

// Success Toast
export const Success = Template.bind({});
Success.args = {
  message: 'This is a success message!',
  type: 'success',
};

// Error Toast
export const Error = Template.bind({});
Error.args = {
  message: 'Something went wrong!',
  type: 'error',
};

// Info Toast
export const Info = Template.bind({});
Info.args = {
  message: 'This is an informational message.',
  type: 'info',
};
