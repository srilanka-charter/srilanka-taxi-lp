# 生成画像への差し替えマップ

## ルール

- `/articles/sri-lanka-tuk-tuk-guide` は、アイキャッチを含む全画像を人物なしの生成画像に差し替える。
- それ以外の指定記事は、監査で女性が写ると確認された画像だけを人物なしの生成画像に差し替える。
- 既存画像に女性が写らない場合はそのまま残す。生成画像は文脈に沿う対象位置でのみ使用する。

| 記事 | 差し替え対象 | 新規生成画像URL |
|---|---|---|
| トゥクトゥク | アイキャッチ | `/manus-storage/tuktuk-generated-hero-town_0d0cf38c.png` |
| トゥクトゥク | 本文：トゥクトゥクの基本（左） | `/manus-storage/tuktuk-generated-street-detail_07c6a94d.png` |
| トゥクトゥク | 本文：トゥクトゥクの基本（右） | `/manus-storage/tuktuk-generated-short-ride_2c94fbfa.png` |
| トゥクトゥク | 本文：専用車が向く日 | `/manus-storage/tuktuk-generated-charter-van_029274f9.png` |
| 3泊4日 | アイキャッチ・DAY 2シーギリヤ | `/manus-storage/itinerary-4day-generated-sigiriya-hero_21eb098d.png` |
| 3泊4日 | DAY 3キャンディ仏歯寺 | `/manus-storage/itinerary-4day-generated-kandy-temple_33b0d307.png` |
| 女子旅6日間 | アイキャッチ | `/manus-storage/itinerary-women-generated-sigiriya-hero_f86b7d70.png` |
| 女子旅6日間 | DAY 1空港送迎 | `/manus-storage/itinerary-women-generated-airport-van_7ce2f285.png` |
| 女子旅6日間 | DAY 2シーギリヤ | `/manus-storage/itinerary-women-generated-sigiriya-day2_9b9196ff.png` |
| 女子旅6日間 | DAY 3キャンディ | `/manus-storage/itinerary-women-generated-kandy-day3_7e083045.png` |
| 女子旅6日間 | DAY 4紅茶列車 | `/manus-storage/itinerary-women-generated-tea-train-day4_fa043aac.png` |
| 女子旅6日間 | DAY 5ゴール | `/manus-storage/itinerary-women-generated-galle-day5_ecd82a6a.png` |
| ヤーラモデルコース | アイキャッチ・DAY 4サファリ | `/manus-storage/itinerary-yala-generated-safari-hero_99f5c7a0.png` |
| ヤーラモデルコース | DAY 5ゴール | `/manus-storage/itinerary-yala-generated-galle-day_17336130.png` |
| 紅茶列車モデルコース | アイキャッチ・DAY 2紅茶列車 | `/manus-storage/itinerary-tea-train-generated-hero_a05d83ba.png` |
| 紅茶列車モデルコース | DAY 1キャンディ | `/manus-storage/itinerary-tea-train-generated-kandy-day1_362bca9d.png` |
| 7日間 | アイキャッチ | `/manus-storage/itinerary-7day-generated-galle-hero_67d34559.png` |
| 7日間 | DAY 2シーギリヤ | `/manus-storage/itinerary-7day-generated-sigiriya-day2_c73a783b.png` |
| 7日間 | DAY 3キャンディ | `/manus-storage/itinerary-7day-generated-kandy-day3_d3d7f85f.png` |
| 7日間 | DAY 4紅茶列車 | `/manus-storage/itinerary-7day-generated-tea-train-day4_29ad3898.png` |
| 7日間 | DAY 6ヤーラ | `/manus-storage/itinerary-7day-generated-yala-day6_8b8b6449.png` |
| 5日間 | アイキャッチ・DAY 2シーギリヤ | `/manus-storage/itinerary-5day-generated-sigiriya_989cede9.png` |
