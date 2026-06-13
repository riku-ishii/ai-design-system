import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export type SkeletonVariant = "text" | "circular" | "rectangular";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  lines?: number;
}

/**
 * Skeleton component
 *
 * @ai-component
 * @description Animated loading placeholder. Use `lines` to render multiple text rows, or set explicit `width`/`height` for shapes.
 *
 * @example
 * <Skeleton variant="text" lines={3} />
 * <Skeleton variant="circular" width={40} height={40} />
 * <Skeleton variant="rectangular" height={200} />
 */
export function Skeleton({
  variant = "rectangular",
  width,
  height,
  lines,
  className,
  style,
  ...props
}: SkeletonProps) {
  const base = "bg-[var(--color-background-muted)] animate-pulse";

  if (variant === "text" && lines && lines > 1) {
    return (
      <div className={cn("flex flex-col gap-2", className)} {...props}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(base, "h-4 rounded-[var(--radius-sm)]")}
            style={{ width: i === lines - 1 ? "75%" : "100%" }}
          />
        ))}
      </div>
    );
  }

  const shapeClass =
    variant === "circular"
      ? "rounded-full"
      : variant === "text"
        ? "rounded-[var(--radius-sm)]"
        : "rounded-[var(--radius-md)]";

  const resolvedHeight = height ?? (variant === "text" ? 16 : undefined);

  return (
    <div
      className={cn(base, shapeClass, className)}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof resolvedHeight === "number" ? `${resolvedHeight}px` : resolvedHeight,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
}
