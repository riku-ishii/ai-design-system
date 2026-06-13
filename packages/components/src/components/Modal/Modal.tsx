import { type ReactNode, useEffect, useCallback } from "react";
import { cn } from "../../utils/cn";

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  size?: ModalSize;
  children: ReactNode;
  className?: string;
}

export interface ModalHeaderProps {
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

export interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

export interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

const sizeStyles: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-[calc(100vw-48px)]",
};

/**
 * Modal component
 *
 * @ai-component
 * @description Accessible dialog overlay. Compose with ModalHeader, ModalBody, and ModalFooter.
 * Closes on Escape key and backdrop click.
 *
 * @example
 * <Modal open={open} onClose={() => setOpen(false)}>
 *   <ModalHeader onClose={() => setOpen(false)}>Confirm action</ModalHeader>
 *   <ModalBody>Are you sure you want to proceed?</ModalBody>
 *   <ModalFooter>
 *     <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
 *     <Button>Confirm</Button>
 *   </ModalFooter>
 * </Modal>
 */
export function Modal({ open, onClose, size = "md", children, className }: ModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-6"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <div
        className={cn(
          "relative w-full bg-[var(--color-background-default)]",
          "rounded-[var(--radius-2xl)] shadow-[var(--shadow-2xl)]",
          "flex flex-col",
          sizeStyles[size],
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function ModalHeader({ children, onClose, className }: ModalHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        "px-6 py-4 border-b border-[var(--color-border-subtle)]",
        className
      )}
    >
      <h2 className="text-lg font-semibold text-[var(--color-foreground-default)]">
        {children}
      </h2>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground-default)] transition-colors rounded-[var(--radius-md)] p-1 -mr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-default)]"
          aria-label="Close dialog"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function ModalBody({ children, className }: ModalBodyProps) {
  return (
    <div className={cn("px-6 py-4 flex-1 overflow-y-auto", className)}>
      {children}
    </div>
  );
}

export function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-3",
        "px-6 py-4 border-t border-[var(--color-border-subtle)]",
        "bg-[var(--color-background-subtle)] rounded-b-[var(--radius-2xl)]",
        className
      )}
    >
      {children}
    </div>
  );
}
