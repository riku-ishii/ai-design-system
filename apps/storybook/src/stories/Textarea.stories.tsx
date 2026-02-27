import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@ai-ds/components";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ width: "360px" }}><Story /></div>],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Description", placeholder: "Enter a description..." },
};

export const AIPrompt: Story = {
  args: {
    label: "AI prompt",
    placeholder: "Describe what you want to generate...",
    hint: "Be specific for better results",
    rows: 5,
  },
};

export const WithError: Story = {
  args: { label: "Notes", error: "This field is required" },
};
