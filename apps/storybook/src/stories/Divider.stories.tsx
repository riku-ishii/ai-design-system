import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@ai-ds/components";

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Visual separator between sections. Supports horizontal/vertical orientations and an optional text label.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    variant: { control: "select", options: ["subtle", "default", "strong"] },
    label: { control: "text" },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { label: "or" },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Divider variant="subtle" />
      <Divider variant="default" />
      <Divider variant="strong" />
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Divider label="Section A" />
      <Divider label="or continue with" />
      <Divider label="AI generated below" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", height: "48px" }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
      <Divider orientation="vertical" variant="strong" />
      <span>More</span>
    </div>
  ),
};
