import React, { useState } from "react";
import { Input } from "../compnents/Typography/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    type: {
      control: "select",
      options: ["text", "email", "password"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
    disabled: false,
    error: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Can't type here",
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: "Invalid input",
    error: true,
  },
};
