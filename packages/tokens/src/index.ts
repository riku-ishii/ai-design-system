export * from "./colors";
export * from "./typography";
export * from "./spacing";
export * from "./shadows";
export * from "./animation";
export * from "./zIndex";

// Re-export as a unified token object for convenience
import { colors, semanticColors } from "./colors";
import { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } from "./typography";
import { spacing, borderRadius } from "./spacing";
import { shadows } from "./shadows";
import { duration, easing } from "./animation";
import { zIndex } from "./zIndex";

export const tokens = {
  colors,
  semanticColors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  spacing,
  borderRadius,
  shadows,
  duration,
  easing,
  zIndex,
} as const;

export type Tokens = typeof tokens;
