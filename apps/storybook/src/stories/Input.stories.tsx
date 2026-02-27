import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@ai-ds/components";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Text input field with optional label, error, and hint states.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
};

export const WithHint: Story = {
  args: {
    label: "Username",
    placeholder: "johndoe",
    hint: "Must be 3–20 characters",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    value: "not-an-email",
    error: "Please enter a valid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Read-only field",
    value: "Cannot edit this",
    disabled: true,
  },
};
