# サイトマップ再生成の検証記録

## 実施内容

`pnpm build` により公開ページmanifestを再プリレンダリングし、`dist/public/sitemap.xml`を新規生成した。

## 確認結果

| 項目 | 結果 |
|---|---|
| sitemap.xmlのURL数 | 30 URL |
| トップページ | 登録済み |
| 観光地情報カテゴリー | 登録済み |
| No.31 シーギリヤロック記事 | 登録済み |
| No.32 キャンディ仏歯寺記事 | 登録済み |
| No.25 女性・一人旅治安記事 | 登録済み |
| No.27 持ち物記事 | 登録済み |
| robots.txt | `https://srilankataxicharter.com/sitemap.xml` を案内済み |

全公開URLは、今後も`pnpm build`実行時のプリレンダリング処理でサイトマップへ再出力される。
