import type { Meta, StoryObj } from "@storybook/react";
import { ChatBubble, Avatar, ThinkingDots } from "@ai-ds/components";

const meta = {
  title: "AI Components/ChatBubble",
  component: ChatBubble,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Message bubble for chat interfaces. Use `role=\"assistant\"` for AI messages with the signature purple styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    role: { control: "select", options: ["user", "assistant", "system"] },
  },
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserMessage: Story = {
  args: {
    role: "user",
    name: "You",
    timestamp: "12:34",
    children: "Can you help me create a design system?",
  },
};

export const AssistantMessage: Story = {
  args: {
    role: "assistant",
    name: "Claude",
    timestamp: "12:34",
    children: "Absolutely! I can help you build a comprehensive design system. Let's start by defining your design tokens — colors, typography, and spacing — then build components on top of them.",
  },
};

export const Conversation: Story = {
  render: () => (
    <div style={{ maxWidth: "600px", padding: "16px" }}>
      <ChatBubble role="system">Conversation started</ChatBubble>

      <ChatBubble
        role="user"
        name="You"
        timestamp="09:41"
        avatar={<Avatar name="You" size="sm" />}
      >
        What color should I use for AI-powered actions?
      </ChatBubble>

      <ChatBubble
        role="assistant"
        name="Claude"
        timestamp="09:41"
        avatar={<Avatar name="Claude" size="sm" aiIndicator />}
      >
        For AI-powered actions, use the purple accent (#9333ea) defined as{" "}
        <code style={{ background: "rgba(147,51,234,0.1)", padding: "1px 4px", borderRadius: "4px", fontSize: "12px" }}>
          var(--color-ai-default)
        </code>
        . This distinguishes AI-triggered actions from regular primary actions and trains
        users to associate purple with AI capabilities in your product.
      </ChatBubble>

      <ChatBubble
        role="user"
        name="You"
        timestamp="09:42"
        avatar={<Avatar name="You" size="sm" />}
      >
        That makes sense! What about hover states?
      </ChatBubble>

      <div style={{ padding: "12px 0 12px 52px", display: "flex", alignItems: "center", gap: "8px" }}>
        <Avatar name="Claude" size="sm" aiIndicator />
        <div style={{ background: "var(--color-ai-subtle)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: "var(--radius-2xl)", borderTopLeftRadius: "var(--radius-sm)", padding: "12px 16px" }}>
          <ThinkingDots />
        </div>
      </div>
    </div>
  ),
};
