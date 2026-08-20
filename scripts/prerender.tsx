import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

type Page = {
  path: string;
  title: string;
  description: string;
  keywords: string;
  image?: string;
  article?: boolean;
  faq?: { question: string; answer: string }[];
};

const siteUrl = "https://srilankataxicharter.com";
const projectRoot = process.cwd();
const outputRoot = join(projectRoot, "dist", "public");

const pages: Page[] = [
  { path: "/", title: "スリランカ タクシーチャーターおすすめ3選｜ランカミー・ランカライド・SLTCS比較", description: "スリランカのタクシーチャーター（カーチャーター）でおすすめのサービス3選を比較。料金、対応、予約条件を確認し、個人旅行に合う専用車を選べます。", keywords: "スリランカタクシーチャーター,スリランカカーチャーター,スリランカ観光タクシー,スリランカ旅行", image: "/manus-storage/charter-1_ee4f51c5.png" },
  { path: "/articles/transport", title: "スリランカ旅行の移動手段｜列車・バス・トゥクトゥク・専用車を比較", description: "スリランカ旅行の移動手段を解説。列車、ローカルバス、トゥクトゥク、Uber、PickMe、タクシーチャーターの使い分けを紹介します。", keywords: "スリランカ 移動手段,スリランカ 交通,スリランカ タクシーチャーター" },
  { path: "/articles/itinerary", title: "スリランカ旅行モデルコース｜3泊4日・5日間・7日間の旅程", description: "スリランカ旅行の3泊4日、5日間、7日間モデルコースを紹介。世界遺産、高原、海岸を無理なくつなぐ個人旅行の旅程を解説します。", keywords: "スリランカ モデルコース,スリランカ旅行 日程,スリランカ 3泊4日" },
  { path: "/articles/travel-guide", title: "スリランカ個人旅行ガイド｜準備・安全・旅の基本", description: "スリランカを個人旅行で楽しむための準備、安全、移動、旅程の考え方を紹介します。", keywords: "スリランカ 個人旅行,スリランカ旅行 準備" },
  { path: "/articles/destinations", title: "スリランカ観光地情報｜世界遺産・都市・自然を解説", description: "スリランカの観光地情報を、世界遺産、都市、自然、アクセスの観点から紹介します。", keywords: "スリランカ 観光地,スリランカ 世界遺産" },
  { path: "/articles/local-info", title: "スリランカ現地情報｜旅行前に知りたい実用知識", description: "スリランカ旅行の前に知りたい現地情報、習慣、移動、滞在の実用知識を紹介します。", keywords: "スリランカ 現地情報,スリランカ旅行" },
  { path: "/editorial-policy", title: "比較方針・掲載基準｜スリランカタクシーチャーター比較", description: "スリランカタクシーチャーター比較サイトの比較方針、掲載基準、情報更新、広告・送客関係に関する考え方を公開します。", keywords: "スリランカ タクシーチャーター 比較,比較方針,掲載基準" },
  { path: "/articles/sri-lanka-transport-guide", title: "スリランカの移動手段は何が正解？列車・トゥクトゥク・ローカルバス・専用車を比較", description: "スリランカの移動手段を列車、バス、トゥクトゥク、配車アプリ、専用車で比較。空港・市内・都市間・郊外の使い分け、個人旅行での選び方を解説します。", keywords: "スリランカ 移動手段,スリランカ 列車,スリランカ バス,スリランカ タクシーチャーター", image: "/manus-storage/transport-van-thumb_7e18c597.png", article: true, faq: [{ question: "スリランカ旅行の移動手段は、何を選べばよいですか？", answer: "一つの手段だけに決めず、区間ごとに使い分けるのがおすすめです。山岳部の景観を楽しむ区間は列車、町歩きはトゥクトゥク、時間に余裕のある短〜中距離はローカルバス、複数都市を移動する日や荷物が多い日は専用車が向いています。" }, { question: "スリランカの都市間移動は、専用車チャーターが必要ですか？", answer: "必ずしも必要ではありませんが、複数の立ち寄り、長距離移動、到着時刻が重要な日、家族旅行では有力な選択肢です。列車やバスを旅の体験として取り入れながら、都市間の移動を専用車で支えると、自由度と安心感を両立しやすくなります。" }, { question: "トゥクトゥクは長距離の移動にも使えますか？", answer: "トゥクトゥクは町・都市内の短距離移動や短い小旅行に向いています。長距離や荷物の多い移動では、所要時間・快適性・安全面を踏まえ、列車・バス・配車アプリ・専用車を検討するのが現実的です。" }, { question: "スリランカのローカルバスは旅行者でも利用できますか？", answer: "旅行者でも利用できます。広い路線網と手頃な料金が魅力ですが、混雑や運行のペースを含めて、時間に余裕がある日に選ぶと楽しみやすくなります。目的地への到着時刻を優先したい日は、別の移動手段を組み合わせると安心です。" }, { question: "タクシーチャーターを選ぶときは何を比べればよいですか？", answer: "料金に何が含まれるか、日本語での連絡可否、ドライバーの経験、車種、キャンセル条件、旅程の柔軟さを確認しましょう。比較ページでは、個人旅行に向く3社を同じ視点で確認できます。" }, { question: "スリランカ旅行は鉄道だけで周遊できますか？", answer: "一部の都市間を鉄道で移動することはできますが、世界遺産、郊外ホテル、サファリ、空港送迎まで含めると、駅から先の移動や荷物の扱いを別に考える必要があります。絶景区間は列車、駅の前後や郊外は車という組み合わせが実用的です。" }, { question: "初めてのスリランカ旅行で、公共交通と専用車はどう組み合わせればよいですか？", answer: "空港到着日、ホテルを移る日、長距離、早朝・夜間、複数の立ち寄りがある日は事前手配の車を検討し、市内の短距離や景色を楽しみたい列車区間に公共交通を使うと、旅の体験と時間管理を両立しやすくなります。" }] },
  { path: "/articles/sri-lanka-taxi-charter-guide", title: "スリランカのタクシーチャーターとは？料金・使い方・選び方を個人旅行向けに解説", description: "スリランカのタクシーチャーターの料金、車種、予約、使い方、選び方を個人旅行向けに解説します。", keywords: "スリランカ タクシーチャーター,スリランカ カーチャーター 料金", image: "/manus-storage/charter-3_51d499c2.png", article: true },
  { path: "/articles/colombo-airport-transfer-guide", title: "スリランカで空港送迎は必要？コロンボ空港からホテルまでの移動方法を比較", description: "コロンボ空港からホテルまでの移動方法を、空港タクシー、配車アプリ、ホテル送迎、専用車で比較します。", keywords: "スリランカ 空港送迎,コロンボ空港 ホテル 移動", image: "/manus-storage/article-airport-transfer-hero_fd800259.jpg", article: true },
  { path: "/articles/sri-lanka-tea-train-nine-arch-bridge", title: "スリランカ紅茶列車の乗り方・予約・ナインアーチブリッジ完全ガイド", description: "スリランカ紅茶列車の予約、乗り方、エッラ、ナインアーチブリッジの訪問計画を個人旅行向けに解説します。", keywords: "スリランカ 紅茶列車,ナインアーチブリッジ,エッラ 観光", image: "/manus-storage/train-1_47ef775a.jpg", article: true },
  { path: "/articles/sri-lanka-long-distance-bus-guide", title: "スリランカの長距離バス完全ガイド｜乗り方・料金・注意点", description: "スリランカの長距離バスの種類、乗り方、支払い、荷物、専用車との使い分けを解説します。", keywords: "スリランカ 長距離バス,スリランカ バス 乗り方", image: "/manus-storage/bus-2_7bb3a877.png", article: true },
  { path: "/articles/sri-lanka-tuk-tuk-guide", title: "スリランカのトゥクトゥク完全ガイド｜乗り方・料金・安全な使い方", description: "スリランカのトゥクトゥクの乗り方、料金、安全な利用方法、配車アプリとの使い分けを解説します。", keywords: "スリランカ トゥクトゥク,スリランカ トゥクトゥク 料金", image: "/manus-storage/tuktuk-1_9860c65d.jpg", article: true },
  { path: "/articles/sri-lanka-uber-guide", title: "スリランカでUBERは実用的？都市間移動も可能？", description: "スリランカでUberを使うメリット、都市間・長距離での注意点、タクシーチャーターとの使い分けを解説します。", keywords: "スリランカ Uber,スリランカ Uber 都市間,スリランカ 配車アプリ", image: "/manus-storage/charter-1_ee4f51c5.png", article: true },
  { path: "/articles/sri-lanka-pickme-guide", title: "スリランカのPickMe完全ガイド｜使い方・Uber比較・都市間移動での注意点", description: "スリランカ発の配車アプリPickMeの使い方、Uberとの違い、都市間移動での注意点を解説します。", keywords: "スリランカ PickMe,PickMe 使い方,スリランカ 配車アプリ", image: "/manus-storage/tuktuk-2_12590549.jpg", article: true },
  { path: "/articles/sri-lanka-5-day-itinerary", title: "スリランカ旅行5日間モデルコース｜初めてでも世界遺産を満喫する王道ルート", description: "シーギリヤ、ダンブッラ、ポロンナルワ、アヌラーダプラをめぐるスリランカ5日間モデルコースを解説します。", keywords: "スリランカ モデルコース 5日,スリランカ旅行 5日間", image: "/manus-storage/sigiriya-1_60f050bc.jpg", article: true },
  { path: "/articles/sri-lanka-7-day-itinerary", title: "スリランカ旅行7日間モデルコース｜シーギリヤ・キャンディ・ゴールをめぐる旅", description: "シーギリヤ、キャンディ、紅茶列車、サファリ、ゴールをめぐるスリランカ7日間モデルコースを解説します。", keywords: "スリランカ モデルコース 7日,スリランカ旅行 7日間", image: "/manus-storage/galle_46cff405.jpg", article: true },
  { path: "/articles/sri-lanka-4-day-itinerary", title: "スリランカ旅行3泊4日モデルコース｜短期間で見どころを絞る効率的な旅程", description: "シーギリヤ、ダンブッラ、キャンディを効率よくめぐるスリランカ3泊4日モデルコースを解説します。", keywords: "スリランカ 3泊4日 モデルコース,スリランカ旅行 4日間", image: "/manus-storage/sigiriya-2_c47ed17b.jpg", article: true },
  { path: "/articles/colombo-western-sri-lanka-2-night-3-day-itinerary", title: "コロンボ発・スリランカ西部をめぐる2泊3日モデルコース", description: "コロンボ発でスリランカ西部をめぐる2泊3日モデルコース。空港送迎、ネゴンボ、コロンボ市内、短期間の専用車の使い方を個人旅行向けに解説します。", keywords: "コロンボ 観光 モデルコース,スリランカ コロンボ 2泊3日,コロンボ発 専用車", image: "/manus-storage/article-airport-transfer-hero_fd800259.jpg", article: true, faq: [{ question: "コロンボ発の2泊3日で専用車は必要ですか？", answer: "必須ではありません。ただし、空港送迎、ホテル変更、市内の複数エリアを回る日をまとめるなら、乗り換えや荷物移動を減らせる専用車が便利です。" }, { question: "ネゴンボとコロンボはどちらに泊まるのがおすすめですか？", answer: "到着便の後に休息を優先するならネゴンボ、コロンボ市内観光を中心にするならコロンボが向いています。到着時刻と翌日の予定で選びましょう。" }, { question: "この日程を南部海岸旅行とつなげられますか？", answer: "可能です。帰国する代わりに、コロンボからゴールや南部海岸のホテルへ進むよう、DAY 3を組み替えることができます。" }] },
  { path: "/articles/sri-lanka-tea-train-itinerary", title: "紅茶列車に乗るスリランカ旅行モデルコース｜乗車区間と送迎の組み方", description: "スリランカ紅茶列車を旅の主役にするモデルコース。キャンディ、高原、ヌワラエリヤ、エッラの移動、乗車区間、駅送迎、荷物の扱いを解説します。", keywords: "スリランカ 紅茶列車 モデルコース,スリランカ 紅茶列車 送迎,キャンディ エッラ モデルコース", image: "/manus-storage/train-1_47ef775a.jpg", article: true, faq: [{ question: "紅茶列車はどの区間に乗るのがおすすめですか？", answer: "旅程の起点と宿泊地によって異なります。景色を楽しむことを優先するなら、乗車時間の長さだけでなく、駅までの送迎、降車後のホテル移動、荷物の扱いまで一緒に決めましょう。" }, { question: "紅茶列車は事前予約した方がよいですか？", answer: "座席を確保したい場合は、Sri Lanka Railwaysの公式オンライン予約で状況を確認しましょう。予約は支払い完了後に確定するため、チケットの条件と運行状況を乗車前にも確認します。" }, { question: "列車に大きなスーツケースを持ち込んでもよいですか？", answer: "持ち込むことはできますが、車内・ホームでの移動負担を考える必要があります。駅からホテルまでの送迎車を手配し、荷物を持って長距離を歩かない計画にするのがおすすめです。" }] },
  { path: "/articles/yala-national-park-safari-itinerary", title: "ヤーラ国立公園サファリを入れたスリランカ旅行モデルコース", description: "ヤーラ国立公園サファリを入れたスリランカ旅行モデルコース。サファリ許可、ティッサマハラーマ滞在、ゴール・南部海岸との組み合わせ、専用車の使い方を解説します。", keywords: "ヤーラ国立公園 モデルコース,ヤーラ サファリ 旅行,スリランカ サファリ 専用車", image: "/manus-storage/safari_ddff1136.png", article: true, faq: [{ question: "ヤーラのサファリは何泊で組むのがおすすめですか？", answer: "早朝サファリを楽しむなら、ティッサマハラーマ周辺に前泊する旅程が組みやすいでしょう。サファリ当日は疲れやすいため、終了後の長距離移動も余裕を持たせます。" }, { question: "ヤーラ国立公園の許可は事前に必要ですか？", answer: "ご自身でジープを手配する場合は、野生動物保護局の許可予約を確認する必要があります。一方、ランカミーでサファリジープを予約する場合は、入園許可の手配を任せられるため、ご自身で許可を取る必要がありません。" }, { question: "サファリ当日にゴールまで移動できますか？", answer: "可能ですが、早朝出発・サファリ・休憩の後に長距離移動となります。ゴール旧市街をしっかり歩きたい場合は、到着後は休息を優先し、散策は翌朝に回すと無理がありません。" }] },
  { path: "/articles/sri-lanka-women-travel-6-day-itinerary", title: "スリランカ女子旅モデルコース｜安全性と写真映えを両立する6日間プラン", description: "スリランカ女子旅の6日間モデルコース。シーギリヤ、ダンブッラ、キャンディ、紅茶列車、ゴールをめぐり、空港送迎・ホテル移動・撮影時間を無理なく組み立てます。", keywords: "スリランカ 女子旅 モデルコース,スリランカ 女子旅,スリランカ旅行 6日間,スリランカ タクシーチャーター", image: "/manus-storage/sigiriya-2_c47ed17b.jpg", article: true, faq: [{ question: "スリランカ女子旅は6日間でどこまで回れますか？", answer: "シーギリヤ、キャンディ、高原の紅茶列車、ゴールを主役にすれば、6日間でも無理なく楽しめます。各地の滞在時間を守るため、空港・都市間・駅の移動は事前に整えるのがおすすめです。" }, { question: "女子旅でタクシーチャーターは毎日必要ですか？", answer: "毎日必須ではありません。空港送迎、長距離のホテル移動、駅送迎など、荷物や時間の不確実性が大きい日に使うと、旅程を組みやすくなります。" }, { question: "寺院を訪れる日に用意しておくとよい服装は？", answer: "肩や膝を覆える服と、履き替えやすい靴を用意しましょう。訪問先ごとの服装・撮影・参拝のルールは当日の案内に従ってください。" }] },
  { path: "/articles/sri-lanka-independent-travel-preparation-guide", title: "スリランカ個人旅行の準備完全ガイド｜出発前に必要なことを時系列で解説", description: "スリランカ個人旅行の準備を時系列で解説。ETA、パスポート、航空券、ホテル、通信、海外旅行保険、空港送迎、都市間移動まで、出発前に確認したいことを整理します。", keywords: "スリランカ 個人旅行 準備,スリランカ旅行 準備,スリランカ ETA,スリランカ 空港送迎", image: "/manus-storage/article-airport-transfer-hero_fd800259.jpg", article: true, faq: [{ question: "スリランカ個人旅行の準備はいつから始めればよいですか？", answer: "行き先・パスポート・ETAなど早めに確認したい項目があるため、出発の8〜12週間前を目安に旅程の軸を決めると進めやすくなります。" }, { question: "スリランカ入国にETAは必要ですか？", answer: "観光・商用旅行者向けにETAが案内されています。国籍・旅行目的・渡航時点の条件により異なるため、出発前にスリランカ入国管理局と公式ETAサイトを必ず確認してください。" }, { question: "空港送迎は出発前に予約した方がよいですか？", answer: "必須ではありませんが、初めての個人旅行、深夜・早朝到着、遠方のホテル、荷物が多い場合は、事前に合流場所と車を決めておくと到着日の判断を減らせます。" }] },
  { path: "/articles/sri-lanka-best-time-to-visit-by-region", title: "スリランカ旅行のベストシーズンはいつ？地域別の気候とおすすめ時期", description: "スリランカ旅行のベストシーズンを地域別に解説。南西海岸、東海岸、文化三角地帯、高原の気候の考え方と、季節に合わせたモデルコースの選び方を紹介します。", keywords: "スリランカ ベストシーズン,スリランカ 旅行 気候,スリランカ 旅行 時期,スリランカ 南西海岸 東海岸", image: "/manus-storage/galle_46cff405.jpg", article: true, faq: [{ question: "スリランカ旅行のベストシーズンはいつですか？", answer: "目的地と旅の目的で異なります。南西海岸、東海岸、文化三角地帯、高原では条件が異なるため、行きたい地域を決めた上で渡航時の天候・海況を確認しましょう。" }, { question: "南西海岸の海辺はいつ頃が穏やかですか？", answer: "スリランカ観光局は、南西海岸が11月から3月に晴天・穏やかな海になりやすいと案内しています。実際の海況は変わるため、渡航直前にも確認してください。" }, { question: "雨季にスリランカ旅行はできますか？", answer: "できます。地域によって天候の傾向が異なるため、海辺だけでなく遺跡や高原を組み合わせ、予定を固定しすぎない旅程にすると調整しやすくなります。" }] },
];

