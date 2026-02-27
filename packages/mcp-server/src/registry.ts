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
];
