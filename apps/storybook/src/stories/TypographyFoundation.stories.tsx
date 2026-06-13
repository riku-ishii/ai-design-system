import type { Meta, StoryObj } from "@storybook/react";
import { fontSize, fontWeight, fontFamily, lineHeight } from "@ai-ds/tokens";

const meta = {
  title: "Foundation/Typography",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Typography scale — sizes, weights, and families.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Scale: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Font Size Scale</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {Object.entries(fontSize).map(([name, size]) => (
          <div key={name} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
            <span style={{ fontSize: "12px", color: "var(--color-foreground-muted)", width: "48px", flexShrink: 0 }}>
              {name}
            </span>
            <span style={{ fontSize: size, lineHeight: 1.4 }}>
              The quick brown fox
            </span>
            <span style={{ fontSize: "12px", color: "var(--color-foreground-muted)", marginLeft: "auto" }}>
              {size}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Font Weights</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {Object.entries(fontWeight).map(([name, weight]) => (
          <div key={name} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
            <span style={{ fontSize: "12px", color: "var(--color-foreground-muted)", width: "80px", flexShrink: 0 }}>
              {name}
            </span>
            <span style={{ fontSize: "20px", fontWeight: weight }}>
              AI Design System
            </span>
            <span style={{ fontSize: "12px", color: "var(--color-foreground-muted)", marginLeft: "auto" }}>
              {weight}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Families: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Font Families</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <p style={{ fontSize: "12px", color: "var(--color-foreground-muted)", marginBottom: "8px" }}>sans</p>
          <p style={{ fontFamily: fontFamily.sans, fontSize: "18px" }}>
            The quick brown fox jumps over the lazy dog — 0123456789
          </p>
        </div>
        <div>
          <p style={{ fontSize: "12px", color: "var(--color-foreground-muted)", marginBottom: "8px" }}>mono</p>
          <p style={{ fontFamily: fontFamily.mono, fontSize: "16px" }}>
            const greeting = "Hello, world!" // 0x1f4a9
          </p>
        </div>
      </div>
    </div>
  ),
};

export const LineHeights: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Line Heights</h2>
      <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
        {Object.entries(lineHeight).map(([name, lh]) => (
          <div key={name} style={{ maxWidth: "200px" }}>
            <p style={{ fontSize: "12px", color: "var(--color-foreground-muted)", marginBottom: "6px" }}>
              {name} ({lh})
            </p>
            <p style={{ lineHeight: lh, fontSize: "14px" }}>
              Designing AI-native products requires a consistent visual language that users can trust.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};
