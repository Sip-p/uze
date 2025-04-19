import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Paragraph from './Paragraph.js';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Paragraph is a component used to display text content or long-form descriptions in a readable format.'
      },
    },
  },
};

export default meta;

const Template: StoryFn<{ children: React.ReactNode; className?: string }> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is a paragraph.',
  className: '', // No extra classes
};

export const Large = Template.bind({});
Large.args = {
  children: 'This is a large paragraph.',
  className: 'text-2xl leading-loose',
};

export const Small = Template.bind({});
Small.args = {
  children: 'This is a small paragraph.',
  className: 'text-sm leading-snug',
};

export const Styled = Template.bind({});
Styled.args = {
  children: 'This is a styled paragraph with custom color.',
  className: 'text-blue-500 font-bold',
};

export const Background = Template.bind({});
Background.args = {
  children: 'This paragraph has a background color.',
  className: 'bg-red-100 p-4 rounded-md',
};
