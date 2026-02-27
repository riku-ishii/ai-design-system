import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@ai-ds/components";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Small label for status, category, or metadata. Use `variant=\"ai\"` to indicate AI-generated content.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "error", "warning", "ai", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "default", children: "Badge" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="error">Failed</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="ai">AI generated</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};
