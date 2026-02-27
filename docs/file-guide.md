# AI Design System - ファイルガイド

> プロジェクト内の全ファイルを「何をするファイルか」「誰が編集するか」「触っていいか」で分類しています。

---

## 触っていいファイル（デザイナー・デザインエンジニア向け）

これらのファイルは、デザインの値やコンポーネントの見た目を定義しています。デザイナーやデザインエンジニアが日常的に編集するファイルです。

### デザイントークン（デザインの値を定義するファイル）

| ファイル | 役割 | 編集する人 |
|---------|------|-----------|
| `packages/tokens/src/colors.ts` | 色のトークン定義。プリミティブカラー（gray, blue, green, red, yellow, purple の各段階）とセマンティックカラー（primary, error, success, warning, ai などの意味色） | デザイナー・デザインエンジニア |
| `packages/tokens/src/typography.ts` | タイポグラフィ（文字の見た目）の定義。フォントファミリー、フォントサイズ（xs〜5xl）、フォントウェイト（太さ）、行間、字間 | デザイナー・デザインエンジニア |
| `packages/tokens/src/spacing.ts` | 余白とボーダーラディウス（角の丸み）の定義。4px基準のスケール（0〜128px） | デザイナー・デザインエンジニア |
| `packages/tokens/src/shadows.ts` | 影（ドロップシャドウ）の定義。none, xs, sm, md, lg, xl, 2xl, inner の8段階 | デザイナー・デザインエンジニア |

### コンポーネント（UI部品のファイル）

| ファイル | 役割 | 編集する人 |
|---------|------|-----------|
| `packages/components/src/components/Button/Button.tsx` | ボタンコンポーネント。5つのバリエーション（primary, secondary, ghost, destructive, ai）と3つのサイズ（sm, md, lg）、ローディング状態に対応 | デザインエンジニア |
| `packages/components/src/components/Badge/Badge.tsx` | バッジコンポーネント。ステータスやカテゴリを示す小さなラベル。6つのバリエーション（default, success, error, warning, ai, outline） | デザインエンジニア |
| `packages/components/src/components/Input/Input.tsx` | テキスト入力欄コンポーネント。ラベル、エラーメッセージ、ヒントテキスト、左右のアドオン要素に対応 | デザインエンジニア |

### Storybook ストーリー（コンポーネントの使用例）

| ファイル | 役割 | 編集する人 |
|---------|------|-----------|
| `apps/storybook/src/stories/Button.stories.tsx` | Buttonコンポーネントの表示サンプル集。各バリエーション・サイズ・状態を定義 | デザインエンジニア |
| `apps/storybook/src/stories/Badge.stories.tsx` | Badgeコンポーネントの表示サンプル集 | デザインエンジニア |
| `apps/storybook/src/stories/Input.stories.tsx` | Inputコンポーネントの表示サンプル集 | デザインエンジニア |

### MCP サーバー - コンポーネント登録

| ファイル | 役割 | 編集する人 |
|---------|------|-----------|
| `packages/mcp-server/src/registry.ts` | AIが参照するコンポーネント情報の登録簿。新しいコンポーネントを追加したら、ここにも追加する必要がある | デザインエンジニア |

---

## 自動生成されるファイル（触らない）

これらのファイルはビルドコマンド実行時に自動で作られます。手で編集しても、次のビルドで上書きされるので意味がありません。

| ファイル・フォルダ | 生成元 | 説明 |
|------------------|--------|------|
| `packages/tokens/dist/` | `bun run build` | トークンのビルド出力（index.js, index.d.ts, tokens.css）。CSSカスタムプロパティもここに含まれる |
| `packages/components/dist/` | `bun run build` | コンポーネントのビルド出力（index.js, index.d.ts） |
| `node_modules/` | `bun install` | 外部ライブラリの保存場所。プロジェクト直下と各パッケージ内にある |
| `.turbo/` | `bun run build` | Turborepoのビルドキャッシュ（高速化のための一時データ） |
| `*.tsbuildinfo` | TypeScriptコンパイラ | TypeScriptの差分ビルド用キャッシュファイル |
| `storybook-static/` | `storybook build` | Storybookの静的ビルド出力（デプロイ用） |

