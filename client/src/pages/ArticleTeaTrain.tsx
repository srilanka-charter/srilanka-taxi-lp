/**
 * Design system: dark editorial travel journal with warm orange calls to action.
 * The article makes the tea-country train the experiential center of a journey, and private charter the practical connection layer around it.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, MapPinned, TrainFront } from "lucide-react";
import { MediaHeader } from "@/components/MediaHeader";

const ARTICLE_TITLE = "スリランカ紅茶列車の乗り方・予約・ナインアーチブリッジ完全ガイド｜エッラ観光の絶景ルート";

const images = {
  hero: "/manus-storage/train-1_47ef775a.jpg",
  window: "/manus-storage/train-2_f8e3345f.jpg",
  nineArch: "/manus-storage/nine-arch-bridge-user_f4d03ed9.jpg",
  charter: "/manus-storage/charter-3_51d499c2.png",
};

const faqs = [
  {
    question: "スリランカの紅茶列車はどの区間に乗るのがおすすめですか？",
    answer: "景観を楽しむことが目的なら、山岳部のキャンディ〜エッラ周辺の区間がよく選ばれます。全区間にこだわらず、旅程と宿泊地に合わせて一部区間を取り入れると、無理のない計画にしやすくなります。",
  },
  {
    question: "紅茶列車のチケットは予約した方がよいですか？",
    answer: "希望する列車・日付・座席がある場合は、早めに公式予約サイトを確認するのがおすすめです。公式の予約券は指定した列車と日付にのみ有効で、全額の支払い後に確定します。",
  },
  {
    question: "ナインアーチブリッジでは、列車が通る時間をどう確認すればよいですか？",
    answer: "列車の運行は前後することがあるため、公開情報だけに頼らず、当日にエッラ駅・宿泊先・現地のスタッフにも確認しましょう。撮影や見学は時間に余裕を持ち、列車が通るまで待てる計画がおすすめです。",
  },
  {
    question: "紅茶列車とナインアーチブリッジは、専用車と組み合わせた方がよいですか？",
    answer: "駅まで・駅からの移動、荷物がある日、ナインアーチブリッジやリトルアダムスピークなどを同日に回る場合は、専用車を組み合わせると時間を使いやすくなります。列車を旅の体験として楽しみ、前後の移動を専用車で支える組み合わせが実用的です。",
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

function Figure({ src, alt, caption, className = "" }: { src: string; alt: string; caption: string; className?: string }) {
  return (
    <figure className={className}>
      <div className="h-64 md:h-80 overflow-hidden" style={{ backgroundColor: "#132434" }}><img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" /></div>
      <figcaption className="mt-2 text-[11px] leading-relaxed" style={{ color: "#8EA0AE" }}>{caption}</figcaption>
    </figure>
  );
}

export default function ArticleTeaTrain() {
  useEffect(() => {
    document.title = "スリランカ紅茶列車の乗り方・予約・ナインアーチブリッジ完全ガイド";
    const description = "スリランカ紅茶列車の乗り方・予約・おすすめ区間を解説。ナインアーチブリッジの行き方、列車が通る時間の考え方、エッラ観光を効率よく回る専用車との組み合わせまで紹介します。";
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
    keywords.content = "スリランカ 紅茶列車,ナインアーチブリッジ,エッラ 紅茶列車,スリランカ 鉄道 予約,キャンディ エッラ 列車,スリランカ タクシーチャーター";

    let canonical = document.getElementById("article-canonical") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.id = "article-canonical";
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://srilankataxicharter.com/articles/sri-lanka-tea-train-nine-arch-bridge";

    const scriptId = "article-tea-train-jsonld";
    document.getElementById(scriptId)?.remove();
    const jsonLd = document.createElement("script");
    jsonLd.id = scriptId;
    jsonLd.type = "application/ld+json";
    jsonLd.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Article", headline: ARTICLE_TITLE, description, mainEntityOfPage: canonical.href, inLanguage: "ja", about: ["スリランカ", "紅茶列車", "ナインアーチブリッジ", "エッラ"] },
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
          <img src={images.hero} alt="スリランカの山岳部を走る紅茶列車" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,16,26,0.95) 0%, rgba(7,16,26,0.74) 50%, rgba(7,16,26,0.15) 100%), linear-gradient(0deg, #0A1520 0%, transparent 38%)" }} />
          <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 min-h-[inherit] flex items-end pb-16 md:pb-20">
            <div className="max-w-3xl">
              <Link href="/articles?category=transport" className="inline-flex items-center gap-2 mb-8 text-xs font-montserrat font-bold tracking-[0.12em] hover:text-white" style={{ color: "#B8C5D0" }}><ArrowLeft size={14} /> 移動手段の記事一覧へ</Link>
              <div className="flex items-center gap-3 mb-5"><span className="h-px w-12" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.24em]" style={{ color: "#F1A368" }}>TEA COUNTRY TRAIN GUIDE · 05</span></div>
              <h1 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.35] text-white mb-5">{ARTICLE_TITLE}</h1>
              <p className="font-sans text-sm md:text-base leading-8 max-w-2xl" style={{ color: "#D5E0E7" }}>茶畑と渓谷を抜ける紅茶列車、エッラの森に架かるナインアーチブリッジ。絶景を無理なく楽しむための乗り方と旅程の整え方をまとめます。</p>
              <div className="flex items-center gap-4 mt-7 text-[11px] font-montserrat tracking-[0.1em]" style={{ color: "#B8C5D0" }}><span>移動手段</span><span className="h-px w-5 bg-white/30" /><span>読了約10分</span></div>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <div className="border-b py-9 md:py-11" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            <p className="font-serif-jp text-lg md:text-xl leading-9" style={{ color: "#DCE6EC" }}>スリランカの紅茶列車は、山岳部の茶畑と渓谷をゆっくり抜ける、旅そのものを楽しむための列車です。キャンディからエッラに向かうルートは、とくに個人旅行で一度は体験したい絶景移動として知られています。</p>
            <p className="font-serif-jp text-lg md:text-xl leading-9 mt-5" style={{ color: "#DCE6EC" }}>ただし、列車だけで旅程を完結させるのではなく、駅まで・駅からの移動、荷物、ナインアーチブリッジの見学時間まで含めて設計することが大切です。列車を旅のハイライトにして、前後を専用車でつなぐと、景色と効率を両立しやすくなります。</p>
          </div>

          <Heading label="THE SHORT ANSWER">まずは結論：紅茶列車は「景色を味わう区間」に使う</Heading>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              [<TrainFront size={20} />, "列車", "山岳部の車窓を楽しむ時間として、旅程の主役にする。"],
              [<MapPinned size={20} />, "ナインアーチブリッジ", "エッラ滞在中に、列車が通る景色と森林の散策を楽しむ。"],
              [<CalendarDays size={20} />, "専用車", "駅まで・駅から、荷物、観光地巡りを支え、旅程を崩れにくくする。"],
            ].map(([icon, title, text]) => (
              <div key={title as string} className="border p-5 md:p-6" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}>
                <div className="mb-4" style={{ color: "#E8732A" }}>{icon}</div>
                <h2 className="font-serif-jp text-lg font-bold text-white mb-2">{title}</h2>
                <p className="font-sans text-sm leading-7" style={{ color: "#B8C5D0" }}>{text}</p>
              </div>
            ))}
          </div>

          <Heading label="WHAT IS THE TEA TRAIN">スリランカ紅茶列車とは？絶景を楽しむ山岳鉄道の魅力</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>「紅茶列車」は、茶畑が広がる高原地帯を走るスリランカ鉄道の山岳部ルートを指して親しまれている呼び名です。窓の外には、茶畑、ユーカリの森、霧のかかる山肌、小さな駅が続きます。移動を急ぐ日ではなく、座席や窓辺から変わる景色を眺めるために選びたい時間です。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>旅程では、キャンディ〜エッラの全区間に乗る方法だけでなく、宿泊地と予定に合わせて一部区間だけ取り入れる方法もあります。長距離移動をすべて列車に任せるのではなく、ホテル移動や駅との接続を専用車で支えると、荷物がある日でも楽しみやすくなります。</p>
          <div className="grid sm:grid-cols-2 gap-5 mt-8"><Figure src={images.hero} alt="山岳部を走るスリランカ紅茶列車" caption="車窓の景色を味わうために、移動時間そのものを旅程に入れたい体験です。" /><Figure src={images.window} alt="紅茶列車の窓から高原を眺める旅行者" caption="駅まで・駅からの動線を整えると、列車の時間を落ち着いて楽しめます。" /></div>

          <Heading label="WHICH SECTION">紅茶列車はどの区間に乗る？旅程から選ぶ3つの考え方</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>紅茶列車は「キャンディからエッラまで必ず全区間乗るべき」というものではありません。宿泊地、荷物、到着日の時間、ナインアーチブリッジを見たいかどうかを踏まえて、景色を楽しむ区間を選ぶのが実用的です。特に初めてのスリランカ個人旅行では、列車に乗ることを目的にしつつ、前後の移動に余白を残しましょう。</p>
          <div className="overflow-x-auto border mt-7" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <table className="w-full min-w-[710px] text-left">
              <thead style={{ backgroundColor: "rgba(232,115,42,0.12)" }}><tr className="font-montserrat text-[11px] tracking-[0.12em]" style={{ color: "#F1A368" }}><th className="px-5 py-4">旅の組み方</th><th className="px-5 py-4">向いている人</th><th className="px-5 py-4">旅程のポイント</th></tr></thead>
              <tbody className="font-sans text-sm" style={{ color: "#D7E0E6" }}>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">キャンディ〜エッラをじっくり乗る</td><td className="px-5 py-4">列車体験を旅の主役にしたい人</td><td className="px-5 py-4">前後の日程に余裕を持ち、到着後はエッラ泊にする。</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">高原区間だけを選ぶ</td><td className="px-5 py-4">周遊のなかで景色を楽しみたい人</td><td className="px-5 py-4">駅まで・駅からを専用車でつなぎ、乗車時間を絞る。</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">エッラ滞在と組み合わせる</td><td className="px-5 py-4">ナインアーチブリッジも見たい人</td><td className="px-5 py-4">列車の乗車日と橋を見に行く日を分けると、予定に余白ができる。</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-6" style={{ color: "#C7D3DB" }}>全区間を乗る場合も、一部区間だけを選ぶ場合も、駅の周辺で荷物を抱えて移動しない設計が重要です。宿泊先から駅への送迎、下車後のホテルへの移動、観光地への立ち寄りまでを事前に決めておけば、列車の景色に集中できます。</p>

          <Heading label="RESERVATION">紅茶列車の予約：希望の列車・日付を早めに確認する</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>座席を確保したい場合は、Sri Lanka Railwaysの公式予約サイトで、希望する列車・日付・座席の状況を確認しましょう。公式案内では、予約は指定した列車と日付にのみ有効で、全額の支払い後に確定するとされています。[1]</p>
          <div className="mt-7 border" style={{ borderColor: "rgba(232,115,42,0.42)", backgroundColor: "rgba(232,115,42,0.06)" }}>
            {[
              ["01", "旅程を先に決める", "キャンディ、ヌワラエリヤ周辺、エッラのどこに泊まるかを先に決め、列車の区間を選びます。"],
              ["02", "公式サイトで列車・日付を確認", "予約券は指定の列車と日付に紐づくため、旅程に余裕を持たせます。"],
              ["03", "駅まで・駅からを手配", "宿泊先、荷物、早朝出発などを踏まえ、専用車や送迎を組み合わせます。"],
              ["04", "当日は時間に余白を持つ", "運行状況や乗車手続きに備え、予定を詰め込みすぎないようにします。"],
            ].map(([number, title, text], index) => (
              <div key={number} className={`grid md:grid-cols-[54px_1fr] gap-3 px-5 py-5 ${index > 0 ? "border-t" : ""}`} style={{ borderColor: "rgba(255,255,255,0.12)" }}><span className="font-montserrat text-xs font-bold tracking-[0.16em]" style={{ color: "#E8732A" }}>{number}</span><div><h2 className="font-serif-jp font-bold text-white mb-2">{title}</h2><p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{text}</p></div></div>
            ))}
          </div>

          <Heading label="ON THE DAY">紅茶列車に乗る当日、失敗しにくくする5つの準備</Heading>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>
            {[
              "予約情報・乗車日・乗車駅を、出発前日にもう一度確認する。",
              "駅までの送迎は、列車の出発時刻より余裕を持って手配する。",
              "荷物が多い日は、下車後のホテルまでの移動も先に決めておく。",
              "飲み物・軽食・羽織り・モバイルバッテリーを準備する。",
              "窓辺やドア付近で写真を撮る場合も、周囲の安全と混雑に配慮する。",
              "天候・運行状況が変わっても困らないよう、その後の予定に余白を残す。",
            ].map((item) => <div key={item} className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />{item}</div>)}
          </div>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-7" style={{ color: "#C7D3DB" }}>紅茶列車は、速さよりも風景と旅の時間を味わう乗り物です。予定を分刻みに組むより、少しの遅れや予定変更にも対応できる一日をつくる方が、結果的に満足度が高くなります。</p>

          <Heading label="NINE ARCH BRIDGE">ナインアーチブリッジ：エッラで見たい、森に架かる9つのアーチ</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>ナインアーチブリッジは、エッラ周辺の緑深い谷に架かる石造りの鉄道橋です。アーチを描く橋を、山岳列車がゆっくり通過する景色は、紅茶列車の旅とあわせて体験したいハイライトの一つです。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>列車が通る時刻は前後することがあるため、記事やSNSに出ている時刻だけを前提にせず、当日にエッラ駅・宿泊先・現地スタッフで確認しましょう。現地の実体験情報でも、時間にゆとりを持って待つことが勧められています。[2]</p>
          <Figure src={images.nineArch} alt="スリランカのナインアーチブリッジと緑に囲まれた渓谷" caption="緑豊かな谷に架かるナインアーチブリッジ。列車が通る時間だけでなく、橋そのものの景観も見どころです。" className="mt-8" />
          <p className="font-sans text-[15px] md:text-base leading-8 mt-6" style={{ color: "#C7D3DB" }}>橋を見に行く時間は、列車が通過する瞬間だけに絞らないのがおすすめです。晴れた昼の青空、雲がかかる山の空気、橋のアーチがつくる陰影など、時間帯や天候で景色は変わります。列車を待つ場合は、周囲の安全に注意し、線路や橋の上では現地の状況・案内に従って行動してください。</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-7">
            {[
              ["ビューポイントで待つ", "列車が通るまで時間がかかることを見込み、日陰・飲み物・歩きやすい靴を準備します。"],
              ["列車の見学と乗車を分ける", "橋を見る時間と紅茶列車に乗る時間を分けると、どちらも急がずに楽しめます。"],
              ["エッラの宿を拠点にする", "早朝や夕方の光を狙うなら、エッラに泊まり、専用車やトゥクトゥクで移動すると調整しやすくなります。"],
              ["天候で予定を柔軟にする", "山岳部は天候が変わりやすいため、橋・列車・ハイキングを入れ替えられる余白を残します。"],
            ].map(([title, text]) => <div key={title} className="border-l-2 py-4 pl-5" style={{ borderColor: "#E8732A" }}><h2 className="font-serif-jp font-bold text-white mb-2">{title}</h2><p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{text}</p></div>)}
          </div>

          <Heading label="GETTING AROUND ELLA">ナインアーチブリッジの前後は、エッラをどう回る？</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>ナインアーチブリッジは、エッラ駅や町なかのホテルから徒歩、トゥクトゥク、専用車などでアクセスを考える場所です。歩くこと自体を楽しめる日なら散策を組み込み、荷物がある日・雨が心配な日・複数の観光地を回る日なら、車で移動をつなぐと無理がありません。</p>
          <div className="space-y-4 mt-7">
            {[
              ["列車を降りたその日に行く場合", "エッラ駅からホテルへ荷物を預けてから向かうか、送迎車に荷物を預けられるようにしておくと動きやすくなります。"],
              ["橋とリトルアダムスピークを回る場合", "暑い時間帯や天候を見ながら順番を調整できるよう、車での移動を組み合わせると一日の使い方に幅が出ます。"],
              ["橋で列車を待ちたい場合", "その後の食事やホテルへの帰着を詰め込みすぎず、予定を後ろ倒しできる余白を残すのが安心です。"],
            ].map(([title, text]) => <div key={title} className="grid md:grid-cols-[210px_1fr] gap-3 border-b pb-5" style={{ borderColor: "rgba(255,255,255,0.12)" }}><h2 className="font-serif-jp font-bold text-white">{title}</h2><p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{text}</p></div>)}
          </div>

          <Heading label="SMART CONNECTION">紅茶列車と専用車を組み合わせると、旅程がぐっとスムーズになる</Heading>
          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-7 items-start">
            <Figure src={images.charter} alt="シーギリヤロックを背景にしたスリランカ旅行者とドライバー" caption="駅の前後やエッラ周辺の観光を専用車でつなぐと、荷物がある日も移動を整えやすくなります。" />
            <div>
              <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>紅茶列車は、景色を楽しむためにこそ使いたい移動手段です。一方で、駅までの早朝移動、駅からホテルへの送迎、荷物の保管、ナインアーチブリッジと他の観光地を同日に回ることまで列車だけで完結させようとすると、予定が慌ただしくなることがあります。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>列車・トゥクトゥク・バス・専用車を旅程ごとにどう組み合わせるかは、<Link href="/articles/sri-lanka-transport-guide" className="underline decoration-[#E8732A] underline-offset-4 hover:text-white">スリランカの移動手段を比較する総合ガイド</Link>で全体像を確認できます。専用車の予約前には、<Link href="/articles/sri-lanka-taxi-charter-guide" className="underline decoration-[#E8732A] underline-offset-4 hover:text-white">タクシーチャーターの料金・使い方</Link>もご覧ください。</p>
              <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>おすすめは、列車に乗る区間を旅のハイライトとして確保し、その前後をタクシーチャーターで支える方法です。駅への送迎、エッラのホテル、ナインアーチブリッジ、リトルアダムスピーク、ラーワナ滝などを一日の流れに組み込みやすく、移動待ちを減らして景色や体験に時間を使えます。</p>
              <div className="border-l-2 pl-5 py-1 mt-7" style={{ borderColor: "#E8732A" }}><p className="font-serif-jp text-base leading-8 text-white">列車は「絶景を楽しむ時間」、専用車は「旅程をつなぐ時間」。<br />役割を分けることが、エッラ観光を効率よく楽しむコツです。</p></div>
            </div>
          </div>

          <Heading label="MODEL DAY">エッラで楽しむ、紅茶列車とナインアーチブリッジの1日モデル</Heading>
          <div className="border" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}>
            {[
              ["朝", "ホテルから駅へ。専用車で荷物を預ける・送る動線を整え、紅茶列車の景色を楽しむ。"],
              ["昼", "エッラ周辺でランチ。ホテルにチェックインまたは荷物を預け、午後の観光へ備える。"],
              ["午後", "ナインアーチブリッジのビューポイントへ。列車の通過は余裕を持って待ち、景色を楽しむ。"],
              ["夕方", "リトルアダムスピークやラーワナ滝など、旅程に合う場所を専用車でつないでホテルへ。"],
            ].map(([time, text], index) => <div key={time} className={`grid md:grid-cols-[100px_1fr] gap-3 px-5 py-5 ${index > 0 ? "border-t" : ""}`} style={{ borderColor: "rgba(255,255,255,0.12)" }}><span className="font-montserrat text-[11px] font-bold tracking-[0.12em]" style={{ color: "#E8732A" }}>{time}</span><p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{text}</p></div>)}
          </div>

          <Heading label="FAQ">スリランカ紅茶列車とナインアーチブリッジでよくある質問</Heading>
          <div className="divide-y border-y" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-5"><summary className="cursor-pointer list-none flex items-start gap-4 font-serif-jp font-bold text-white"><span className="font-montserrat text-[10px] tracking-[0.16em] mt-1" style={{ color: "#E8732A" }}>Q{String(index + 1).padStart(2, "0")}</span><span className="flex-1 leading-7">{faq.question}</span><span className="text-xl leading-none transition-transform group-open:rotate-45" style={{ color: "#E8732A" }}>+</span></summary><p className="font-sans text-sm leading-8 mt-4 pl-10" style={{ color: "#C7D3DB" }}>{faq.answer}</p></details>
            ))}
          </div>

          <section className="relative overflow-hidden mt-16 md:mt-20 p-7 md:p-10 border" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(110deg, rgba(232,115,42,0.16), rgba(201,168,76,0.10) 48%, rgba(9,22,34,0.65)), #102132" }}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
            <div className="relative z-10 max-w-2xl"><div className="flex items-center gap-3 mb-4"><span className="h-px w-10" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>PLAN THE SCENIC ROUTE</span></div><h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed">紅茶列車の絶景も、<br />エッラ観光も、無理なくつなごう。</h2><p className="font-sans text-sm md:text-base leading-8 mt-5" style={{ color: "#D7E1E7" }}>料金の分かりやすさ、日本語対応、ドライバー品質、キャンセル条件を比べて、紅茶列車の前後を支えるタクシーチャーターを選びませんか。</p><a href="/#ranking" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} /></a></div>
          </section>

          <section className="mt-14 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}><h2 className="font-serif-jp text-lg font-bold text-white mb-4">参考情報</h2><ol className="space-y-2 font-sans text-xs leading-6" style={{ color: "#9BAAB5" }}><li>[1] <a className="underline underline-offset-4 hover:text-white" href="https://seatreservation.railway.gov.lk/" target="_blank" rel="noopener noreferrer">Sri Lanka Railways Seat Reservation</a></li><li>[2] <a className="underline underline-offset-4 hover:text-white" href="https://zizitabi.com/entry/NineArchesBridge" target="_blank" rel="noopener noreferrer">スリランカ・ナインアーチブリッジ行き方、電車の時間、ビューポイントまとめ</a></li></ol></section>
        </article>
      </main>
    </div>
  );
}
