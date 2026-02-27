import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  error?: string;
}

/**
 * @ai-component
 * @description Checkbox input with optional label and description.
 */
export function Checkbox({ label, description, error, id, className, ...props }: CheckboxProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex gap-3">
      <div className="flex items-center h-5 mt-0.5">
        <input
          type="checkbox"
          id={inputId}
          className={cn(
            "size-4 rounded-[var(--radius-sm)] cursor-pointer",
            "border border-[var(--color-border-strong)]",
            "text-[var(--color-primary-default)]",
            "bg-[var(--color-background-default)]",
            "checked:bg-[var(--color-primary-default)] checked:border-[var(--color-primary-default)]",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-default)] focus:ring-offset-1",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-[var(--color-error-default)]",
            className
          )}
          {...props}
        />
      </div>
      {(label ?? description ?? error) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <label
              htmlFor={inputId}
              className="text-sm font-medium text-[var(--color-foreground-default)] cursor-pointer"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-xs text-[var(--color-foreground-subtle)]">{description}</p>
          )}
          {error && (
            <p className="text-xs text-[var(--color-error-default)]">{error}</p>
          )}
        </div>
      )}
    </div>
  );
}
