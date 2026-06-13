import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export type ThinkingDotsSize = "sm" | "md" | "lg";
export type ThinkingDotsVariant = "default" | "ai";

export interface ThinkingDotsProps extends HTMLAttributes<HTMLDivElement> {
  size?: ThinkingDotsSize;
  variant?: ThinkingDotsVariant;
  label?: string;
}

const sizeStyles: Record<ThinkingDotsSize, string> = {
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-2.5 h-2.5",
};

const variantStyles: Record<ThinkingDotsVariant, string> = {
  default: "bg-[var(--color-foreground-muted)]",
  ai: "bg-[var(--color-ai-default)]",
};

/**
 * ThinkingDots component
 *
 * @ai-component
 * @description Animated typing indicator for AI responses. Shows three bouncing dots to signal that the AI is processing.
 *
 * @example
 * <ThinkingDots />
 * <ThinkingDots variant="ai" size="lg" label="Claude is thinking..." />
 */
export function ThinkingDots({
  size = "md",
  variant = "ai",
  label = "Thinking...",
  className,
  ...props
}: ThinkingDotsProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            "rounded-full",
            sizeStyles[size],
            variantStyles[variant],
            "animate-bounce"
          )}
          style={{
            animationDelay: `${i * 150}ms`,
            animationDuration: "900ms",
          }}
        />
      ))}
      <span className="sr-only">{label}</span>
    </div>
  );
}
