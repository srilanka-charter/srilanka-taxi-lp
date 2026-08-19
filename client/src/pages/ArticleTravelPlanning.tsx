/**
 * Design system: dark editorial travel guide with warm orange planning accents.
 * All visual assets in these two guides are newly generated and appear within the explanatory flow, never as a detached gallery.
 */
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Check, Clock3, Compass, MapPinned, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { MediaHeader } from "@/components/MediaHeader";

type Image = { src: string; alt: string; caption: string };
type Section = { label: string; title: string; body: string[] };
type Related = { before: string; text: string; href: string; after: string };
type Ref = { label: string; href: string };
type Guide = { number: string; slug: string; title: string; description: string; keywords: string; hero: Image; intro: string[]; overview: string[]; figure: Image; sections: Section[]; checklist: { title: string; body: string; items: string[] }; related: Related[]; faqs: { question: string; answer: string }[]; references?: Ref[] };

const guides: Record<"days" | "budget", Guide> = {
  days: {
    number: "23",
    slug: "sri-lanka-trip-duration-guide",
    title: "スリランカ旅行に必要な日数は？3日・5日・7日・10日の楽しみ方を比較",
    description: "スリランカ旅行に必要な日数を3日・5日・7日・10日で比較。世界遺産、高原、海岸、サファリをどう組み合わせるか、日数別に無理のない旅程を解説します。",
    keywords: "スリランカ 旅行 日数,スリランカ旅行 何日,スリランカ 3日 5日 7日 10日,スリランカ モデルコース",
    hero: { src: "/manus-storage/sri-lanka-trip-days-hero_79addc3a.png", alt: "スリランカの文化遺産・高原・海岸をつなぐ旅の道路", caption: "日数を増やすほど、行き先を増やすだけでなく、移動と滞在に余白をつくれます。" },
    intro: [
      "スリランカ旅行に何日必要かは、行きたい場所の数よりも、空港からどこへ向かい、どの順番でホテルを移るかで決まります。島の面積だけを見ると短期間でも一周できそうに感じますが、文化三角地帯、高原、南部海岸はそれぞれ移動時間と見どころの密度が異なります。",
      "3日、5日、7日、10日では、旅の主役をどう置くかが変わります。短い日程では一つの地域に絞り、日数が増えたら世界遺産・紅茶列車・海岸・サファリを組み合わせる。この順番で考えると、移動だけで終わる旅を避けやすくなります。",
    ],
    overview: ["3日：空港周辺または一つの地域に絞る", "5日：文化三角地帯を主役にする", "7日：世界遺産・高原・南部海岸をつなぐ", "10日：移動の余白を持ち、興味のある地域を深掘りする"],
    figure: { src: "/manus-storage/sri-lanka-trip-days-planning_9adb17bd.png", alt: "旅行日数ごとに旅程を考えるスリランカ旅行のプランニングイメージ", caption: "図：短い日程ほど主役を絞り、日数が増えたら移動だけでなく休息や滞在時間を足していきます。" },
    sections: [
      { label: "3 DAYS", title: "3日：到着・出発の移動を優先し、一つのエリアを味わう", body: ["3日間では、空港到着後に遠くまで進みすぎず、コロンボ・ネゴンボ周辺、または目的地を一つに絞る方が現実的です。到着日と帰国日はフライトの時間に左右されるため、観光に使える丸一日が何日あるかを先に確認しましょう。", "短期旅行で大切なのは、見どころを数多く回ることではなく、空港とホテルの移動を迷わずに済ませることです。空港送迎と市内・近郊の移動を一つの手配でつなげれば、限られた滞在でも街歩きや食事を楽しむ時間を残せます。"] },
      { label: "5 DAYS", title: "5日：シーギリヤ・ダンブッラ・古都を主役にする", body: ["5日間なら、文化三角地帯を拠点にしてシーギリヤ、ダンブッラ、ポロンナルワ、アヌラーダプラを巡る旅程が組みやすくなります。世界遺産を一つずつ楽しむため、到着日と最終日の長距離移動、観光日、休憩を分けて考えるのがポイントです。", "この日数では、空港から文化三角地帯へ向かう日、遺跡を複数巡る日、空港へ戻る日を専用車でつなぐと、荷物や乗り換えの負担を抑えられます。遺跡では徒歩観光に集中し、移動では車に荷物を置くという役割分担が向いています。"] },
      { label: "7 DAYS", title: "7日：世界遺産・高原・南部海岸を一つの旅にする", body: ["7日間になると、シーギリヤ周辺、キャンディ、紅茶列車、高原、ゴールをつなぐ周遊が視野に入ります。ただし、ホテルを毎日変えるだけでは移動の連続になりがちです。紅茶列車に乗る日、サファリの日、ゴールを歩く日には、旅の主役を一つずつ置きましょう。", "長距離のホテル移動は専用車でつなぎ、紅茶列車は景色を楽しむ区間に絞ると、交通手段の魅力を両立できます。7日間は、行き先を増やすためではなく、各地に一泊する余白を作るための日数と考えると、旅程が整います。"] },
      { label: "10 DAYS", title: "10日：興味に合わせて、海岸・サファリ・高原の滞在を深める", body: ["10日間あれば、文化三角地帯と高原を回った後に、南部海岸やヤーラ国立公園のサファリを加えても、移動日を確保しやすくなります。ビーチを楽しみたい、紅茶畑に長く滞在したい、サファリを朝から体験したいなど、旅の目的に合わせて一泊ずつ増やせます。", "日数に余裕があるからといって、毎日別の都市へ移動する必要はありません。同じホテルに連泊し、天候や体調に合わせて観光順を変えられることが、10日間の大きな利点です。専用車は、地域をまたぐ移動日や早朝の予定に使うと、旅全体の自由度を保ちやすくなります。"] },
    ],
    checklist: { title: "日数を決める前のチェックポイント", body: "日数別のモデルコースを選ぶときは、見どころの数だけでなく、到着・出発の時刻、ホテルの位置、移動に使う時間を確認します。旅程に次の項目を当てはめると、自分に必要な日数を判断しやすくなります。", items: ["フライトの到着・出発時刻を含め、実際に観光できる日数を数える", "世界遺産・高原・海岸・サファリから、必ず行きたい主役を二つか三つに絞る", "ホテルを移る日は、観光を詰め込みすぎず移動と休憩を優先する", "空港・都市間・駅の移動は、荷物と時間に合わせて事前手配を検討する", "一日だけでも予定を少なくし、天候や体調に応じて調整できる余白を残す"] },
    related: [{ before: "短期旅行の旅程を具体的に検討するなら、", text: "スリランカ旅行3泊4日モデルコース", href: "/articles/sri-lanka-4-day-itinerary", after: "を確認してください。" }, { before: "文化三角地帯を中心に5日間で回るなら、", text: "スリランカ旅行5日間モデルコース", href: "/articles/sri-lanka-5-day-itinerary", after: "が参考になります。" }, { before: "高原・列車・海岸までつなぐなら、", text: "スリランカ旅行7日間モデルコース", href: "/articles/sri-lanka-7-day-itinerary", after: "を確認しましょう。" }, { before: "旅程に合う車・列車・バスの役割を比べるなら、", text: "スリランカの移動手段は何が正解？", href: "/articles/sri-lanka-transport-guide", after: "が役立ちます。" }],
    faqs: [{ question: "スリランカ旅行は最低何日あれば楽しめますか？", answer: "到着・出発の時間にもよりますが、3日なら一つの地域、5日なら文化三角地帯、7日なら高原や南部海岸を組み合わせる旅程を検討しやすくなります。" }, { question: "5日と7日ならどちらがおすすめですか？", answer: "世界遺産を主役にするなら5日、高原の紅茶列車やゴールまで入れたいなら7日が目安です。移動だけで終わらないよう、ホテル移動日と観光日を分けて考えましょう。" }, { question: "10日間あればスリランカを一周できますか？", answer: "関心のある地域を組み合わせることは可能ですが、毎日都市を移るより、文化三角地帯・高原・海岸などで連泊を入れる方が旅を楽しみやすくなります。" }],
  },
  budget: {
    number: "24",
    slug: "sri-lanka-trip-budget-guide",
    title: "スリランカ旅行の予算はいくら？航空券・ホテル・移動費を含む費用の目安",
    description: "スリランカ旅行の予算を、航空券、ホテル、食事、観光、移動費に分けて考えるガイド。タクシーチャーターの費用を含め、個人旅行で予算を組み立てる方法を解説します。",
    keywords: "スリランカ 旅行 予算,スリランカ旅行 費用,スリランカ タクシーチャーター 料金,スリランカ 個人旅行 予算",
    hero: { src: "/manus-storage/sri-lanka-budget-hero_6c04a40a.png", alt: "スリランカ旅行の予算を考えるパスポートとカードと旅行小物", caption: "旅行費は総額だけでなく、航空券・ホテル・食事・観光・移動の五つに分けると考えやすくなります。" },
    intro: [
      "スリランカ旅行の予算は、航空券やホテルの価格だけで決まりません。行きたい地域の数、ホテルのグレード、食事のスタイル、移動手段、観光アクティビティを分けて考えることで、自分の旅に必要な費用が見えやすくなります。",
      "特に個人旅行では、移動費を後回しにすると、現地での選択肢が狭くなりがちです。公共交通を楽しむ日と、空港送迎・都市間・早朝出発に専用車を使う日を分け、見積もりに何が含まれるかを確認しておくと、予算と旅の快適さを両立しやすくなります。",
    ],
    overview: ["航空券：渡航時期と予約時期で変動", "ホテル：地域・部屋・食事条件で変動", "食事・観光：一日の過ごし方で調整", "移動：日数・人数・車種・料金に含まれる範囲で確認"],
    figure: { src: "/manus-storage/sri-lanka-budget-planning_92fc7f31.png", alt: "旅行費の項目を整理するスリランカ旅行の予算計画イメージ", caption: "図：予算は費目ごとに分け、先に決まる費用と現地で調整する費用を整理します。" },
    sections: [
      { label: "COST 01", title: "航空券：行き先を増やす前に、渡航時期と到着・出発時刻を見る", body: ["航空券は、渡航時期、予約する時期、乗り継ぎ、到着・出発の時間によって変わります。最安値だけで選ぶのではなく、深夜・早朝の到着になった場合に必要になる空港送迎や前泊も含めて、旅程全体で考えるのがポイントです。", "到着日から遠方へ進む場合は、空港送迎とホテルをどうつなぐかを先に決めます。航空券の時間に合わせて移動を整えることで、初日に余分なタクシー代やホテル変更を増やさずに済む場合があります。"] },
      { label: "COST 02", title: "ホテル：一泊単価だけでなく、連泊と立地で考える", body: ["ホテル代は、都市、ビーチか高原か、部屋のタイプ、食事の有無、予約時期で変わります。安いホテルを毎日変えるより、シーギリヤ周辺、キャンディ、ゴールなどで連泊し、移動回数を減らした方が、荷物・交通・時間の面で旅を整えやすいこともあります。", "予算を抑えたい場合も、空港からの距離、駅からの距離、早朝出発に対応しやすいかを確認しましょう。ホテルの立地によって移動費が増えることがあるため、部屋代と移動の負担を一緒に比較します。"] },
      { label: "COST 03", title: "食事・観光：日ごとの主役を決め、現地で調整できる費用を残す", body: ["食事、カフェ、寺院・遺跡の入場、サファリ、アクティビティなどは、旅の楽しみとして現地で調整しやすい費目です。一日に多くの有料アクティビティを詰め込むより、世界遺産を歩く日、紅茶列車に乗る日、海岸で過ごす日と主役を分けると、予算も旅程も見通しが良くなります。", "現金が必要な場面とカードを使える場面は地域や店舗で異なります。多額の現金を一度に用意するのではなく、ホテル、移動、観光の予定に合わせて、現金・カード・予備の支払い手段を分けておくと安心です。"] },
      { label: "COST 04", title: "移動費：総額ではなく、何が含まれているかを確認する", body: ["移動費は、空港送迎、都市間移動、列車の駅送迎、サファリの早朝出発など、旅程の節目で発生します。料金を比較するときは、単に一日あたりの数字だけでなく、車種、人数、ドライバー、立ち寄り、待機、通行料や駐車料など、見積もりに含まれる範囲を確認しましょう。", "ランカミーの公開料金を例にすると、1日15,000円（税込）〜、5日間のSEDANチャーターは77,000円（税込）〜と案内されています。これは旅行日数・車種・条件によって変わるため、予算を確定する際は公式サイトで最新の条件と見積もりを確認してください。"] },
    ],
    checklist: { title: "予算を組み立てるための確認チェック", body: "予算表を作るときは、すでに予約して確定した費用と、現地で調整できる費用を分けます。旅行日数と移動を先に決め、残りの費用を宿泊・食事・観光へ配分すると、旅の優先順位が見えやすくなります。", items: ["航空券・ホテル・保険など、出発前に確定する費用を分けて書き出す", "食事・カフェ・観光・買い物など、現地で調整できる費用に余白を持たせる", "移動は空港・都市間・駅送迎など、必要な日と区間を先に洗い出す", "タクシーチャーターは日数・人数・車種・含まれる内容を見積もりで確認する", "為替や予定変更に備え、予備費を残して総額を決める"] },
    related: [{ before: "専用車の料金・車種・予約前の確認項目を詳しく知りたい方は、", text: "スリランカのタクシーチャーターとは？", href: "/articles/sri-lanka-taxi-charter-guide", after: "を確認してください。" }, { before: "列車・バス・配車アプリと専用車の使い分けから移動費を考えるなら、", text: "スリランカの移動手段は何が正解？", href: "/articles/sri-lanka-transport-guide", after: "が役立ちます。" }, { before: "到着日の移動費を先に決めたい方は、", text: "コロンボ空港送迎は必要？", href: "/articles/colombo-airport-transfer-guide", after: "を確認しましょう。" }, { before: "予算を日程へ落とし込む前に準備全体を整理するなら、", text: "スリランカ個人旅行の準備完全ガイド", href: "/articles/sri-lanka-independent-travel-preparation-guide", after: "も参考にしてください。" }],
    faqs: [{ question: "スリランカ旅行の予算は何で決まりますか？", answer: "航空券、ホテル、食事・観光、移動費が主な項目です。渡航時期、ホテルの立地、行き先の数、移動手段によって変わるため、費目ごとに分けて考えましょう。" }, { question: "タクシーチャーターの料金は予算にどう入れればよいですか？", answer: "利用する日数、人数、車種、立ち寄り、料金に含まれる範囲を確認して見積もりに入れます。公開価格は目安として参照し、予約前には公式サイトで最新条件を確認してください。" }, { question: "予算を抑えるならホテルを毎日変えない方がよいですか？", answer: "地域によっては連泊して移動回数を減らす方が、荷物・交通・時間の負担を抑えられます。部屋代だけでなく、ホテルの位置と移動費を一緒に比較するのがおすすめです。" }],
    references: [{ label: "ランカミー：スリランカタクシーチャーターサービス公式サイト", href: "https://srilankataxicharterservice.com/ja/" }],
  },
};

