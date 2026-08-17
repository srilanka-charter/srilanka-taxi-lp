/**
 * Design system: dark editorial travel journal with warm orange calls to action.
 * Tuk-tuks are framed as a joyful short-range layer of a journey; charter supports days where distance, luggage and reliability matter.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Check, MapPinned, Smartphone, Users, WalletCards } from "lucide-react";
import { MediaHeader } from "@/components/MediaHeader";

const ARTICLE_TITLE = "スリランカのトゥクトゥク完全ガイド｜乗り方・料金・配車アプリ・安全な使い方";

const images = {
  hero: "/manus-storage/tuktuk-1_9860c65d.jpg",
  ride: "/manus-storage/tuktuk-2_008f101f.jpg",
  van: "/manus-storage/transport-van-thumb_7e18c597.png",
};

const faqs = [
  { question: "スリランカのトゥクトゥクは旅行者でも簡単に使えますか？", answer: "短距離の移動であれば旅行者も利用しやすい乗り物です。乗車前に目的地と料金を確認し、必要なら地図を見せると、初めてでもやり取りを進めやすくなります。" },
  { question: "トゥクトゥクの料金はいくらですか？", answer: "地域・車両・時間帯・メーターの有無で変わります。Sri Lanka Tourismは観光客向けトゥクトゥクについて、1km目Rs.50、その後Rs.30という案内を掲載していますが、参考目安として捉え、乗車前に料金を確認することを優先しましょう。" },
  { question: "トゥクトゥクは何人まで乗れますか？", answer: "人数だけでなく、スーツケースや買い物の量によって快適性が変わります。荷物が多い場合、子ども連れ、複数人で移動する場合は、車両を選べるタクシーや専用車を検討する方が安心です。" },
  { question: "トゥクトゥクと専用車はどう使い分ければよいですか？", answer: "町歩き・短距離・寄り道にはトゥクトゥク、空港送迎・都市間移動・荷物が多い日・複数の観光地を回る日には専用車が向いています。同じ旅行のなかで使い分けると、体験と効率を両立しやすくなります。" },
];

function Heading({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="mt-16 mb-7 md:mt-20"><span className="font-montserrat text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: "#E8732A" }}>{label}</span><h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{children}</h2></div>;
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return <figure><div className="h-64 md:h-80 overflow-hidden" style={{ backgroundColor: "#132434" }}><img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" /></div><figcaption className="mt-2 text-[11px] leading-relaxed" style={{ color: "#8EA0AE" }}>{caption}</figcaption></figure>;
}

export default function ArticleTukTuk() {
  useEffect(() => {
    document.title = "スリランカのトゥクトゥク完全ガイド｜乗り方・料金・配車アプリ・安全な使い方";
    const description = "スリランカのトゥクトゥクの乗り方、料金確認、配車アプリ、人数・荷物、安全な使い方を個人旅行者向けに解説。短距離移動と専用車の賢い使い分けも紹介します。";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = description;
    let keywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!keywords) { keywords = document.createElement("meta"); keywords.name = "keywords"; document.head.appendChild(keywords); }
    keywords.content = "スリランカ トゥクトゥク,スリランカ トゥクトゥク 料金,スリランカ トゥクトゥク 乗り方,スリランカ 配車アプリ,スリランカ タクシーチャーター";
    let canonical = document.getElementById("article-canonical") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.id = "article-canonical"; canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://srilankataxicharter.com/articles/sri-lanka-tuk-tuk-guide";
    const scriptId = "article-tuk-tuk-jsonld";
    document.getElementById(scriptId)?.remove();
    const jsonLd = document.createElement("script");
    jsonLd.id = scriptId;
    jsonLd.type = "application/ld+json";
    jsonLd.text = JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: ARTICLE_TITLE, description, mainEntityOfPage: canonical.href, inLanguage: "ja", about: ["スリランカ", "トゥクトゥク", "個人旅行"] }, { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] });
    document.head.appendChild(jsonLd);
    return () => document.getElementById(scriptId)?.remove();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A1520", color: "#F0F4F8" }}>
      <MediaHeader activeCategory="transport" />
      <main>
        <section className="relative overflow-hidden" style={{ minHeight: "min(680px, 78svh)" }}>
          <img src={images.hero} alt="スリランカの町を走るトゥクトゥク" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,16,26,0.95) 0%, rgba(7,16,26,0.74) 50%, rgba(7,16,26,0.18) 100%), linear-gradient(0deg, #0A1520 0%, transparent 38%)" }} />
          <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 min-h-[inherit] flex items-end pb-16 md:pb-20"><div className="max-w-3xl">
            <Link href="/articles?category=transport" className="inline-flex items-center gap-2 mb-8 text-xs font-montserrat font-bold tracking-[0.12em] hover:text-white" style={{ color: "#B8C5D0" }}><ArrowLeft size={14} /> 移動手段の記事一覧へ</Link>
            <div className="flex items-center gap-3 mb-5"><span className="h-px w-12" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.24em]" style={{ color: "#F1A368" }}>TUK-TUK GUIDE · 08</span></div>
            <h1 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.35] text-white mb-5">{ARTICLE_TITLE}</h1>
            <p className="font-sans text-sm md:text-base leading-8 max-w-2xl" style={{ color: "#D5E0E7" }}>風を感じながら町を抜ける、スリランカらしい短距離移動。トゥクトゥクを安心して楽しむための基本と、専用車との使い分けをまとめます。</p>
            <div className="flex items-center gap-4 mt-7 text-[11px] font-montserrat tracking-[0.1em]" style={{ color: "#B8C5D0" }}><span>移動手段</span><span className="h-px w-5 bg-white/30" /><span>読了約8分</span></div>
          </div></div>
        </section>

        <article className="max-w-3xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <div className="border-b py-9 md:py-11" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            <p className="font-serif-jp text-lg md:text-xl leading-9" style={{ color: "#DCE6EC" }}>スリランカの町を歩くと、三輪タクシー「トゥクトゥク」を必ず見かけます。短い移動を軽やかにしてくれるだけでなく、風や音、町のにぎわいまでを感じられる、スリランカらしい移動手段です。</p>
            <p className="font-serif-jp text-lg md:text-xl leading-9 mt-5" style={{ color: "#DCE6EC" }}>一方で、料金確認や荷物、長距離利用には少しコツが必要です。トゥクトゥクは町歩きの相棒として使い、都市間移動や観光を詰め込む日は専用車に任せる。この使い分けが、個人旅行を無理なく楽しむ近道になります。</p>
          </div>

          <Heading label="THE SHORT ANSWER">まずは結論：トゥクトゥクは、町の短距離移動にちょうどいい</Heading>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              [<MapPinned size={20} />, "町なかの移動", "ホテルからレストラン、駅から観光地など、短距離の移動に向いています。"],
              [<WalletCards size={20} />, "料金を確認して乗る", "メーターか事前合意かを確認すれば、料金面の不安を減らせます。"],
              [<Smartphone size={20} />, "アプリも活用できる", "配車アプリを使えるエリアでは、手配・行き先・料金の目安を確認しやすくなります。"],
            ].map(([icon, title, text]) => <div key={title as string} className="border p-5 md:p-6" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}><div className="mb-4" style={{ color: "#E8732A" }}>{icon}</div><h2 className="font-serif-jp text-lg font-bold text-white mb-2">{title}</h2><p className="font-sans text-sm leading-7" style={{ color: "#B8C5D0" }}>{text}</p></div>)}
          </div>

          <Heading label="TUK-TUK BASICS">スリランカのトゥクトゥクとは？短距離移動を旅の体験にする三輪タクシー</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>トゥクトゥクは、町のなかを小回りよく移動できる三輪タクシーです。交通量の多いコロンボ、海辺のゴール、山岳部のエッラなどでも、ホテル・カフェ・駅・観光地の間を結ぶ足として活躍します。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>観光局は、多くのトゥクトゥクにメーターがないため、乗車前に料金を合意するよう案内しています。[1] 目的地が不安なときは、行き先を言葉だけで伝えるのではなく、地図アプリの画面を見せるとスムーズです。</p>
          <div className="grid sm:grid-cols-2 gap-5 mt-8"><Figure src={images.hero} alt="スリランカで使われるトゥクトゥク" caption="トゥクトゥクは、町を短い距離でつなぐための気軽な移動手段です。" /><Figure src={images.ride} alt="スリランカのトゥクトゥクを利用する旅行者" caption="短距離の寄り道も、旅の風景として楽しめます。" /></div>

          <Heading label="PRICE & PAYMENT">トゥクトゥクの料金：メーターか、乗車前の合意かを確認する</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>料金は、地域、時間帯、メーターの有無、道路状況で変わります。Sri Lanka Tourismは、観光客向けトゥクトゥクについて1km目Rs.50、その後Rs.30という案内を掲載しています。[1] これは参考目安であり、実際には乗る前にメーターが使われるか、総額はいくらかを確認することが大切です。</p>
          <div className="mt-7 border" style={{ borderColor: "rgba(232,115,42,0.42)", backgroundColor: "rgba(232,115,42,0.06)" }}>
            {[
              ["01", "メーターの有無を確認", "メーターがある場合は、使ってもらえるかを確認します。"],
              ["02", "目的地と料金を先に伝える", "メーターがない場合は、出発前に行き先と総額を合意します。"],
              ["03", "経由地は最初にまとめて伝える", "途中で寄る場所があるなら、追加料金の有無を含めて先に相談します。"],
              ["04", "細かい現金を用意する", "支払い時のやり取りをスムーズにするため、細かいルピーを持っておくと安心です。"],
            ].map(([number, title, text], index) => <div key={number} className={`grid md:grid-cols-[54px_1fr] gap-3 px-5 py-5 ${index > 0 ? "border-t" : ""}`} style={{ borderColor: "rgba(255,255,255,0.12)" }}><span className="font-montserrat text-xs font-bold tracking-[0.16em]" style={{ color: "#E8732A" }}>{number}</span><div><h2 className="font-serif-jp font-bold text-white mb-2">{title}</h2><p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{text}</p></div></div>)}
          </div>

          <Heading label="HOW TO RIDE">トゥクトゥクの乗り方：初めてでも困らない5つの手順</Heading>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>
            {[
              "目的地を地図アプリで表示し、ドライバーに見せる。",
              "メーターの有無、または総額を乗車前に確認する。",
              "経由地・待機・往復が必要なら、最初にまとめて伝える。",
              "荷物が乗るか、人数に対して無理がないかを確認する。",
              "降車時に支払い、必要ならお釣りを確認してから別れる。",
              "夜間・人通りの少ない場所では、次の移動手段も見通しておく。",
            ].map((item) => <div key={item} className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />{item}</div>)}
          </div>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-7" style={{ color: "#C7D3DB" }}>スリランカのトゥクトゥク利用ガイドでも、メーターや料金、目的地、経由地を乗車前に確認することが勧められています。[2] 乗ってから相談するより、出発前に旅程を共有した方が、料金面の行き違いを避けやすくなります。</p>

          <Heading label="TUK-TUK, APP OR CHARTER">トゥクトゥク・配車アプリ・専用車の使い分け</Heading>
          <div className="overflow-x-auto border" style={{ borderColor: "rgba(255,255,255,0.15)" }}><table className="w-full min-w-[710px] text-left"><thead style={{ backgroundColor: "rgba(232,115,42,0.12)" }}><tr className="font-montserrat text-[11px] tracking-[0.12em]" style={{ color: "#F1A368" }}><th className="px-5 py-4">手段</th><th className="px-5 py-4">向く場面</th><th className="px-5 py-4">メリット</th><th className="px-5 py-4">注意点</th></tr></thead><tbody className="font-sans text-sm" style={{ color: "#D7E0E6" }}><tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">トゥクトゥク</td><td className="px-5 py-4">町歩き・短距離・寄り道</td><td className="px-5 py-4">気軽でローカル感がある</td><td className="px-5 py-4">料金と荷物を乗車前に確認</td></tr><tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">配車アプリ</td><td className="px-5 py-4">都市部の短〜中距離</td><td className="px-5 py-4">目的地・料金の目安を確認しやすい</td><td className="px-5 py-4">通信環境・配車状況に左右される</td></tr><tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold" style={{ color: "#F1A368" }}>専用車チャーター</td><td className="px-5 py-4">都市間・空港送迎・観光地巡り</td><td className="px-5 py-4">荷物・立ち寄り・時間を調整しやすい</td><td className="px-5 py-4">料金と含まれる内容を確認する</td></tr></tbody></table></div>

          <Heading label="WHEN TO CHARTER">トゥクトゥクより専用車が向いている日</Heading>
          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-7 items-start"><Figure src={images.van} alt="スリランカ個人旅行で使えるシルバーのバン" caption="荷物や複数の立ち寄りがある日は、専用車で移動をまとめると効率的です。" /><div><p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>トゥクトゥクは、ホテル周辺の食事や買い物、近い観光地への移動にぴったりです。一方で、空港からホテルへ向かう日、都市をまたぐ日、スーツケースがある日、遺跡やサファリなど複数の予定を組み合わせる日は、専用車の方がスムーズです。</p><p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>「町ではトゥクトゥク、移動日には専用車」と役割を分ければ、旅のローカル感を楽しみながら、無理のない旅程をつくれます。</p><div className="border-l-2 pl-5 py-1 mt-7" style={{ borderColor: "#E8732A" }}><p className="font-serif-jp text-base leading-8 text-white">トゥクトゥクは「町を楽しむ足」、<br />専用車は「旅全体をつなぐ足」です。</p></div></div></div>

          <Heading label="FAQ">スリランカのトゥクトゥクでよくある質問</Heading>
          <div className="divide-y border-y" style={{ borderColor: "rgba(255,255,255,0.14)" }}>{faqs.map((faq, index) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer list-none flex items-start gap-4 font-serif-jp font-bold text-white"><span className="font-montserrat text-[10px] tracking-[0.16em] mt-1" style={{ color: "#E8732A" }}>Q{String(index + 1).padStart(2, "0")}</span><span className="flex-1 leading-7">{faq.question}</span><span className="text-xl leading-none transition-transform group-open:rotate-45" style={{ color: "#E8732A" }}>+</span></summary><p className="font-sans text-sm leading-8 mt-4 pl-10" style={{ color: "#C7D3DB" }}>{faq.answer}</p></details>)}</div>

          <section className="relative overflow-hidden mt-16 md:mt-20 p-7 md:p-10 border" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(110deg, rgba(232,115,42,0.16), rgba(201,168,76,0.10) 48%, rgba(9,22,34,0.65)), #102132" }}><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "22px 22px" }} /><div className="relative z-10 max-w-2xl"><div className="flex items-center gap-3 mb-4"><span className="h-px w-10" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>CONNECT THE WHOLE JOURNEY</span></div><h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed">町歩きの先へも、<br />自分らしく旅をつなごう。</h2><p className="font-sans text-sm md:text-base leading-8 mt-5" style={{ color: "#D7E1E7" }}>料金の分かりやすさ、日本語対応、ドライバー品質、キャンセル条件を比べて、スリランカ個人旅行に合うタクシーチャーターを選びませんか。</p><a href="/#ranking" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} /></a></div></section>

          <section className="mt-14 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}><h2 className="font-serif-jp text-lg font-bold text-white mb-4">参考情報</h2><ol className="space-y-2 font-sans text-xs leading-6" style={{ color: "#9BAAB5" }}><li>[1] <a className="underline underline-offset-4 hover:text-white" href="https://www.srilanka.travel/getting-around" target="_blank" rel="noopener noreferrer">Sri Lanka Tourism：Getting Around</a></li><li>[2] <a className="underline underline-offset-4 hover:text-white" href="https://srilanka-charter.com/srilanka/srilanka-tuktuk/" target="_blank" rel="noopener noreferrer">スリランカのトゥクトゥク完全ガイド</a></li></ol></section>
        </article>
      </main>
    </div>
  );
}
