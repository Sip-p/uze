import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox.js";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "DataEntry/Checkbox",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Accept Terms and Conditions",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Accept Terms and Conditions",
    checked: true,
  },
};
