import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Caption from './Caption.js';

const meta: Meta<typeof Caption> = {
  title: 'Typography/Caption',
  component: Caption,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Caption is a component used to provide a short description or title for visual elements such as images, videos, or other media.'
      },
    },
  },
};

export default meta;

const Template: StoryFn<React.ComponentProps<typeof Caption>> = (args) => <Caption {...args} />;

// Default Caption
export const Default = Template.bind({});
Default.args = {
  children: 'This is a caption',
};

// Caption with custom font size using inline styles
export const LargeFontSize = Template.bind({});
LargeFontSize.args = {
  children: 'This caption has a larger font size.',
  style: { fontSize: '24px' },  // Apply inline style here
};

// Caption with a different color using inline styles
export const ColoredCaption = Template.bind({});
ColoredCaption.args = {
  children: 'This caption has a color.',
  style: { color: 'blue' },  // Apply inline color style here
};