Object.assign(globalThis, { React });
pages.push(
  { path: "/articles/sri-lanka-trip-duration-guide", title: "スリランカ旅行に必要な日数は？3日・5日・7日・10日の楽しみ方を比較", description: "スリランカ旅行に必要な日数を3日・5日・7日・10日で比較。世界遺産、高原、海岸、サファリをどう組み合わせるか、日数別に無理のない旅程を解説します。", keywords: "スリランカ 旅行 日数,スリランカ旅行 何日,スリランカ 3日 5日 7日 10日,スリランカ モデルコース", image: "/manus-storage/sri-lanka-trip-days-hero_79addc3a.png", article: true, faq: [{ question: "スリランカ旅行は最低何日あれば楽しめますか？", answer: "到着・出発の時間にもよりますが、3日なら一つの地域、5日なら文化三角地帯、7日なら高原や南部海岸を組み合わせる旅程を検討しやすくなります。" }, { question: "5日と7日ならどちらがおすすめですか？", answer: "世界遺産を主役にするなら5日、高原の紅茶列車やゴールまで入れたいなら7日が目安です。移動だけで終わらないよう、ホテル移動日と観光日を分けて考えましょう。" }, { question: "10日間あればスリランカを一周できますか？", answer: "関心のある地域を組み合わせることは可能ですが、毎日都市を移るより、文化三角地帯・高原・海岸などで連泊を入れる方が旅を楽しみやすくなります。" }] },
  { path: "/articles/sri-lanka-trip-budget-guide", title: "スリランカ旅行の予算はいくら？航空券・ホテル・移動費を含む費用の目安", description: "スリランカ旅行の予算を、航空券、ホテル、食事、観光、移動費に分けて考えるガイド。タクシーチャーターの費用を含め、個人旅行で予算を組み立てる方法を解説します。", keywords: "スリランカ 旅行 予算,スリランカ旅行 費用,スリランカ タクシーチャーター 料金,スリランカ 個人旅行 予算", image: "/manus-storage/sri-lanka-budget-hero_6c04a40a.png", article: true, faq: [{ question: "スリランカ旅行の予算は何で決まりますか？", answer: "航空券、ホテル、食事・観光、移動費が主な項目です。渡航時期、ホテルの立地、行き先の数、移動手段によって変わるため、費目ごとに分けて考えましょう。" }, { question: "タクシーチャーターの料金は予算にどう入れればよいですか？", answer: "利用する日数、人数、車種、立ち寄り、料金に含まれる範囲を確認して見積もりに入れます。公開価格は目安として参照し、予約前には公式サイトで最新条件を確認してください。" }, { question: "予算を抑えるならホテルを毎日変えない方がよいですか？", answer: "地域によっては連泊して移動回数を減らす方が、荷物・交通・時間の負担を抑えられます。部屋代だけでなく、ホテルの位置と移動費を一緒に比較するのがおすすめです。" }] },
  { path: "/articles/sri-lanka-safety-women-solo-travel-guide", title: "スリランカ旅行の治安は大丈夫？女性・一人旅が知っておくべき安全対策", description: "スリランカ旅行の治安と、女性・一人旅で確認したい安全対策を解説。夜間移動、配車アプリ、宿選び、客引き、通信、緊急時まで、出発前と現地での判断を整理します。", keywords: "スリランカ 治安 女性,スリランカ 女性一人旅 治安,スリランカ 一人旅 安全,スリランカ旅行 注意点", image: "/manus-storage/sri-lanka-female-safety-street_bc4903a9.png", article: true, faq: [{ question: "スリランカは女性一人でも旅行できますか？", answer: "旅行は可能ですが、安全を保証するものではありません。外務省の最新情報を確認したうえで、夜間の移動、宿の立地、通信、空港・郊外の移動を事前に整え、無理のない旅程にすることが大切です。" }, { question: "女性一人で空港からホテルへ移動するなら何を選べばよいですか？", answer: "初めての到着日や深夜・早朝は、ホテル送迎、事前予約の送迎、車両情報を確認できる配車アプリなどを検討します。合流場所、運転手名、車種・車両番号を確認してから乗車しましょう。" }, { question: "女性一人でトゥクトゥクや列車に乗っても大丈夫ですか？", answer: "日中の短距離や、予約済みの指定席を使うなど、条件を選べば利用できます。混雑、荷物、到着時刻、運転手への違和感を考え、夜間や郊外では別の移動手段も検討してください。" }, { question: "トラブルに遭ったらどこへ相談すればよいですか？", answer: "まずホテルや店舗など安全な場所へ移動し、必要に応じて警察、保険会社、在スリランカ日本国大使館へ連絡します。大使館の公式サイトで最新の領事窓口・緊急連絡先・安全情報を事前に確認しておきましょう。" }] },
  { path: "/articles/sri-lanka-packing-list-guide", title: "スリランカ旅行の持ち物リスト｜季節・世界遺産・サファリ別の必需品", description: "スリランカ旅行の持ち物を、渡航書類、通信・電源、寺院の服装、高原・海岸・サファリの準備、移動日のバッグに分けて解説します。", keywords: "スリランカ旅行 持ち物,スリランカ 持ち物,スリランカ 旅行 服装,スリランカ サファリ 持ち物", image: "/manus-storage/sri-lanka-packing-hero_23e412c4.png", article: true, faq: [{ question: "スリランカ旅行に必ず必要な持ち物は何ですか？", answer: "パスポート、渡航時点の条件に合うETAなどの入国書類、航空券・ホテルの控え、決済手段、通信・充電手段が旅の土台になります。制度や航空会社の規則は変わるため、出発前に公式サイトで確認してください。" }, { question: "スリランカの寺院ではどんな服装が必要ですか？", answer: "訪問先の案内に従う必要がありますが、肩や膝を覆える薄手の長袖、長めのボトムス、ストールを持つと対応しやすくなります。靴を脱ぐ場所もあるため、履きやすい靴と靴下を用意しましょう。" }, { question: "サファリの日にあると便利な持ち物は何ですか？", answer: "水、帽子、日焼け対策、虫よけ、薄手の雨具、予備バッテリー、必要であれば双眼鏡を小さなデイバッグへ入れます。車内で扱いやすいよう、荷物は最小限にしましょう。" }, { question: "変換プラグや変圧器は必要ですか？", answer: "滞在先のプラグ形状と、使う機器の対応電圧を事前に確認してください。スマートフォンやPCの充電器は広い電圧に対応する物もありますが、日本国内専用の機器はそのまま使えない場合があります。" }] },
);
const { default: App } = await import("../client/src/App");

