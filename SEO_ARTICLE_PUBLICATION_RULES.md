# 新規記事のSEO・サイトマップ公開ルール

このプロジェクトでは、**新規記事を公開するとき、本文の実装だけでは完了としません**。検索エンジンと読者が初回アクセス時に同じ情報を受け取れるよう、以下の作業を一つの公開単位として実施します。

## 必須の公開要件

| 項目 | 実施内容 | 対象ファイル・確認方法 |
|---|---|---|
| 正規URL | 記事ごとに固定のパス型URLを設定し、クエリURLを正規URLに使わない。 | `client/src/App.tsx` のRoute |
| 初回HTML | 記事のH1、本文、主要内部リンクがビルド済みHTMLに含まれるようにする。 | `pnpm build`後の`dist/public/articles/[slug]/index.html` |
| メタ情報 | title、description、keywords、canonical、OG情報を記事固有の内容に設定する。 | ページコンポーネントと`script/prerender.tsx` |
| 構造化データ | Articleを基本とし、FAQがある場合はFAQPageも追加する。Articleにはauthor、publisher、imageを含める。 | 初回HTMLの`static-seo-jsonld` |
| サイトマップ | 新規記事のURLを`scripts/prerender.tsx`の`pages`配列に追加する。ビルド時に`sitemap.xml`へ自動出力される。 | `dist/public/sitemap.xml` |
| 内部リンク | カテゴリー一覧、関連するハブ記事、必要に応じて比較トップへの本文内リンクを設置する。既存CTAは削除しない。 | 記事本文、`MediaHeader`、カテゴリー一覧 |
| 実写写真 | ユーザー提供の実写を優先し、記事の該当する本文・日程の近くへ配置する。 | 記事ページの表示確認 |

## 新規記事を追加する順番

1. 記事タイトル、狙う検索語、固定URL、カテゴリー、ユーザー提供写真を決めます。
2. 記事ページを実装し、本文内に関連する既存記事と比較トップへの導線を置きます。
3. `client/src/App.tsx`に明示的なRouteを追加します。カテゴリー一覧のデータにも追加します。
4. `scripts/prerender.tsx`の`pages`配列へ、URL、title、description、keywords、画像、`article: true`を追加します。
5. `pnpm build`を実行します。Routeだけを追加してプリレンダリング用の`pages`配列への追加を忘れた場合、ビルドは失敗するため、サイトマップ漏れを防げます。
6. ビルド済みHTMLでH1、title、description、canonical、JSON-LDを確認し、`sitemap.xml`にURLが含まれることを確認します。
7. チェックポイントを作成して公開反映します。Google Search Consoleには、`https://srilankataxicharter.com/sitemap.xml`を一度送信します。以後の記事URLはビルド時に同じサイトマップへ自動追記されます。

## 現在のサイトマップ

公開用サイトマップは、ビルド時に`dist/public/sitemap.xml`として生成されます。robots.txtには次のサイトマップURLを指定しています。

> `https://srilankataxicharter.com/sitemap.xml`

カテゴリーURLは`/articles/transport`、`/articles/itinerary`のようなパス型URLを使います。旧形式の`/articles?category=...`は、公開時に301リダイレクトで正規URLへ統合します。