function Heading({ label, children }: { label: string; children: React.ReactNode }) { return <div className="mt-16 md:mt-20 mb-8"><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#E8732A" }}>{label}</span><h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{children}</h2></div>; }

function PlanningGuide({ variant }: { variant: "days" | "budget" }) {
  const guide = guides[variant];
  useEffect(() => {
    document.title = guide.title;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null; if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); } meta.content = guide.description;
    let keywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null; if (!keywords) { keywords = document.createElement("meta"); keywords.name = "keywords"; document.head.appendChild(keywords); } keywords.content = guide.keywords;
    let canonical = document.getElementById("article-canonical") as HTMLLinkElement | null; if (!canonical) { canonical = document.createElement("link"); canonical.id = "article-canonical"; canonical.rel = "canonical"; document.head.appendChild(canonical); } canonical.href = `https://srilankataxicharter.com/articles/${guide.slug}`;
    const id = `article-planning-${guide.number}-jsonld`; document.getElementById(id)?.remove(); const jsonLd = document.createElement("script"); jsonLd.id = id; jsonLd.type = "application/ld+json"; jsonLd.text = JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: guide.title, description: guide.description, mainEntityOfPage: canonical.href, inLanguage: "ja", image: `https://srilankataxicharter.com${guide.hero.src}` }, { "@type": "FAQPage", mainEntity: guide.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }); document.head.appendChild(jsonLd); return () => document.getElementById(id)?.remove();
  }, [guide]);
  return <div className="min-h-screen" style={{ backgroundColor: "#0A1520", color: "#F0F4F8" }}><MediaHeader activeCategory="travel-guide" /><main>
    <section className="relative overflow-hidden" style={{ minHeight: "min(640px, 74svh)" }}><img src={guide.hero.src} alt={guide.hero.alt} className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,16,26,0.94) 0%, rgba(7,16,26,0.7) 52%, rgba(7,16,26,0.16) 100%), linear-gradient(0deg, #0A1520 0%, transparent 42%)" }} /><div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 min-h-[inherit] flex items-end pb-16 md:pb-20"><div className="max-w-3xl"><Link href="/articles/travel-guide" className="inline-flex items-center gap-2 mb-8 text-xs font-montserrat font-bold tracking-[0.12em] hover:text-white" style={{ color: "#B8C5D0" }}><ArrowLeft size={14} /> 個人旅行ガイドの記事一覧へ</Link><div className="flex items-center gap-3 mb-5"><span className="h-px w-12" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.24em]" style={{ color: "#F1A368" }}>INDEPENDENT TRAVEL · {guide.number}</span></div><h1 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.35] text-white mb-5">{guide.title}</h1><p className="font-sans text-sm md:text-base leading-8 max-w-2xl" style={{ color: "#D5E0E7" }}>{guide.hero.caption}</p><div className="flex items-center gap-4 mt-7 text-[11px] font-montserrat tracking-[0.1em]" style={{ color: "#B8C5D0" }}><span>個人旅行ガイド</span><span className="h-px w-5 bg-white/30" /><span>読了約10分</span></div></div></div></section>
    <article className="max-w-3xl mx-auto px-5 md:px-8 pb-24 md:pb-32"><div className="border-b py-11 md:py-14 space-y-7 md:space-y-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}>{guide.intro.map((paragraph) => <p key={paragraph} className="font-serif-jp text-lg md:text-xl leading-9" style={{ color: "#DCE6EC" }}>{paragraph}</p>)}</div>
      <Heading label="AT A GLANCE">まず全体を整理する</Heading><div className="grid sm:grid-cols-2 gap-4">{guide.overview.map((item, index) => <div key={item} className="border p-5" style={{ borderColor: "rgba(232,115,42,0.35)", backgroundColor: "rgba(232,115,42,0.05)" }}><span className="font-montserrat text-[10px] font-bold tracking-[0.18em]" style={{ color: "#F1A368" }}>0{index + 1}</span><p className="font-serif-jp text-base font-bold leading-7 text-white mt-2">{item}</p></div>)}</div>
      <Heading label="VISUAL GUIDE">旅の全体像を、画像でつかむ</Heading><figure className="border p-2 md:p-3" style={{ borderColor: "rgba(232,115,42,0.38)", backgroundColor: "#0D1B28" }}><img src={guide.figure.src} alt={guide.figure.alt} className="w-full h-auto" loading="lazy" /><figcaption className="px-2 pt-3 pb-1 text-[11px] leading-6" style={{ color: "#8EA0AE" }}>{guide.figure.caption}</figcaption></figure>
      <Heading label="GUIDE">日数・予算を旅程に落とし込む</Heading><div className="space-y-16 md:space-y-20">{guide.sections.map((section) => <section key={section.label} className="border-l-2 pl-6 md:pl-8" style={{ borderColor: "#E8732A" }}><span className="font-montserrat text-[10px] font-bold tracking-[0.19em]" style={{ color: "#F1A368" }}>{section.label}</span><h2 className="font-serif-jp text-xl md:text-2xl font-bold leading-relaxed text-white mt-3 mb-5">{section.title}</h2><div className="space-y-6">{section.body.map((paragraph) => <p key={paragraph} className="font-sans text-[15px] leading-8 md:leading-9" style={{ color: "#C7D3DB" }}>{paragraph}</p>)}</div></section>)}</div>
      <section className="mt-16 md:mt-20 border p-7 md:p-9" style={{ borderColor: "rgba(232,115,42,0.5)", background: "linear-gradient(110deg, rgba(232,115,42,0.10), rgba(255,255,255,0.025))" }}><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>FINAL CHECK</span><h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{guide.checklist.title}</h2><p className="font-sans text-[15px] leading-8 md:leading-9 mt-6" style={{ color: "#D7E1E7" }}>{guide.checklist.body}</p><ul className="mt-7 space-y-4 font-sans text-sm leading-7" style={{ color: "#D7E1E7" }}>{guide.checklist.items.map((item) => <li key={item} className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />{item}</li>)}</ul></section>
      <section className="mt-16 md:mt-20 space-y-6">{guide.related.map((link) => <p key={link.href} className="font-sans text-[15px] leading-8 md:leading-9" style={{ color: "#C7D3DB" }}>{link.before}<Link href={link.href} className="underline decoration-[#E8732A] underline-offset-4 hover:text-white">{link.text}</Link>{link.after}</p>)}</section>
      <Heading label="FAQ">よくある質問</Heading><div className="divide-y border-y" style={{ borderColor: "rgba(255,255,255,0.14)" }}>{guide.faqs.map((faq, index) => <details key={faq.question} className="group py-6"><summary className="cursor-pointer list-none flex items-start gap-4 font-serif-jp font-bold text-white"><span className="font-montserrat text-[10px] tracking-[0.16em] mt-1" style={{ color: "#E8732A" }}>Q{String(index + 1).padStart(2, "0")}</span><span className="flex-1 leading-7">{faq.question}</span><span className="text-xl leading-none transition-transform group-open:rotate-45" style={{ color: "#E8732A" }}>+</span></summary><p className="font-sans text-sm leading-8 mt-5 pl-10" style={{ color: "#C7D3DB" }}>{faq.answer}</p></details>)}</div>
      <section className="relative overflow-hidden mt-16 md:mt-20 p-7 md:p-10 border" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(110deg, rgba(232,115,42,0.16), rgba(201,168,76,0.10) 48%, rgba(9,22,34,0.65)), #102132" }}><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "22px 22px" }} /><div className="relative z-10 max-w-2xl"><div className="flex items-center gap-3 mb-4"><span className="h-px w-10" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>MAKE THE PLAN SIMPLE</span></div><h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed">旅程と移動を、<br />出発前に整えよう。</h2><p className="font-sans text-sm md:text-base leading-8 mt-5" style={{ color: "#D7E1E7" }}>料金の分かりやすさ、日本語対応、ドライバー品質、キャンセル条件を比べて、スリランカ個人旅行に合うタクシーチャーターを選びませんか。</p><a href="/#ranking" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} /></a></div></section>
      {guide.references && <section className="mt-14 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}><h2 className="font-serif-jp text-lg font-bold text-white mb-4">参考情報</h2><ol className="space-y-2 font-sans text-xs leading-6" style={{ color: "#9BAAB5" }}>{guide.references.map((reference, index) => <li key={reference.href}>[{index + 1}] <a className="underline underline-offset-4 hover:text-white" href={reference.href} target="_blank" rel="noopener noreferrer">{reference.label}</a></li>)}</ol></section>}
    </article></main></div>;
}

export function ArticleTripDurationGuide() { return <PlanningGuide variant="days" />; }
export function ArticleTripBudgetGuide() { return <PlanningGuide variant="budget" />; }
