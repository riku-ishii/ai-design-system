import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast, Button } from "@ai-ds/components";

const meta = {
  title: "Components/Toast",
  component: ToastProvider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Notification toasts. Wrap your app with `<ToastProvider>` and call `useToast()` to show messages. Supports success, error, warning, and AI variants.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

function ToastDemo() {
  const { toast } = useToast();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
      <Button
        variant="primary"
        onClick={() => toast({ title: "Changes saved", description: "Your work has been saved.", variant: "success" })}
      >
        Success
      </Button>
      <Button
        variant="destructive"
        onClick={() => toast({ title: "Something went wrong", description: "Please try again.", variant: "error" })}
      >
        Error
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast({ title: "Heads up", description: "Your trial expires in 3 days.", variant: "warning" })}
      >
        Warning
      </Button>
      <Button
        variant="ai"
        onClick={() => toast({ title: "AI completed", description: "Your design has been generated.", variant: "ai" })}
      >
        AI
      </Button>
      <Button
        variant="ghost"
        onClick={() => toast({ title: "Notification", description: "You have a new message." })}
      >
        Default
      </Button>
    </div>
  );
}

export const AllVariants: Story = {
  render: () => (
    <ToastProvider position="bottom-right">
      <ToastDemo />
    </ToastProvider>
  ),
};

export const Positions: Story = {
  render: () => {
    function PositionDemo({ position }: { position: "top-right" | "bottom-right" | "bottom-center" }) {
      const { toast } = useToast();
      return (
        <Button
          variant="secondary"
          size="sm"
          onClick={() => toast({ title: position, variant: "default" })}
        >
          {position}
        </Button>
      );
    }
    return (
      <div style={{ display: "flex", gap: "12px" }}>
        <ToastProvider position="top-right">
          <PositionDemo position="top-right" />
        </ToastProvider>
        <ToastProvider position="bottom-right">
          <PositionDemo position="bottom-right" />
        </ToastProvider>
        <ToastProvider position="bottom-center">
          <PositionDemo position="bottom-center" />
        </ToastProvider>
      </div>
    );
  },
};
