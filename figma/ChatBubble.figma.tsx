import figma from "@figma/code-connect";
import { ChatBubble } from "@ai-ds/components";

figma.connect(
  ChatBubble,
  "https://www.figma.com/design/REPLACE_FILE_ID/AI-Design-System?node-id=REPLACE_CHATBUBBLE_NODE_ID",
  {
    props: {
      role: figma.enum("Role", {
        User: "user",
        Assistant: "assistant",
        System: "system",
      }),
      name: figma.string("Name"),
      timestamp: figma.string("Timestamp"),
      children: figma.string("Message"),
    },
    example: ({ role, name, timestamp, children }) => (
      <ChatBubble role={role} name={name} timestamp={timestamp}>
        {children}
      </ChatBubble>
    ),
  }
);
