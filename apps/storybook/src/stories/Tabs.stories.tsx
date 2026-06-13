import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, Tab, TabPanel, Text, Badge } from "@ai-ds/components";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Accessible tab navigation. Compose with TabsList, Tab, and TabPanel.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <Tab value="overview">Overview</Tab>
        <Tab value="components">Components</Tab>
        <Tab value="tokens">Tokens</Tab>
      </TabsList>
      <TabPanel value="overview">
        <Text>Overview content — The design system provides a consistent foundation.</Text>
      </TabPanel>
      <TabPanel value="components">
        <Text>Components content — Browse all available React components.</Text>
      </TabPanel>
      <TabPanel value="tokens">
        <Text>Tokens content — Design tokens for colors, spacing, and typography.</Text>
      </TabPanel>
    </Tabs>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Tabs defaultValue="all">
      <TabsList>
        <Tab value="all">All</Tab>
        <Tab value="ai">
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            AI Components
            <Badge variant="ai" style={{ fontSize: "10px", padding: "1px 6px" }}>New</Badge>
          </span>
        </Tab>
        <Tab value="form">Form</Tab>
        <Tab value="layout" disabled>Layout (soon)</Tab>
      </TabsList>
      <TabPanel value="all"><Text>All components listed here.</Text></TabPanel>
      <TabPanel value="ai"><Text>AI-specific components: ChatBubble, ThinkingDots, and more.</Text></TabPanel>
      <TabPanel value="form"><Text>Form components: Input, Select, Checkbox, Switch, RadioGroup.</Text></TabPanel>
      <TabPanel value="layout"><Text>Layout components coming soon.</Text></TabPanel>
    </Tabs>
  ),
};
