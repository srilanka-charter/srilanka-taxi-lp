/**
 * Design system: dark editorial travel journal with warm orange accents.
 * This component forms a hub-and-spoke internal-link network: every detailed guide points to the transport hub, and the hub distributes readers to all detailed guides.
 */
import { ArrowRight, Compass } from "lucide-react";
import { Link } from "wouter";

type TransportArticleId = "hub" | "charter" | "airport" | "tea-train" | "bus" | "tuk-tuk" | "uber" | "pickme";

type TransportArticle = {
  id: Exclude<TransportArticleId, "hub">;
  title: string;
  label: string;
  description: string;
  href: string;
};

const transportHub = {
  title: "スリランカの移動手段は何が正解？列車・トゥクトゥク・ローカルバス・専用車を比較",
  href: "/articles/sri-lanka-transport-guide",
};

const articles: TransportArticle[] = [
  { id: "charter", label: "PRIVATE CHARTER", title: "スリランカのタクシーチャーターとは？料金・使い方・選び方を個人旅行向けに解説", description: "専用車を使う場面、料金の見方、予約前の確認ポイントを知りたい方へ。", href: "/articles/sri-lanka-taxi-charter-guide" },
  { id: "airport", label: "AIRPORT TRANSFER", title: "スリランカで空港送迎は必要？コロンボ空港からホテルまでの移動方法を比較", description: "到着初日の移動を、空港タクシー・配車アプリ・専用車で比較します。", href: "/articles/colombo-airport-transfer-guide" },
  { id: "tea-train", label: "SCENIC TRAIN", title: "スリランカ紅茶列車の乗り方・予約・ナインアーチブリッジ完全ガイド", description: "列車の予約とエッラ周辺の移動を、旅程に合わせて計画したい方へ。", href: "/articles/sri-lanka-tea-train-nine-arch-bridge" },
  { id: "bus", label: "LONG-DISTANCE BUS", title: "スリランカの長距離バス完全ガイド｜乗り方・料金・注意点", description: "ローカルバス・高速バスの使い方と、専用車との選び方を解説します。", href: "/articles/sri-lanka-long-distance-bus-guide" },
  { id: "tuk-tuk", label: "TUK-TUK", title: "スリランカのトゥクトゥク完全ガイド｜乗り方・料金・安全な使い方", description: "町なかの短距離移動を、無理なく楽しむための実践ガイドです。", href: "/articles/sri-lanka-tuk-tuk-guide" },
  { id: "uber", label: "UBER", title: "スリランカでUBERは実用的？都市間移動も可能？", description: "Uberのメリットと、都市間・長距離利用で確認したい条件を整理します。", href: "/articles/sri-lanka-uber-guide" },
  { id: "pickme", label: "PICKME", title: "スリランカのPickMe完全ガイド｜使い方・Uber比較・都市間移動での注意点", description: "現地発の配車アプリを、短距離移動で活用するための基本をまとめます。", href: "/articles/sri-lanka-pickme-guide" },
];

const relatedByArticle: Record<Exclude<TransportArticleId, "hub">, TransportArticle["id"][]> = {
  charter: ["airport", "tea-train", "uber"],
  airport: ["charter", "uber", "pickme"],
  "tea-train": ["charter", "bus", "airport"],
  bus: ["uber", "charter", "tuk-tuk"],
  "tuk-tuk": ["pickme", "uber", "bus"],
  uber: ["pickme", "charter", "airport"],
  pickme: ["uber", "tuk-tuk", "airport"],
};

export function TransportRelatedLinks({ current }: { current: TransportArticleId }) {
  const isHub = current === "hub";
  const shownArticles = isHub ? articles : articles.filter((article) => relatedByArticle[current].includes(article.id));

  return (
    <section className="mt-16 md:mt-20 border-t pt-10 md:pt-12" aria-labelledby="transport-related-title" style={{ borderColor: "rgba(255,255,255,0.16)" }}>
      <div className="flex items-start gap-4 mb-7">
        <div className="mt-0.5 p-2 border" style={{ borderColor: "rgba(232,115,42,0.55)", color: "#E8732A" }}><Compass size={17} /></div>
        <div>
          <span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#E8732A" }}>CONTINUE PLANNING</span>
          <h2 id="transport-related-title" className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-2">{isHub ? "移動手段を、もう一歩深く知る" : "次に読む：移動手段を旅程に合わせて選ぶ"}</h2>
        </div>
      </div>
      {isHub ? (
        <p className="font-sans text-sm md:text-base leading-8 mb-7" style={{ color: "#B8C5D0" }}>この比較記事を起点に、列車・バス・配車アプリ・専用車をそれぞれ深掘りできます。旅程で迷う場所から、詳しいガイドへ進んでください。</p>
      ) : (
        <Link href={transportHub.href} className="group block border p-5 md:p-6 mb-5 transition-colors hover:border-orange-300/70" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(105deg, rgba(232,115,42,0.12), rgba(255,255,255,0.025))" }}>
          <div className="flex items-start justify-between gap-5">
            <div><span className="font-montserrat text-[10px] font-bold tracking-[0.2em]" style={{ color: "#F1A368" }}>TRANSPORT HUB</span><h3 className="font-serif-jp text-lg md:text-xl font-bold leading-8 text-white mt-2">まずは全体を比較する<br />「スリランカの移動手段は何が正解？」</h3><p className="font-sans text-sm leading-7 mt-2" style={{ color: "#B8C5D0" }}>列車・バス・トゥクトゥク・配車アプリ・専用車を、移動距離と旅の目的から比較する総合ガイドです。</p></div><ArrowRight size={19} className="shrink-0 mt-2 transition-transform group-hover:translate-x-1" style={{ color: "#E8732A" }} /></div>
        </Link>
      )}
      <div className={isHub ? "grid md:grid-cols-2 gap-4" : "grid md:grid-cols-3 gap-4"}>
        {shownArticles.map((article) => <Link key={article.id} href={article.href} className="group border p-5 transition-colors hover:border-orange-300/60" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}>
          <span className="font-montserrat text-[9px] font-bold tracking-[0.17em]" style={{ color: "#E8732A" }}>{article.label}</span>
          <h3 className="font-serif-jp text-base font-bold leading-7 text-white mt-3">{article.title}</h3>
          <p className="font-sans text-xs leading-6 mt-3" style={{ color: "#AAB8C2" }}>{article.description}</p>
          <span className="inline-flex items-center gap-2 mt-4 font-montserrat text-[10px] font-bold tracking-[0.13em]" style={{ color: "#F1A368" }}>詳しく読む <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></span>
        </Link>)}
      </div>
    </section>
  );
}
