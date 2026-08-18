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
  { path: "/articles/sri-lanka-transport-guide", title: "スリランカの移動手段は何が正解？列車・トゥクトゥク・ローカルバス・専用車を比較", description: "スリランカの移動手段を列車、バス、トゥクトゥク、配車アプリ、専用車で比較。個人旅行での選び方を解説します。", keywords: "スリランカ 移動手段,スリランカ 列車,スリランカ バス,スリランカ タクシーチャーター", image: "/manus-storage/transport-van-thumb_7e18c597.png", article: true },
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
];

Object.assign(globalThis, { React });
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
