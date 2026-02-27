import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type AlertVariant = "info" | "success" | "warning" | "error" | "ai";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
}

const variantStyles: Record<AlertVariant, { wrapper: string; title: string; body: string }> = {
  info: {
    wrapper: "bg-[var(--color-background-subtle)] border-[var(--color-border-strong)]",
    title: "text-[var(--color-foreground-default)]",
    body: "text-[var(--color-foreground-subtle)]",
  },
  success: {
    wrapper: "bg-[var(--color-success-subtle)] border-[var(--color-success-default)]/30",
    title: "text-[var(--color-success-default)]",
    body: "text-[var(--color-success-default)]/80",
  },
  warning: {
    wrapper: "bg-[var(--color-warning-subtle)] border-[var(--color-warning-default)]/30",
    title: "text-[var(--color-warning-default)]",
    body: "text-[var(--color-warning-default)]/80",
  },
  error: {
    wrapper: "bg-[var(--color-error-subtle)] border-[var(--color-error-default)]/30",
    title: "text-[var(--color-error-default)]",
    body: "text-[var(--color-error-default)]/80",
  },
  ai: {
    wrapper: "bg-[var(--color-ai-subtle)] border-[var(--color-ai-default)]/30",
    title: "text-[var(--color-ai-default)]",
    body: "text-[var(--color-foreground-subtle)]",
  },
};

/**
 * @ai-component
 * @description Informational message block. Use `variant="ai"` for AI-generated insights or suggestions.
 */
export function Alert({ variant = "info", title, children, icon, onClose, className, ...props }: AlertProps) {
  const styles = variantStyles[variant];
  return (
    <div
      role="alert"
      className={cn(
        "flex gap-3 rounded-[var(--radius-lg)] border p-4",
        styles.wrapper,
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0 mt-0.5">{icon}</span>}
      <div className="flex-1 min-w-0">
        {title && <p className={cn("text-sm font-semibold mb-1", styles.title)}>{title}</p>}
        <div className={cn("text-sm", styles.body)}>{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="shrink-0 mt-0.5 text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground-subtle)] transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
