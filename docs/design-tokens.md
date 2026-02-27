# デザイントークン ガイド

## デザイントークンとは

デザイントークンとは、色・フォントサイズ・余白などのデザイン上の値に**名前を付けて一元管理する仕組み**です。

たとえば、ボタンの背景色を「青」と決めたとき、「`#2563eb`」という色コードを直接使うのではなく、「`primary-default`」という名前を付けて管理します。こうすることで、もしブランドカラーを変えたいときに、1箇所を変えるだけですべてのボタンの色が一斉に変わります。

**デザイナーにとってのメリット:**
- Figma上のスタイルと実装の値が一致する
- 「この青は何の青？」という議論がなくなる
- 変更の影響範囲を正確に把握できる

---

## カラートークン

### プリミティブカラー（基本パレット）

プリミティブカラーは「生の色」です。通常はこれを直接使わず、セマンティックカラー（後述）を通じて使います。

#### Gray（グレー系）

| トークン名 | 値 | 見た目 | 用途の目安 |
|---|---|---|---|
| `gray.0` | `#ffffff` | 白 | 背景 |
| `gray.50` | `#f9fafb` | とても薄いグレー | 微妙な背景の区別 |
| `gray.100` | `#f3f4f6` | 薄いグレー | ミュート背景 |
| `gray.200` | `#e5e7eb` | 明るいグレー | ボーダー |
| `gray.300` | `#d1d5db` | グレー | 強いボーダー |
| `gray.400` | `#9ca3af` | 中間グレー | ミュートテキスト |
| `gray.500` | `#6b7280` | やや濃いグレー | 補助テキスト |
| `gray.600` | `#4b5563` | 濃いグレー | サブテキスト |
| `gray.700` | `#374151` | かなり濃いグレー | - |
| `gray.800` | `#1f2937` | 非常に濃いグレー | - |
| `gray.900` | `#111827` | ほぼ黒 | メインテキスト |
| `gray.950` | `#030712` | 限りなく黒 | - |
| `gray.1000` | `#000000` | 黒 | - |

#### Blue（ブルー系 -- プライマリカラー）

| トークン名 | 値 | 用途の目安 |
|---|---|---|
| `blue.50` | `#eff6ff` | プライマリの薄い背景 |
| `blue.100` | `#dbeafe` | - |
| `blue.200` | `#bfdbfe` | - |
| `blue.300` | `#93c5fd` | - |
| `blue.400` | `#60a5fa` | - |
| `blue.500` | `#3b82f6` | - |
| `blue.600` | `#2563eb` | プライマリの標準色 |
| `blue.700` | `#1d4ed8` | プライマリのhover |
| `blue.800` | `#1e40af` | プライマリのactive |
| `blue.900` | `#1e3a8a` | - |
| `blue.950` | `#172554` | - |

#### Green（グリーン系 -- 成功）

| トークン名 | 値 | 用途の目安 |
|---|---|---|
| `green.50` | `#f0fdf4` | 成功の薄い背景 |
| `green.600` | `#16a34a` | 成功の標準色 |

#### Red（レッド系 -- エラー）

| トークン名 | 値 | 用途の目安 |
|---|---|---|
| `red.50` | `#fef2f2` | エラーの薄い背景 |
| `red.600` | `#dc2626` | エラーの標準色 |

#### Yellow（イエロー系 -- 警告）

| トークン名 | 値 | 用途の目安 |
|---|---|---|
| `yellow.50` | `#fefce8` | 警告の薄い背景 |
| `yellow.500` | `#eab308` | 警告の標準色 |

#### Purple（パープル系 -- AI）

| トークン名 | 値 | 用途の目安 |
|---|---|---|
| `purple.50` | `#faf5ff` | AIの薄い背景 |
| `purple.400` | `#c084fc` | AIのアクセント |
| `purple.600` | `#9333ea` | AIの標準色 |

---

### セマンティックカラー（用途別カラー）

セマンティックカラーは「この色は何のために使うか」を名前で表したものです。**コンポーネントではセマンティックカラーを使ってください。** プリミティブカラーを直接使うのは避けましょう。

#### 背景色（Background）

| トークン名 | 実際の色 | 用途 |
|---|---|---|
| `background.default` | `#ffffff`（白） | ページやカードの標準背景 |
| `background.subtle` | `#f9fafb`（とても薄いグレー） | セクションの区別、hover時の背景 |
| `background.muted` | `#f3f4f6`（薄いグレー） | 無効状態の背景、Badge のデフォルト背景 |
| `background.inverted` | `#111827`（ほぼ黒） | 反転背景（ダーク） |

#### 文字色（Foreground）

