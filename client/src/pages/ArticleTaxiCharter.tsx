/**
 * Design system: dark editorial travel journal with warm orange calls to action.
 * This article turns price information into trip-planning context, then routes readers to the neutral comparison page.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CalendarDays, CarFront, Check, MapPinned, ShieldCheck, Users } from "lucide-react";
import { MediaHeader } from "@/components/MediaHeader";

const ARTICLE_TITLE = "スリランカのタクシーチャーターとは？料金・使い方・選び方を個人旅行向けに解説";

const images = {
  hero: "/manus-storage/charter-3_51d499c2.png",
  van: "/manus-storage/charter-1_ee4f51c5.png",
  safari: "/manus-storage/charter-2_527a7d47.png",
};

const faqs = [
  {
    question: "スリランカのタクシーチャーターとは何ですか？",
    answer: "旅行者専用の車とドライバーを、空港送迎・半日・1日・複数日といった単位で手配するサービスです。公共交通だけでは組みにくい都市間移動や、複数の観光地を同日に回る旅程で使われます。",
  },
  {
    question: "スリランカのタクシーチャーター料金はいくらですか？",
    answer: "ランカミーの料金目安では1日15,000円（税込）〜、5日間のSEDANチャーターは77,000円（税込）〜と案内されています。日数、車種、走行距離、季節、希望するドライバーや旅程によって変わるため、予約前に総額と含まれる内容を確認しましょう。",
  },
  {
    question: "チャーター料金には何が含まれますか？",
    answer: "含まれる項目はサービスとプランで異なります。車両・ドライバー・旅程相談・観光地同行・日本語サポート・アクティビティ手配などについて、見積もり時に対象範囲を確認することが大切です。",
  },
  {
    question: "列車やトゥクトゥクと組み合わせてもよいですか？",
    answer: "もちろんです。列車は景観を楽しむ区間、トゥクトゥクは町の短距離、専用車は空港送迎や都市間移動というように、役割を分けると個人旅行の自由度と安心感を両立しやすくなります。",
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

function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure>
      <div className="h-64 md:h-80 overflow-hidden" style={{ backgroundColor: "#132434" }}>
        <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <figcaption className="mt-2 text-[11px] leading-relaxed" style={{ color: "#8EA0AE" }}>{caption}</figcaption>
    </figure>
  );
}

export default function ArticleTaxiCharter() {
  useEffect(() => {
    document.title = "スリランカ タクシーチャーターとは？料金・使い方・選び方を解説";
    const description = "スリランカのタクシーチャーターとは？個人旅行での使い方、料金目安、車種・日数・プランの選び方、予約時の確認ポイントを分かりやすく解説します。";
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
    keywords.content = "スリランカ タクシーチャーター,スリランカ カーチャーター,スリランカ タクシー 料金,スリランカ 個人旅行,スリランカ 専用車";

    let canonical = document.getElementById("article-canonical") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.id = "article-canonical";
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://srilankataxicharter.com/articles/sri-lanka-taxi-charter-guide";

    const scriptId = "article-charter-jsonld";
    document.getElementById(scriptId)?.remove();
    const jsonLd = document.createElement("script");
    jsonLd.id = scriptId;
    jsonLd.type = "application/ld+json";
    jsonLd.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Article", headline: ARTICLE_TITLE, description, mainEntityOfPage: canonical.href, inLanguage: "ja", about: ["スリランカ", "タクシーチャーター", "個人旅行"] },
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
          <img src={images.hero} alt="シーギリヤロックを背景にしたスリランカの専用車チャーター" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,16,26,0.95) 0%, rgba(7,16,26,0.74) 50%, rgba(7,16,26,0.18) 100%), linear-gradient(0deg, #0A1520 0%, transparent 38%)" }} />
          <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 min-h-[inherit] flex items-end pb-16 md:pb-20">
            <div className="max-w-3xl">
              <Link href="/articles?category=transport" className="inline-flex items-center gap-2 mb-8 text-xs font-montserrat font-bold tracking-[0.12em] hover:text-white" style={{ color: "#B8C5D0" }}>
                <ArrowLeft size={14} /> 移動手段の記事一覧へ
              </Link>
              <div className="flex items-center gap-3 mb-5"><span className="h-px w-12" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.24em]" style={{ color: "#F1A368" }}>PRIVATE CHARTER GUIDE · 02</span></div>
              <h1 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.35] text-white mb-5">{ARTICLE_TITLE}</h1>
              <p className="font-sans text-sm md:text-base leading-8 max-w-2xl" style={{ color: "#D5E0E7" }}>移動を予約するだけで、旅程の自由度は大きく変わります。空港からの送迎、世界遺産の周遊、山岳部への移動まで。専用車を上手に使うための基礎をまとめました。</p>
              <div className="flex items-center gap-4 mt-7 text-[11px] font-montserrat tracking-[0.1em]" style={{ color: "#B8C5D0" }}><span>移動手段</span><span className="h-px w-5 bg-white/30" /><span>読了約9分</span></div>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <div className="border-b py-9 md:py-11" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            <p className="font-serif-jp text-lg md:text-xl leading-9" style={{ color: "#DCE6EC" }}>スリランカのタクシーチャーターとは、専用の車とドライバーを手配し、自分の旅程に合わせて移動する方法です。公共交通だけではつなぎにくい場所、荷物がある日、複数の観光地を回りたい日ほど、その良さを実感しやすい選択肢です。</p>
            <p className="font-serif-jp text-lg md:text-xl leading-9 mt-5" style={{ color: "#DCE6EC" }}>列車やトゥクトゥクを楽しむ旅とも相性がよく、「すべてを車にする」のではなく、必要な日に組み合わせることで、個人旅行の自由と安心感を両立できます。</p>
          </div>

          <Heading label="THE SHORT ANSWER">まずは結論：タクシーチャーターは、移動日を旅の時間に変える手段</Heading>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              [<MapPinned size={20} />, "複数の場所を一日でつなぐ", "空港、ホテル、遺跡、レストラン、次の宿泊地を、乗り換えを挟まずにつなげます。"],
              [<CalendarDays size={20} />, "旅程に合わせて時間を使える", "出発時刻や立ち寄り先を相談できるため、旅程に余白をつくりやすくなります。"],
              [<Users size={20} />, "人数・荷物に合わせて車種を選べる", "SEDAN、VAN、BIG VANなどから、人数やスーツケースの量に合う車両を検討できます。"],
              [<ShieldCheck size={20} />, "知らない土地の不安を減らす", "到着日や長距離の日に事前手配をしておくと、現地で移動手段を探す負担を抑えられます。"],
            ].map(([icon, title, text]) => (
              <div key={title as string} className="border p-5 md:p-6" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}>
                <div className="mb-4" style={{ color: "#E8732A" }}>{icon}</div>
                <h2 className="font-serif-jp text-lg font-bold text-white mb-2">{title}</h2>
                <p className="font-sans text-sm leading-7" style={{ color: "#B8C5D0" }}>{text}</p>
              </div>
            ))}
          </div>

          <Heading label="PRICE GUIDE">スリランカのタクシーチャーター料金の目安</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>料金は、日数・車種・走行距離・季節・ドライバー・旅程によって変わります。ここでは、ランカミーが案内する料金を参考に、予算を考えるための起点を紹介します。最終的な金額は、希望のルートと見積もり内容で確認してください。</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-7">
            <div className="border p-6 md:p-7" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(135deg, rgba(232,115,42,0.16), rgba(15,29,42,0.7))" }}>
              <span className="font-montserrat text-[10px] font-bold tracking-[0.18em]" style={{ color: "#F1A368" }}>STARTING FROM</span>
              <div className="font-serif-jp text-3xl md:text-4xl font-bold text-white mt-4">15,000円<span className="text-base ml-1">（税込）〜/日</span></div>
              <p className="font-sans text-sm leading-7 mt-4" style={{ color: "#CBD8E0" }}>短い旅程や送迎を含む場合も、まずは日数と希望車種を伝えて見積もりを確認します。</p>
            </div>
            <div className="border p-6 md:p-7" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(15,29,42,0.7))" }}>
              <span className="font-montserrat text-[10px] font-bold tracking-[0.18em]" style={{ color: "#F1A368" }}>MULTI-DAY EXAMPLE</span>
              <div className="font-serif-jp text-3xl md:text-4xl font-bold text-white mt-4">77,000円<span className="text-base ml-1">（税込）〜</span></div>
              <p className="font-sans text-sm leading-7 mt-4" style={{ color: "#CBD8E0" }}>5日チャーター（SEDAN）の目安です。日数が増えるほど、1日あたりの料金を抑えやすいと案内されています。[1]</p>
            </div>
          </div>
          <div className="mt-5 border-l-2 pl-5 py-1" style={{ borderColor: "#E8732A" }}>
            <p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>料金だけで決めず、見積もりに何が含まれているか、観光地での対応、連絡方法、キャンセル条件まで確認することが大切です。同じ「5日間」でも、走る距離、立ち寄り数、車種、プランによって内容は変わります。</p>
          </div>

          <Heading label="WHEN TO USE">どんな日にタクシーチャーターが役立つ？</Heading>
          <div className="space-y-4">
            {[
              ["空港から最初のホテルへ向かう日", "慣れない到着日や夜の移動は、事前に送迎を決めておくと、到着後の手配を減らせます。"],
              ["都市をまたいで移動する日", "コロンボ、シーギリヤ、キャンディ、エッラ、ゴールなどを周遊する場合、ホテル移動と観光を一日に組み込みやすくなります。"],
              ["世界遺産・サファリを組み合わせる日", "遺跡、食事、サファリの集合場所など、移動と体験を一つの流れにしたい日に向いています。"],
              ["家族旅行・荷物が多い日", "子どもの休憩、スーツケース、移動中の食事などに合わせて進められるため、旅程に余白をつくれます。"],
            ].map(([title, text], index) => (
              <div key={title} className="grid md:grid-cols-[44px_1fr] gap-4 border-b pb-5" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                <span className="font-montserrat text-xs font-bold tracking-[0.14em] pt-1" style={{ color: "#E8732A" }}>0{index + 1}</span>
                <div><h2 className="font-serif-jp text-lg font-bold text-white mb-2">{title}</h2><p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{text}</p></div>
              </div>
            ))}
          </div>

          <Heading label="VEHICLE & PLAN">人数・旅の深さに合わせて、車種とプランを考える</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>ランカミーでは、SEDAN（〜3人）、VAN（3〜6人）、BIG VAN（6〜9人）が案内されています。人数だけでなく、スーツケースの数、チャイルドシートの要否、山岳部の荷物量、サファリを含むかどうかも伝えて、余裕のある車種を選びましょう。[1]</p>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <ArticleImage src={images.van} alt="スリランカの個人旅行で使えるシルバーのバン" caption="人数と荷物に合わせて、余裕のある車種を選びます。" />
            <ArticleImage src={images.safari} alt="サファリ体験へ向かうスリランカの旅行者" caption="移動とアクティビティをつなぐ日にも、専用車が役立ちます。" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-7">
            {[
              ["STANDARD", "移動中心", "送迎・移動を中心に組み立てたい人向け。"],
              ["PLATINUM", "観光の説明も重視", "観光地への同行や説明、手厚い相談を求める人向け。"],
              ["ROYAL", "上位の体験を重視", "ドライバーや旅の質にこだわりたい人向け。"],
            ].map(([label, title, text]) => (
              <div key={label} className="border p-5" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}>
                <span className="font-montserrat text-[9px] font-bold tracking-[0.16em]" style={{ color: "#E8732A" }}>{label}</span>
                <h2 className="font-serif-jp font-bold text-white mt-3 mb-2">{title}</h2>
                <p className="font-sans text-sm leading-7" style={{ color: "#B8C5D0" }}>{text}</p>
              </div>
            ))}
          </div>

          <Heading label="HOW TO BOOK">予約前に確認したい6つのこと</Heading>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>
            {[
              "旅の開始日・終了日と、到着／出発の航空便。",
              "行きたい都市・観光地・アクティビティ。",
              "人数、子どもの年齢、スーツケースの数。",
              "希望する車種と、観光地での説明の要否。",
              "料金に含まれる項目と、追加費用の条件。",
              "連絡方法、キャンセル条件、緊急時のサポート。",
            ].map((item) => (
              <div key={item} className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />{item}</div>
            ))}
          </div>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-7" style={{ color: "#C7D3DB" }}>行きたい場所がすべて決まっていなくても問題ありません。大まかな日数と興味がある体験を伝え、移動時間や道路事情を踏まえた旅程を相談することで、無理のないルートに整えやすくなります。</p>

          <Heading label="MAKE THE BEST OF BOTH">列車・トゥクトゥクと組み合わせると、旅はもっと自由になる</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>タクシーチャーターは、列車やトゥクトゥクを置き換えるためだけのものではありません。紅茶列車を楽しむ区間は列車に乗り、駅まで・駅からの移動を専用車でつなぐ。町なかはトゥクトゥクで寄り道し、都市間や荷物がある日は専用車に任せる。このように役割を分けると、旅の楽しさと実用性を両立できます。</p>
          <Link href="/articles/sri-lanka-transport-guide" className="inline-flex items-center gap-2 mt-6 font-montserrat text-xs font-bold tracking-[0.1em]" style={{ color: "#F1A368" }}>移動手段の使い分けを詳しく読む <ArrowRight size={14} /></Link>

          <Heading label="FAQ">スリランカのタクシーチャーターでよくある質問</Heading>
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
              <div className="flex items-center gap-3 mb-4"><span className="h-px w-10" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>PLAN YOUR JOURNEY</span></div>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed">旅程と料金を見比べて、<br />自分に合う1台を選ぼう。</h2>
              <p className="font-sans text-sm md:text-base leading-8 mt-5" style={{ color: "#D7E1E7" }}>料金の分かりやすさ、日本語対応、ドライバー品質、キャンセル条件を比較し、スリランカ個人旅行に合うタクシーチャーターを選びませんか。</p>
              <a href="/#ranking" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} /></a>
            </div>
          </section>

          <section className="mt-14 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            <h2 className="font-serif-jp text-lg font-bold text-white mb-4">参考情報</h2>
            <ol className="space-y-2 font-sans text-xs leading-6" style={{ color: "#9BAAB5" }}>
              <li>[1] <a className="underline underline-offset-4 hover:text-white" href="https://srilankataxicharterservice.com/ja/" target="_blank" rel="noopener noreferrer">ランカミー（LankaMe）公式サイト：料金・車種・サービス案内</a></li>
              <li>[2] <a className="underline underline-offset-4 hover:text-white" href="https://srilankataxicharterservice.com/ja/lankame-plan/" target="_blank" rel="noopener noreferrer">ランカミー：スタンダード・プラチナ・ロイヤルプランの違い</a></li>
            </ol>
          </section>
        </article>
      </main>
    </div>
  );
}
