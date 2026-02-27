# AI Design System - Claude Instructions

## Project Overview
AIネイティブなデザインシステム。MCP連携によりAIツールがデザインシステムの知識を直接参照できる。

## Tech Stack
- **Monorepo**: bun workspaces + Turborepo
- **Package manager**: bun (`~/.bun/bin/bun` - always use full path or ensure PATH includes it)
- **Language**: TypeScript (strict mode)
- **Linter/Formatter**: Biome
- **Storybook**: v8 with @storybook/react-vite

## Packages
- `packages/tokens` - Design tokens (colors, spacing, typography, shadows)
- `packages/components` - React components
- `packages/mcp-server` - MCP server for AI tool integration
- `apps/storybook` - Component documentation

## Key Conventions
- Component files use JSDoc `@ai-component` tag for AI discoverability
- AI-specific UI uses `variant="ai"` (purple accent, #9333ea)
- CSS variables follow `--color-{category}-{scale}` naming
- New components must be added to `packages/mcp-server/src/registry.ts`

## Commands
```bash
export PATH="$HOME/.bun/bin:$PATH"
bun install          # install deps
bun run build        # build all packages
bun run storybook    # start Storybook on :6006
bun run tokens:build # rebuild CSS variables
```

## MCP Server Setup (Claude Code)
Add to `~/.claude/settings.json` mcpServers:
```json
{
  "ai-design-system": {
    "command": "bun",
    "args": ["run", "/path/to/packages/mcp-server/src/index.ts"]
  }
}
```
