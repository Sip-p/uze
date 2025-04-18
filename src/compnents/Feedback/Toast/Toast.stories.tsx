import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Toast from './Toast.js';

export default {
  title: 'Feedback/Toast',
  component: Toast,
} as Meta<typeof Toast>;

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
