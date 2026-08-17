/**
 * Design system: dark editorial travel journal with warm orange calls to action.
 * This article compares arrival-day choices without forcing a single answer, and positions pre-booked charter as the reliable option for higher-stakes arrivals.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CarFront, Check, Clock3, MapPinned, ShieldCheck } from "lucide-react";
import { MediaHeader } from "@/components/MediaHeader";

const ARTICLE_TITLE = "スリランカで空港送迎は必要？コロンボ空港からホテルまでの移動方法を比較";

const images = {
  hero: "/manus-storage/article-airport-transfer-hero_fd800259.jpg",
  luggage: "/manus-storage/article-airport-transfer-luggage_acbf095c.jpg",
};

const faqs = [
  {
    question: "コロンボ空港からホテルまで、空港送迎は必要ですか？",
    answer: "必須ではありません。コロンボやニゴンボへの単純な片道なら空港公式タクシーや配車アプリも選択肢です。ただし、深夜到着、家族旅行、大きな荷物がある場合、コロンボ以外へ直行する場合、到着後すぐの手配に不安がある場合は、事前予約の送迎が安心です。",
  },
  {
    question: "バンダラナイケ国際空港ではタクシーを当日利用できますか？",
    answer: "空港公式の案内では、到着ロビーと到着車寄せにタクシーカウンターがあり、当日の手配が可能です。出発前に目的地・総額・追加料金の条件を確認して利用しましょう。",
  },
  {
    question: "コロンボ空港からシーギリヤやキャンディへ直接行けますか？",
    answer: "空港から直接向かう旅程は組めますが、目的地が遠方の場合は到着時刻、休憩、荷物、翌日の予定まで考えて移動手段を決めることが大切です。到着日から周遊を始める場合は、事前予約の専用車が旅程を組みやすい選択肢になります。",
  },
  {
    question: "空港送迎を予約するとき、何を伝えればよいですか？",
    answer: "航空便名と到着予定時刻、宿泊先、人数、荷物の数、希望車種、子ども連れかどうかを伝えましょう。合流場所、待機ルール、連絡方法、料金に含まれる項目も確認すると安心です。",
  },
];

function Heading({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-16 mb-7 md:mt-20">
      <span className="font-montserrat text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: "#E8732A" }}>{label}</span>
      <h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{children}</h2>
    </div>
  );
}

export default function ArticleAirportTransfer() {
  useEffect(() => {
    document.title = "スリランカで空港送迎は必要？コロンボ空港からホテルまでの移動方法を比較";
    const description = "コロンボ空港（バンダラナイケ国際空港）からホテルまでの移動方法を比較。空港タクシー、配車アプリ、ホテル送迎、事前予約の専用車の違いと、深夜便・家族旅行・初スリランカでの選び方を解説します。";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    let keywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.name = "keywords";
      document.head.appendChild(keywords);
    }
    keywords.content = "スリランカ 空港送迎,コロンボ空港 ホテル 移動,コロンボ空港 タクシー,バンダラナイケ国際空港 送迎,スリランカ タクシーチャーター";

    let canonical = document.getElementById("article-canonical") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.id = "article-canonical";
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://srilankataxicharter.com/articles/colombo-airport-transfer-guide";

    const scriptId = "article-airport-transfer-jsonld";
    document.getElementById(scriptId)?.remove();
    const jsonLd = document.createElement("script");
    jsonLd.id = scriptId;
    jsonLd.type = "application/ld+json";
    jsonLd.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Article", headline: ARTICLE_TITLE, description, mainEntityOfPage: canonical.href, inLanguage: "ja", about: ["スリランカ", "空港送迎", "コロンボ空港", "個人旅行"] },
        { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      ],
    });
    document.head.appendChild(jsonLd);
    return () => document.getElementById(scriptId)?.remove();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A1520", color: "#F0F4F8" }}>
      <MediaHeader activeCategory="transport" />
      <main>
        <section className="relative overflow-hidden" style={{ minHeight: "min(680px, 78svh)" }}>
          <img src={images.hero} alt="バンダラナイケ国際空港で旅行者を迎える専用車送迎" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,16,26,0.95) 0%, rgba(7,16,26,0.74) 48%, rgba(7,16,26,0.15) 100%), linear-gradient(0deg, #0A1520 0%, transparent 38%)" }} />
          <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 min-h-[inherit] flex items-end pb-16 md:pb-20">
            <div className="max-w-3xl">
              <Link href="/articles?category=transport" className="inline-flex items-center gap-2 mb-8 text-xs font-montserrat font-bold tracking-[0.12em] hover:text-white" style={{ color: "#B8C5D0" }}>
                <ArrowLeft size={14} /> 移動手段の記事一覧へ
              </Link>
              <div className="flex items-center gap-3 mb-5"><span className="h-px w-12" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.24em]" style={{ color: "#F1A368" }}>AIRPORT TRANSFER GUIDE · 04</span></div>
              <h1 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.35] text-white mb-5">{ARTICLE_TITLE}</h1>
              <p className="font-sans text-sm md:text-base leading-8 max-w-2xl" style={{ color: "#D5E0E7" }}>長時間のフライトを終えた到着日。空港からホテルまでをどうつなぐかで、スリランカ個人旅行の最初の安心感は変わります。</p>
              <div className="flex items-center gap-4 mt-7 text-[11px] font-montserrat tracking-[0.1em]" style={{ color: "#B8C5D0" }}><span>移動手段</span><span className="h-px w-5 bg-white/30" /><span>読了約8分</span></div>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <div className="border-b py-9 md:py-11" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            <p className="font-serif-jp text-lg md:text-xl leading-9" style={{ color: "#DCE6EC" }}>スリランカで空港送迎は、全員に必須というわけではありません。コロンボやニゴンボへの単純な片道移動なら、空港タクシーや配車アプリでも対応できます。</p>
            <p className="font-serif-jp text-lg md:text-xl leading-9 mt-5" style={{ color: "#DCE6EC" }}>ただし、初めてのスリランカ、深夜・早朝の到着、家族旅行、大きな荷物がある日、到着後すぐに遠方へ向かう日には、事前に送迎を確保する価値が高まります。大切なのは「タクシーか送迎か」ではなく、到着日の条件に合う方法を選ぶことです。</p>
          </div>

          <Heading label="THE SHORT ANSWER">まずは結論：到着日の条件で、空港送迎の必要度は変わる</Heading>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              [<Clock3 size={20} />, "深夜・早朝の到着", "空港でその場の手配をする負担を減らしたいなら、事前送迎が向いています。"],
              [<CarFront size={20} />, "コロンボ以外へ直行", "シーギリヤ、キャンディ、ゴールなどへ向かうなら、到着後の長距離移動を前もって組み立てると安心です。"],
              [<ShieldCheck size={20} />, "初めての個人旅行", "合流場所・料金・ホテルまでの動線を日本出発前に確認しておくと、到着後の判断が少なくなります。"],
              [<MapPinned size={20} />, "家族旅行・荷物が多い日", "人数と荷物に合う車を確保しておくと、移動の最初から余白をつくれます。"],
            ].map(([icon, title, text]) => (
              <div key={title as string} className="border p-5 md:p-6" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}>
                <div className="mb-4" style={{ color: "#E8732A" }}>{icon}</div>
                <h2 className="font-serif-jp text-lg font-bold text-white mb-2">{title}</h2>
                <p className="font-sans text-sm leading-7" style={{ color: "#B8C5D0" }}>{text}</p>
              </div>
            ))}
          </div>

          <Heading label="OPTIONS">コロンボ空港からホテルまでの移動方法を比較</Heading>
          <div className="overflow-x-auto border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <table className="w-full min-w-[760px] text-left">
              <thead style={{ backgroundColor: "rgba(232,115,42,0.12)" }}>
                <tr className="font-montserrat text-[11px] tracking-[0.12em]" style={{ color: "#F1A368" }}><th className="px-5 py-4">手段</th><th className="px-5 py-4">手配のタイミング</th><th className="px-5 py-4">向くケース</th><th className="px-5 py-4">確認したいこと</th></tr>
              </thead>
              <tbody className="font-sans text-sm" style={{ color: "#D7E0E6" }}>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">空港公式タクシー</td><td className="px-5 py-4">到着後にカウンター</td><td className="px-5 py-4">コロンボ・ニゴンボへの片道</td><td className="px-5 py-4">目的地、総額、追加料金の条件</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">配車アプリ</td><td className="px-5 py-4">到着後にアプリで手配</td><td className="px-5 py-4">都市部への短〜中距離</td><td className="px-5 py-4">通信環境、配車状況、乗車場所</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">ホテル送迎</td><td className="px-5 py-4">ホテルへ事前相談</td><td className="px-5 py-4">宿泊先が送迎に対応する場合</td><td className="px-5 py-4">料金、待ち合わせ、到着遅延時の対応</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold" style={{ color: "#F1A368" }}>事前予約の専用車</td><td className="px-5 py-4">出発前に予約</td><td className="px-5 py-4">深夜便・家族・遠方への直行・周遊開始日</td><td className="px-5 py-4">料金に含まれる内容、車種、連絡方法</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-6" style={{ color: "#C7D3DB" }}>バンダラナイケ国際空港には、到着ロビーと到着車寄せで手配できる空港タクシーサービスがあります。空港公式案内では、追加の走行距離や合意済みの旅程に含まれない追加降車に対する料金も案内されています。使う場合は、出発前に目的地と総額・追加条件を確認しましょう。[1]</p>

          <Heading label="ARRIVAL FLOW">到着からホテルまで：送迎を予約した場合の流れ</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>事前予約の送迎は、到着日を「交渉の日」ではなく「旅の始まりの日」に変えるための準備です。フライトの遅延に備えた連絡方法まで決めておくと、初めての到着でも落ち着いて進めます。</p>
          <div className="mt-7 border" style={{ borderColor: "rgba(232,115,42,0.42)", backgroundColor: "rgba(232,115,42,0.06)" }}>
            {[
              ["01", "予約時に到着情報を共有", "航空便名、到着予定時刻、人数、荷物、ホテル名を伝えます。"],
              ["02", "入国・荷物受取後に連絡", "空港Wi-FiやSIMなど、到着後に使う連絡手段をあらかじめ確認します。"],
              ["03", "指定の合流場所でドライバーと会う", "名前の表記、待ち合わせ場所、緊急連絡先を予約確認書で確認します。"],
              ["04", "ホテルへ、または次の目的地へ", "到着日から遠方へ移動する場合は、休憩や途中立ち寄りを含めて相談しておくと安心です。"],
            ].map(([number, title, text], index) => (
              <div key={number} className={`grid md:grid-cols-[54px_1fr] gap-3 px-5 py-5 ${index > 0 ? "border-t" : ""}`} style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                <span className="font-montserrat text-xs font-bold tracking-[0.16em]" style={{ color: "#E8732A" }}>{number}</span>
                <div><h2 className="font-serif-jp font-bold text-white mb-2">{title}</h2><p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{text}</p></div>
              </div>
            ))}
          </div>

          <Heading label="FOR WHOM">空港送迎を事前予約したい4つのケース</Heading>
          <div className="space-y-4">
            {[
              ["深夜・早朝に到着する", "到着直後の判断を減らしたい場合は、合流方法が決まっている送迎が向きます。"],
              ["子ども連れ・3人以上で移動する", "人数・荷物に合う車を先に確保し、到着後に複数台へ分かれるリスクを避けたい場合に便利です。"],
              ["コロンボ以外のホテルや観光地へ直行する", "ニゴンボ以外へ移動する日や、翌日の旅程を早く始めたい場合は、長距離を前提にした車の手配が役立ちます。"],
              ["英語での交渉や現地での手配に不安がある", "料金、連絡、日本語対応の有無を事前に確認し、到着後のストレスを減らせます。"],
            ].map(([title, text]) => (
              <div key={title} className="grid md:grid-cols-[230px_1fr] gap-3 border-l-2 py-4 pl-5" style={{ borderColor: "#E8732A" }}>
                <h2 className="font-serif-jp font-bold text-white">{title}</h2>
                <p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{text}</p>
              </div>
            ))}
          </div>

          <Heading label="LUGGAGE & COMFORT">荷物がある到着日こそ、車種と合流方法を確認する</Heading>
          <div className="grid md:grid-cols-[1.08fr_0.92fr] gap-7 items-start">
            <div>
              <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>スーツケースが多い、ベビーカーがある、複数人で同じホテルへ向かう。到着日には、移動時間だけでなく荷物をどう扱うかも旅の快適さを左右します。送迎を予約するなら、人数と荷物の数を正確に伝え、車種に余裕があるかを確認しましょう。</p>
              <ul className="space-y-3 mt-6 font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>
                <li className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />航空便名と到着予定時刻を伝える。</li>
                <li className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />人数、子どもの年齢、スーツケースの数を伝える。</li>
                <li className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />到着遅延時の連絡方法と待機ルールを確認する。</li>
                <li className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />料金に含まれる範囲と、追加料金の条件を確認する。</li>
              </ul>
            </div>
            <figure>
              <div className="h-64 md:h-80 overflow-hidden" style={{ backgroundColor: "#132434" }}><img src={images.luggage} alt="空港でスーツケースを専用車へ積み込む送迎ドライバー" className="w-full h-full object-cover" loading="lazy" /></div>
              <figcaption className="mt-2 text-[11px] leading-relaxed" style={{ color: "#8EA0AE" }}>人数と荷物に余裕のある車種を選ぶと、到着日の移動がスムーズです。</figcaption>
            </figure>
          </div>

          <Heading label="AIRPORT TO TOUR">空港送迎を、周遊旅行のスタートにする</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>スリランカの個人旅行では、空港からホテルへ行くだけでなく、到着後の移動をどう旅程へつなぐかが重要です。空港からニゴンボで一泊して翌日から周遊するのか、コロンボへ向かうのか、キャンディやシーギリヤ方面へ進むのかによって、最適な手段は変わります。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>列車を楽しむ日、トゥクトゥクで町をめぐる日、専用車で複数都市をつなぐ日を組み合わせると、移動の負担を抑えながら、スリランカらしい旅をつくれます。</p>
          <Link href="/articles/sri-lanka-transport-guide" className="inline-flex items-center gap-2 mt-6 font-montserrat text-xs font-bold tracking-[0.1em]" style={{ color: "#F1A368" }}>スリランカの移動手段を詳しく比較する <ArrowRight size={14} /></Link>

          <Heading label="FAQ">コロンボ空港送迎でよくある質問</Heading>
          <div className="divide-y border-y" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start gap-4 font-serif-jp font-bold text-white">
                  <span className="font-montserrat text-[10px] tracking-[0.16em] mt-1" style={{ color: "#E8732A" }}>Q{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1 leading-7">{faq.question}</span>
                  <span className="text-xl leading-none transition-transform group-open:rotate-45" style={{ color: "#E8732A" }}>+</span>
                </summary>
                <p className="font-sans text-sm leading-8 mt-4 pl-10" style={{ color: "#C7D3DB" }}>{faq.answer}</p>
              </details>
            ))}
          </div>

          <section className="relative overflow-hidden mt-16 md:mt-20 p-7 md:p-10 border" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(110deg, rgba(232,115,42,0.16), rgba(201,168,76,0.10) 48%, rgba(9,22,34,0.65)), #102132" }}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4"><span className="h-px w-10" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>START WITH CONFIDENCE</span></div>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed">到着日から迷わない。<br />自分に合う送迎・専用車を選ぼう。</h2>
              <p className="font-sans text-sm md:text-base leading-8 mt-5" style={{ color: "#D7E1E7" }}>料金の分かりやすさ、日本語対応、ドライバー品質、キャンセル条件を比べて、スリランカ個人旅行に合うタクシーチャーターを選びませんか。</p>
              <a href="/#ranking" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} /></a>
            </div>
          </section>

          <section className="mt-14 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            <h2 className="font-serif-jp text-lg font-bold text-white mb-4">参考情報</h2>
            <ol className="space-y-2 font-sans text-xs leading-6" style={{ color: "#9BAAB5" }}>
              <li>[1] <a className="underline underline-offset-4 hover:text-white" href="https://www.airport.lk/passenger_guide/getting_arround/taxi_service.php" target="_blank" rel="noopener noreferrer">Airport and Aviation Services (Sri Lanka)：バンダラナイケ国際空港 Taxi Service</a></li>
              <li>[2] <a className="underline underline-offset-4 hover:text-white" href="https://srilanka-charter.com/srilanka/airport/" target="_blank" rel="noopener noreferrer">スリランカ空港送迎完全ガイド｜コロンボ空港からホテル・観光地への安全な移動方法</a></li>
            </ol>
          </section>
        </article>
      </main>
    </div>
  );
}
