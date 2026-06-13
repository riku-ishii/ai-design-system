/**
 * Export design tokens in Tokens Studio for Figma format.
 * The output tokens.figma.json can be imported via the Tokens Studio plugin.
 *
 * Run: bun run scripts/export-figma-tokens.ts
 */

import { writeFileSync, mkdirSync } from "fs";
import { colors, semanticColors, fontSize, fontWeight, fontFamily, lineHeight, spacing, borderRadius, shadows, duration, easing } from "../src/index";

type TokenValue = string | number;
interface TokenNode {
  value: TokenValue;
  type: string;
  description?: string;
}
interface TokenGroup {
  [key: string]: TokenNode | TokenGroup;
}

function makeToken(value: TokenValue, type: string, description?: string): TokenNode {
  return description ? { value, type, description } : { value, type };
}

function flattenToTokens<T extends Record<string, unknown>>(
  obj: T,
  type: string,
  transform?: (v: string) => TokenValue
): TokenGroup {
  const result: TokenGroup = {};
  for (const [key, value] of Object.entries(obj)) {
    const v = transform ? transform(String(value)) : String(value);
    result[key] = makeToken(v, type);
  }
  return result;
}

function nestedToTokens<T extends Record<string, Record<string, string>>>(
  obj: T,
  type: string
): TokenGroup {
  const result: TokenGroup = {};
  for (const [group, values] of Object.entries(obj)) {
    result[group] = flattenToTokens(values as Record<string, unknown>, type);
  }
  return result;
}

const output = {
  global: {
    // Primitive color palettes
    colors: nestedToTokens(colors as unknown as Record<string, Record<string, string>>, "color"),

    // Spacing
    spacing: flattenToTokens(spacing as unknown as Record<string, unknown>, "spacing"),

    // Border radius
    borderRadius: flattenToTokens(borderRadius as unknown as Record<string, unknown>, "borderRadius"),

    // Typography
    fontSize: flattenToTokens(fontSize as unknown as Record<string, unknown>, "fontSizes"),
    fontWeight: flattenToTokens(fontWeight as unknown as Record<string, unknown>, "fontWeights"),
    lineHeight: flattenToTokens(lineHeight as unknown as Record<string, unknown>, "lineHeights"),
    fontFamily: {
      sans: makeToken(fontFamily.sans, "fontFamilies"),
      mono: makeToken(fontFamily.mono, "fontFamilies"),
    },

    // Shadows
    shadows: flattenToTokens(shadows as unknown as Record<string, unknown>, "boxShadow"),

    // Animation
    duration: flattenToTokens(duration as unknown as Record<string, unknown>, "other"),
    easing: flattenToTokens(easing as unknown as Record<string, unknown>, "other"),
  },

  semantic: {
    // Semantic color aliases — reference primitives via {colors.xxx.yyy} syntax
    background: {
      default: makeToken("{colors.gray.0}", "color", "Default page background"),
      subtle: makeToken("{colors.gray.50}", "color", "Subtle background for elevated sections"),
      muted: makeToken("{colors.gray.100}", "color", "Muted background for disabled states"),
      inverted: makeToken("{colors.gray.900}", "color", "Inverted (dark) background"),
    },
    foreground: {
      default: makeToken("{colors.gray.900}", "color", "Primary text"),
      subtle: makeToken("{colors.gray.600}", "color", "Secondary text"),
      muted: makeToken("{colors.gray.400}", "color", "Disabled / placeholder text"),
      inverted: makeToken("{colors.gray.0}", "color", "Text on dark backgrounds"),
    },
    border: {
      default: makeToken("{colors.gray.200}", "color"),
      subtle: makeToken("{colors.gray.100}", "color"),
      strong: makeToken("{colors.gray.300}", "color"),
    },
    primary: {
      default: makeToken("{colors.blue.600}", "color"),
      hover: makeToken("{colors.blue.700}", "color"),
      active: makeToken("{colors.blue.800}", "color"),
      subtle: makeToken("{colors.blue.50}", "color"),
      foreground: makeToken("{colors.gray.0}", "color"),
    },
    success: {
      default: makeToken("{colors.green.600}", "color"),
      subtle: makeToken("{colors.green.50}", "color"),
      foreground: makeToken("{colors.gray.0}", "color"),
    },
    error: {
      default: makeToken("{colors.red.600}", "color"),
      subtle: makeToken("{colors.red.50}", "color"),
      foreground: makeToken("{colors.gray.0}", "color"),
    },
    warning: {
      default: makeToken("{colors.yellow.500}", "color"),
      subtle: makeToken("{colors.yellow.50}", "color"),
      foreground: makeToken("{colors.gray.900}", "color"),
    },
    ai: {
      default: makeToken("{colors.purple.600}", "color", "AI accent — use for AI-powered actions"),
      subtle: makeToken("{colors.purple.50}", "color", "AI subtle background"),
      foreground: makeToken("{colors.gray.0}", "color"),
      accent: makeToken("{colors.purple.400}", "color", "AI highlight/glow"),
    },
  },
};

mkdirSync("./dist", { recursive: true });
writeFileSync("./dist/tokens.figma.json", JSON.stringify(output, null, 2));
console.log("✓ Generated dist/tokens.figma.json (Tokens Studio format)");
console.log("  → Install 'Tokens Studio for Figma' plugin");
console.log("  → Settings > Sync > Local file or GitHub > point to tokens.figma.json");
