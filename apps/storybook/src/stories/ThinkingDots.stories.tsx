import type { Meta, StoryObj } from "@storybook/react";
import { ThinkingDots } from "@ai-ds/components";

const meta = {
  title: "AI Components/ThinkingDots",
  component: ThinkingDots,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Animated typing indicator for AI responses. Three bouncing dots signal that the AI is processing or generating a response.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["default", "ai"] },
    label: { control: "text" },
  },
} satisfies Meta<typeof ThinkingDots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "ai", size: "md" },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <ThinkingDots size="sm" />
      <ThinkingDots size="md" />
      <ThinkingDots size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <ThinkingDots variant="ai" />
        <span style={{ fontSize: "12px", color: "var(--color-foreground-subtle)" }}>AI variant</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <ThinkingDots variant="default" />
        <span style={{ fontSize: "12px", color: "var(--color-foreground-subtle)" }}>Default variant</span>
      </div>
    </div>
  ),
};

export const InChatBubble: Story = {
  render: () => (
    <div
      style={{
        background: "var(--color-ai-subtle)",
        border: "1px solid rgba(147,51,234,0.2)",
        borderRadius: "var(--radius-2xl)",
        borderTopLeftRadius: "var(--radius-sm)",
        padding: "12px 16px",
        display: "inline-block",
      }}
    >
      <ThinkingDots />
    </div>
  ),
};
