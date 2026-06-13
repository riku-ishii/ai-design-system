import {
  createContext,
  useContext,
  type ReactNode,
  type ChangeEvent,
} from "react";
import { cn } from "../../utils/cn";

// ─── Context ──────────────────────────────────────────────────────────────────

interface RadioGroupContextValue {
  name: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean | undefined;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

function useRadioGroupContext() {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) throw new Error("RadioItem must be used within <RadioGroup>");
  return ctx;
}

// ─── RadioGroup ───────────────────────────────────────────────────────────────

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  label?: string;
  error?: string;
  hint?: string;
  disabled?: boolean;
  orientation?: "vertical" | "horizontal";
  className?: string;
}

/**
 * RadioGroup component
 *
 * @ai-component
 * @description Accessible radio button group with optional descriptions.
 *
 * @example
 * <RadioGroup
 *   name="model"
 *   value={model}
 *   onChange={setModel}
 *   label="AI Model"
 *   options={[
 *     { value: "sonnet", label: "Claude Sonnet", description: "Best for most tasks" },
 *     { value: "opus", label: "Claude Opus", description: "Most powerful" },
 *   ]}
 * />
 */
export function RadioGroup({
  name,
  value,
  onChange,
  options,
  label,
  error,
  hint,
  disabled,
  orientation = "vertical",
  className,
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange, disabled }}>
      <fieldset className={cn("border-0 p-0 m-0", className)}>
        {label && (
          <legend className="text-sm font-medium text-[var(--color-foreground-default)] mb-2">
            {label}
          </legend>
        )}
        <div
          className={cn(
            "flex",
            orientation === "vertical" ? "flex-col gap-2" : "flex-row flex-wrap gap-4"
          )}
        >
          {options.map((opt) => (
            <RadioItem key={opt.value} {...opt} />
          ))}
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-[var(--color-error-default)]">{error}</p>
        )}
        {!error && hint && (
          <p className="mt-1.5 text-sm text-[var(--color-foreground-subtle)]">{hint}</p>
        )}
      </fieldset>
    </RadioGroupContext.Provider>
  );
}

// ─── RadioItem ────────────────────────────────────────────────────────────────

function RadioItem({ value, label, description, disabled: itemDisabled }: RadioOption) {
  const ctx = useRadioGroupContext();
  const isDisabled = ctx.disabled || itemDisabled;
  const isChecked = ctx.value === value;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) ctx.onChange(value);
  }

  return (
    <label
      className={cn(
        "flex items-start gap-3 cursor-pointer group",
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <div className="relative flex items-center justify-center mt-0.5">
        <input
          type="radio"
          name={ctx.name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          onChange={handleChange}
          className="sr-only peer"
        />
        <div
          className={cn(
            "w-4 h-4 rounded-full border-2 transition-colors",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-primary-default)] peer-focus-visible:ring-offset-2",
            isChecked
              ? "border-[var(--color-primary-default)] bg-[var(--color-primary-default)]"
              : "border-[var(--color-border-strong)] bg-[var(--color-background-default)] group-hover:border-[var(--color-primary-default)]"
          )}
        >
          {isChecked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          )}
        </div>
      </div>
      <div>
        <span className="text-sm font-medium text-[var(--color-foreground-default)]">
          {label}
        </span>
        {description && (
          <p className="text-sm text-[var(--color-foreground-subtle)] mt-0.5">{description}</p>
        )}
      </div>
    </label>
  );
}
