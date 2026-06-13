import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton, Card, CardBody } from "@ai-ds/components";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Animated loading placeholder. Replaces content while data is loading to avoid layout shift.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["text", "circular", "rectangular"] },
    lines: { control: { type: "number", min: 1, max: 10 } },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: { variant: "text", lines: 3 },
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Skeleton variant="text" width={200} />
      <Skeleton variant="text" lines={4} />
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Skeleton variant="circular" width={40} height={40} />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="60%" style={{ marginBottom: "8px" }} />
          <Skeleton variant="text" />
        </div>
      </div>
      <Skeleton variant="rectangular" height={160} />
    </div>
  ),
};

export const CardLoading: Story = {
  render: () => (
    <Card style={{ maxWidth: "320px" }}>
      <CardBody>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
          <Skeleton variant="circular" width={44} height={44} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="70%" style={{ marginBottom: "6px" }} />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
        <Skeleton variant="text" lines={3} />
        <Skeleton variant="rectangular" height={120} style={{ marginTop: "16px" }} />
      </CardBody>
    </Card>
  ),
};
