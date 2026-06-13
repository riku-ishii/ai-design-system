import type { Meta, StoryObj } from "@storybook/react";
import { spacing, borderRadius, shadows } from "@ai-ds/tokens";

const meta = {
  title: "Foundation/Spacing & Shadows",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Spacing scale, border radius, and shadow tokens.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const SpacingScale: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Spacing Scale (4px base unit)</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {Object.entries(spacing).map(([name, value]) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "12px", color: "var(--color-foreground-muted)", width: "32px", textAlign: "right", flexShrink: 0 }}>
              {name}
            </span>
            <div
              style={{
                height: "16px",
                width: value,
                minWidth: value === "0px" ? "2px" : undefined,
                background: "var(--color-primary-default)",
                borderRadius: "2px",
              }}
            />
            <span style={{ fontSize: "12px", color: "var(--color-foreground-subtle)" }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Border Radius</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
        {Object.entries(borderRadius).map(([name, value]) => (
          <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                background: "var(--color-primary-subtle)",
                border: "2px solid var(--color-primary-default)",
                borderRadius: value,
              }}
            />
            <div style={{ fontSize: "12px", textAlign: "center" }}>
              <div style={{ fontWeight: 500 }}>{name}</div>
              <div style={{ color: "var(--color-foreground-muted)" }}>{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Shadows</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
        {Object.entries(shadows).filter(([, v]) => v !== "none").map(([name, value]) => (
          <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "96px",
                height: "64px",
                background: "var(--color-background-default)",
                borderRadius: "8px",
                boxShadow: value,
              }}
            />
            <span style={{ fontSize: "12px", fontWeight: 500 }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
