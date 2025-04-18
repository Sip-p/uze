import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Paragraph from './Paragraph.js';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
} as Meta<typeof Paragraph>;

const Template: StoryFn<{ children: React.ReactNode; className?: string }> = (args) => <Paragraph {...args} />;

// Default Paragraph
export const Default = Template.bind({});
Default.args = {
  children: 'This is a paragraph.',
};

// Large Paragraph
export const Large = Template.bind({});
Large.args = {
  children: 'This is a large paragraph.',
  className: 'text-2xl leading-loose',  // Large font size and loose line height
};

// Small Paragraph
export const Small = Template.bind({});
Small.args = {
  children: 'This is a small paragraph.',
  className: 'text-sm leading-snug',  // Small font size and tight line height
};

// Styled Paragraph (with color)
export const Styled = Template.bind({});
Styled.args = {
  children: 'This is a styled paragraph with custom color.',
  className: 'text-blue-500 font-bold',  // Blue color and bold text
};

// Paragraph with emphasis
export const Emphasized = Template.bind({});
Emphasized.args = {
  children: 'This is an emphasized paragraph with italic style.',
  className: 'italic text-lg',  // Italic text and larger font size
};

// Paragraph with background
export const Background = Template.bind({});
Background.args = {
  children: 'This paragraph has a background color.',
  className: 'bg-gray-100 p-4 rounded-md',  // Gray background, padding, and rounded corners
};
