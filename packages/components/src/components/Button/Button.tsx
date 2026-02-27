import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive" | "ai";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--color-primary-default)]",
    "text-[var(--color-primary-foreground)]",
    "hover:bg-[var(--color-primary-hover)]",
    "active:bg-[var(--color-primary-active)]",
  ].join(" "),
  secondary: [
    "bg-[var(--color-background-default)]",
    "text-[var(--color-foreground-default)]",
    "border border-[var(--color-border-default)]",
    "hover:bg-[var(--color-background-subtle)]",
  ].join(" "),
  ghost: [
    "bg-transparent",
    "text-[var(--color-foreground-default)]",
    "hover:bg-[var(--color-background-subtle)]",
  ].join(" "),
  destructive: [
    "bg-[var(--color-error-default)]",
    "text-[var(--color-error-foreground)]",
    "hover:opacity-90",
  ].join(" "),
  // AI-specific variant with purple accent
  ai: [
    "bg-[var(--color-ai-default)]",
    "text-[var(--color-ai-foreground)]",
    "hover:opacity-90",
    "shadow-[0_0_12px_var(--color-ai-subtle)]",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm gap-1.5",
  md: "h-10 px-4 text-base gap-2",
  lg: "h-12 px-6 text-lg gap-2.5",
};

/**
 * Button component
 *
 * @ai-component
 * @description Primary interactive element for triggering actions.
 * Use `variant="ai"` for AI-powered actions to visually distinguish them.
 *
 * @example
 * <Button variant="primary">Save</Button>
 * <Button variant="ai" leftIcon={<SparklesIcon />}>Generate</Button>
 */
export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center",
        "font-medium rounded-[var(--radius-md)]",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-default)] focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // Variant & size
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <LoadingSpinner size={size} />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}

function LoadingSpinner({ size }: { size: ButtonSize }) {
  const sizeMap = { sm: 14, md: 16, lg: 18 };
  const px = sizeMap[size];
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin shrink-0"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
