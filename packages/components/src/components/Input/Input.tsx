import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

/**
 * Input component
 *
 * @ai-component
 * @description Text input field with optional label, error, and hint states.
 */
export function Input({
  label,
  error,
  hint,
  leftAddon,
  rightAddon,
  id,
  className,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[var(--color-foreground-default)]"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftAddon && (
          <div className="absolute left-3 text-[var(--color-foreground-subtle)]">{leftAddon}</div>
        )}
        <input
          id={inputId}
          className={cn(
            "w-full h-10",
            "px-3 py-2",
            "text-sm text-[var(--color-foreground-default)]",
            "bg-[var(--color-background-default)]",
            "border border-[var(--color-border-default)]",
            "rounded-[var(--radius-md)]",
            "placeholder:text-[var(--color-foreground-muted)]",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-default)] focus:ring-offset-0 focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-[var(--color-error-default)] focus:ring-[var(--color-error-default)]",
            !!leftAddon && "pl-10",
            !!rightAddon && "pr-10",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {rightAddon && (
          <div className="absolute right-3 text-[var(--color-foreground-subtle)]">{rightAddon}</div>
        )}
      </div>
      {error && (
        <p id={`${inputId}-error`} className="text-xs text-[var(--color-error-default)]">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-xs text-[var(--color-foreground-subtle)]">
          {hint}
        </p>
      )}
    </div>
  );
}
