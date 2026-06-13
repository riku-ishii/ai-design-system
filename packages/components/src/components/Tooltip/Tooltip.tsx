import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type TooltipSide = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: ReactNode;
  side?: TooltipSide;
  children: ReactNode;
  className?: string;
}

const sideStyles: Record<TooltipSide, { container: string; arrow: string }> = {
  top: {
    container: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    arrow: "top-full left-1/2 -translate-x-1/2 border-t-[var(--color-foreground-default)] border-l-transparent border-r-transparent border-b-transparent",
  },
  bottom: {
    container: "top-full left-1/2 -translate-x-1/2 mt-2",
    arrow: "bottom-full left-1/2 -translate-x-1/2 border-b-[var(--color-foreground-default)] border-l-transparent border-r-transparent border-t-transparent",
  },
  left: {
    container: "right-full top-1/2 -translate-y-1/2 mr-2",
    arrow: "left-full top-1/2 -translate-y-1/2 border-l-[var(--color-foreground-default)] border-t-transparent border-b-transparent border-r-transparent",
  },
  right: {
    container: "left-full top-1/2 -translate-y-1/2 ml-2",
    arrow: "right-full top-1/2 -translate-y-1/2 border-r-[var(--color-foreground-default)] border-t-transparent border-b-transparent border-l-transparent",
  },
};

/**
 * Tooltip component
 *
 * @ai-component
 * @description CSS-only hover tooltip. Wraps a trigger element and shows a floating label.
 *
 * @example
 * <Tooltip content="Copy to clipboard">
 *   <Button variant="ghost">Copy</Button>
 * </Tooltip>
 */
export function Tooltip({
  content,
  side = "top",
  children,
  className,
}: TooltipProps) {
  return (
    <div className={cn("relative inline-flex group", className)}>
      {children}
      <div
        role="tooltip"
        className={cn(
          "absolute z-[var(--z-tooltip)] pointer-events-none",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-[var(--duration-fast)]",
          sideStyles[side].container
        )}
      >
        <div className="bg-[var(--color-foreground-default)] text-[var(--color-foreground-inverted)] text-xs font-medium px-2.5 py-1.5 rounded-[var(--radius-md)] whitespace-nowrap shadow-[var(--shadow-md)]">
          {content}
        </div>
        <div
          className={cn(
            "absolute w-0 h-0 border-4",
            sideStyles[side].arrow
          )}
        />
      </div>
    </div>
  );
}
