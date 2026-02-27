import type { ImgHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  name?: string;
  src?: string;
  size?: AvatarSize;
  /** Show AI indicator badge */
  aiIndicator?: boolean;
}

const sizeStyles: Record<AvatarSize, string> = {
  xs: "size-6 text-xs",
  sm: "size-8 text-sm",
  md: "size-10 text-base",
  lg: "size-12 text-lg",
  xl: "size-16 text-xl",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * @ai-component
 * @description User avatar with image or initials fallback. Use `aiIndicator` to mark AI agents.
 */
export function Avatar({ name, src, size = "md", aiIndicator, className, alt, ...props }: AvatarProps) {
  return (
    <div className="relative inline-flex shrink-0">
      {src ? (
        <img
          src={src}
          alt={alt ?? name ?? "avatar"}
          className={cn(
            "rounded-full object-cover bg-[var(--color-background-muted)]",
            sizeStyles[size],
            className
          )}
          {...props}
        />
      ) : (
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-full",
            "bg-[var(--color-primary-subtle)] text-[var(--color-primary-default)]",
            "font-semibold select-none",
            sizeStyles[size],
            className
          )}
          aria-label={name ?? "avatar"}
        >
          {name ? getInitials(name) : "?"}
        </span>
      )}
      {aiIndicator && (
        <span
          className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-[var(--color-ai-default)] ring-2 ring-[var(--color-background-default)]"
          aria-label="AI"
        />
      )}
    </div>
  );
}
