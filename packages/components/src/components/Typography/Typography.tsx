import type { ElementType, HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

// ─── Text ────────────────────────────────────────────────────────────────────

export type TextSize = "xs" | "sm" | "base" | "lg";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";
export type TextColor = "default" | "subtle" | "muted" | "inverted" | "ai";
export type TextVariant = "body" | "label" | "caption" | "code";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  variant?: TextVariant;
}

const textSizeStyles: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

const textWeightStyles: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const textColorStyles: Record<TextColor, string> = {
  default: "text-[var(--color-foreground-default)]",
  subtle: "text-[var(--color-foreground-subtle)]",
  muted: "text-[var(--color-foreground-muted)]",
  inverted: "text-[var(--color-foreground-inverted)]",
  ai: "text-[var(--color-ai-default)]",
};

const textVariantStyles: Record<TextVariant, string> = {
  body: "leading-relaxed",
  label: "leading-tight font-medium",
  caption: "leading-tight text-[var(--color-foreground-subtle)]",
  code: "font-mono bg-[var(--color-background-muted)] px-1.5 py-0.5 rounded-[var(--radius-sm)] text-sm",
};

/**
 * Text component
 *
 * @ai-component
 * @description Flexible text element for body copy, labels, captions, and inline code.
 *
 * @example
 * <Text size="base">Body text</Text>
 * <Text variant="caption" color="subtle">Helper text</Text>
 * <Text variant="code">const x = 1</Text>
 */
export function Text({
  as: Tag = "p",
  size = "base",
  weight = "regular",
  color = "default",
  variant = "body",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(
        textSizeStyles[size],
        textWeightStyles[weight],
        textColorStyles[color],
        textVariantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

// ─── Heading ─────────────────────────────────────────────────────────────────

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  weight?: "semibold" | "bold";
  color?: TextColor;
}

const headingSizeStyles: Record<HeadingSize, string> = {
  xs: "text-base leading-snug",
  sm: "text-lg leading-snug",
  md: "text-xl leading-snug",
  lg: "text-2xl leading-tight",
  xl: "text-3xl leading-tight",
  "2xl": "text-4xl leading-tight",
};

const headingDefaultSize: Record<HeadingLevel, HeadingSize> = {
  h1: "2xl",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm",
  h6: "xs",
};

/**
 * Heading component
 *
 * @ai-component
 * @description Semantic heading element with consistent typographic scale.
 *
 * @example
 * <Heading as="h1">Page title</Heading>
 * <Heading as="h2" size="md">Section title</Heading>
 */
export function Heading({
  as: Tag = "h2",
  size,
  weight = "semibold",
  color = "default",
  className,
  children,
  ...props
}: HeadingProps) {
  const resolvedSize = size ?? headingDefaultSize[Tag];
  return (
    <Tag
      className={cn(
        headingSizeStyles[resolvedSize],
        weight === "bold" ? "font-bold" : "font-semibold",
        textColorStyles[color],
        "tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
