import type { Preview } from "@storybook/react";
import "@ai-ds/tokens/css";
import "./global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
  tags: ["autodocs"],
};

export default preview;
