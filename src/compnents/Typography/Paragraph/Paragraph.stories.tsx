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

const Template: StoryFn<{ children: React.ReactNode; style?: React.CSSProperties }> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is a paragraph.',
  style: {},  // No additional styling
};

export const Large = Template.bind({});
Large.args = {
  children: 'This is a large paragraph.',
  style: {
    fontSize: '1.25rem',   // 2xl in Tailwind
    lineHeight: '1.75rem',  // loose in Tailwind
  },
};

export const Small = Template.bind({});
Small.args = {
  children: 'This is a small paragraph.',
  style: {
    fontSize: '0.875rem',   // sm in Tailwind
    lineHeight: '1.25rem',  // snug in Tailwind
  },
};

export const Styled = Template.bind({});
Styled.args = {
  children: 'This is a styled paragraph with custom color.',
  style: {
    color: 'blue',      // text-blue-500 in Tailwind
    fontWeight: 'bold', // font-bold in Tailwind
  },
};

export const Background = Template.bind({});
Background.args = {
  children: 'This paragraph has a background color.',
  style: {
    backgroundColor: '#FEE2E2', // bg-red-100 in Tailwind
    padding: '1rem',            // p-4 in Tailwind
    borderRadius: '0.375rem',   // rounded-md in Tailwind
  },
};
