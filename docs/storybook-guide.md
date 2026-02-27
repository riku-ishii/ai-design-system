# Storybook 使い方ガイド

## Storybookとは

Storybookは、UIコンポーネントを**単体で表示・操作できるツール**です。アプリケーション全体を起動しなくても、ボタンやフォームなどのパーツを一つずつ確認できます。

Storybookでできること：

- コンポーネントの見た目を一覧で確認する
- プロパティ（色、サイズなど）をリアルタイムで変更して試す
- 各コンポーネントのドキュメントを読む
- デザインの一貫性をチェックする

---

## 起動方法

プロジェクトのルートディレクトリで以下のコマンドを実行します。

```bash
# bunのパスを通す（初回のみ）
export PATH="$HOME/.bun/bin:$PATH"

# Storybookを起動する
bun run storybook
```

起動するとブラウザが自動で開き、`http://localhost:6006` で表示されます。

> もしブラウザが開かない場合は、手動で `http://localhost:6006` にアクセスしてください。

---

## 画面の見方

Storybookの画面は大きく4つのエリアに分かれています。

### サイドバー（左側）

コンポーネントの一覧がツリー形式で表示されます。フォルダのように階層構造になっていて、クリックするとそのコンポーネントのStoryが表示されます。

例：`Components > Button > Primary` をクリックすると、Primaryバリアントのボタンが表示されます。

### Canvas（中央エリア）

選択したコンポーネントが実際にレンダリングされる場所です。ここでコンポーネントの見た目を確認できます。

### Controls（下部パネル）

コンポーネントのプロパティをGUIで変更できます。例えば、ボタンの `variant` を「primary」から「ai」に切り替えたり、`size` を変更したりできます。変更は即座にCanvasに反映されます。

### Docs（タブ）

Canvasタブの横にある「Docs」タブをクリックすると、そのコンポーネントの自動生成ドキュメントが表示されます。プロパティの一覧、型情報、全Storyのプレビューがまとまっています。

---

## コンポーネントを確認する方法

1. 左のサイドバーからコンポーネントを選ぶ（例：`Components > Button`）
2. Storyを選ぶ（例：`Primary`、`AI`、`AllVariants` など）
3. Canvasでコンポーネントの見た目を確認する
4. 下部のControlsパネルでプロパティを変更して、見た目の変化を確認する
5. 「Docs」タブに切り替えると、全バリアントの一覧やプロパティ表が見られる

---

## Storiesファイルとは

Storiesファイルは、コンポーネントの「表示パターン」を定義するファイルです。一つのコンポーネントに対して、さまざまな状態（バリアント、サイズ、ローディング中など）を定義しておくことで、Storybook上で簡単に確認できるようになります。

Storiesファイルは `apps/storybook/src/stories/` ディレクトリに置かれ、`*.stories.tsx` という名前になっています。

### Storiesファイルの構造

以下はButtonコンポーネントのStoriesファイルの例です。

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ai-ds/components";

// コンポーネントのメタ情報（タイトル、設定など）
const meta = {
  title: "Components/Button",        // サイドバーに表示される名前
  component: Button,                  // 対象のコンポーネント
  parameters: {
    layout: "centered",               // 表示レイアウト
  },
  tags: ["autodocs"],                 // 自動ドキュメント生成を有効にする
  argTypes: {
    variant: {
      control: "select",              // ドロップダウンで選べるようにする
      options: ["primary", "secondary", "ghost", "destructive", "ai"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 各Story（表示パターン）を定義
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Save changes",
  },
};

export const AI: Story = {
  args: {
    variant: "ai",
    children: "Generate with AI",
  },
};

// 複数のコンポーネントを並べて表示するStory
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ai">AI Action</Button>
    </div>
  ),
};
```

### 主要な要素

| 要素 | 説明 |
|------|------|
| `title` | サイドバーの表示名。`/` で区切ると階層になる |
| `component` | ドキュメント生成に使われるコンポーネント |
| `tags: ["autodocs"]` | Docsタブの自動生成を有効にする |
| `argTypes` | Controlsパネルの操作方法を定義する |
| `args` | そのStoryで使うプロパティの初期値 |
| `render` | カスタムレンダリング（複数並べたい場合など） |

---

## 新しいStoriesを追加する手順

例として、新しく `Card` コンポーネントのStoriesを追加する手順を示します。

### 1. Storiesファイルを作成する

`apps/storybook/src/stories/` に `Card.stories.tsx` を作成します。

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@ai-ds/components";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "カードの中身がここに入ります",
  },
};
```

### 2. Storybookを起動して確認する

```bash
bun run storybook
```

サイドバーの `Components > Card` に新しいStoryが表示されます。

### 3. 必要に応じてStoryを追加する

さまざまな状態やバリアントのStoryを追加していきます。

---

## よくある使い方パターン

### デザインレビュー

1. Storybookを起動する
2. レビュー対象のコンポーネントを選ぶ
3. Controlsパネルでさまざまなプロパティを試す
4. Docsタブで全バリアントを確認する

### 新しいコンポーネントの開発

1. コンポーネントを `packages/components` に作成する
2. Storiesファイルを `apps/storybook/src/stories/` に追加する
3. Storybookで見た目を確認しながら開発を進める

### 全コンポーネントの一覧確認

1. Storybookを起動する
2. サイドバーで全コンポーネントを展開する
3. 各コンポーネントの「Docs」タブを確認する

### プロパティの仕様確認

1. 対象コンポーネントの「Docs」タブを開く
2. ページ下部のプロパティテーブルで型やデフォルト値を確認する
