import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

/**
 * @ai-component
 * @description Multi-line text input. Ideal for longer text like AI prompts or descriptions.
 */
export function Textarea({ label, error, hint, id, className, ...props }: TextareaProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-[var(--color-foreground-default)]">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={cn(
          "w-full min-h-24 px-3 py-2",
          "text-sm text-[var(--color-foreground-default)]",
          "bg-[var(--color-background-default)]",
          "border border-[var(--color-border-default)]",
          "rounded-[var(--radius-md)]",
          "placeholder:text-[var(--color-foreground-muted)]",
          "resize-y transition-colors duration-150",
          "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-default)] focus:border-transparent",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-[var(--color-error-default)] focus:ring-[var(--color-error-default)]",
          className
        )}
        aria-invalid={!!error}
        {...props}
      />
      {error && <p className="text-xs text-[var(--color-error-default)]">{error}</p>}
      {hint && !error && <p className="text-xs text-[var(--color-foreground-subtle)]">{hint}</p>}
    </div>
  );
}
