/**
 * Component registry - source of truth for MCP tool responses.
 * Add new components here as they are created.
 */

export interface ComponentDoc {
  name: string;
  description: string;
  importPath: string;
  variants?: string[];
  props: PropDoc[];
  examples: ExampleDoc[];
}

export interface PropDoc {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

export interface ExampleDoc {
  title: string;
  code: string;
}

export const componentRegistry: ComponentDoc[] = [
  {
    name: "Button",
    description:
      "Primary interactive element for triggering actions. Use variant='ai' for AI-powered actions.",
    importPath: "@ai-ds/components",
    variants: ["primary", "secondary", "ghost", "destructive", "ai"],
    props: [
      {
        name: "variant",
        type: "'primary' | 'secondary' | 'ghost' | 'destructive' | 'ai'",
        required: false,
        default: "primary",
        description: "Visual style. Use 'ai' variant for AI-powered actions.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        required: false,
        default: "md",
        description: "Button size.",
      },
      {
        name: "loading",
        type: "boolean",
        required: false,
        default: "false",
        description: "Shows loading spinner and disables the button.",
      },
      {
        name: "leftIcon",
        type: "ReactNode",
        required: false,
        description: "Icon rendered before the label.",
      },
      {
        name: "rightIcon",
        type: "ReactNode",
        required: false,
        description: "Icon rendered after the label.",
      },
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Button label.",
      },
    ],
    examples: [
      {
        title: "Primary button",
        code: `<Button variant="primary">Save changes</Button>`,
      },
      {
        title: "AI action button",
        code: `<Button variant="ai" leftIcon={<SparklesIcon />}>Generate</Button>`,
      },
      {
        title: "Loading state",
        code: `<Button loading>Saving...</Button>`,
      },
    ],
  },
  {
    name: "Badge",
    description: "Small label for status, category, or metadata.",
    importPath: "@ai-ds/components",
    variants: ["default", "success", "error", "warning", "ai", "outline"],
    props: [
      {
        name: "variant",
        type: "'default' | 'success' | 'error' | 'warning' | 'ai' | 'outline'",
        required: false,
        default: "default",
        description: "Visual style. Use 'ai' for AI-generated content.",
      },
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Badge content.",
      },
    ],
    examples: [
      {
        title: "Status badges",
        code: `
<Badge variant="success">Active</Badge>
<Badge variant="error">Failed</Badge>
<Badge variant="ai">AI generated</Badge>
`,
      },
    ],
  },
  {
    name: "Input",
    description: "Text input field with optional label, error, and hint states.",
    importPath: "@ai-ds/components",
    props: [
      {
        name: "label",
        type: "string",
        required: false,
        description: "Input label.",
      },
      {
        name: "error",
        type: "string",
        required: false,
        description: "Error message displayed below the input.",
      },
      {
        name: "hint",
        type: "string",
        required: false,
        description: "Helper text displayed below the input.",
      },
      {
        name: "leftAddon",
        type: "ReactNode",
        required: false,
        description: "Element displayed inside the input on the left.",
      },
      {
        name: "rightAddon",
        type: "ReactNode",
        required: false,
        description: "Element displayed inside the input on the right.",
      },
    ],
    examples: [
      {
        title: "Basic input",
        code: `<Input label="Email" placeholder="you@example.com" />`,
      },
      {
        title: "With error",
        code: `<Input label="Email" error="Invalid email address" value="not-an-email" />`,
      },
    ],
  },
  {
    name: "Avatar",
    description: "User avatar with image or initials fallback. Use aiIndicator to mark AI agents.",
    importPath: "@ai-ds/components",
    props: [
      { name: "name", type: "string", required: false, description: "User name for initials fallback." },
      { name: "src", type: "string", required: false, description: "Image URL." },
      { name: "size", type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", required: false, default: "md", description: "Avatar size." },
      { name: "aiIndicator", type: "boolean", required: false, description: "Show purple AI indicator dot." },
    ],
    examples: [
      { title: "With initials", code: `<Avatar name="Riku Ishii" size="md" />` },
      { title: "AI agent", code: `<Avatar name="AI Agent" aiIndicator />` },
    ],
  },
  {
    name: "Card",
    description: "Container for grouped content. Use variant='ai' for AI-generated content blocks.",
    importPath: "@ai-ds/components",
    variants: ["default", "outlined", "elevated", "ai"],
    props: [
      { name: "variant", type: "'default' | 'outlined' | 'elevated' | 'ai'", required: false, default: "default", description: "Visual style." },
      { name: "children", type: "ReactNode", required: true, description: "Card content." },
    ],
    examples: [
      { title: "Full card", code: `<Card>\n  <CardHeader>Title</CardHeader>\n  <CardBody>Content</CardBody>\n  <CardFooter><Button>Action</Button></CardFooter>\n</Card>` },
      { title: "AI card", code: `<Card variant="ai"><CardBody>AI generated content</CardBody></Card>` },
    ],
  },
  {
    name: "Alert",
    description: "Informational message block. Use variant='ai' for AI-generated insights or suggestions.",
    importPath: "@ai-ds/components",
    variants: ["info", "success", "warning", "error", "ai"],
    props: [
      { name: "variant", type: "'info' | 'success' | 'warning' | 'error' | 'ai'", required: false, default: "info", description: "Alert type." },
      { name: "title", type: "string", required: false, description: "Bold title text." },
      { name: "children", type: "ReactNode", required: true, description: "Alert body." },
      { name: "onClose", type: "() => void", required: false, description: "Show close button." },
    ],
    examples: [
      { title: "AI suggestion", code: `<Alert variant="ai" title="AI suggestion">Consider updating the color token for better contrast.</Alert>` },
    ],
  },
  {
    name: "Checkbox",
    description: "Checkbox input with optional label and description.",
    importPath: "@ai-ds/components",
    props: [
      { name: "label", type: "string", required: false, description: "Checkbox label." },
      { name: "description", type: "string", required: false, description: "Helper text below label." },
      { name: "error", type: "string", required: false, description: "Error message." },
    ],
    examples: [
      { title: "With description", code: `<Checkbox label="Enable AI suggestions" description="AI will analyze your design" />` },
    ],
  },
  {
    name: "Switch",
    description: "Toggle switch for boolean settings.",
    importPath: "@ai-ds/components",
    props: [
      { name: "label", type: "string", required: false, description: "Switch label." },
      { name: "description", type: "string", required: false, description: "Helper text." },
      { name: "size", type: "'sm' | 'md'", required: false, default: "md", description: "Switch size." },
    ],
    examples: [
      { title: "AI feature toggle", code: `<Switch label="AI auto-complete" description="Automatically complete designs using AI" />` },
    ],
  },
  {
    name: "Select",
    description: "Dropdown select input with options list.",
    importPath: "@ai-ds/components",
    props: [
      { name: "label", type: "string", required: false, description: "Field label." },
      { name: "options", type: "SelectOption[]", required: true, description: "Array of { value, label, disabled? }." },
      { name: "placeholder", type: "string", required: false, description: "Placeholder option." },
      { name: "error", type: "string", required: false, description: "Error message." },
      { name: "hint", type: "string", required: false, description: "Helper text." },
    ],
    examples: [
      { title: "Basic", code: `<Select label="Model" options={[{value:"sonnet",label:"Claude Sonnet"}]} placeholder="Choose model" />` },
    ],
  },
  {
    name: "Textarea",
    description: "Multi-line text input. Ideal for longer text like AI prompts or descriptions.",
    importPath: "@ai-ds/components",
    props: [
      { name: "label", type: "string", required: false, description: "Field label." },
      { name: "error", type: "string", required: false, description: "Error message." },
      { name: "hint", type: "string", required: false, description: "Helper text." },
    ],
    examples: [
      { title: "AI prompt field", code: `<Textarea label="AI prompt" placeholder="Describe what you want to generate..." hint="Be specific for better results" rows={5} />` },
    ],
  },
];
