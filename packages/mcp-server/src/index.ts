#!/usr/bin/env bun
/**
 * AI Design System - MCP Server
 *
 * Exposes design system knowledge to AI tools (Claude, Cursor, etc.)
 * via the Model Context Protocol.
 *
 * Tools exposed:
 * - get_tokens: Retrieve design tokens by category
 * - get_component: Get component API and usage examples
 * - list_components: List all available components
 * - get_token_value: Look up a specific token value
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { tokens } from "@ai-ds/tokens";
import { componentRegistry } from "./registry.js";

const server = new McpServer({
  name: "ai-design-system",
  version: "0.0.1",
});

// --- Tool: list_components ---
server.tool("list_components", "List all available design system components", {}, async () => {
  const list = componentRegistry.map((c) => ({
    name: c.name,
    description: c.description,
    variants: c.variants,
  }));

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(list, null, 2),
      },
    ],
  };
});

// --- Tool: get_component ---
server.tool(
  "get_component",
  "Get detailed API, props, and usage examples for a component",
  {
    name: z.string().describe("Component name (e.g. Button, Badge, Input)"),
  },
  async ({ name }) => {
    const component = componentRegistry.find(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );

    if (!component) {
      return {
        content: [
          {
            type: "text",
            text: `Component "${name}" not found. Available: ${componentRegistry.map((c) => c.name).join(", ")}`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(component, null, 2),
        },
      ],
    };
  }
);

// --- Tool: get_tokens ---
server.tool(
  "get_tokens",
  "Retrieve design tokens by category",
  {
    category: z
      .enum(["colors", "semanticColors", "spacing", "typography", "shadows", "all"])
      .describe("Token category to retrieve"),
  },
  async ({ category }) => {
    const result = category === "all" ? tokens : { [category]: tokens[category as keyof typeof tokens] };

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  }
);

// --- Tool: get_token_value ---
server.tool(
  "get_token_value",
  "Look up the value of a specific design token by path (e.g. 'semanticColors.primary.default')",
  {
    path: z.string().describe("Dot-separated token path, e.g. 'semanticColors.primary.default'"),
  },
  async ({ path }) => {
    const parts = path.split(".");
    let current: unknown = tokens;

    for (const part of parts) {
      if (current === null || typeof current !== "object") {
        return {
          content: [{ type: "text", text: `Token path "${path}" not found at "${part}"` }],
        };
      }
      current = (current as Record<string, unknown>)[part];
    }

    if (current === undefined) {
      return {
        content: [{ type: "text", text: `Token "${path}" does not exist` }],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: typeof current === "object" ? JSON.stringify(current, null, 2) : String(current),
        },
      ],
    };
  }
);

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
console.error("AI Design System MCP server running on stdio");
