/**
 * Design system: dark editorial travel journal with warm orange calls to action.
 * Long-distance buses are presented as an affordable local option, while charter is positioned for itinerary certainty when time, luggage or complexity increase.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Banknote, BusFront, Check, Clock3, Luggage, MapPinned } from "lucide-react";
import { MediaHeader } from "@/components/MediaHeader";

const ARTICLE_TITLE = "スリランカの長距離バス完全ガイド｜乗り方・料金・注意点と専用車との使い分け";

const images = {
  hero: "/manus-storage/bus-2_7bb3a877.png",
  blueBus: "/manus-storage/bus-1_182565aa.png",
  van: "/manus-storage/transport-van-thumb_7e18c597.png",
};

const faqs = [
  {
    question: "スリランカの長距離バスは旅行者でも利用できますか？",
    answer: "利用できます。低予算で現地の移動を体験したい人に向く選択肢です。ただし、混雑、荷物、発着時刻の変動、乗り換えを見込んで、時間に余裕がある日に使うのがおすすめです。",
  },
  {
    question: "長距離バスのチケットは予約した方がよいですか？",
    answer: "路線やサービスにより異なります。Sri Lanka Tourismが案内するSLTB ExpressやBusbooking.lkのようなオンライン予約サービスを利用できる場合があります。一方、ローカルバスは車内で集金係に行き先を伝えて支払う形式もあります。",
  },
  {
    question: "長距離バスの支払いはどうしますか？",
    answer: "ローカルバスでは、車内の集金係に目的地を伝え、現金で支払うケースが一般的です。細かい現金を準備しておくとスムーズです。路線・会社・予約方法によって支払い条件は変わるため、利用時に確認してください。",
  },
  {
    question: "長距離バスより専用車が向いているのはどんな場合ですか？",
    answer: "到着時刻が重要な日、家族旅行、大きな荷物がある日、複数の観光地へ立ち寄る日、空港から遠方へ直行する日には、専用車の方が旅程を組みやすい場合があります。",
  },
];

function Heading({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="mt-16 mb-7 md:mt-20"><span className="font-montserrat text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: "#E8732A" }}>{label}</span><h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{children}</h2></div>;
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return <figure><div className="h-64 md:h-80 overflow-hidden" style={{ backgroundColor: "#132434" }}><img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" /></div><figcaption className="mt-2 text-[11px] leading-relaxed" style={{ color: "#8EA0AE" }}>{caption}</figcaption></figure>;
}

export default function ArticleLongDistanceBus() {
  useEffect(() => {
    document.title = "スリランカの長距離バス完全ガイド｜乗り方・料金・注意点と専用車との使い分け";
    const description = "スリランカの長距離バスを個人旅行者向けに解説。バスの種類、乗り方、料金・支払い、荷物、予約、注意点、列車・専用車との使い分けを紹介します。";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = description;
    let keywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!keywords) { keywords = document.createElement("meta"); keywords.name = "keywords"; document.head.appendChild(keywords); }
    keywords.content = "スリランカ 長距離バス,スリランカ バス 乗り方,スリランカ バス 料金,スリランカ 都市間移動,スリランカ タクシーチャーター";
    let canonical = document.getElementById("article-canonical") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.id = "article-canonical"; canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://srilankataxicharter.com/articles/sri-lanka-long-distance-bus-guide";
    const scriptId = "article-long-distance-bus-jsonld";
    document.getElementById(scriptId)?.remove();
    const jsonLd = document.createElement("script");
    jsonLd.id = scriptId;
    jsonLd.type = "application/ld+json";
    jsonLd.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Article", headline: ARTICLE_TITLE, description, mainEntityOfPage: canonical.href, inLanguage: "ja", about: ["スリランカ", "長距離バス", "個人旅行"] },
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
          <img src={images.hero} alt="スリランカを走る長距離ローカルバス" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,16,26,0.95) 0%, rgba(7,16,26,0.74) 50%, rgba(7,16,26,0.18) 100%), linear-gradient(0deg, #0A1520 0%, transparent 38%)" }} />
          <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 min-h-[inherit] flex items-end pb-16 md:pb-20"><div className="max-w-3xl">
            <Link href="/articles?category=transport" className="inline-flex items-center gap-2 mb-8 text-xs font-montserrat font-bold tracking-[0.12em] hover:text-white" style={{ color: "#B8C5D0" }}><ArrowLeft size={14} /> 移動手段の記事一覧へ</Link>
            <div className="flex items-center gap-3 mb-5"><span className="h-px w-12" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.24em]" style={{ color: "#F1A368" }}>LONG-DISTANCE BUS GUIDE · 06</span></div>
            <h1 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.35] text-white mb-5">{ARTICLE_TITLE}</h1>
            <p className="font-sans text-sm md:text-base leading-8 max-w-2xl" style={{ color: "#D5E0E7" }}>低予算で都市をつなぎ、ローカルの空気を感じる長距離バス。乗り方から旅程に取り入れるコツ、専用車との使い分けまでを解説します。</p>
            <div className="flex items-center gap-4 mt-7 text-[11px] font-montserrat tracking-[0.1em]" style={{ color: "#B8C5D0" }}><span>移動手段</span><span className="h-px w-5 bg-white/30" /><span>読了約9分</span></div>
          </div></div>
        </section>

        <article className="max-w-3xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <div className="border-b py-9 md:py-11" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            <p className="font-serif-jp text-lg md:text-xl leading-9" style={{ color: "#DCE6EC" }}>スリランカの長距離バスは、低予算で都市間を移動し、旅先の日常に近づける乗り物です。窓の外の景色、途中の町、現地の人と同じ車内の空気まで含めて、移動を体験にしたい人に向いています。</p>
            <p className="font-serif-jp text-lg md:text-xl leading-9 mt-5" style={{ color: "#DCE6EC" }}>その一方で、荷物が多い日、到着時間を読みにくい日、家族旅行、複数の立ち寄りがある日には、専用車の方が旅程を整えやすいこともあります。長距離バスを「安いから」だけで選ばず、旅の条件から使い分けることが大切です。</p>
          </div>

          <Heading label="THE SHORT ANSWER">まずは結論：長距離バスは、時間に余裕のある移動日に向く</Heading>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              [<Banknote size={20} />, "予算を抑えたい", "都市間移動の費用を抑え、現地の交通を体験したい日に向きます。"],
              [<BusFront size={20} />, "ローカル感を楽しみたい", "窓の外の町並みや乗客の雰囲気まで、旅の思い出にしたい人向けです。"],
              [<Clock3 size={20} />, "予定に余白がある", "混雑や発着の変動を見込み、その日の予定を詰め込みすぎないことが前提です。"],
            ].map(([icon, title, text]) => <div key={title as string} className="border p-5 md:p-6" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}><div className="mb-4" style={{ color: "#E8732A" }}>{icon}</div><h2 className="font-serif-jp text-lg font-bold text-white mb-2">{title}</h2><p className="font-sans text-sm leading-7" style={{ color: "#B8C5D0" }}>{text}</p></div>)}
          </div>

          <Heading label="BUS TYPES">長距離バスの種類：予約できる便とローカルバスを分けて考える</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>スリランカのバス移動には、当日に利用するローカルバスだけでなく、座席を事前に予約できるサービスもあります。Sri Lanka Tourismは、SLTB Expressを通常・セミラグジュアリー・ラグジュアリー・スーパーラグジュアリーの予約サービスとして案内し、Busbooking.lkも公共交通の座席予約サービスとして掲載しています。[1]</p>
          <div className="overflow-x-auto border mt-7" style={{ borderColor: "rgba(255,255,255,0.15)" }}><table className="w-full min-w-[710px] text-left"><thead style={{ backgroundColor: "rgba(232,115,42,0.12)" }}><tr className="font-montserrat text-[11px] tracking-[0.12em]" style={{ color: "#F1A368" }}><th className="px-5 py-4">選択肢</th><th className="px-5 py-4">手配方法</th><th className="px-5 py-4">向く場面</th><th className="px-5 py-4">注意点</th></tr></thead><tbody className="font-sans text-sm" style={{ color: "#D7E0E6" }}><tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">予約可能なバス</td><td className="px-5 py-4">オンラインで確認・予約</td><td className="px-5 py-4">座席を確保して移動したい日</td><td className="px-5 py-4">対象路線・予約条件を確認する</td></tr><tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">ローカル長距離バス</td><td className="px-5 py-4">バスターミナルや路線上で乗車</td><td className="px-5 py-4">予算・ローカル体験を重視する日</td><td className="px-5 py-4">混雑、荷物、発着の余白を見込む</td></tr><tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold" style={{ color: "#F1A368" }}>専用車チャーター</td><td className="px-5 py-4">出発前に予約</td><td className="px-5 py-4">荷物・家族・複数立ち寄り・時間重視</td><td className="px-5 py-4">料金に含まれる項目と車種を確認する</td></tr></tbody></table></div>

          <Heading label="HOW TO RIDE">スリランカの長距離バスの乗り方</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>ローカルバスでは、乗車後に集金係へ行き先を伝えて現金で支払う形式があります。実体験ガイドでは、集金係が席まで来て運賃を回収すること、細かい現金を持っておくとやり取りがスムーズになることが紹介されています。[2]</p>
          <div className="mt-7 border" style={{ borderColor: "rgba(232,115,42,0.42)", backgroundColor: "rgba(232,115,42,0.06)" }}>
            {[
              ["01", "行き先と出発場所を確認", "バスターミナル、ホテル、現地スタッフなどに目的地へ向かうバスと乗車場所を確認します。"],
              ["02", "荷物を持って早めに動く", "混雑する便では、席や荷物の置き場所に余裕がないことがあります。"],
              ["03", "集金係に目的地を伝えて支払う", "現金を用意し、細かい金額を持っておくと支払いがスムーズです。"],
              ["04", "降車地点を早めに意識する", "目的地の近くで降りる場合は、周囲の乗客や集金係に確認しながら準備します。"],
            ].map(([number, title, text], index) => <div key={number} className={`grid md:grid-cols-[54px_1fr] gap-3 px-5 py-5 ${index > 0 ? "border-t" : ""}`} style={{ borderColor: "rgba(255,255,255,0.12)" }}><span className="font-montserrat text-xs font-bold tracking-[0.16em]" style={{ color: "#E8732A" }}>{number}</span><div><h2 className="font-serif-jp font-bold text-white mb-2">{title}</h2><p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{text}</p></div></div>)}
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mt-8"><Figure src={images.hero} alt="スリランカの都市間を走る赤い長距離バス" caption="ローカルバスは、移動そのものを現地の体験に変えてくれます。" /><Figure src={images.blueBus} alt="スリランカで運行される青いバス" caption="目的地・混雑・荷物の量を見ながら、無理のない便を選びましょう。" /></div>

          <Heading label="LUGGAGE & COMFORT">長距離バスで気をつけたい、荷物・混雑・時間のこと</Heading>
          <div className="space-y-4">
            {[
              ["大きな荷物がある日", "車内の荷物置き場や座席周りに余裕がない場合があります。スーツケースが複数ある日や、子ども連れの移動は、バス以外の選択肢も比較しましょう。"],
              ["到着時刻が重要な日", "飛行機、列車、サファリの集合、ホテルのチェックインなど、次の予定が決まっている日は、遅れを吸収できる時間を残すことが必要です。"],
              ["夜間・早朝の移動", "到着後のホテルまでの動線、荷物、連絡手段を事前に考えます。不安が残る場合は、事前送迎や専用車の方が旅程を組みやすいことがあります。"],
              ["体調や快適性を優先したい日", "暑さ、長時間の乗車、混雑が負担になりそうな日は、移動を短くするか、車種を選べる専用車を検討するのも一案です。"],
            ].map(([title, text]) => <div key={title} className="grid md:grid-cols-[210px_1fr] gap-3 border-l-2 py-4 pl-5" style={{ borderColor: "#E8732A" }}><h2 className="font-serif-jp font-bold text-white">{title}</h2><p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{text}</p></div>)}
          </div>

          <Heading label="WHEN TO CHARTER">長距離バスと専用車、どう使い分ける？</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>バスと専用車は、どちらか一つだけを選ぶ必要はありません。旅のなかにバス体験を入れながら、難しい移動日だけ専用車を使うと、予算と快適性のバランスを取りやすくなります。</p>
          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-7 items-start mt-8"><Figure src={images.van} alt="スリランカ個人旅行で使えるシルバーのバン" caption="荷物・複数の立ち寄り・到着時刻を重視する日は、専用車が旅程を支えます。" /><div><h2 className="font-serif-jp text-xl font-bold text-white leading-relaxed">バスを旅の体験にし、<br />専用車を旅程の土台にする。</h2><p className="font-sans text-[15px] leading-8 mt-5" style={{ color: "#C7D3DB" }}>予算を抑えたい短〜中距離、予定に余裕がある日、町の空気を味わいたい日は長距離バスへ。一方、空港から遠方へ向かう日、複数の遺跡を回る日、家族や荷物が多い日、ホテル移動と観光を一日に組み込みたい日は、タクシーチャーターが効率的です。</p><div className="border-l-2 pl-5 py-1 mt-7" style={{ borderColor: "#E8732A" }}><p className="font-serif-jp text-base leading-8 text-white">「安く移動する日」と「時間を買う日」を分ける。<br />それが、個人旅行で無理をしない長距離移動の考え方です。</p></div></div></div>

          <Heading label="FAQ">スリランカ長距離バスでよくある質問</Heading>
          <div className="divide-y border-y" style={{ borderColor: "rgba(255,255,255,0.14)" }}>{faqs.map((faq, index) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer list-none flex items-start gap-4 font-serif-jp font-bold text-white"><span className="font-montserrat text-[10px] tracking-[0.16em] mt-1" style={{ color: "#E8732A" }}>Q{String(index + 1).padStart(2, "0")}</span><span className="flex-1 leading-7">{faq.question}</span><span className="text-xl leading-none transition-transform group-open:rotate-45" style={{ color: "#E8732A" }}>+</span></summary><p className="font-sans text-sm leading-8 mt-4 pl-10" style={{ color: "#C7D3DB" }}>{faq.answer}</p></details>)}</div>

          <section className="relative overflow-hidden mt-16 md:mt-20 p-7 md:p-10 border" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(110deg, rgba(232,115,42,0.16), rgba(201,168,76,0.10) 48%, rgba(9,22,34,0.65)), #102132" }}><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "22px 22px" }} /><div className="relative z-10 max-w-2xl"><div className="flex items-center gap-3 mb-4"><span className="h-px w-10" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>PLAN THE RIGHT MOVE</span></div><h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed">移動日に合わせて、<br />最適な1台を選ぼう。</h2><p className="font-sans text-sm md:text-base leading-8 mt-5" style={{ color: "#D7E1E7" }}>料金の分かりやすさ、日本語対応、ドライバー品質、キャンセル条件を比べて、スリランカ個人旅行に合うタクシーチャーターを選びませんか。</p><a href="/#ranking" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} /></a></div></section>

          <section className="mt-14 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}><h2 className="font-serif-jp text-lg font-bold text-white mb-4">参考情報</h2><ol className="space-y-2 font-sans text-xs leading-6" style={{ color: "#9BAAB5" }}><li>[1] <a className="underline underline-offset-4 hover:text-white" href="https://www.srilanka.travel/transport" target="_blank" rel="noopener noreferrer">Sri Lanka Tourism：Transport（SLTB Express／Busbooking.lkの案内）</a></li><li>[2] <a className="underline underline-offset-4 hover:text-white" href="https://tekuteku.blog/srilanka/srilanka-local-bus-guide/" target="_blank" rel="noopener noreferrer">てくてくアジア：スリランカのローカルバス完全攻略</a></li></ol></section>
        </article>
      </main>
    </div>
  );
}
