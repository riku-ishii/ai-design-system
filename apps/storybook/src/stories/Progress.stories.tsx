import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@ai-ds/components";

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Horizontal progress bar. Use `value` (0–100) for determinate progress, or `indeterminate` for tasks with unknown duration.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "success", "error", "ai"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    value: { control: { type: "range", min: 0, max: 100 } },
    showValue: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 60, label: "Uploading...", showValue: true },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Progress value={70} variant="default" label="Default" showValue />
      <Progress value={85} variant="success" label="Completed" showValue />
      <Progress value={35} variant="error" label="Failed" showValue />
      <Progress value={50} variant="ai" label="AI generating..." showValue />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Progress value={60} size="sm" label="Small" />
      <Progress value={60} size="md" label="Medium" />
      <Progress value={60} size="lg" label="Large" />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Progress value={0} indeterminate label="Loading..." />
      <Progress value={0} indeterminate variant="ai" label="AI thinking..." size="lg" />
    </div>
  ),
};
