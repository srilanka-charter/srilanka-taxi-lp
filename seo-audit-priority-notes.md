# SEO監査レポートの重要指摘メモ

監査レポート（2026-08-18確認）から、優先度の高い指摘は以下の4点。

| 優先度 | 指摘 | 要旨 |
|---|---|---|
| P0 | 初回HTMLが空 | ホーム、カテゴリー、代表記事で初回HTMLに本文・見出し・リンク・画像・JSON-LDが含まれず、描画後にのみ内容が見える状態。 |
| P0 | XMLサイトマップがホームのみ | `sitemap.xml` がホームURL中心で、記事・カテゴリーURLが送信されていない。 |
| P0 | カテゴリーの初回HTMLメタ不整合 | `/articles?category=transport` などで、初回HTMLのtitle/description/canonicalがカテゴリー内容と一致していない。 |
| P1 | モバイル表示速度 | ホームのLCP/TBTが悪く、初回表示速度が検索・CVの両面で弱い。 |

レポート上の推奨は、旅行メディア型のページをSSR/SSGまたはプリレンダリングし、初回HTMLにtitle、description、canonical、H1、本文、主要リンク、Article/FAQPage JSON-LDを含めること。加えて、全URLを含むサイトマップ生成と、カテゴリーURLの正規化を行うこと。

## 後半ページの重要補足

| 優先度 | 指摘 | 要旨 |
|---|---|---|
| P1 | 構造化データの初回HTML不足 | 記事では描画後にArticle/FAQPage JSON-LDがあるが、初回HTMLでは不足。`author`、`datePublished`、`dateModified`、`image`、`publisher`、`logo` などの補強余地あり。 |
| P1 | 比較メディアの透明性 | 比較基準、運営者、編集方針、広告・送客関係、更新日、一次情報源の明示が不足。 |
| P2 | 情報設計の商用導線 | モデルコースや都市間移動から、価格・区間別・日数別の比較や問い合わせへ自然につなぐ余地が大きい。 |
| P2 | アクセシビリティ | `viewport` の `maximum-scale=1` は削除推奨。 |

速度面では、レポートはホームのLCP 19.3秒、TBT 1410msを課題視し、ヒーローカルーセル簡素化、JS分割、GTM/広告タグ遅延、画像の最適サイズ化と長期キャッシュを提案している。

## 実装した対応

| 監査の指摘 | 対応内容 | 検証結果 |
|---|---|---|
| 初回HTMLが空 | Viteビルド後に公開18URLをReactサーバー描画し、本文、H1、主要リンク、title、description、canonical、JSON-LDをHTMLへ出力するプリレンダリングを追加。 | 本番一時サーバーのHTMLでホーム、記事、カテゴリー、比較方針ページのH1・canonical・JSON-LDを確認。 |
| サイトマップがホームのみ | 全公開URLを列挙する`/sitemap.xml`をビルド時に生成。`robots.txt`も追加。 | sitemapの`loc`は18件。robotsのSitemap指定を確認。 |
| カテゴリーURL・初回HTML不整合 | `/articles/transport`等のパス型URLを導入し、ヘッダー・記事本文のリンクを正規URLへ変更。旧クエリURLは301で正規URLへ転送。 | `/articles?category=itinerary`から`/articles/itinerary`への301を確認。 |
| 構造化データ不足 | プリレンダリング時に`WebSite`、`Organization`、`Article`または`CollectionPage`を初回HTMLに出力。Articleにはauthor、publisher、imageを補完。 | 初回HTMLで`static-seo-jsonld`を確認。 |
| モバイルUX | viewportの`maximum-scale=1`を削除。初回ヒーロー画像をpreloadし、全4枚を同時に背景描画する方式から、現在の1枚のみを描画する方式へ変更。 | ビルド成功。LCP/TBTの再計測は公開後にPageSpeed Insightsで実施する。 |
| 比較メディアの透明性 | 比較基準、掲載サービスとの関係、情報更新方針を示す`/editorial-policy`を追加し、ホームのフッターから導線を設置。 | 開発プレビューで表示と比較トップCTAを確認。 |
