import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export type SwitchSize = "sm" | "md";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  description?: string;
  size?: SwitchSize;
}

const sizeStyles: Record<SwitchSize, { track: string; thumb: string; translate: string }> = {
  sm: { track: "w-8 h-4", thumb: "size-3 top-0.5 left-0.5", translate: "translate-x-4" },
  md: { track: "w-11 h-6", thumb: "size-5 top-0.5 left-0.5", translate: "translate-x-5" },
};

/**
 * @ai-component
 * @description Toggle switch for boolean settings.
 */
export function Switch({ label, description, size = "md", id, className, checked, onChange, ...props }: SwitchProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  const s = sizeStyles[size];

  return (
    <div className="flex items-center gap-3">
      <div className="relative inline-flex shrink-0">
        <input
          type="checkbox"
          role="switch"
          id={inputId}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "relative cursor-pointer rounded-full transition-colors duration-200",
            "bg-[var(--color-border-strong)]",
            "peer-checked:bg-[var(--color-primary-default)]",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-primary-default)] peer-focus-visible:ring-offset-2",
            "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
            s.track,
            className
          )}
        >
          <span
            className={cn(
              "absolute rounded-full bg-white shadow-sm transition-transform duration-200",
              s.thumb,
              checked ? s.translate : "translate-x-0"
            )}
          />
        </label>
      </div>
      {(label ?? description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <label htmlFor={inputId} className="text-sm font-medium text-[var(--color-foreground-default)] cursor-pointer">
              {label}
            </label>
          )}
          {description && (
            <p className="text-xs text-[var(--color-foreground-subtle)]">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}
