import React from 'react';
import Label from './Label.js';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Label> = {
  title: 'Typography/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Label is a component used to define the title or description for form controls or other interactive UI elements.'
      },
    },
  },
};

export default meta;

const Template: StoryFn<React.ComponentProps<typeof Label>> = (args) => <Label {...args} />;

// Default Label
export const Default = Template.bind({});
Default.args = {
  children: 'This is a label',
};

// Small Label
export const Small = Template.bind({});
Small.args = {
  children: 'This is a small label',
  style: { fontSize: '12px' }, // Adjust font size for small label
};

// Large Label
export const Large = Template.bind({});
Large.args = {
  children: 'This is a large label',
  style: { fontSize: '20px' }, // Adjust font size for large label
};

// Error Label
export const Error = Template.bind({});
Error.args = {
  children: 'This is an error label',
  style: { color: 'red' }, // Color for error state
};

// Success Label
export const Success = Template.bind({});
Success.args = {
  children: 'This is a success label',
  style: { color: 'green' }, // Color for success state
};
