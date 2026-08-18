/**
 * Design system: dark editorial travel media with an emphasis on transparent, readable information hierarchy.
 * This page documents comparison criteria and commercial disclosure without competing with the service-comparison CTA.
 */
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Check, FileText, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { MediaHeader } from "@/components/MediaHeader";

const title = "比較方針・掲載基準｜スリランカタクシーチャーター比較";
const description = "スリランカタクシーチャーター比較サイトの比較方針、掲載基準、情報更新、広告・送客関係に関する考え方を公開します。";

export default function EditorialPolicy() {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = description;
    let canonical = document.getElementById("policy-canonical") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.id = "policy-canonical"; canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://srilankataxicharter.com/editorial-policy";
  }, []);

  return <div className="min-h-screen" style={{ backgroundColor: "#0A1520", color: "#F0F4F8" }}>
    <MediaHeader />
    <main className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <Link href="/" className="inline-flex items-center gap-2 text-xs font-montserrat font-bold tracking-[0.12em] hover:text-white" style={{ color: "#B8C5D0" }}><ArrowLeft size={14} /> 比較トップへ戻る</Link>
      <section className="mt-10 border-b pb-12" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
        <span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#E8732A" }}>EDITORIAL POLICY</span>
        <h1 className="font-serif-jp text-3xl md:text-5xl font-semibold leading-[1.35] text-white mt-4">比較方針・掲載基準</h1>
        <p className="font-serif-jp text-lg md:text-xl leading-9 mt-6" style={{ color: "#DCE6EC" }}>当サイトは、スリランカを個人旅行する方が、専用車による移動を検討する際に必要な情報を比較・整理するためのメディアです。比較の考え方と掲載情報の扱いを明示します。</p>
      </section>

      <section className="mt-14 md:mt-16">
        <div className="flex gap-4"><div className="mt-1 p-2 border h-fit" style={{ borderColor: "rgba(232,115,42,0.5)", color: "#E8732A" }}><FileText size={18} /></div><div><h2 className="font-serif-jp text-2xl font-bold text-white">比較の基準</h2><p className="font-sans text-[15px] leading-8 mt-4" style={{ color: "#C7D3DB" }}>掲載サービスは、旅行者が事前に確認しやすい情報を中心に比較します。順位や紹介順は、単一の指標だけで決めず、公開情報の確認しやすさと、個人旅行での利用場面を総合して編集しています。</p></div></div>
        <div className="grid md:grid-cols-2 gap-4 mt-8">{["料金・見積もりの分かりやすさ", "車種・対応エリア・利用日数の選びやすさ", "予約前に確認できる条件とキャンセルに関する案内", "日本語対応を含む旅行者向けの案内の明確さ", "公式サイト等で公開されている連絡先・利用情報"].map((item) => <div key={item} className="border px-5 py-4 flex gap-3" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}><Check size={16} className="shrink-0 mt-1" style={{ color: "#E8732A" }} /><span className="font-sans text-sm leading-7" style={{ color: "#D5E0E7" }}>{item}</span></div>)}</div>
      </section>

      <section className="mt-16 md:mt-20 border-l-2 pl-6 md:pl-8" style={{ borderColor: "#E8732A" }}>
        <h2 className="font-serif-jp text-2xl font-bold text-white">掲載サービスとの関係とご利用前の確認</h2>
        <p className="font-sans text-[15px] leading-8 mt-5" style={{ color: "#C7D3DB" }}>当サイトは、掲載するタクシーチャーターサービスに関係する運営者によって制作・運営されています。そのため、掲載内容はサービス選びの参考情報として整理しつつ、利用を決める前には、各サービスの公式サイトで料金、車種、含まれる内容、予約条件、キャンセル条件を必ずご確認ください。</p>
        <p className="font-sans text-[15px] leading-8 mt-5" style={{ color: "#C7D3DB" }}>外部リンク先での予約・契約は、各サービスの条件に基づきます。当サイトでは、旅程や人数、ドライバー言語、時期によって変動する可能性がある情報を、確定価格・確定条件として保証するものではありません。</p>
      </section>

      <section className="mt-16 md:mt-20">
        <div className="flex gap-4"><div className="mt-1 p-2 border h-fit" style={{ borderColor: "rgba(232,115,42,0.5)", color: "#E8732A" }}><ShieldCheck size={18} /></div><div><h2 className="font-serif-jp text-2xl font-bold text-white">情報の更新と訂正</h2><p className="font-sans text-[15px] leading-8 mt-4" style={{ color: "#C7D3DB" }}>料金、サービス内容、運行条件は変更される場合があります。記事の内容は公開情報をもとに見直しますが、渡航前・予約前には必ず公式情報を確認してください。内容の訂正・更新が必要な場合は、各サービスの公式案内を優先して反映します。</p></div></div>
      </section>

      <section className="mt-16 md:mt-20 relative overflow-hidden border p-7 md:p-10" style={{ borderColor: "rgba(232,115,42,0.5)", background: "linear-gradient(110deg, rgba(232,115,42,0.16), rgba(9,22,34,0.65)), #102132" }}>
        <span className="font-montserrat text-[10px] font-bold tracking-[0.2em]" style={{ color: "#F1A368" }}>COMPARE BEFORE YOU BOOK</span>
        <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed mt-3">条件を比べて、<br />自分の旅程に合う一台を選ぶ。</h2>
        <Link href="/#ranking" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white" style={{ backgroundColor: "#E8732A" }}>タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} /></Link>
      </section>
    </main>
  </div>;
}
