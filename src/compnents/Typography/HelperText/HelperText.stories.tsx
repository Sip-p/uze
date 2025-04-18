// HelperText.stories.tsx
import React from 'react';
import HelperText from './HelperText.js';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Typography/HelperText',
  component: HelperText,
} as Meta<typeof HelperText>;

const Template: StoryFn<React.ComponentProps<typeof HelperText>> = (args) => <HelperText {...args} />;

// Default Helper Text
export const Default = Template.bind({});
Default.args = {
  children: 'This is helper text',
};

// Error Helper Text
export const Error = Template.bind({});
Error.args = {
  children: 'This is an error message',
  style: { color: 'red' }, // Now works because style is allowed
};

// Success Helper Text
export const Success = Template.bind({});
Success.args = {
  children: 'This is a success message',
  style: { color: 'green' }, // Now works because style is allowed
};

// Info Helper Text
export const Info = Template.bind({});
Info.args = {
  children: 'This is an informational message',
  style: { color: 'blue' }, // Now works because style is allowed
};
