# Next.js移行のGit運用

## 目的

Next.js移行を小さくレビュー可能な単位へ分割し、`main`を公開可能な安定状態に保つ。

各作業ブランチでは目的、許可する変更、禁止事項、完了条件を明確にする。

技術的な移行内容は[Next.js移行計画](./nextjs-migration-plan.md)を参照する。

## ブランチ構成

`migration/nextjs`を移行作業の統合ブランチとする。

```text
main
└── migration/nextjs
    ├── docs/nextjs-migration-contract
    ├── chore/nextjs-foundation
    ├── refactor/nextjs-client-boundaries
    ├── feature/nextjs-home-routing
    ├── feature/nextjs-blog-routing
    ├── feature/nextjs-mdx
    ├── feature/nextjs-metadata
    ├── refactor/nextjs-assets
    ├── chore/remove-vite
    └── fix/nextjs-migration-regressions
```

各作業ブランチから`migration/nextjs`宛てにPRを出す。

全段階の完了後、`migration/nextjs`から`main`へ最終PRを出す。

## 基本フロー

1. 最新の`migration/nextjs`を取得する
2. `migration/nextjs`から作業ブランチを作成する
3. 定義された目的の変更だけを行う
4. lint、typecheck、build、対象機能を確認する
5. `migration/nextjs`宛てにPRを作成する
6. レビュー後にマージする
7. 次の作業ブランチを、更新後の`migration/nextjs`から作成する
8. 全段階完了後に`main`宛ての最終PRを作成する

原則として、前段階をマージしてから次のブランチを作成する。

未マージブランチから次のブランチを派生させるstacked PRは、依存関係とbase変更を明確に管理できる場合だけ使用する。

## 移行中にブログ記事を執筆する場合

Next.js移行中も、記事の執筆と公開は通常の`main`向け作業として継続する。

記事ブランチを`migration/nextjs`から作成すると、未完成の移行コードが記事PRへ混入するため、必ず最新の`main`から作成する。

```text
main
├── article/<slug> ──PR──> main
│                           │
│                           └── merge ──> migration/nextjs
└── migration/nextjs
```

### 記事の公開フロー

1. 最新の`main`から`article/<slug>`を作成する
2. 既存のMDX構造とfrontmatterに従って記事を執筆する
3. `main`宛てに記事PRを作成する
4. レビュー後、記事PRを`main`へマージする
5. 更新された`main`を`migration/nextjs`へmergeする
6. Next.js版でも記事一覧、記事詳細、関連記事、metadataを確認する

`main`から`migration/nextjs`への同期では、原則としてmergeを使用する。

```bash
git switch migration/nextjs
git merge main
```

同じ記事コミットを`migration/nextjs`へcherry-pickすると、コミットが重複し、最終的な`main`向けPRで競合や履歴の分かりにくさにつながるため避ける。

記事の同期は、記事PRが`main`へマージされるたびに行うか、移行作業の区切りで複数件をまとめて行う。同期後は、進行中の作業ブランチへ必要に応じて最新の`migration/nextjs`を取り込む。

### 下書き記事

長期間執筆する下書きも、最新の`main`から`article/<slug>`を作成する。

移行版で早めに検証する必要がある場合は、`status: "draft"`のまま記事PRを`main`へマージし、その後`migration/nextjs`へ同期する。公開判定が正しく機能していれば、記事ファイルをGit管理しながら公開ページ、静的ルート、sitemapには含めずに検証できる。

記事ブランチを長期間維持して`main`へマージしない場合、その記事は移行版の通常検証対象には含まれない。必要な場合だけ、記事ブランチ側へ最新の`main`を取り込んで競合を解消する。

### MDX移行中の制約

記事執筆を止めないため、MDX移行では次を守る。

- 既存のfrontmatterフィールドを維持する
- 記事の保存場所とMDX構造を可能な限り維持する
- 既存記事を一括で書き換えない
- 新旧実装が同じ記事ファイルを参照できる期間を設ける
- 途中で追加された記事も自動的に検出する
- 最新の`main`を同期し、追加記事をNext.js版で確認してからVite版を削除する

MDX形式の変更が避けられない場合は、`feature/nextjs-mdx`のマージ直前に限って短い記事更新の凍結期間を設ける。凍結の開始、対象、解除条件は事前に共有し、長期間の記事執筆停止は避ける。

### 記事同期時の禁止事項

