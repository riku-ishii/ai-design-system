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
  {
    name: "Text",
    description: "Flexible text element for body copy, labels, captions, and inline code.",
    importPath: "@ai-ds/components",
    variants: ["body", "label", "caption", "code"],
    props: [
      { name: "as", type: "ElementType", required: false, default: "p", description: "HTML element to render." },
      { name: "size", type: "'xs' | 'sm' | 'base' | 'lg'", required: false, default: "base", description: "Font size." },
      { name: "weight", type: "'regular' | 'medium' | 'semibold' | 'bold'", required: false, default: "regular", description: "Font weight." },
      { name: "color", type: "'default' | 'subtle' | 'muted' | 'inverted' | 'ai'", required: false, default: "default", description: "Text color." },
      { name: "variant", type: "'body' | 'label' | 'caption' | 'code'", required: false, default: "body", description: "Typography variant." },
    ],
    examples: [
      { title: "Body text", code: `<Text>The quick brown fox jumps over the lazy dog.</Text>` },
      { title: "Caption", code: `<Text variant="caption" color="subtle">Last updated 2 hours ago</Text>` },
      { title: "Inline code", code: `<Text variant="code">const x = 1</Text>` },
    ],
  },
  {
    name: "Heading",
    description: "Semantic heading element with consistent typographic scale (h1–h6).",
    importPath: "@ai-ds/components",
    props: [
      { name: "as", type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'", required: false, default: "h2", description: "Heading level." },
      { name: "size", type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", required: false, description: "Size override. Defaults to level-appropriate size." },
      { name: "weight", type: "'semibold' | 'bold'", required: false, default: "semibold", description: "Font weight." },
      { name: "color", type: "'default' | 'subtle' | 'muted' | 'inverted' | 'ai'", required: false, default: "default", description: "Text color." },
    ],
    examples: [
      { title: "Page title", code: `<Heading as="h1">Page Title</Heading>` },
      { title: "Section heading", code: `<Heading as="h2" size="md">Section</Heading>` },
    ],
  },
  {
    name: "Divider",
    description: "Visual separator between sections. Supports horizontal/vertical orientations and an optional text label.",
    importPath: "@ai-ds/components",
    variants: ["subtle", "default", "strong"],
    props: [
      { name: "orientation", type: "'horizontal' | 'vertical'", required: false, default: "horizontal", description: "Divider direction." },
      { name: "variant", type: "'subtle' | 'default' | 'strong'", required: false, default: "default", description: "Border intensity." },
      { name: "label", type: "string", required: false, description: "Optional center label (horizontal only)." },
    ],
    examples: [
      { title: "With label", code: `<Divider label="or" />` },
      { title: "Vertical", code: `<Divider orientation="vertical" />` },
    ],
  },
  {
    name: "Tooltip",
    description: "CSS-only hover tooltip. Wraps a trigger element and shows a floating label.",
    importPath: "@ai-ds/components",
    props: [
      { name: "content", type: "ReactNode", required: true, description: "Tooltip text." },
      { name: "side", type: "'top' | 'bottom' | 'left' | 'right'", required: false, default: "top", description: "Preferred placement." },
      { name: "children", type: "ReactNode", required: true, description: "Trigger element." },
    ],
    examples: [
      { title: "Basic", code: `<Tooltip content="Copy to clipboard"><Button variant="ghost">Copy</Button></Tooltip>` },
    ],
  },
  {
    name: "Modal",
    description: "Accessible dialog overlay. Closes on Escape and backdrop click. Compose with ModalHeader, ModalBody, ModalFooter.",
    importPath: "@ai-ds/components",
    variants: ["sm", "md", "lg", "xl", "full"],
    props: [
      { name: "open", type: "boolean", required: true, description: "Whether the modal is visible." },
      { name: "onClose", type: "() => void", required: true, description: "Called when the modal should close." },
      { name: "size", type: "'sm' | 'md' | 'lg' | 'xl' | 'full'", required: false, default: "md", description: "Maximum width." },
    ],
    examples: [
      { title: "Confirmation dialog", code: `<Modal open={open} onClose={() => setOpen(false)}>\n  <ModalHeader onClose={() => setOpen(false)}>Confirm</ModalHeader>\n  <ModalBody>Are you sure?</ModalBody>\n  <ModalFooter><Button>Confirm</Button></ModalFooter>\n</Modal>` },
    ],
  },
  {
    name: "ToastProvider",
    description: "Notification toasts via useToast() hook. Wrap root with <ToastProvider>, then call toast({ title, variant }) anywhere.",
    importPath: "@ai-ds/components",
    variants: ["default", "success", "error", "warning", "ai"],
    props: [
      { name: "position", type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'", required: false, default: "bottom-right", description: "Where toasts appear." },
      { name: "children", type: "ReactNode", required: true, description: "App content." },
    ],
    examples: [
      { title: "Setup", code: `<ToastProvider position="bottom-right"><App /></ToastProvider>` },
      { title: "Usage", code: `const { toast } = useToast();\ntoast({ title: "Saved!", variant: "success" });` },
      { title: "AI notification", code: `toast({ title: "AI completed", description: "Design generated.", variant: "ai" });` },
    ],
  },
  {
    name: "Tabs",
    description: "Accessible tab navigation. Compose with TabsList, Tab, and TabPanel.",
    importPath: "@ai-ds/components",
    props: [
      { name: "defaultValue", type: "string", required: true, description: "Initially active tab." },
      { name: "value", type: "string", required: false, description: "Controlled active tab." },
      { name: "onValueChange", type: "(value: string) => void", required: false, description: "Called when active tab changes." },
    ],
    examples: [
      { title: "Basic tabs", code: `<Tabs defaultValue="tab1">\n  <TabsList>\n    <Tab value="tab1">Tab 1</Tab>\n    <Tab value="tab2">Tab 2</Tab>\n  </TabsList>\n  <TabPanel value="tab1">Content 1</TabPanel>\n  <TabPanel value="tab2">Content 2</TabPanel>\n</Tabs>` },
    ],
  },
  {
    name: "Progress",
    description: "Horizontal progress bar with optional label and percentage. Use indeterminate for tasks with unknown duration.",
    importPath: "@ai-ds/components",
    variants: ["default", "success", "error", "ai"],
    props: [
      { name: "value", type: "number", required: true, description: "Current value (0–max)." },
      { name: "max", type: "number", required: false, default: "100", description: "Maximum value." },
      { name: "variant", type: "'default' | 'success' | 'error' | 'ai'", required: false, default: "default", description: "Color variant." },
      { name: "size", type: "'sm' | 'md' | 'lg'", required: false, default: "md", description: "Bar height." },
      { name: "label", type: "string", required: false, description: "Accessible label and visible text." },
      { name: "showValue", type: "boolean", required: false, default: "false", description: "Show percentage number." },
      { name: "indeterminate", type: "boolean", required: false, default: "false", description: "Animated indeterminate state." },
    ],
    examples: [
      { title: "Upload progress", code: `<Progress value={75} label="Uploading..." showValue />` },
      { title: "AI indeterminate", code: `<Progress value={0} indeterminate variant="ai" label="AI generating..." />` },
    ],
  },
  {
    name: "Skeleton",
    description: "Animated loading placeholder. Prevents layout shift during data loading.",
    importPath: "@ai-ds/components",
    variants: ["text", "circular", "rectangular"],
    props: [
      { name: "variant", type: "'text' | 'circular' | 'rectangular'", required: false, default: "rectangular", description: "Shape of the skeleton." },
      { name: "width", type: "string | number", required: false, description: "Width override." },
      { name: "height", type: "string | number", required: false, description: "Height override." },
      { name: "lines", type: "number", required: false, description: "Number of text lines to render (text variant)." },
    ],
    examples: [
      { title: "Text lines", code: `<Skeleton variant="text" lines={3} />` },
      { title: "Avatar placeholder", code: `<Skeleton variant="circular" width={40} height={40} />` },
      { title: "Card image", code: `<Skeleton variant="rectangular" height={200} />` },
    ],
  },
  {
    name: "RadioGroup",
    description: "Accessible radio button group with optional descriptions per option.",
    importPath: "@ai-ds/components",
    props: [
      { name: "name", type: "string", required: true, description: "HTML input name attribute." },
      { name: "value", type: "string", required: true, description: "Selected value." },
      { name: "onChange", type: "(value: string) => void", required: true, description: "Called when selection changes." },
      { name: "options", type: "RadioOption[]", required: true, description: "Array of { value, label, description?, disabled? }." },
      { name: "label", type: "string", required: false, description: "Fieldset legend." },
      { name: "orientation", type: "'vertical' | 'horizontal'", required: false, default: "vertical", description: "Layout direction." },
      { name: "error", type: "string", required: false, description: "Error message." },
    ],
    examples: [
      { title: "AI model selector", code: `<RadioGroup\n  name="model"\n  value={model}\n  onChange={setModel}\n  label="AI Model"\n  options={[\n    { value: "sonnet", label: "Claude Sonnet", description: "Best for most tasks" },\n    { value: "opus", label: "Claude Opus", description: "Most powerful" },\n  ]}\n/>` },
    ],
  },
  {
    name: "ChatBubble",
    description: "Message bubble for chat interfaces. Use role='assistant' for AI messages with purple AI styling.",
    importPath: "@ai-ds/components",
    variants: ["user", "assistant", "system"],
    props: [
      { name: "role", type: "'user' | 'assistant' | 'system'", required: true, description: "Message role determines bubble style and alignment." },
      { name: "avatar", type: "ReactNode", required: false, description: "Avatar element shown beside the bubble." },
      { name: "name", type: "string", required: false, description: "Display name shown above the bubble." },
      { name: "timestamp", type: "string", required: false, description: "Timestamp shown above the bubble." },
      { name: "children", type: "ReactNode", required: true, description: "Message content." },
    ],
    examples: [
      { title: "User message", code: `<ChatBubble role="user" name="You">Hello!</ChatBubble>` },
      { title: "AI response", code: `<ChatBubble role="assistant" name="Claude">Here's my answer...</ChatBubble>` },
      { title: "With avatar", code: `<ChatBubble role="assistant" name="Claude" avatar={<Avatar name="Claude" aiIndicator />}>Response</ChatBubble>` },
    ],
  },
  {
    name: "ThinkingDots",
    description: "Animated typing indicator for AI responses. Three bouncing dots signal that the AI is processing.",
    importPath: "@ai-ds/components",
    props: [
      { name: "size", type: "'sm' | 'md' | 'lg'", required: false, default: "md", description: "Dot size." },
      { name: "variant", type: "'default' | 'ai'", required: false, default: "ai", description: "Color. Use 'ai' for purple AI branding." },
      { name: "label", type: "string", required: false, default: "Thinking...", description: "Screen-reader accessible label." },
    ],
    examples: [
      { title: "Default", code: `<ThinkingDots />` },
      { title: "In chat bubble", code: `<ChatBubble role="assistant"><ThinkingDots /></ChatBubble>` },
    ],
  },
];
