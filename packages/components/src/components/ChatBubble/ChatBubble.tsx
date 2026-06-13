import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type ChatBubbleRole = "user" | "assistant" | "system";

export interface ChatBubbleProps extends HTMLAttributes<HTMLDivElement> {
  role: ChatBubbleRole;
  avatar?: ReactNode;
  name?: string;
  timestamp?: string;
  children: ReactNode;
}

const roleStyles: Record<ChatBubbleRole, { container: string; bubble: string }> = {
  user: {
    container: "flex-row-reverse",
    bubble: [
      "bg-[var(--color-primary-default)]",
      "text-[var(--color-primary-foreground)]",
      "rounded-[var(--radius-2xl)] rounded-tr-[var(--radius-sm)]",
    ].join(" "),
  },
  assistant: {
    container: "flex-row",
    bubble: [
      "bg-[var(--color-ai-subtle)]",
      "border border-[var(--color-ai-default)]/20",
      "text-[var(--color-foreground-default)]",
      "rounded-[var(--radius-2xl)] rounded-tl-[var(--radius-sm)]",
    ].join(" "),
  },
  system: {
    container: "flex-row justify-center",
    bubble: [
      "bg-[var(--color-background-muted)]",
      "text-[var(--color-foreground-subtle)]",
      "rounded-[var(--radius-xl)]",
      "text-xs",
    ].join(" "),
  },
};

/**
 * ChatBubble component
 *
 * @ai-component
 * @description Message bubble for chat interfaces. Supports user, assistant, and system roles.
 * Use `role="assistant"` for AI-generated messages with the signature purple AI styling.
 *
 * @example
 * <ChatBubble role="user">Hello! Can you help me?</ChatBubble>
 * <ChatBubble role="assistant" name="Claude" timestamp="12:34">
 *   Of course! What would you like to know?
 * </ChatBubble>
 */
export function ChatBubble({
  role,
  avatar,
  name,
  timestamp,
  children,
  className,
  ...props
}: ChatBubbleProps) {
  const styles = roleStyles[role];

  if (role === "system") {
    return (
      <div className={cn("flex my-4", styles.container)} {...props}>
        <div className={cn("px-4 py-1.5 max-w-xs text-center", styles.bubble)}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-end gap-2 my-2", styles.container, className)} {...props}>
      {avatar && (
        <div className="shrink-0 mb-1">{avatar}</div>
      )}
      <div className={cn("flex flex-col gap-1", role === "user" ? "items-end" : "items-start")}>
        {(name || timestamp) && (
          <div className={cn("flex items-center gap-2 px-1", role === "user" && "flex-row-reverse")}>
            {name && (
              <span className="text-xs font-medium text-[var(--color-foreground-subtle)]">
                {role === "assistant" && (
                  <span className="inline-flex items-center gap-1">
                    <SparkleIcon />
                    {name}
                  </span>
                )}
                {role === "user" && name}
              </span>
            )}
            {timestamp && (
              <span className="text-xs text-[var(--color-foreground-muted)]">{timestamp}</span>
            )}
          </div>
        )}
        <div className={cn("px-4 py-3 max-w-prose text-sm leading-relaxed", styles.bubble)}>
          {children}
        </div>
      </div>
    </div>
  );
}

function SparkleIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[var(--color-ai-default)]"
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}
