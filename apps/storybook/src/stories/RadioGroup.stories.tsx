import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "@ai-ds/components";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Accessible radio button group. Supports optional descriptions per option, error/hint messages, and horizontal orientation.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("md");
    return (
      <RadioGroup
        name="size"
        value={value}
        onChange={setValue}
        label="Size"
        options={[
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" },
        ]}
      />
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [value, setValue] = useState("sonnet");
    return (
      <RadioGroup
        name="model"
        value={value}
        onChange={setValue}
        label="AI Model"
        hint="Choose the model that best fits your task."
        options={[
          { value: "haiku", label: "Claude Haiku", description: "Fast and cost-efficient" },
          { value: "sonnet", label: "Claude Sonnet", description: "Best balance of speed and intelligence" },
          { value: "opus", label: "Claude Opus", description: "Most powerful for complex tasks" },
        ]}
      />
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState("light");
    return (
      <RadioGroup
        name="theme"
        value={value}
        onChange={setValue}
        label="Theme"
        orientation="horizontal"
        options={[
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "system", label: "System" },
        ]}
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <RadioGroup
        name="plan"
        value={value}
        onChange={setValue}
        label="Plan"
        error="Please select a plan to continue."
        options={[
          { value: "free", label: "Free" },
          { value: "pro", label: "Pro" },
          { value: "team", label: "Team" },
        ]}
      />
    );
  },
};
