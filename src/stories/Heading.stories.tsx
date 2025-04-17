import React from "react";
import { Heading } from "../compnents/Typography/Heading";



 
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    level: 1,
    children: "This is a H1 Heading",
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: "This is a H2 Heading",
  },
};
