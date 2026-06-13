import figma from "@figma/code-connect";
import { Input } from "@ai-ds/components";

figma.connect(
  Input,
  "https://www.figma.com/design/REPLACE_FILE_ID/AI-Design-System?node-id=REPLACE_INPUT_NODE_ID",
  {
    props: {
      label: figma.string("Label"),
      placeholder: figma.string("Placeholder"),
      error: figma.string("Error"),
      hint: figma.string("Hint"),
      disabled: figma.boolean("Disabled"),
    },
    example: ({ label, placeholder, error, hint, disabled }) => (
      <Input
        label={label}
        placeholder={placeholder}
        error={error}
        hint={hint}
        disabled={disabled}
      />
    ),
  }
);
