import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type CardVariant = "default" | "outlined" | "elevated" | "ai";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: ReactNode;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default: "bg-[var(--color-background-default)] border border-[var(--color-border-default)]",
  outlined: "bg-transparent border border-[var(--color-border-strong)]",
  elevated: "bg-[var(--color-background-default)] shadow-[var(--shadow-md)]",
  ai: "bg-[var(--color-ai-subtle)] border border-[var(--color-ai-default)]/20",
};

/**
 * @ai-component
 * @description Container for grouped content. Use `variant="ai"` for AI-generated content blocks.
 */
export function Card({ variant = "default", children, className, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-[var(--radius-xl)] overflow-hidden", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn("px-6 py-4 border-b border-[var(--color-border-subtle)]", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardBody({ children, className, ...props }: CardBodyProps) {
  return (
    <div className={cn("px-6 py-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        "px-6 py-4 border-t border-[var(--color-border-subtle)]",
        "bg-[var(--color-background-subtle)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
