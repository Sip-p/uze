// Heading.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Heading from './Heading.js';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Heading is a component used to display titles or subtitles for sections of a page, providing structure and clarity for users.'
      },
    },
  },
};

export default meta;
const Template: StoryFn<{ level: number; children: React.ReactNode }> = (args) => <Heading {...args} />;

// Default Heading (level 1)
export const Default = Template.bind({});
Default.args = {
  level: 1,
  children: 'This is a Heading 1',
};

// Heading level 2
export const Level2 = Template.bind({});
Level2.args = {
  level: 2,
  children: 'This is a Heading 2',
};

// Heading level 3
export const Level3 = Template.bind({});
Level3.args = {
  level: 3,
  children: 'This is a Heading 3',
};

// Heading level 4
export const Level4 = Template.bind({});
Level4.args = {
  level: 4,
  children: 'This is a Heading 4',
};

// Heading level 5
export const Level5 = Template.bind({});
Level5.args = {
  level: 5,
  children: 'This is a Heading 5',
};

// Heading level 6
export const Level6 = Template.bind({});
Level6.args = {
  level: 6,
  children: 'This is a Heading 6',
};