- 記事ブランチを`migration/nextjs`から作成する
- 未完成のNext.js変更を記事PRへ含める
- 記事同期のために同じコミットをcherry-pickする
- 同期時の競合解消で記事本文や公開状態を意図せず変更する
- MDX移行の都合だけで新しいfrontmatterフィールドを追加する
- Next.js版で確認する前に、記事を読み込む旧実装を削除する

## 全ブランチ共通の禁止事項

- `main`へ直接コミットする
- `main`へ途中段階の移行コードをマージする
- PRの目的と無関係なリファクタリングを行う
- UIを意図せず変更する
- 記事本文や公開状態を依頼なく変更する
- package managerを変更する
- 不要なライブラリを追加する
- lint、型チェック、ビルドを無効化してエラーを隠す
- 秘密情報や生成物をコミットする
- force push、履歴改変、ブランチ削除などを明示的な依頼なしに行う

## 作業ブランチの責務

### `docs/nextjs-migration-contract`

目的：

- 移行方式、完了条件、回帰確認項目を文書化する
- 作業ブランチの責務を固定する

許可：

- 移行計画とチェックリストの追加・更新

禁止：

- アプリケーションコードの変更
- 依存関係や設定の変更
- UI変更
- 既存不具合の修正

完了条件：

- 方針、段階、対象外、検証方法が文書化されている

### `chore/nextjs-foundation`

目的：

- Next.jsが起動・ビルドできる最小基盤を追加する
- 後続の段階移行を可能にする

許可：

- Next.js依存関係の追加
- Next.js設定とApp Router入口の追加
- npm scripts、TypeScript、ESLint、`.gitignore`の調整
- 現在のSPAを一時表示するための最小限の変更

禁止：

- React Routerの本格的な置き換え
- MDX管理方法の再設計
- Metadata APIへの全面移行
- CSSやUIの変更
- Vite関連ファイルの削除
- `next/image`への移行

完了条件：

- Next.js上で既存ページを確認できる
- lint、typecheck、buildが成功する
- 意図しない表示差がない

### `refactor/nextjs-client-boundaries`

目的：

- SSRと互換性のないbrowser API依存を整理する
- Client Componentの境界を明確にする

許可：

- `"use client"`の追加
- browser APIを`useEffect`やイベント処理内へ移動
- Client Componentの分割
- hydration対策
- 移行を妨げるイベント処理の修正

禁止：

- ルート構造の変更
- MDX処理の変更
- デザイン変更
- 無関係なコンポーネントのClient Component化
- 状態管理ライブラリの追加

完了条件：

- SSR時にbrowser APIエラーがない
- hydration warningがない
- テーマ、resize、clipboard、drag、revealが動作する

### `feature/nextjs-home-routing`

目的：

- トップページと共通layoutをApp Routerへ移行する
- トップページ周辺からReact Router依存を除去する

許可：

- `app/page.tsx`と`app/layout.tsx`の実装
- HeaderとFooterの`next/link`対応
- hash navigationの調整

禁止：

- ブログ詳細ルートの移行
- MDXローダーの変更
- Metadataの全面移行
- UIの再設計
- React Routerパッケージの削除

完了条件：

- トップページがApp Routerで表示される
- HeaderとFooterのリンクが動作する
- `/#works`などへの直接アクセスが動作する

### `feature/nextjs-blog-routing`

目的：

- ブログ一覧、詳細、404をApp Routerへ移行する
- React Router依存を除去可能な状態にする

許可：

- `/blog`、`/blog/[slug]`、`not-found.tsx`の実装
- BlogCardとBlogPostLinkの`next/link`対応
- `params`、`generateStaticParams()`、`notFound()`の導入
- ルート生成に必要な最小限の記事取得処理

禁止：

- frontmatter仕様の変更
- 記事本文の変更
- draft/private記事の公開
- sitemapの変更
- デザイン変更
- React Router依存の削除作業まで含めること

完了条件：

- 一覧、詳細、関連記事リンクが動作する
- 公開記事だけがアクセス可能
- draft/private記事と未知のslugが404になる

### `feature/nextjs-mdx`

目的：

- Vite固有のMDX処理をNext.js向けへ移行する
- 記事データ取得を一元化する

許可：

- `@next/mdx`と必要なMDX依存関係の追加
- `mdx-components.tsx`の追加
- remark・rehype設定の移植
- frontmatterの型定義と検証
- 一覧、詳細、関連記事、静的ルートの共通化
- コードハイライトのコンパイル処理

禁止：

- 記事本文やfrontmatter値の一括修正
- metadataフィールドの追加
- CMSの導入
- 記事ディレクトリの大規模変更
- CSSの再設計
- SEO処理の全面変更

