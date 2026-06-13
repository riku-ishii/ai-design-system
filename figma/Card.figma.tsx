import figma from "@figma/code-connect";
import { Card, CardHeader, CardBody, CardFooter } from "@ai-ds/components";

figma.connect(
  Card,
  "https://www.figma.com/design/REPLACE_FILE_ID/AI-Design-System?node-id=REPLACE_CARD_NODE_ID",
  {
    props: {
      variant: figma.enum("Variant", {
        Default: "default",
        Outlined: "outlined",
        Elevated: "elevated",
        AI: "ai",
      }),
      hasHeader: figma.boolean("Has Header"),
      hasFooter: figma.boolean("Has Footer"),
      title: figma.string("Title"),
      children: figma.children(["Body"]),
    },
    example: ({ variant, hasHeader, hasFooter, title, children }) => (
      <Card variant={variant}>
        {hasHeader && <CardHeader>{title}</CardHeader>}
        <CardBody>{children}</CardBody>
        {hasFooter && <CardFooter>Footer content</CardFooter>}
      </Card>
    ),
  }
);
