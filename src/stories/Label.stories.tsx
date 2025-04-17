import React from "react";
import { Label } from "../compnents/Typography/Label";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    htmlFor: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Email Address",
    size: "md",
    htmlFor: "email",
    required: true,
  },
};

export const Small: Story = {
  args: {
    children: "Username",
    size: "sm",
    htmlFor: "username",
  },
};