完了条件：

- 全公開MDXがビルドできる
- GFMとコードハイライトが維持される
- 記事内の`BlogPostLink`が動作する
- 不正なfrontmatterをビルド時に検出できる

### `feature/nextjs-metadata`

目的：

- HelmetとVite sitemapプラグインをMetadata APIへ移行する
- SEO出力を統一する

許可：

- `metadata`と`generateMetadata()`の実装
- `sitemap.ts`と`robots.ts`の実装
- favicon、OGP、Twitter Card、JSON-LDの移行
- canonical URLの定義
- sitemapの記事URL不整合の修正

禁止：

- ページ本文やUIの変更
- 記事内容やURL構造の変更
- SEOライブラリの追加
- OG画像の再制作

完了条件：

- ページごとのmetadataが正しい
- sitemapの記事URLが`/blog/<slug>`になる
- draft/private記事がSEO出力へ含まれない
- Helmetが不要になる

### `refactor/nextjs-assets`

目的：

- 画像とCSSの読み込みをNext.js向けに整理する
- Vite固有の`?inline`を除去する

許可：

- highlight.jsテーマの読み込み変更
- CSS import位置の整理
- 必要な範囲での`next/image`導入
- faviconなどのmetadata file convention対応
- 不足している`alt`の追加

禁止：

- UIデザイン変更
- CSS Modulesへの全面移行
- 全画像の一括変換や圧縮
- 画像ディレクトリの大規模変更
- CSSライブラリの追加

完了条件：

- light/dark両方でコードハイライトが表示される
- 画像とレイアウトが維持される
- Vite固有のasset importが残っていない

### `chore/remove-vite`

目的：

- 旧Vite構成と不要な依存関係を削除する
- CIとVercel設定をNext.js構成へ確定する

削除候補：

- `vite.config.ts`
- `index.html`
- `src/main.tsx`
- `src/vite-env.d.ts`
- `tsconfig.node.json`
- 旧sitemap build helper
- React Router、Helmet、Vite、Rollup関連依存
- VercelのSPA rewrite

禁止：

- 新機能追加
- UI変更
- MDX仕様変更
- 無関係な依存関係更新
- 既存記事の変更

完了条件：

- Vite、React Router、Helmetへの参照がない
- lint、typecheck、buildが成功する
- Vercel Previewで全ルートを確認できる
- 不要な旧ファイルが残っていない

### `fix/nextjs-migration-regressions`

必要な場合だけ作成する。

目的：

- 最終回帰確認で見つかった移行起因の問題を修正する

許可：

- 移行前後の意図しない差分修正
- hydration、metadata、accessibilityの回帰修正

禁止：

- 新機能追加
- デザイン改善
- 移行前から存在する無関係な問題の修正
- 大規模リファクタリング

完了条件：

- 記録された回帰問題が解消されている
- 全検証が成功する

## 既存不具合の扱い

次の条件に該当する問題だけを移行PR内で修正する。

- 修正しなければNext.jsでビルドできない
- 修正しなければ対象機能を検証できない
- 移行対象コードを変更する際に不可避である
- Next.js移行によって新たに発生した

それ以外の既存不具合は、原則として別の`fix/*`ブランチへ分離する。

移行PR内で既存不具合を修正した場合は、PRの「主な判断」に理由を記載する。

## PRテンプレート

```markdown
## 目的

このPRで達成すること。

## 対象範囲

- 変更する機能
- 変更する主要ファイル

## 対象外・禁止事項

- このPRでは行わないこと
- 後続PRへ送ること

## 主な判断

実装方法と、その方法を選んだ理由。

## 動作確認

- [ ] npm run lint
- [ ] npm run typecheck
- [ ] npm run build
- [ ] 対象ページの手動確認
- [ ] Vercel Preview確認

## 移行前との差分

意図した差分と、表示・挙動を維持した部分。

## 後続作業

次のブランチで対応する内容。
```

## `main`への最終PR

`migration/nextjs`から`main`への最終PRでは、個別実装の再レビューよりも以下を重点的に確認する。

- 全ページの回帰
- VercelのビルドとPreview
- 404と直接URLアクセス
- Desktop、Tablet、Mobile表示
- テーマ、hash navigation、各種browser API機能
- 公開・draft・private記事の露出
- title、description、OGP、sitemap、robots
- Vite、React Router、Helmetへの参照が残っていないこと

最終PRがマージされるまで、`main`は既存のVite版を公開可能な状態で維持する。
