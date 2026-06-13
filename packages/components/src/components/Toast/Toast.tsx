import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { cn } from "../../utils/cn";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ToastVariant = "default" | "success" | "error" | "warning" | "ai";
export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";

export interface ToastItem {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextValue {
  toast: (item: Omit<ToastItem, "id">) => void;
  dismiss: (id: string) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

const positionStyles: Record<ToastPosition, string> = {
  "top-right": "top-4 right-4 items-end",
  "top-left": "top-4 left-4 items-start",
  "bottom-right": "bottom-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
};

export interface ToastProviderProps {
  children: ReactNode;
  position?: ToastPosition;
}

/**
 * ToastProvider
 *
 * @description Wrap your app with ToastProvider and call useToast() to show notifications.
 *
 * @example
 * // In root layout:
 * <ToastProvider position="bottom-right">
 *   <App />
 * </ToastProvider>
 *
 * // Anywhere inside:
 * const { toast } = useToast();
 * toast({ title: "Saved!", variant: "success" });
 */
export function ToastProvider({ children, position = "bottom-right" }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ duration = 4000, ...item }: Omit<ToastItem, "id">) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((prev) => [...prev, { id, duration, ...item }]);
      if (duration > 0) {
        setTimeout(() => dismiss(id), duration);
      }
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div
        aria-live="polite"
        aria-label="Notifications"
        className={cn(
          "fixed z-[var(--z-toast)] flex flex-col gap-2 pointer-events-none",
          positionStyles[position]
        )}
      >
        {toasts.map((item) => (
          <ToastItem key={item.id} {...item} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// ─── Toast item ───────────────────────────────────────────────────────────────

const variantStyles: Record<ToastVariant, { container: string; icon: ReactNode }> = {
  default: {
    container: "bg-[var(--color-foreground-default)] text-[var(--color-foreground-inverted)]",
    icon: null,
  },
  success: {
    container: "bg-[var(--color-success-default)] text-[var(--color-success-foreground)]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  error: {
    container: "bg-[var(--color-error-default)] text-[var(--color-error-foreground)]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  warning: {
    container: "bg-[var(--color-warning-default)] text-[var(--color-warning-foreground)]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  ai: {
    container: "bg-[var(--color-ai-default)] text-[var(--color-ai-foreground)]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
};

interface ToastItemProps extends ToastItem {
  onDismiss: (id: string) => void;
}

function ToastItem({ id, title, description, variant = "default", onDismiss }: ToastItemProps) {
  const styles = variantStyles[variant];
  return (
    <div
      role="alert"
      className={cn(
        "pointer-events-auto flex items-start gap-3",
        "min-w-[280px] max-w-sm px-4 py-3",
        "rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)]",
        "animate-in slide-in-from-right-4 fade-in duration-200",
        styles.container
      )}
    >
      {styles.icon && (
        <span className="mt-0.5 shrink-0">{styles.icon}</span>
      )}
      <div className="flex-1 min-w-0">
        {title && (
          <p className="text-sm font-semibold leading-snug">{title}</p>
        )}
        {description && (
          <p className="text-sm opacity-90 mt-0.5 leading-snug">{description}</p>
        )}
      </div>
      <button
        type="button"
        onClick={() => onDismiss(id)}
        className="shrink-0 opacity-70 hover:opacity-100 transition-opacity -mr-1 p-0.5 rounded"
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
