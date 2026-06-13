# AI Design System

AIネイティブなデザインシステム。MCP連携によりClaudeなどのAIツールがコンポーネント・トークン情報を直接参照できる。

## Packages

| Package | Description |
|---|---|
| `@ai-ds/tokens` | デザイントークン（カラー・スペーシング・タイポグラフィ・シャドウ・アニメーション） |
| `@ai-ds/components` | Reactコンポーネントライブラリ |
| `@ai-ds/mcp-server` | AI連携用MCPサーバー |
| `apps/storybook` | コンポーネントドキュメント |

## Components

| Component | Description |
|---|---|
| `Alert` | 情報・警告・エラーのアラートバナー |
| `Avatar` | ユーザーアバター（画像・フォールバックイニシャル対応） |
| `Badge` | ステータスやラベルを示すバッジ |
| `Button` | インタラクションの主要ボタン（`variant="ai"` でAI特化の紫アクセント） |
| `Card` | コンテンツをグループ化するカードコンテナ |
| `ChatBubble` | チャットUI向けメッセージバブル（user/assistant切り替え） |
| `Checkbox` | チェックボックス入力 |
| `Divider` | セクション区切り線 |
| `Input` | テキスト入力フィールド |
| `Modal` | オーバーレイモーダルダイアログ |
| `Progress` | プログレスバー・ローディングインジケーター |
| `RadioGroup` | ラジオボタングループ |
| `Select` | ドロップダウン選択 |
| `Skeleton` | ローディング中のスケルトンプレースホルダー |
| `Switch` | トグルスイッチ |
| `Tabs` | タブナビゲーション |
| `Textarea` | 複数行テキスト入力 |
| `ThinkingDots` | AIの思考中を示すアニメーションドット |
| `Toast` | トースト通知 |
| `Tooltip` | ホバー時ツールチップ |
| `Typography` | テキスト表示（見出し・本文・キャプションなど） |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.0+

### Install

```bash
git clone <repo>
cd design-system
bun install
```

### Development

```bash
bun run storybook       # Storybook を :6006 で起動
bun run tokens:build    # CSS変数を再ビルド
bun run build           # 全パッケージをビルド
bun run lint            # Biome でlint
bun run typecheck       # TypeScript型チェック
```

## Usage

### Components

```tsx
import { Button, ChatBubble, ThinkingDots } from "@ai-ds/components";

// 通常ボタン
<Button variant="primary">送信</Button>

// AI特化ボタン（紫アクセント）
<Button variant="ai" loading={isGenerating}>生成する</Button>

// AIチャットUI
<ChatBubble role="assistant">回答を生成しています...</ChatBubble>
<ThinkingDots />
```

### Design Tokens

```ts
import { tokens } from "@ai-ds/tokens";

tokens.colors.purple[600]     // "#9333ea" — AIアクセントカラー
tokens.spacing[4]             // "1rem"
tokens.fontSize.lg            // "1.125rem"
tokens.duration.normal        // "200ms"
```

CSS変数としても使用可能：

```css
.button {
  background: var(--color-primary-default);
  color: var(--color-primary-foreground);
  border-radius: var(--radius-md);
}
```

## MCP Server

Claude / Cursor などのAIツールからコンポーネント情報を参照できる。

### Setup (Claude Code)

`~/.claude/settings.json` に追加：

```json
{
  "mcpServers": {
    "ai-design-system": {
      "command": "bun",
      "args": ["run", "/path/to/packages/mcp-server/src/index.ts"]
    }
  }
}
```

### Available Tools

| Tool | Description |
|---|---|
| `list_components` | 全コンポーネント一覧を取得 |
| `get_component` | コンポーネントのprops・使用例を取得 |
| `get_tokens` | デザイントークンカテゴリを取得 |
| `get_token_value` | 特定トークンの値を取得 |

## Figma Code Connect

FigmaコンポーネントとReactコードを紐付けるCode Connectファイルが `figma/` に含まれている。

```bash
bun run figma:validate   # 接続を検証（dry-run）
bun run figma:publish    # Figmaへ公開
```

Figmaトークンのエクスポート：

```bash
bun run tokens:figma     # Figma変数形式でトークンをエクスポート
```

## Design Token Architecture

```
packages/tokens/src/
├── colors.ts       # プリミティブカラー + セマンティックカラー
├── typography.ts   # フォントサイズ・ウェイト・行高
├── spacing.ts      # スペーシング・ボーダー半径
├── shadows.ts      # ボックスシャドウ
├── animation.ts    # duration・easing
└── zIndex.ts       # z-indexスケール
```

CSS変数は `packages/tokens/scripts/build-css.ts` で自動生成される。命名規則は `--color-{category}-{state}`（例：`--color-primary-default`）。

## AI Variant

AIネイティブなインタラクション向けに `variant="ai"` が用意されている。紫アクセント（`#9333ea`）が適用される。

```tsx
<Button variant="ai">AIで生成</Button>
<Badge variant="ai">AI</Badge>
```

## Tech Stack

- **Monorepo**: bun workspaces + Turborepo
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4 + CSS変数
- **Lint / Format**: Biome
- **Storybook**: v8 (`@storybook/react-vite`)
- **Figma**: `@figma/code-connect`
