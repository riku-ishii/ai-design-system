import figma from "@figma/code-connect";
import { Button } from "@ai-ds/components";

/**
 * Code Connect for Button component.
 * Replace FIGMA_BUTTON_URL with your Figma component node URL:
 *   1. Open Figma file → right-click the Button component → Copy link to selection
 *   2. Paste the URL below
 */
figma.connect(
  Button,
  "https://www.figma.com/design/REPLACE_FILE_ID/AI-Design-System?node-id=REPLACE_BUTTON_NODE_ID",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Ghost: "ghost",
        Destructive: "destructive",
        AI: "ai",
      }),
      size: figma.enum("Size", {
        Small: "sm",
        Medium: "md",
        Large: "lg",
      }),
      loading: figma.boolean("Loading"),
      children: figma.string("Label"),
    },
    example: ({ variant, size, loading, children }) => (
      <Button variant={variant} size={size} loading={loading}>
        {children}
      </Button>
    ),
  }
);
