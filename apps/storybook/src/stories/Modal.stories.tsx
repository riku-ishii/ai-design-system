import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Text } from "@ai-ds/components";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Accessible dialog overlay. Closes on Escape key and backdrop click. Compose with ModalHeader, ModalBody, and ModalFooter.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

function ModalDemo({ size = "md" as "sm" | "md" | "lg" | "xl" | "full", label = "Open Modal" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>{label}</Button>
      <Modal open={open} onClose={() => setOpen(false)} size={size}>
        <ModalHeader onClose={() => setOpen(false)}>Dialog title</ModalHeader>
        <ModalBody>
          <Text>
            This is the modal body. You can place any content here — forms,
            information, or confirmation messages.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <ModalDemo size="sm" label="Small" />
      <ModalDemo size="md" label="Medium" />
      <ModalDemo size="lg" label="Large" />
      <ModalDemo size="xl" label="XL" />
    </div>
  ),
};

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>Delete project</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm">
          <ModalHeader onClose={() => setOpen(false)}>Delete project?</ModalHeader>
          <ModalBody>
            <Text color="subtle">
              This will permanently delete the project and all its contents.
              This action cannot be undone.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>Delete</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};