const escapeHtml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const absoluteUrl = (value: string) => value.startsWith("http") ? value : `${siteUrl}${value}`;

function schemaFor(page: Page) {
  const website = { "@type": "WebSite", name: "スリランカタクシーチャーター比較", url: siteUrl, inLanguage: "ja" };
  const organization = { "@type": "Organization", name: "スリランカタクシーチャーター比較", url: siteUrl, logo: `${siteUrl}/favicon-32x32.png` };
  const main = page.article
    ? { "@type": "Article", headline: page.title, description: page.description, mainEntityOfPage: absoluteUrl(page.path), inLanguage: "ja", author: organization, publisher: organization, ...(page.image ? { image: absoluteUrl(page.image) } : {}) }
    : { "@type": page.path.startsWith("/articles/") ? "CollectionPage" : "WebPage", name: page.title, description: page.description, url: absoluteUrl(page.path), inLanguage: "ja" };
  const faq = page.article && page.faq ? { "@type": "FAQPage", mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) } : undefined;
  return JSON.stringify({ "@context": "https://schema.org", "@graph": [website, organization, main, ...(faq ? [faq] : [])] }).replace(/</g, "\\u003c");
}

function injectSeo(template: string, page: Page, markup: string) {
  const canonical = absoluteUrl(page.path);
  const image = page.image ? absoluteUrl(page.image) : undefined;
  const seoTags = [
    `<meta name="robots" content="index,follow">`,
    `<link id="article-canonical" rel="canonical" href="${canonical}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:type" content="${page.article ? "article" : "website"}">`,
    image ? `<meta property="og:image" content="${image}">` : "",
    `<script id="static-seo-jsonld" type="application/ld+json">${schemaFor(page)}</script>`,
  ].filter(Boolean).join("\n    ");
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="keywords"[^>]*>/, `<meta name="keywords" content="${escapeHtml(page.keywords)}">`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(page.description)}">`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(page.title)}">`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeHtml(page.description)}">`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${escapeHtml(page.title)}">`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${escapeHtml(page.description)}">`)
    .replace("</head>", `    ${seoTags}\n  </head>`)
    .replace("<div id=\"root\"></div>", `<div id="root">${markup}</div>`);
}

const templatePath = join(outputRoot, "index.html");
if (!existsSync(templatePath)) throw new Error("Vite build output was not found. Run vite build before prerendering.");
const template = readFileSync(templatePath, "utf8");

const appSource = readFileSync(join(projectRoot, "client", "src", "App.tsx"), "utf8");
const routedPublicPaths = [...appSource.matchAll(/path=\{?"([^"]+)"\}?/g)]
  .map((match) => match[1])
  .filter((path) => path !== "/404" && path !== "/articles" && !path.includes(":"));
const sitemapPaths = new Set(pages.map((page) => page.path));
const missingSitemapEntries = routedPublicPaths.filter((path) => !sitemapPaths.has(path));
if (missingSitemapEntries.length > 0) {
  throw new Error(`Add the following public routes to the prerender and sitemap page manifest: ${missingSitemapEntries.join(", ")}`);
}

for (const page of pages) {
  const markup = renderToString(<Router ssrPath={page.path}><App /></Router>);
  if (!markup.includes("<h1")) throw new Error(`Prerender output for ${page.path} does not include an H1`);
  const outputFile = page.path === "/" ? templatePath : join(outputRoot, page.path.slice(1), "index.html");
  mkdirSync(dirname(outputFile), { recursive: true });
  writeFileSync(outputFile, injectSeo(template, page, markup));
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((page) => `  <url><loc>${absoluteUrl(page.path)}</loc></url>`).join("\n")}\n</urlset>\n`;
writeFileSync(join(outputRoot, "sitemap.xml"), sitemap);
