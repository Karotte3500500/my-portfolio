# Next.js移行計画

## 目的

現在のVite + React SPAをNext.jsへ段階的に移行する。

移行中もレビュー可能な変更量を保ち、各段階でlint、型チェック、ビルド、対象機能の動作確認を行う。

## 現在の構成

- Vite + React 19 + TypeScript
- `react-router-dom`によるクライアントルーティング
- `react-helmet-async`によるmetadata管理
- `src/articles/blog/*.mdx`でブログ記事を管理
- `import.meta.glob()`でMDXを一括import
- Viteプラグインで`sitemap.xml`と`robots.txt`を生成
- 通常のグローバルCSSをコンポーネントからimport
- `public/images/`と`src/assets/`で画像を管理
- Vercelのrewriteで全リクエストを`index.html`へ転送

## 移行後の基本方針

- Next.js App Routerを使用する
- Vercelの通常のNext.jsデプロイを基本とする
- 初期移行では`output: "export"`に固定しない
- ページは可能な限りServer Componentとし、操作が必要な箇所だけClient Componentにする
- ブログ記事はビルド時に検証し、公開記事を静的生成する
- 記事一覧、詳細、関連記事、metadata、sitemapで共通の記事取得処理を使用する
- 初期移行では既存のUIとCSSを維持する
- CSS Modulesへの全面移行やデザイン変更は別作業とする

## 想定ルート

