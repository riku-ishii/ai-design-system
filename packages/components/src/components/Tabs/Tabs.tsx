import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type HTMLAttributes,
} from "react";
import { cn } from "../../utils/cn";

// ─── Context ──────────────────────────────────────────────────────────────────

interface TabsContextValue {
  active: string;
  setActive: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs subcomponents must be used within <Tabs>");
  return ctx;
}

// ─── Tabs root ────────────────────────────────────────────────────────────────

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

/**
 * Tabs component
 *
 * @ai-component
 * @description Accessible tab navigation. Compose with TabsList, Tab, and TabPanel.
 *
 * @example
 * <Tabs defaultValue="overview">
 *   <TabsList>
 *     <Tab value="overview">Overview</Tab>
 *     <Tab value="details">Details</Tab>
 *   </TabsList>
 *   <TabPanel value="overview">Overview content</TabPanel>
 *   <TabPanel value="details">Details content</TabPanel>
 * </Tabs>
 */
export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
  ...props
}: TabsProps) {
  const [internalActive, setInternalActive] = useState(defaultValue);
  const active = value ?? internalActive;

  function setActive(v: string) {
    setInternalActive(v);
    onValueChange?.(v);
  }

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className={cn("flex flex-col", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// ─── TabsList ─────────────────────────────────────────────────────────────────

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function TabsList({ children, className, ...props }: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex items-center gap-1",
        "border-b border-[var(--color-border-default)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// ─── Tab ──────────────────────────────────────────────────────────────────────

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  disabled?: boolean;
  children: ReactNode;
}

export function Tab({ value, disabled, children, className, ...props }: TabProps) {
  const { active, setActive } = useTabsContext();
  const isActive = active === value;

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isActive}
      disabled={disabled}
      onClick={() => !disabled && setActive(value)}
      className={cn(
        "relative px-4 py-2.5 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-default)] focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        isActive
          ? "text-[var(--color-foreground-default)] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--color-primary-default)] after:-mb-px"
          : "text-[var(--color-foreground-subtle)] hover:text-[var(--color-foreground-default)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// ─── TabPanel ─────────────────────────────────────────────────────────────────

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

export function TabPanel({ value, children, className, ...props }: TabPanelProps) {
  const { active } = useTabsContext();
  if (active !== value) return null;

  return (
    <div
      role="tabpanel"
      className={cn("pt-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
