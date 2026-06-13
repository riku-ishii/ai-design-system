import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export type ProgressVariant = "default" | "success" | "error" | "ai";
export type ProgressSize = "sm" | "md" | "lg";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: ProgressVariant;
  size?: ProgressSize;
  label?: string;
  showValue?: boolean;
  indeterminate?: boolean;
}

const variantStyles: Record<ProgressVariant, string> = {
  default: "bg-[var(--color-primary-default)]",
  success: "bg-[var(--color-success-default)]",
  error: "bg-[var(--color-error-default)]",
  ai: "bg-[var(--color-ai-default)]",
};

const sizeStyles: Record<ProgressSize, string> = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

/**
 * Progress component
 *
 * @ai-component
 * @description Horizontal progress bar with optional label and percentage. Use `indeterminate` for tasks with unknown duration.
 *
 * @example
 * <Progress value={75} label="Uploading..." showValue />
 * <Progress value={0} indeterminate variant="ai" label="AI generating..." />
 */
export function Progress({
  value,
  max = 100,
  variant = "default",
  size = "md",
  label,
  showValue = false,
  indeterminate = false,
  className,
  ...props
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn("w-full", className)} {...props}>
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-1.5">
          {label && (
            <span className="text-sm text-[var(--color-foreground-subtle)]">{label}</span>
          )}
          {showValue && !indeterminate && (
            <span className="text-sm font-medium text-[var(--color-foreground-default)]">
              {Math.round(pct)}%
            </span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        className={cn(
          "w-full bg-[var(--color-background-muted)] rounded-full overflow-hidden",
          sizeStyles[size]
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-[var(--duration-slow)] ease-[var(--easing-ease-out)]",
            variantStyles[variant],
            indeterminate && "animate-[indeterminate_1.5s_ease-in-out_infinite] w-2/5"
          )}
          style={indeterminate ? undefined : { width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
