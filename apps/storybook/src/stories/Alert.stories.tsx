import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@ai-ds/components";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ width: "400px" }}><Story /></div>],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: { variant: "info", title: "Heads up", children: "This is an informational message." },
};

export const Success: Story = {
  args: { variant: "success", title: "Saved!", children: "Your changes have been saved." },
};

export const Warning: Story = {
  args: { variant: "warning", title: "Warning", children: "This action cannot be undone." },
};

export const Error: Story = {
  args: { variant: "error", title: "Error", children: "Something went wrong. Please try again." },
};

export const AI: Story = {
  args: {
    variant: "ai",
    title: "AI suggestion",
    children: "Based on your data, consider updating the primary color token for better contrast.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Alert variant="info" title="Info">Informational message</Alert>
      <Alert variant="success" title="Success">Operation completed</Alert>
      <Alert variant="warning" title="Warning">Proceed with caution</Alert>
      <Alert variant="error" title="Error">Something went wrong</Alert>
      <Alert variant="ai" title="AI suggestion">AI-generated recommendation</Alert>
    </div>
  ),
};
