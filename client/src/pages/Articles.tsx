/**
 * Design system: dark editorial travel media with category-first discovery.
 * Category selections filter the index via URL query parameters so each header link stays shareable.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpen } from "lucide-react";
import { MediaHeader, mediaCategories } from "@/components/MediaHeader";

const transportArticle = {
  title: "スリランカの移動手段は何が正解？列車・トゥクトゥク・ローカルバス・専用車を比較",
  description: "列車・トゥクトゥク・ローカルバス・専用車を、旅の目的と移動距離から使い分けるための実践ガイドです。",
  image: "/manus-storage/tuktuk-1_9860c65d.jpg",
  href: "/articles/sri-lanka-transport-guide",
  category: "transport",
  readTime: "読了約8分",
};

const taxiCharterArticle = {
  title: "スリランカのタクシーチャーターとは？料金・使い方・選び方を個人旅行向けに解説",
  description: "ランカミーの料金目安を参考に、専用車を使う場面、車種・プランの選び方、予約前の確認ポイントを解説します。",
  image: "/manus-storage/charter-3_51d499c2.png",
  href: "/articles/sri-lanka-taxi-charter-guide",
  category: "transport",
  readTime: "読了約9分",
};

const airportTransferArticle = {
  title: "スリランカで空港送迎は必要？コロンボ空港からホテルまでの移動方法を比較",
  description: "空港タクシー・配車アプリ・ホテル送迎・事前予約の専用車を比較。到着時間や旅の条件に合う空港送迎の選び方を解説します。",
  image: "/manus-storage/article-airport-transfer-hero_fd800259.jpg",
  href: "/articles/colombo-airport-transfer-guide",
  category: "transport",
  readTime: "読了約8分",
};

const teaTrainArticle = {
  title: "スリランカ紅茶列車の乗り方・予約・ナインアーチブリッジ完全ガイド｜エッラ観光の絶景ルート",
  description: "紅茶列車の乗り方・予約、ナインアーチブリッジの見どころ、エッラ観光を効率よく楽しむ専用車との組み合わせを解説します。",
  image: "/manus-storage/train-1_47ef775a.jpg",
  href: "/articles/sri-lanka-tea-train-nine-arch-bridge",
  category: "transport",
  readTime: "読了約10分",
};

function categoryFromSearch() {
  const query = new URLSearchParams(window.location.search);
  return query.get("category") || "transport";
}

export default function Articles() {
  const activeCategory = categoryFromSearch();
  const category = mediaCategories.find((item) => item.key === activeCategory) ?? mediaCategories[0];
  const articles = activeCategory === "transport" ? [teaTrainArticle, airportTransferArticle, taxiCharterArticle, transportArticle] : [];

  useEffect(() => {
    document.title = `スリランカ旅行 ${category.label}｜スリランカ タクシーチャーターおすすめ3選`;
  }, [category.label]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A1520", color: "#F0F4F8" }}>
      <MediaHeader activeCategory={category.key} />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-3xl mb-12">
          <span className="font-montserrat text-[10px] font-bold tracking-[0.24em] uppercase block mb-4" style={{ color: "#E8732A" }}>TRAVEL KNOWLEDGE</span>
          <h1 className="font-serif-jp text-4xl md:text-5xl font-semibold text-white mb-5">{category.label}</h1>
          <p className="font-sans text-sm md:text-base leading-8" style={{ color: "#B8C5D0" }}>
            スリランカを自分らしく旅するための実用ガイドです。旅のスタイルに合う移動方法を知り、行きたい場所へ無理なく進める計画をつくりましょう。
          </p>
        </div>

        {articles.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {articles.map((article) => (
              <Link key={article.href} href={article.href} className="group border overflow-hidden transition-colors hover:border-orange-300/60" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "#0F1D2A" }}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-4 text-[10px] font-montserrat font-bold tracking-[0.16em]" style={{ color: "#E8732A" }}>
                    <span>移動手段</span><span className="h-px w-6" style={{ backgroundColor: "rgba(232,115,42,0.65)" }} /><span style={{ color: "#91A1AE" }}>{article.readTime}</span>
                  </div>
                  <h2 className="font-serif-jp text-xl md:text-2xl font-bold leading-relaxed text-white mb-4">{article.title}</h2>
                  <p className="font-sans text-sm leading-7 mb-6" style={{ color: "#B8C5D0" }}>{article.description}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-montserrat font-bold tracking-[0.12em]" style={{ color: "#F1A368" }}>記事を読む <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl border px-7 py-12 text-center" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}>
            <BookOpen size={28} className="mx-auto mb-4" style={{ color: "#E8732A" }} />
            <h2 className="font-serif-jp text-xl font-bold text-white mb-3">このカテゴリーの記事を準備しています</h2>
            <p className="font-sans text-sm leading-7" style={{ color: "#B8C5D0" }}>まずは「移動手段」の記事から公開しています。新しい記事は順次追加します。</p>
          </div>
        )}
      </main>
    </div>
  );
}
