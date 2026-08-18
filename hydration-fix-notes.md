# ハイドレーションエラー修正メモ

## 症状

`/articles/sri-lanka-7-day-itinerary?from_webdev=1`で、Reactのminified error #418が発生した。これは、ビルド時に出力したプリレンダリングHTMLと、クライアントでWouter・アニメーション・クエリ文字列を含めて再描画するツリーの差異を`hydrateRoot`が検出したものと判断した。

## 対応

検索エンジン向けには引き続きプリレンダリングHTML、固有title・description・canonical・JSON-LDを配信する。一方、ブラウザ側は初回HTMLをReactのハイドレーション対象にせず、`createRoot`でクライアントアプリを新規描画する方式へ変更した。これにより、検索エンジンが取得する初回HTMLを維持しつつ、ユーザーのブラウザではHTML不整合を照合しないため、error #418を防止する。

## 検証

2026年8月18日、`/articles/sri-lanka-7-day-itinerary?from_webdev=1`を開き、7日間モデルコースの本文、日程、画像、FAQ、CTAが表示されることを確認した。ブラウザのコンソール出力は空で、React error #418は再現しなかった。`pnpm build`もプリレンダリングを含めて成功している。

## 関連するReactキー警告の修正

ヤーラモデルコースでは、開始地点と終了地点に同じ「コロンボ空港」が含まれるため、地点名だけをReactキーに使うと重複キー警告が発生していた。ルートのキーを「記事slug・順序・地点名」の組み合わせへ変更し、重複する地点名にも対応した。`/articles/yala-national-park-safari-itinerary`を再表示し、コンソール出力が空であることを確認した。
