import figma from "@figma/code-connect";
import { Alert } from "@ai-ds/components";

figma.connect(
  Alert,
  "https://www.figma.com/design/REPLACE_FILE_ID/AI-Design-System?node-id=REPLACE_ALERT_NODE_ID",
  {
    props: {
      variant: figma.enum("Variant", {
        Info: "info",
        Success: "success",
        Warning: "warning",
        Error: "error",
        AI: "ai",
      }),
      title: figma.string("Title"),
      children: figma.string("Description"),
    },
    example: ({ variant, title, children }) => (
      <Alert variant={variant} title={title}>
        {children}
      </Alert>
    ),
  }
);
