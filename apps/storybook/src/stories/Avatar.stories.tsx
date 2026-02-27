import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@ai-ds/components";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: { src: "https://i.pravatar.cc/150?img=1", name: "Riku Ishii", size: "md" },
};

export const WithInitials: Story = {
  args: { name: "Riku Ishii", size: "md" },
};

export const AIIndicator: Story = {
  args: { name: "AI Agent", size: "md", aiIndicator: true },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Avatar name="A" size="xs" />
      <Avatar name="A" size="sm" />
      <Avatar name="AB" size="md" />
      <Avatar name="AB" size="lg" />
      <Avatar name="AB" size="xl" />
    </div>
  ),
};
