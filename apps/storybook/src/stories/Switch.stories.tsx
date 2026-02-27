import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@ai-ds/components";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Dark mode" },
};

export const WithDescription: Story = {
  args: {
    label: "AI auto-complete",
    description: "Automatically complete your designs using AI",
  },
};

export const Checked: Story = {
  args: { label: "Enabled", defaultChecked: true },
};

export const Small: Story = {
  args: { label: "Small toggle", size: "sm" },
};
