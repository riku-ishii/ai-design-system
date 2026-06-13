import figma from "@figma/code-connect";
import { Badge } from "@ai-ds/components";

figma.connect(
  Badge,
  "https://www.figma.com/design/REPLACE_FILE_ID/AI-Design-System?node-id=REPLACE_BADGE_NODE_ID",
  {
    props: {
      variant: figma.enum("Variant", {
        Default: "default",
        Success: "success",
        Error: "error",
        Warning: "warning",
        AI: "ai",
        Outline: "outline",
      }),
      children: figma.string("Label"),
    },
    example: ({ variant, children }) => (
      <Badge variant={variant}>{children}</Badge>
    ),
  }
);
