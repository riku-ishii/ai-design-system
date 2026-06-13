import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button, Badge } from "@ai-ds/components";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "CSS-only hover tooltip. Wraps any trigger element and shows a floating label on hover.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    side: { control: "select", options: ["top", "bottom", "left", "right"] },
    content: { control: "text" },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "This is a tooltip",
    children: <Button variant="secondary">Hover me</Button>,
  },
};

export const Sides: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", padding: "48px" }}>
      <Tooltip content="Top tooltip" side="top">
        <Button variant="secondary" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button variant="secondary" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button variant="secondary" size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button variant="secondary" size="sm">Right</Button>
      </Tooltip>
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Tooltip content="AI-generated content">
      <Badge variant="ai">AI</Badge>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  args: {
    content: "This action cannot be undone. Please review before confirming.",
    side: "bottom",
    children: <Button variant="destructive" size="sm">Delete account</Button>,
  },
};
