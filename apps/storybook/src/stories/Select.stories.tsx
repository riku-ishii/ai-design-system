import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@ai-ds/components";

const colorOptions = [
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "red", label: "Red" },
  { value: "purple", label: "Purple" },
];

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ width: "280px" }}><Story /></div>],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Color", options: colorOptions, placeholder: "Select a color" },
};

export const WithHint: Story = {
  args: {
    label: "AI model",
    options: [
      { value: "claude-sonnet", label: "Claude Sonnet 4.6" },
      { value: "claude-haiku", label: "Claude Haiku 4.5" },
      { value: "claude-opus", label: "Claude Opus 4.6" },
    ],
    hint: "Choose the model for generation",
  },
};

export const WithError: Story = {
  args: { label: "Color", options: colorOptions, error: "Please select an option" },
};
