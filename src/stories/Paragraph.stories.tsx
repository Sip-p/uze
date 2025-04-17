import React from "react";
import { Paragraph } from "../compnents/Typography/Paragraph";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Paragraph> = {
  title: "Components/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Small: Story = {
  args: {
    size: "sm",
    children: "This is a small paragraph of text.",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "This is a medium-sized paragraph of text.",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "This is a large paragraph of text.",
  },
};
