import React from "react";
import { Avatar } from "../compnents/Typography/Avatar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=3",
    alt: "User Avatar",
    size: "md",
  },
};
