import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "../compnents/Typography/Heading";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    level: 1,
    children: "This is an H1 Heading",
  },
};