| トークン名 | 実際の色 | 用途 |
|---|---|---|
| `foreground.default` | `#111827`（ほぼ黒） | メインの文字色 |
| `foreground.subtle` | `#4b5563`（濃いグレー） | 補助テキスト、ヒント |
| `foreground.muted` | `#9ca3af`（中間グレー） | プレースホルダー、無効テキスト |
| `foreground.inverted` | `#ffffff`（白） | 暗い背景上の文字 |

#### ボーダー（Border）

| トークン名 | 実際の色 | 用途 |
|---|---|---|
| `border.default` | `#e5e7eb` | 標準のボーダー |
| `border.subtle` | `#f3f4f6` | 控えめなボーダー |
| `border.strong` | `#d1d5db` | 強調したいボーダー |

#### プライマリ（Primary）

| トークン名 | 実際の色 | 用途 |
|---|---|---|
| `primary.default` | `#2563eb`（青） | ボタンやリンクの標準色 |
| `primary.hover` | `#1d4ed8`（濃い青） | hover時 |
| `primary.active` | `#1e40af`（さらに濃い青） | クリック時 |
| `primary.subtle` | `#eff6ff`（薄い青） | 薄い背景 |
| `primary.foreground` | `#ffffff`（白） | プライマリ背景上の文字色 |

#### 成功（Success）

| トークン名 | 実際の色 | 用途 |
|---|---|---|
| `success.default` | `#16a34a`（緑） | 成功状態の表示 |
| `success.subtle` | `#f0fdf4`（薄い緑） | 成功メッセージの背景 |
| `success.foreground` | `#ffffff`（白） | 成功背景上の文字色 |

#### エラー（Error）

| トークン名 | 実際の色 | 用途 |
|---|---|---|
| `error.default` | `#dc2626`（赤） | エラー状態の表示 |
| `error.subtle` | `#fef2f2`（薄い赤） | エラーメッセージの背景 |
| `error.foreground` | `#ffffff`（白） | エラー背景上の文字色 |

#### 警告（Warning）

| トークン名 | 実際の色 | 用途 |
|---|---|---|
| `warning.default` | `#eab308`（黄） | 警告状態の表示 |
| `warning.subtle` | `#fefce8`（薄い黄） | 警告メッセージの背景 |
| `warning.foreground` | `#111827`（黒） | 警告背景上の文字色（黄色は明るいため黒文字） |

#### AI

| トークン名 | 実際の色 | 用途 |
|---|---|---|
| `ai.default` | `#9333ea`（紫） | AI関連要素の標準色 |
| `ai.subtle` | `#faf5ff`（薄い紫） | AI関連要素の背景 |
| `ai.foreground` | `#ffffff`（白） | AI背景上の文字色 |
| `ai.accent` | `#c084fc`（明るい紫） | AIのグロウエフェクトなど |

---

## タイポグラフィトークン

### フォントファミリー

| トークン名 | 値 | 用途 |
|---|---|---|
| `fontFamily.sans` | Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif | 本文・UIテキスト全般 |
| `fontFamily.mono` | JetBrains Mono, Fira Code, Consolas, monospace | コードブロック・技術的な数値 |

### フォントサイズ

| トークン名 | 値 | ピクセル換算 | 用途の目安 |
|---|---|---|---|
| `fontSize.xs` | 0.75rem | 12px | キャプション、Badge内テキスト |
| `fontSize.sm` | 0.875rem | 14px | 補助テキスト、ラベル、Input内テキスト |
| `fontSize.base` | 1rem | 16px | 本文、ボタン（md） |
| `fontSize.lg` | 1.125rem | 18px | ボタン（lg）、小見出し |
| `fontSize.xl` | 1.25rem | 20px | セクション見出し |
| `fontSize.2xl` | 1.5rem | 24px | ページ見出し |
| `fontSize.3xl` | 1.875rem | 30px | 大見出し |
| `fontSize.4xl` | 2.25rem | 36px | ヒーロー見出し |
| `fontSize.5xl` | 3rem | 48px | 特大見出し |

### フォントウェイト

| トークン名 | 値 | 用途 |
|---|---|---|
| `fontWeight.regular` | 400 | 本文テキスト |
| `fontWeight.medium` | 500 | ボタンラベル、ラベル |
| `fontWeight.semibold` | 600 | 見出し |
| `fontWeight.bold` | 700 | 強調見出し |

### 行間（Line Height）

| トークン名 | 値 | 用途 |
|---|---|---|
| `lineHeight.tight` | 1.25 | 見出し |
| `lineHeight.snug` | 1.375 | 短い本文 |
| `lineHeight.normal` | 1.5 | 標準の本文 |
| `lineHeight.relaxed` | 1.625 | ゆったりした本文 |
| `lineHeight.loose` | 2 | 広い行間が必要な場合 |

### 字間（Letter Spacing）

