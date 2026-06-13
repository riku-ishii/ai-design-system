import type { Meta, StoryObj } from "@storybook/react";
import { Text, Heading } from "@ai-ds/components";

const meta = {
  title: "Components/Typography",
  component: Text,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Typography primitives: `Text` for body copy, labels, captions, and inline code; `Heading` for semantic headings h1–h6.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text variant="body">Body — The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="label">Label — Required field</Text>
      <Text variant="caption" color="subtle">Caption — Last updated 2 hours ago</Text>
      <Text variant="code">const greeting = "Hello, world!"</Text>
    </div>
  ),
};

export const TextSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text size="xs">Extra small — 12px</Text>
      <Text size="sm">Small — 14px</Text>
      <Text size="base">Base — 16px</Text>
      <Text size="lg">Large — 18px</Text>
    </div>
  ),
};

export const TextWeights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text weight="regular">Regular 400</Text>
      <Text weight="medium">Medium 500</Text>
      <Text weight="semibold">Semibold 600</Text>
      <Text weight="bold">Bold 700</Text>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text color="default">Default foreground</Text>
      <Text color="subtle">Subtle foreground</Text>
      <Text color="muted">Muted foreground</Text>
      <Text color="ai">AI accent</Text>
    </div>
  ),
};

export const HeadingScale: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading as="h1">Heading 1 — Page Title</Heading>
      <Heading as="h2">Heading 2 — Section Title</Heading>
      <Heading as="h3">Heading 3 — Subsection</Heading>
      <Heading as="h4">Heading 4 — Card Title</Heading>
      <Heading as="h5">Heading 5 — Label Group</Heading>
      <Heading as="h6">Heading 6 — Caption Heading</Heading>
    </div>
  ),
};

export const HeadingSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading size="2xl">2XL Heading</Heading>
      <Heading size="xl">XL Heading</Heading>
      <Heading size="lg">LG Heading</Heading>
      <Heading size="md">MD Heading</Heading>
      <Heading size="sm">SM Heading</Heading>
      <Heading size="xs">XS Heading</Heading>
    </div>
  ),
};
