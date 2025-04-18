import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextInput from './TextInput.js';

export default {
  title: 'DataEntry/TextInput',
  component: TextInput,
} as Meta<typeof TextInput>;

const Template: StoryFn<{ 
  placeholder: string; 
  value?: string; 
  disabled?: boolean; 
  errorMessage?: string; 
}> = (args) => <TextInput {...args} />;

// Default TextInput
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text here',
};

// TextInput with a default value
export const WithValue = Template.bind({});
WithValue.args = {
  placeholder: 'Enter text here',
  value: 'Default Value',
};

// Disabled TextInput
export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Enter text here',
  disabled: true,
};

// TextInput with an error message
export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  placeholder: 'Enter text here',
  errorMessage: 'This field is required.',
};

// TextInput with a custom placeholder
export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  placeholder: 'Type your name here',
};