| トークン名 | 値 | 用途 |
|---|---|---|
| `letterSpacing.tight` | -0.025em | 大きな見出し |
| `letterSpacing.normal` | 0em | 標準 |
| `letterSpacing.wide` | 0.025em | 大文字テキスト |
| `letterSpacing.wider` | 0.05em | ラベル（全角大文字） |

---

## スペーシングトークン

スペーシングは**4pxを基本単位**としています。トークン名の数字に4を掛けるとピクセル値になります（例: `spacing.4` = 16px）。

| トークン名 | 値 | 用途の目安 |
|---|---|---|
| `spacing.0` | 0px | なし |
| `spacing.0.5` | 2px | 極小の微調整 |
| `spacing.1` | 4px | アイコンとテキストの間 |
| `spacing.1.5` | 6px | ラベルとInputの間 |
| `spacing.2` | 8px | 小さな内側余白 |
| `spacing.2.5` | 10px | - |
| `spacing.3` | 12px | Badge の内側余白 |
| `spacing.4` | 16px | 標準の内側余白、セクション間 |
| `spacing.5` | 20px | - |
| `spacing.6` | 24px | カード内の余白 |
| `spacing.8` | 32px | セクション間のスペース |
| `spacing.10` | 40px | 大きなセクション間 |
| `spacing.12` | 48px | ページセクション間 |
| `spacing.16` | 64px | 大きなレイアウト間 |
| `spacing.20` | 80px | ヒーローセクション |
| `spacing.24` | 96px | ページ上下の余白 |

### 角丸（Border Radius）

| トークン名 | 値 | 用途 |
|---|---|---|
| `borderRadius.none` | 0px | 角丸なし |
| `borderRadius.sm` | 4px | 小さい要素 |
| `borderRadius.md` | 6px | ボタン、Input（標準） |
| `borderRadius.lg` | 8px | カード |
| `borderRadius.xl` | 12px | モーダル |
| `borderRadius.2xl` | 16px | 大きなコンテナ |
| `borderRadius.3xl` | 24px | 装飾的な要素 |
| `borderRadius.full` | 9999px | Badge、アバター（円形） |

### シャドウ（影）

| トークン名 | 用途 |
|---|---|
| `shadows.none` | 影なし |
| `shadows.xs` | 極小の影（微妙な浮き感） |
| `shadows.sm` | 小さい影（カードなど） |
| `shadows.md` | 中程度の影（ドロップダウン） |
| `shadows.lg` | 大きい影（モーダル） |
| `shadows.xl` | 特大の影（フローティング要素） |
| `shadows.2xl` | 最大の影（ポップアップ） |
| `shadows.inner` | 内側の影（凹んだ見た目） |

---

## 新しいトークンを追加するときの手順

1. **本当に必要か確認する**: 既存のトークンで代用できないか確認してください
2. **カテゴリを決める**: color / typography / spacing / shadow のどれに該当するか
3. **命名ルールに従って名前を付ける**（下記参照）
4. **対応するトークンファイルに追加する**: `packages/tokens/src/` 内の該当ファイルを編集
   - このファイル群はコードで書かれていますが、色の値や数値を追加するだけなので、デザイナーでも理解しやすい構造になっています
5. **セマンティックカラーの場合**: `semanticColors` オブジェクトにも用途別のエイリアスを追加する
6. **チームでレビュー**: 追加理由と使用箇所をPRで説明する

---

## トークンの命名ルール

### 基本ルール

- **英語の小文字**で記述する（例: `primary`, `default`）
- **キャメルケース不可**: 2語以上の場合は `.`（ドット）で区切る（例: `background.default`）
- **具体的な色名を避ける**: `blueButton` ではなく `primary.default` のように用途ベースで命名する

### プリミティブカラーの命名

```
{色名}.{番号}
```

- 色名: `gray`, `blue`, `green`, `red`, `yellow`, `purple`
- 番号: `50` から `950` の範囲で、50刻み。数字が大きいほど濃い

（このコードは「色名と番号の組み合わせでパレット内の位置を表す」ことを意味します）

### セマンティックカラーの命名

```
{カテゴリ}.{バリエーション}
```

- カテゴリ: `background`, `foreground`, `border`, `primary`, `success`, `error`, `warning`, `ai`
- バリエーション:
  - `default` -- 標準の色
  - `hover` -- マウスオーバー時
  - `active` -- クリック時
  - `subtle` -- 薄い背景用
  - `foreground` -- その色の上に載せる文字色

### スペーシングの命名

```
spacing.{倍率}
```

- 基本単位（4px）に対する倍率で命名（例: `spacing.4` = 4 x 4px = 16px）

### タイポグラフィの命名

```
{プロパティ}.{サイズ名}
```

- プロパティ: `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`
- サイズ名: `xs`, `sm`, `base`, `lg`, `xl`, `2xl` ...
