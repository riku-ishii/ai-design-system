import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@ai-ds/components";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Accept terms and conditions" },
};

export const WithDescription: Story = {
  args: {
    label: "Enable AI suggestions",
    description: "AI will analyze your design and suggest improvements",
  },
};

export const Checked: Story = {
  args: { label: "Already enabled", defaultChecked: true },
};

export const WithError: Story = {
  args: { label: "Required field", error: "This field is required" },
};

export const Disabled: Story = {
  args: { label: "Unavailable option", disabled: true },
};