---

## 設定ファイル（Tech Leadが管理）

これらのファイルはプロジェクトの動作を制御する設定です。基本的にTech Lead（テックリード）が管理します。変更が必要な場合はTech Leadに相談してください。

### プロジェクトルート（一番上の階層）

| ファイル | 役割 | 変更頻度 |
|---------|------|---------|
| `package.json` | プロジェクト全体の設定。ワークスペース（packages/*, apps/*）の定義、共通スクリプト、共通の開発依存ライブラリ | 低い（パッケージ構成変更時のみ） |
| `turbo.json` | Turborepoの設定。ビルドタスクの依存関係と出力先を定義 | ほとんど変わらない |
| `tsconfig.base.json` | TypeScriptの共通設定。全パッケージが継承する基本設定 | ほとんど変わらない |
| `biome.json` | Biome（コード整形・チェック）の設定。インデント幅、クォートスタイル、lint（品質チェック）ルール | 低い |
| `.gitignore` | Gitで管理しないファイルの一覧（node_modules, dist, .turbo, .env など） | ほとんど変わらない |
| `CLAUDE.md` | AIツール（Claude）への指示書。プロジェクトの概要、技術スタック、コマンド一覧を記載 | 機能追加時に更新 |
| `bun.lock` | bunが管理する依存ライブラリのバージョン固定ファイル（存在する場合） | 自動更新される |

### packages/tokens/（トークンパッケージ）

| ファイル | 役割 | 変更頻度 |
|---------|------|---------|
| `packages/tokens/package.json` | トークンパッケージの設定。名前（@ai-ds/tokens）、ビルドスクリプト、エクスポート先を定義 | 低い |
| `packages/tokens/tsconfig.json` | トークンパッケージ固有のTypeScript設定 | ほとんど変わらない |
| `packages/tokens/src/index.ts` | トークンの集約ファイル。各トークンファイル（colors, typography, spacing, shadows）をまとめて外部に公開する | トークンカテゴリ追加時のみ |
| `packages/tokens/scripts/build-css.ts` | トークンからCSSカスタムプロパティファイルを生成するスクリプト | ほとんど変わらない |

### packages/components/（コンポーネントパッケージ）

| ファイル | 役割 | 変更頻度 |
|---------|------|---------|
| `packages/components/package.json` | コンポーネントパッケージの設定。名前（@ai-ds/components）、依存関係（@ai-ds/tokens, react）を定義 | 低い |
| `packages/components/tsconfig.json` | コンポーネントパッケージ固有のTypeScript設定 | ほとんど変わらない |
| `packages/components/src/index.ts` | コンポーネントの集約ファイル。全コンポーネントをまとめて外部に公開する。新しいコンポーネント追加時にここにも追記が必要 | コンポーネント追加時 |
| `packages/components/src/components/Button/index.ts` | Buttonコンポーネントの再エクスポート用ファイル | ほとんど変わらない |
| `packages/components/src/components/Badge/index.ts` | Badgeコンポーネントの再エクスポート用ファイル | ほとんど変わらない |
| `packages/components/src/components/Input/index.ts` | Inputコンポーネントの再エクスポート用ファイル | ほとんど変わらない |
| `packages/components/src/utils/cn.ts` | CSSクラス名を結合するユーティリティ関数 | ほとんど変わらない |

### packages/mcp-server/（MCPサーバーパッケージ）

| ファイル | 役割 | 変更頻度 |
|---------|------|---------|
| `packages/mcp-server/tsconfig.json` | MCPサーバーのTypeScript設定 | ほとんど変わらない |
| `packages/mcp-server/src/index.ts` | MCPサーバーのメインファイル。AIツールに公開する4つのツール（list_components, get_component, get_tokens, get_token_value）を定義 | ツール追加時のみ |

### apps/storybook/（Storybookアプリ）

| ファイル | 役割 | 変更頻度 |
|---------|------|---------|
| `apps/storybook/package.json` | Storybookの設定。依存ライブラリ（Storybook v8, React, Vite）を定義 | 低い |
| `apps/storybook/.storybook/main.ts` | Storybookの基本設定。ストーリーファイルの場所、アドオン（拡張機能）、フレームワーク設定 | 低い |
| `apps/storybook/.storybook/preview.ts` | Storybookのプレビュー設定。全ストーリーに適用されるグローバル設定 | 低い |
| `apps/storybook/.storybook/global.css` | Storybookのグローバルスタイル。トークンCSSのインポートやベーススタイルの適用 | 低い |

---

## 新しいコンポーネントを追加するときに編集するファイル一覧

新しいコンポーネント（例: Card）を追加する場合、以下のファイルを作成・編集する必要があります:

| 手順 | ファイル | 作業内容 |
|------|---------|---------|
| 1 | `packages/components/src/components/Card/Card.tsx` | **新規作成**: コンポーネント本体 |
| 2 | `packages/components/src/components/Card/index.ts` | **新規作成**: 再エクスポート用 |
| 3 | `packages/components/src/index.ts` | **追記**: `export * from "./components/Card"` を追加 |
| 4 | `packages/mcp-server/src/registry.ts` | **追記**: コンポーネント情報をレジストリに追加 |
| 5 | `apps/storybook/src/stories/Card.stories.tsx` | **新規作成**: Storybookストーリー |

---

## ファイル構成の全体図

```
ai-design-system/
├── package.json                          [設定] プロジェクト全体
├── turbo.json                            [設定] ビルドツール
├── tsconfig.base.json                    [設定] TypeScript共通
├── biome.json                            [設定] コード整形
├── .gitignore                            [設定] Git除外リスト
├── CLAUDE.md                             [設定] AI指示書
│
├── packages/
│   ├── tokens/                           --- デザインの値 ---
│   │   ├── package.json                  [設定]
│   │   ├── tsconfig.json                 [設定]
│   │   ├── src/
│   │   │   ├── index.ts                  [設定] 集約ファイル
│   │   │   ├── colors.ts                 [編集OK] 色の定義
│   │   │   ├── typography.ts             [編集OK] 文字の定義
│   │   │   ├── spacing.ts               [編集OK] 余白の定義
│   │   │   └── shadows.ts               [編集OK] 影の定義
│   │   └── scripts/
│   │       └── build-css.ts              [設定] CSS生成スクリプト
│   │
│   ├── components/                       --- UI部品 ---
│   │   ├── package.json                  [設定]
│   │   ├── tsconfig.json                 [設定]
│   │   └── src/
│   │       ├── index.ts                  [設定] 集約ファイル
│   │       ├── utils/
│   │       │   └── cn.ts                 [設定] ユーティリティ
│   │       └── components/
│   │           ├── Button/
│   │           │   ├── Button.tsx         [編集OK] ボタン部品
│   │           │   └── index.ts          [設定]
│   │           ├── Badge/
│   │           │   ├── Badge.tsx          [編集OK] バッジ部品
│   │           │   └── index.ts          [設定]
│   │           └── Input/
│   │               ├── Input.tsx          [編集OK] 入力欄部品
│   │               └── index.ts          [設定]
│   │
│   └── mcp-server/                       --- AI連携 ---
│       ├── tsconfig.json                 [設定]
│       └── src/
│           ├── index.ts                  [設定] サーバー本体
│           └── registry.ts              [編集OK] コンポーネント登録
│
└── apps/
    └── storybook/                        --- カタログサイト ---
        ├── package.json                  [設定]
        ├── .storybook/
        │   ├── main.ts                   [設定]
        │   ├── preview.ts                [設定]
        │   └── global.css                [設定]
        └── src/
            └── stories/
                ├── Button.stories.tsx     [編集OK] ボタンのサンプル
                ├── Badge.stories.tsx      [編集OK] バッジのサンプル
                └── Input.stories.tsx      [編集OK] 入力欄のサンプル
```

**凡例:**
- `[編集OK]` = デザイナー・デザインエンジニアが編集するファイル
- `[設定]` = Tech Leadが管理するファイル（変更が必要な場合は相談）
