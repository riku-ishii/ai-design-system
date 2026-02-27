import type { SelectHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  hint?: string;
  leftAddon?: ReactNode;
}

/**
 * @ai-component
 * @description Dropdown select input with options list.
 */
export function Select({ label, options, placeholder, error, hint, leftAddon, id, className, ...props }: SelectProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-[var(--color-foreground-default)]">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftAddon && (
          <div className="absolute left-3 text-[var(--color-foreground-subtle)] pointer-events-none">
            {leftAddon}
          </div>
        )}
        <select
          id={inputId}
          className={cn(
            "w-full h-10 appearance-none",
            "px-3 pr-9 py-2",
            "text-sm text-[var(--color-foreground-default)]",
            "bg-[var(--color-background-default)]",
            "border border-[var(--color-border-default)]",
            "rounded-[var(--radius-md)]",
            "transition-colors duration-150 cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-default)] focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-[var(--color-error-default)]",
            !!leftAddon && "pl-10",
            className
          )}
          aria-invalid={!!error}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 pointer-events-none text-[var(--color-foreground-subtle)]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
      {error && <p className="text-xs text-[var(--color-error-default)]">{error}</p>}
      {hint && !error && <p className="text-xs text-[var(--color-foreground-subtle)]">{hint}</p>}
    </div>
  );
}
