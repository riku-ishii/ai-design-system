import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type BadgeVariant = "default" | "success" | "error" | "warning" | "ai" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-[var(--color-background-muted)] text-[var(--color-foreground-subtle)]",
  success:
    "bg-[var(--color-success-subtle)] text-[var(--color-success-default)]",
  error: "bg-[var(--color-error-subtle)] text-[var(--color-error-default)]",
  warning:
    "bg-[var(--color-warning-subtle)] text-[var(--color-warning-default)]",
  ai: "bg-[var(--color-ai-subtle)] text-[var(--color-ai-default)]",
  outline:
    "border border-[var(--color-border-default)] text-[var(--color-foreground-subtle)]",
};

/**
 * Badge component
 *
 * @ai-component
 * @description Small label for status, category, or metadata.
 * Use `variant="ai"` to indicate AI-generated or AI-related content.
 */
export function Badge({ variant = "default", children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1",
        "px-2 py-0.5",
        "text-xs font-medium",
        "rounded-[var(--radius-full)]",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