| 現在 | 移行後 |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/blog` | `src/app/blog/page.tsx` |
| `/blog/:slug` | `src/app/blog/[slug]/page.tsx` |
| 共通Layout | `src/app/layout.tsx` |
| `*` | `src/app/not-found.tsx` |

## 主要な変更対象

### ルーティング

- `react-router-dom`をApp Routerへ置き換える
- `Link`を`next/link`へ置き換える
- `useParams()`をページの`params`へ置き換える
- `useLocation()`への依存を`usePathname()`などへ置き換えるか、propsへ整理する
- `Outlet`をlayoutの`children`へ置き換える
- 不明な記事slugには`notFound()`を使用する

### ブログとMDX

- Vite固有の`import.meta.glob()`を廃止する
- `@next/mdx`を基本に既存のremark・rehype設定を移植する
- `mdx-components.tsx`を追加する
- frontmatterの型と実データを一致させる
- `status`が`public`の記事だけを一覧、静的ルート、metadata、sitemapへ含める
- `generateStaticParams()`で公開記事を事前生成する
- 記事内の`BlogPostLink`を維持する
- GFMとコードハイライトの表示を維持する

### MetadataとSEO

- `react-helmet-async`をMetadata APIへ置き換える
- 記事詳細では`generateMetadata()`を使用する
- `index.html`のfavicon、OGP、Twitter Card、JSON-LDを移行する
- `sitemap.ts`と`robots.ts`へ移行する
- sitemapの記事URLを`/blog/<slug>`に統一する
- draft/private記事をSEO出力に含めない

### 画像と静的ファイル

- `public/images/`は原則として維持する
- `src/assets/`のstatic importはNext.jsに合わせて調整する
- `<img>`から`next/image`への移行は必要性を画像ごとに判断する
- Vite固有のCSS `?inline` importを廃止する
- faviconなどはNext.jsのmetadata file conventionも検討する

### CSSとテーマ

- 初期移行では既存のグローバルCSSとクラス名を維持する
- グローバルCSSのimport位置をApp Routerに合わせて整理する
- `.dark`とCSS変数による既存テーマを維持する
- highlight.jsのlight/darkテーマ切り替え方法をNext.js向けに変更する
- hydration mismatchと初期表示のちらつきを確認する

### Browser API

次の処理はClient Component化または参照タイミングの変更が必要になる。

- `localStorage`によるテーマ保存
- `window.innerWidth`とresize listener
- `navigator.clipboard`
- `IntersectionObserver`
- `document.querySelectorAll()`、`document.getElementById()`
- `requestAnimationFrame()`
- Pointer EventsとDOM ref
- hash navigationとscroll処理

Browser APIはrender中に直接参照せず、必要に応じて`useEffect`やイベントハンドラー内で使用する。

## 移行リスク

### 高

- MDXのfrontmatter export方法が変わり、記事一覧やビルドが壊れる
- MDX内ReactコンポーネントがServer/Client Component境界に抵触する
- browser APIの直接参照によってSSRビルドが失敗する
- draft/private記事が意図せず公開される
- hash navigationとスクロールアニメーションの挙動が変わる
- テーマの初期表示でhydration mismatchが発生する

### 中

- React Routerから`next/link`への変換でリンク挙動が変わる
- コードハイライトのテーマ切り替えが変わる
- sitemap、robots、canonical、OGPの出力が変わる
- Client Componentの範囲が広がりすぎる
- `next/image`導入によって画像サイズやレイアウトが変わる

### 低

- 通常CSSの移植
- `public/images/`の継続利用
- 経歴、作品、スキルなどの静的データ移植
- 表示のみのコンポーネント移植

## 既存実装で確認された注意点

- sitemapの記事URLが`/<slug>`で、実際の`/blog/<slug>`と一致していない
- テーマのlocalStorageは読込キーと保存キーが一致していない
- `Hero`がrender時に`window.innerWidth`を参照している
- `Hero`のresize用`useEffect`に依存配列がない
- 一部にデバッグ用`console.log`が残っている
- `BlogCard`のタグ要素でReact keyが重複している
- `mdx.d.ts`のmetadata型に`status`がない
- `aria-valuenoe`という属性の誤記がある
- 一部画像に`alt`がない
- HTMLの`lang="jp"`は`lang="ja"`が適切
- 現在の記事不存在画面はHTTP 404にならない
- `publishedAt`の形式検証が画面用の記事取得処理にはない
- 自動テスト用npm scriptは現在存在しない

移行に必須の修正は該当する移行段階に含める。移行と無関係な修正は別の`fix/*`ブランチへ分離する。

## 段階的な移行手順

### 1. 移行方針と回帰確認項目の固定

- App Router、Vercelデプロイ、MDX静的生成の方針を固定する
- 現行ページと主要操作の回帰確認項目を作る
- 各作業ブランチの責務と対象外を定義する

### 2. Next.jsの最小基盤を追加

- Next.js設定、npm scripts、TypeScript、ESLint、`.gitignore`を調整する
- App Routerの最小入口を追加する
- 一時的に現在のSPAを表示できる状態を作る
- この段階ではReact RouterとVite関連ファイルを残す

### 3. SSR非互換箇所を整理

- テーマ、Hero、Contact、History、scroll hooksを整理する
- Client Component境界を明確にする
- browser APIの参照タイミングを修正する
- hydration、テーマ、clipboard、drag、revealを確認する

### 4. トップページをApp Routerへ移行

- `/`と共通layoutを移行する
- HeaderとFooterのリンクを置き換える
- hash navigationを移行する
- トップページからReact Router依存を除去する

### 5. ブログルートをApp Routerへ移行

- `/blog`、`/blog/[slug]`、404を移行する
- BlogCardとBlogPostLinkを`next/link`へ移行する
- `generateStaticParams()`と`notFound()`を導入する
- 公開状態ごとのアクセス可否を確認する

### 6. MDXと記事データ処理を統合

- `@next/mdx`と既存remark・rehype設定を導入する
- frontmatterの型定義と検証を統一する
- 一覧、詳細、関連記事、静的ルートで共通の記事取得処理を使う
- 全公開記事とdraft記事を検証する

### 7. MetadataとSEOを移行

- HelmetをMetadata APIへ置き換える
- favicon、OGP、Twitter Card、JSON-LDを移行する
- `sitemap.ts`と`robots.ts`を追加する
- sitemapのURL不整合を修正する

### 8. 画像とコードハイライトを移行

- Viteの`?inline`を除去する
- highlight.jsテーマをNext.js向けに変更する
- 必要な画像だけ`next/image`へ移行する
- light/dark、画像寸法、レイアウトを確認する

### 9. Vite関連資産を削除

- Vite、React Router、Helmet関連のファイルと依存を削除する
- VercelのSPA rewriteを削除する
- CIをNext.js構成へ確定する
- 旧構成への参照が残っていないことを確認する

### 10. 最終回帰確認

- 全ルートと404
- Desktop、Tablet、Mobile
- テーマ切り替えと再読み込み
- hash navigation、reveal、drag、clipboard
- 公開・draft・private記事の露出
- title、description、OGP、sitemap、robots
- Vercel Preview

## 各段階の共通完了条件

- 変更目的がPR内で説明されている
- 対象外の変更が含まれていない
- `npm run lint`が成功する
- `npm run typecheck`が成功する
- `npm run build`が成功する
- 対象機能の手動確認が完了している
- 失敗や既存問題がある場合はPRに明記されている
