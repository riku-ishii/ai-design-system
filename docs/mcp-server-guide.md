# MCP サーバー使い方ガイド

## MCPサーバーとは

MCP（Model Context Protocol）サーバーは、**AIツールにデザインシステムの情報を教えるための仕組み**です。

通常、AIツール（Claude、Cursorなど）はプロジェクトのデザインシステムについて知りません。MCPサーバーを登録すると、AIが以下のことをできるようになります：

- どんなコンポーネントがあるかを知る
- 各コンポーネントの使い方（プロパティ、コード例）を知る
- デザイントークン（色、余白、フォントサイズなど）の値を知る

つまり、**AIがデザインシステムの仕様書を直接読めるようになる**仕組みです。

---

## AIツールへの登録方法

### Claude Codeへの登録

`~/.claude/settings.json` を開き、`mcpServers` に以下を追加します。

```json
{
  "mcpServers": {
    "ai-design-system": {
      "command": "bun",
      "args": ["run", "/Users/rikuchan/design system/packages/mcp-server/src/index.ts"]
    }
  }
}
```

> `args` のパスは、プロジェクトの実際の場所に合わせて変更してください。

設定後、Claude Codeを再起動するとMCPサーバーが使えるようになります。

### Cursorへの登録

プロジェクトのルートに `.cursor/mcp.json` を作成（または編集）し、以下を記述します。

```json
{
  "mcpServers": {
    "ai-design-system": {
      "command": "bun",
      "args": ["run", "/Users/rikuchan/design system/packages/mcp-server/src/index.ts"]
    }
  }
}
```

設定後、Cursorを再起動するとMCPサーバーが認識されます。

---

## 使えるツール一覧

MCPサーバーには4つのツールが用意されています。AIツールがこれらを自動で呼び出してデザインシステムの情報を取得します。

### list_components

**コンポーネント一覧を取得する**

デザインシステムに登録されているコンポーネントの名前、説明、バリアント一覧を返します。

- パラメータ：なし
- 戻り値：コンポーネント名、説明文、バリアント一覧のリスト

現在登録されているコンポーネント：
- **Button** - アクションを実行するためのボタン（primary, secondary, ghost, destructive, ai）
- **Badge** - ステータスやカテゴリを表示するラベル（default, success, error, warning, ai, outline）
- **Input** - テキスト入力フィールド

### get_component

**特定のコンポーネントの詳細情報を取得する**

指定したコンポーネントのプロパティ一覧、型情報、使い方のコード例を返します。

- パラメータ：`name`（コンポーネント名。例：`Button`、`Badge`、`Input`）
- 戻り値：コンポーネントの全プロパティ、型、デフォルト値、コード例

### get_tokens

**デザイントークンをカテゴリ別に取得する**

色、余白、フォント、影などのデザイントークンを返します。

- パラメータ：`category`（以下のいずれか）
  - `colors` - 基本カラーパレット
  - `semanticColors` - 用途別の色（primary、successなど）
  - `spacing` - 余白・間隔の値
  - `typography` - フォントサイズ、行間、太さ
  - `shadows` - 影の定義
  - `all` - 全カテゴリをまとめて取得
- 戻り値：指定カテゴリのトークン一覧（名前と値のペア）

### get_token_value

**特定のデザイントークンの値を取得する**

ドット区切りのパスで指定したトークンの値を返します。

- パラメータ：`path`（トークンのパス。例：`semanticColors.primary.default`）
- 戻り値：そのトークンの値（例：`#9333ea`）

パスの例：
- `semanticColors.primary.default` - プライマリカラー
- `spacing.4` - 余白（16pxなど）
- `typography.fontSize.lg` - 大きいフォントサイズ

---

## AIツールでの活用例

MCPサーバーを登録したAIツールでは、以下のようなプロンプトが使えるようになります。

### コンポーネントの使い方を聞く

```
デザインシステムのButtonコンポーネントの使い方を教えて。
AIアクション用のボタンはどう書けばいい？
```

AIが `get_component` ツールを呼び出し、Buttonの全プロパティとコード例を含めて回答します。

### コンポーネント一覧を確認する

```
このデザインシステムにはどんなコンポーネントがある？
```

AIが `list_components` ツールを呼び出し、利用可能なコンポーネントの一覧を返します。

### デザイントークンを調べる

```
プライマリカラーの色コードを教えて。
デザインシステムの余白（spacing）の値を一覧で見せて。
```

AIが `get_tokens` や `get_token_value` を呼び出して具体的な値を回答します。

### コードを生成する

```
デザインシステムのコンポーネントを使って、ユーザー登録フォームを作って。
Badgeコンポーネントで「AI生成」ラベルを表示するコードを書いて。
```

AIがデザインシステムの仕様に沿ったコードを生成します。

---

## 新しいコンポーネントをMCPに登録する方法

新しいコンポーネントを作成したら、MCPサーバーにも登録して、AIツールが認識できるようにします。

### 1. レジストリファイルを編集する

`packages/mcp-server/src/registry.ts` を開き、`componentRegistry` 配列に新しいコンポーネントの情報を追加します。

```typescript
// registry.ts の componentRegistry 配列に追加
{
  name: "Card",
  description: "コンテンツをグループ化して表示するカード。",
  importPath: "@ai-ds/components",
  variants: ["default", "outlined"],
  props: [
    {
      name: "variant",
      type: "'default' | 'outlined'",
      required: false,
      default: "default",
      description: "カードのスタイル。",
    },
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "カードの中身。",
    },
  ],
  examples: [
    {
      title: "Basic card",
      code: `<Card>カードの内容</Card>`,
    },
  ],
},
```

### 2. 登録する情報の説明

| フィールド | 必須 | 説明 |
|-----------|------|------|
| `name` | はい | コンポーネント名（例：`Card`） |
| `description` | はい | コンポーネントの説明文 |
| `importPath` | はい | インポート元パッケージ（通常 `@ai-ds/components`） |
| `variants` | いいえ | バリアントの一覧 |
| `props` | はい | プロパティ情報の配列 |
| `examples` | はい | 使い方のコード例の配列 |

各 `props` には以下を記載します：

| フィールド | 必須 | 説明 |
|-----------|------|------|
| `name` | はい | プロパティ名 |
| `type` | はい | 型（TypeScriptの型表記） |
| `required` | はい | 必須かどうか（`true` / `false`） |
| `default` | いいえ | デフォルト値 |
| `description` | はい | 説明文 |

### 3. 動作確認

MCPサーバーの開発モードで動作確認ができます。

```bash
export PATH="$HOME/.bun/bin:$PATH"
cd packages/mcp-server
bun run dev
```

AIツールを再起動し、追加したコンポーネントの情報が取得できることを確認してください。
