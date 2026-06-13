import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "default" | "subtle" | "strong";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  label?: string;
}

const variantStyles: Record<DividerVariant, string> = {
  subtle: "border-[var(--color-border-subtle)]",
  default: "border-[var(--color-border-default)]",
  strong: "border-[var(--color-border-strong)]",
};

/**
 * Divider component
 *
 * @ai-component
 * @description Visual separator between content sections. Supports horizontal/vertical orientations and an optional text label.
 *
 * @example
 * <Divider />
 * <Divider label="or" />
 * <Divider orientation="vertical" />
 */
export function Divider({
  orientation = "horizontal",
  variant = "default",
  label,
  className,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          "inline-block self-stretch w-px border-l",
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        className={cn("flex items-center gap-3", className)}
        {...props}
      >
        <div className={cn("flex-1 border-t", variantStyles[variant])} />
        <span className="text-xs text-[var(--color-foreground-muted)] whitespace-nowrap">
          {label}
        </span>
        <div className={cn("flex-1 border-t", variantStyles[variant])} />
      </div>
    );
  }

  return (
    <div
      role="separator"
      className={cn("border-t w-full", variantStyles[variant], className)}
      {...props}
    />
  );
}
