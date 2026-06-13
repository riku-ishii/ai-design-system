import type { Meta, StoryObj } from "@storybook/react";
import { colors, semanticColors } from "@ai-ds/tokens";

const meta = {
  title: "Foundation/Colors",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Color palette — primitive scales and semantic aliases.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "80px" }}>
      <div
        style={{
          width: "100%",
          height: "48px",
          background: value,
          borderRadius: "8px",
          border: "1px solid rgba(0,0,0,0.08)",
        }}
        title={value}
      />
      <div style={{ fontSize: "11px", color: "var(--color-foreground-subtle)", lineHeight: 1.4 }}>
        <div style={{ fontWeight: 500, color: "var(--color-foreground-default)" }}>{name}</div>
        <div>{value}</div>
      </div>
    </div>
  );
}

function ColorScale({ name, scale }: { name: string; scale: Record<string, string> }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px", textTransform: "capitalize" }}>
        {name}
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {Object.entries(scale).map(([key, value]) => (
          <Swatch key={key} name={key} value={value} />
        ))}
      </div>
    </div>
  );
}

export const Primitives: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Primitive Palette</h2>
      {Object.entries(colors).map(([name, scale]) => (
        <ColorScale key={name} name={name} scale={scale as Record<string, string>} />
      ))}
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Semantic Colors</h2>
      <p style={{ fontSize: "14px", color: "var(--color-foreground-subtle)", marginBottom: "24px" }}>
        Use semantic colors in components — they map to the correct primitive and can be adapted per theme.
      </p>
      {Object.entries(semanticColors).map(([category, values]) => (
        <ColorScale
          key={category}
          name={category}
          scale={Object.fromEntries(
            Object.entries(values as Record<string, string>).map(([k, v]) => [k, v])
          )}
        />
      ))}
    </div>
  ),
};
