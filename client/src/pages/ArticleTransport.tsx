/**
 * Design system: dark editorial travel journal with warm orange calls to action.
 * The article uses a measured comparison tone: each transport option has a role, while private charter is positioned as the itinerary backbone.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BusFront, CarFront, Check, Clock3, Compass, ExternalLink, MapPinned, TrainFront } from "lucide-react";
import { MediaHeader } from "@/components/MediaHeader";
import { TransportRelatedLinks } from "@/components/TransportRelatedLinks";

const ARTICLE_TITLE = "スリランカの移動手段は何が正解？列車・トゥクトゥク・ローカルバス・専用車を比較";

const images = {
  transportHero: "/manus-storage/transport-van-thumb_7e18c597.png",
  trainScenery: "/manus-storage/train-1_47ef775a.jpg",
  tukTukRide: "/manus-storage/tuktuk-1_9860c65d.jpg",
  tukTukStreet: "/manus-storage/tuktuk-2_12590549.jpg",
  trainView: "/manus-storage/train-2_f8e3345f.jpg",
  charterVan: "/manus-storage/charter-1_ee4f51c5.png",
  charterSafari: "/manus-storage/charter-2_527a7d47.png",
  charterSigiriya: "/manus-storage/charter-3_51d499c2.png",
  busBlue: "/manus-storage/bus-1_182565aa.png",
  busRed: "/manus-storage/bus-2_7bb3a877.png",
};

const faqs = [
  {
    question: "スリランカ旅行の移動手段は、何を選べばよいですか？",
    answer: "一つの手段だけに決めず、区間ごとに使い分けるのがおすすめです。山岳部の景観を楽しむ区間は列車、町歩きはトゥクトゥク、時間に余裕のある短〜中距離はローカルバス、複数都市を移動する日や荷物が多い日は専用車が向いています。",
  },
  {
    question: "スリランカの都市間移動は、専用車チャーターが必要ですか？",
    answer: "必ずしも必要ではありませんが、複数の立ち寄り、長距離移動、到着時刻が重要な日、家族旅行では有力な選択肢です。列車やバスを旅の体験として取り入れながら、都市間の移動を専用車で支えると、自由度と安心感を両立しやすくなります。",
  },
  {
    question: "トゥクトゥクは長距離の移動にも使えますか？",
    answer: "トゥクトゥクは町・都市内の短距離移動や短い小旅行に向いています。長距離や荷物の多い移動では、所要時間・快適性・安全面を踏まえ、列車・バス・配車アプリ・専用車を検討するのが現実的です。",
  },
  {
    question: "スリランカのローカルバスは旅行者でも利用できますか？",
    answer: "旅行者でも利用できます。広い路線網と手頃な料金が魅力ですが、混雑や運行のペースを含めて、時間に余裕がある日に選ぶと楽しみやすくなります。目的地への到着時刻を優先したい日は、別の移動手段を組み合わせると安心です。",
  },
  {
    question: "タクシーチャーターを選ぶときは何を比べればよいですか？",
    answer: "料金に何が含まれるか、日本語での連絡可否、ドライバーの経験、車種、キャンセル条件、旅程の柔軟さを確認しましょう。比較ページでは、個人旅行に向く3社を同じ視点で確認できます。",
  },
];

function Figure({ src, alt, caption, className = "", mediaClassName = "h-64 md:h-72" }: { src: string; alt: string; caption: string; className?: string; mediaClassName?: string }) {
  return (
    <figure className={className}>
      <div className={`overflow-hidden ${mediaClassName}`} style={{ backgroundColor: "#132434" }}>
        <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <figcaption className="mt-2 text-[11px] leading-relaxed" style={{ color: "#8EA0AE" }}>{caption}</figcaption>
    </figure>
  );
}

function Heading({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-16 mb-7 md:mt-20">
      <span className="font-montserrat text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: "#E8732A" }}>{label}</span>
      <h2 className="font-serif-jp text-2xl md:text-3xl font-bold leading-relaxed text-white mt-3">{children}</h2>
    </div>
  );
}

export default function ArticleTransport() {
  useEffect(() => {
    document.title = "スリランカ 移動手段を徹底比較｜列車・バス・トゥクトゥク・専用車";
    const description = "スリランカの移動手段を徹底比較。列車・ローカルバス・トゥクトゥク・配車アプリ・タクシー・専用車の使い分け、都市間移動、家族旅行、予約と安全のポイントを解説します。";
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
    keywords.content = "スリランカ 移動手段,スリランカ 国内移動,スリランカ 鉄道,スリランカ バス,スリランカ トゥクトゥク,スリランカ タクシーチャーター";

    let canonical = document.getElementById("article-canonical") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.id = "article-canonical";
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://srilankataxicharter.com/articles/sri-lanka-transport-guide";

    const scriptId = "article-transport-jsonld";
    document.getElementById(scriptId)?.remove();
    const jsonLd = document.createElement("script");
    jsonLd.id = scriptId;
    jsonLd.type = "application/ld+json";
    jsonLd.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Article", headline: ARTICLE_TITLE, description, mainEntityOfPage: "https://srilankataxicharter.com/articles/sri-lanka-transport-guide", inLanguage: "ja", about: ["スリランカ", "移動手段", "個人旅行"] },
        { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      ],
    });
    document.head.appendChild(jsonLd);
    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A1520", color: "#F0F4F8" }}>
      <MediaHeader activeCategory="transport" />
      <main>
        <section className="relative overflow-hidden" style={{ minHeight: "min(680px, 78svh)" }}>
          <img src={images.transportHero} alt="スリランカの個人旅行で使えるシルバーのバン" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,16,26,0.94) 0%, rgba(7,16,26,0.7) 48%, rgba(7,16,26,0.18) 100%), linear-gradient(0deg, #0A1520 0%, transparent 36%)" }} />
          <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 min-h-[inherit] flex items-end pb-16 md:pb-20">
            <div className="max-w-3xl">
              <Link href="/articles?category=transport" className="inline-flex items-center gap-2 mb-8 text-xs font-montserrat font-bold tracking-[0.12em] hover:text-white" style={{ color: "#B8C5D0" }}>
                <ArrowLeft size={14} /> 移動手段の記事一覧へ
              </Link>
              <div className="flex items-center gap-3 mb-5"><span className="h-px w-12" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.24em]" style={{ color: "#F1A368" }}>TRANSPORT GUIDE · 01</span></div>
              <h1 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.35] text-white mb-5">{ARTICLE_TITLE}</h1>
              <p className="font-sans text-sm md:text-base leading-8 max-w-2xl" style={{ color: "#D5E0E7" }}>どの乗り物にも、その土地ならではの楽しさがあります。大切なのは、一つに絞ることではなく、旅程のなかで役割を決めて組み合わせることです。</p>
              <div className="flex items-center gap-4 mt-7 text-[11px] font-montserrat tracking-[0.1em]" style={{ color: "#B8C5D0" }}><span>移動手段</span><span className="h-px w-5 bg-white/30" /><span>読了約8分</span></div>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <div className="border-b py-9 md:py-11" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            <p className="font-serif-jp text-lg md:text-xl leading-9" style={{ color: "#DCE6EC" }}>「スリランカの移動手段は、何を選べばいい？」と迷ったら、まずは旅程のなかで役割を決めましょう。列車の窓から眺める高原、風を感じるトゥクトゥク、地元の人と同じ景色を見るローカルバス。スリランカの移動は、単なる「目的地までの時間」ではありません。</p>
            <p className="font-serif-jp text-lg md:text-xl leading-9 mt-5" style={{ color: "#DCE6EC" }}>ただし、複数の都市や世界遺産をめぐる個人旅行では、移動そのものが旅程の成否を左右します。列車やバスを楽しむ日と、専用車で確実に進む日を使い分けるのが、自由度と安心感を両立させる近道です。</p>
          </div>

          <Heading label="THE SHORT ANSWER">まずは結論：移動手段は「目的別」に使い分ける</Heading>
          <div className="overflow-x-auto border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <table className="w-full min-w-[760px] text-left">
              <thead style={{ backgroundColor: "rgba(232,115,42,0.12)" }}>
                <tr className="font-montserrat text-[11px] tracking-[0.12em]" style={{ color: "#F1A368" }}><th className="px-5 py-4">手段</th><th className="px-5 py-4">特に向く場面</th><th className="px-5 py-4">時間の確実性</th><th className="px-5 py-4">旅程での役割</th></tr>
              </thead>
              <tbody className="font-sans text-sm" style={{ color: "#D7E0E6" }}>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">列車</td><td className="px-5 py-4">絶景を楽しむ区間</td><td className="px-5 py-4">時刻表・予約を前提に計画</td><td className="px-5 py-4">「移動そのもの」を旅の体験にする</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">トゥクトゥク</td><td className="px-5 py-4">町歩き・短距離</td><td className="px-5 py-4">近距離なら柔軟</td><td className="px-5 py-4">ローカルの空気を気軽に味わう</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">ローカルバス</td><td className="px-5 py-4">時間に余裕がある短〜中距離</td><td className="px-5 py-4">余裕を持つのが前提</td><td className="px-5 py-4">予算を抑えつつ暮らしに触れる</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">配車アプリ・タクシー</td><td className="px-5 py-4">市内・空港周辺の移動</td><td className="px-5 py-4">手配状況を確認</td><td className="px-5 py-4">料金を見ながら短〜中距離を移動する</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold" style={{ color: "#F1A368" }}>専用車チャーター</td><td className="px-5 py-4">都市間移動・荷物が多い日・複数の立ち寄り</td><td className="px-5 py-4">旅程に合わせて調整しやすい</td><td className="px-5 py-4">旅程の土台を安定させる</td></tr>
              </tbody>
            </table>
          </div>

          <Heading label="BEFORE YOU DECIDE">スリランカの移動手段を選ぶ前に、決めておきたい4つのこと</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>移動手段の正解は、旅の目的と条件によって変わります。「安さ」だけでなく、移動に使える時間、荷物、人数、途中で寄りたい場所を先に整理すると、選択がぐっと楽になります。初めてのスリランカ個人旅行では、次の4点から逆算するのが実用的です。</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-7">
            {[
              ["01", "移動を体験にしたいか", "紅茶列車のように、乗る時間そのものが目的なら、列車に時間を使う価値があります。"],
              ["02", "到着時刻を優先するか", "ホテルのチェックイン、サファリの集合、飛行機など時間が決まった日は、乗り換えを減らすと安心です。"],
              ["03", "荷物と人数はどれくらいか", "スーツケースがある日、子ども連れ、複数人での移動は、車両を確保できる手段が快適です。"],
              ["04", "途中で何か所寄りたいか", "遺跡、食事、展望台などを組み合わせる日は、自由に停車できる移動手段が旅程を広げます。"],
            ].map(([number, title, text]) => (
              <div key={number} className="border p-5 md:p-6" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}>
                <span className="font-montserrat text-[10px] font-bold tracking-[0.2em]" style={{ color: "#E8732A" }}>{number}</span>
                <h3 className="font-serif-jp text-lg font-bold text-white mt-3 mb-2">{title}</h3>
                <p className="font-sans text-sm leading-7" style={{ color: "#B8C5D0" }}>{text}</p>
              </div>
            ))}
          </div>

          <Heading label="TRAIN">列車：景色を味わうために選びたい移動手段</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>コロンボと主要観光地を結ぶ鉄道は、スリランカを象徴する旅の体験の一つです。とくに山岳部へ向かう列車は、茶畑や緑の景色を車窓から楽しめるため、「移動の時間」自体を思い出にしたい日に向いています。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>一方で、快適な設備がある車両や速い列車は一部の路線に限られ、主要区間以外では時間にゆとりを持つ必要があります。駅までの移動、荷物の運搬、到着後のホテルへの移動をあらかじめ組み込んでおくと、列車の魅力を心から楽しめます。[1]</p>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <Figure src={images.trainScenery} alt="茶畑の中を走る列車" caption="山岳部の列車は、風景を味わう時間として旅程に入れたい体験です。" />
            <Figure src={images.trainView} alt="列車の窓から高原を眺める旅行者" caption="座席・予約・駅までの移動を事前に整えると、旅の満足度が上がります。" />
          </div>

          <Heading label="TUKTUK">トゥクトゥク：短距離を、旅らしい寄り道に変える</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>町に着いてからカフェへ向かう、海辺のホテルからレストランへ行く、少し離れた展望台へ寄る。そんな短距離なら、トゥクトゥクは便利で楽しい選択肢です。風や音を間近に感じるので、街の空気を味わうにはぴったりです。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>観光局もトゥクトゥクを町・都市部の短い移動や小旅行に適した手段として案内しています。メーターがない車両もあるため、乗車前に料金を確認する習慣をつけましょう。[1]</p>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <Figure src={images.tukTukRide} alt="乗客とドライバーが乗った青いトゥクトゥク" caption="短い区間を楽しみながら移動するなら、トゥクトゥクがよく似合います。" />
            <Figure src={images.tukTukStreet} alt="木陰に停まる赤いトゥクトゥク" caption="町の移動は、現地ならではの乗り物を選ぶ楽しさもあります。" />
          </div>

          <Heading label="RIDE HAILING">配車アプリ・タクシー：市内の移動を予定に合わせて組み立てる</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>コロンボなどの都市部や空港周辺では、配車アプリやタクシーも選択肢になります。レストランへの往復、駅からホテルまで、トゥクトゥクに乗るには荷物が多いときなどに便利です。流しのタクシーやトゥクトゥクを使う場合は、観光局も出発前に料金を確認することを勧めています。[1]</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>ただし、配車アプリは場所や時間帯によって車両の見つかりやすさが変わります。空港到着直後、早朝・夜間、地方のホテル、複数都市をまたぐ移動では「その場で呼ぶ」前提にせず、送迎や専用車をあらかじめ確保しておくと予定が立てやすくなります。</p>

          <Heading label="LOCAL BUS">ローカルバス：時間に余裕がある日にこそ面白い</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>島内を広く結ぶローカルバスは、現地の人の暮らしに最も近い移動手段です。予定を詰め込みすぎず、途中下車や乗り換えも含めて旅を楽しめる人には、印象に残る体験になります。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>ただし、都市部では混雑することがあり、運行のリズムや道路事情によって所要時間を読みづらい場面もあります。到着時刻が決まっている移動や、長時間の移動を伴う日は、バスだけに頼らない設計が安心です。[1]</p>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <Figure src={images.busBlue} alt="道路を走る青いローカルバス" caption="主要な町をつなぐローカルバス。時間に余白を持たせて利用しましょう。" />
            <Figure src={images.busRed} alt="装飾された赤いローカルバス" caption="地域ごとに異なるバスの表情も、ローカル移動ならではの魅力です。" />
          </div>

          <Heading label="CITY TO CITY">都市間移動では、旅程の「つなぎ方」が大切</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>スリランカの見どころは一か所に集まっているわけではありません。海辺、古都、文化三角地帯、山岳部、国立公園を組み合わせると、移動日は自然に増えます。島内の道路は、距離だけでは到着時間を読み切れないことがあるため、移動日に何を入れるかを先に決めるのがコツです。[1]</p>
          <div className="mt-7 border" style={{ borderColor: "rgba(232,115,42,0.42)", backgroundColor: "rgba(232,115,42,0.06)" }}>
            {[
              ["空港・コロンボ", "到着初日や深夜便の前後は、事前送迎でホテルまで確実につなぐ。"],
              ["キャンディ〜エッラ", "山岳部の景観を楽しみたいなら列車を中心にし、駅の前後は車で補う。"],
              ["シーギリヤ・ダンブッラ・ポロンナルワ", "複数の遺跡や食事場所を組み合わせる日は、専用車で立ち寄りを設計する。"],
              ["南西海岸・ゴール周辺", "海辺のホテルを拠点に、近距離はトゥクトゥク、長めの移動は車を使い分ける。"],
            ].map(([route, tip], index) => (
              <div key={route} className={`grid md:grid-cols-[190px_1fr] gap-2 px-5 py-5 ${index > 0 ? "border-t" : ""}`} style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                <h3 className="font-serif-jp font-bold text-white">{route}</h3>
                <p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{tip}</p>
              </div>
            ))}
          </div>

          <Heading label="PRIVATE CHARTER">専用車チャーター：旅程を「できること」に変える移動手段</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>専用車の価値は、単に「楽に移動できる」ことだけではありません。ホテルを出て、途中で景色の良い場所に寄り、遺跡を訪ね、ランチをとり、次の街へ進む。目的地が点在するスリランカでは、移動の選択肢がそのまま旅程の自由度になります。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>観光局も、道路が狭く交通が混み合うことで島内移動が時間を要する場合があると案内しています。複数都市をめぐる個人旅行、家族旅行、荷物が多い日、列車の駅前後をつなぐ日には、専用車を旅の「軸」に置くと計画がぐっと安定します。[1]</p>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <Figure src={images.charterVan} alt="スリランカで使われるシルバーのバン" caption="人数や荷物に応じた車両を選べます。" />
            <Figure src={images.charterSafari} alt="サファリジープと象を楽しむ旅行者" caption="サファリなど、体験をつなぐ日にも相性が良い選択です。" />
            <Figure src={images.charterSigiriya} alt="シーギリヤロックを背景にした旅行者とドライバー" caption="遠方の観光地も、立ち寄りながら無理なくめぐれます。" className="sm:col-span-2" />
          </div>

          <Heading label="ITINERARY DESIGN">個人旅行でおすすめの組み合わせ</Heading>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: <TrainFront size={20} />, title: "景色を楽しむ日", text: "列車を旅の主役に。駅までと駅からは専用車でつなぐ。" },
              { icon: <Compass size={20} />, title: "街を楽しむ日", text: "ホテル周辺はトゥクトゥク。気になる店や海辺へ軽やかに寄り道。" },
              { icon: <CarFront size={20} />, title: "都市をまたぐ日", text: "専用車で移動を安定させ、遺跡・サファリ・食事を一日の中に組み込む。" },
            ].map((item) => (
              <div key={item.title} className="border p-5" style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.025)" }}>
                <div className="mb-4" style={{ color: "#E8732A" }}>{item.icon}</div>
                <h3 className="font-serif-jp font-bold text-white mb-3">{item.title}</h3>
                <p className="font-sans text-sm leading-7" style={{ color: "#B8C5D0" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <Heading label="TRAVEL STYLE">旅行スタイル別：スリランカの移動手段の組み方</Heading>
          <div className="space-y-4">
            {[
              ["初めての個人旅行", "都市間の移動は専用車を軸にし、列車は絶景区間だけを選ぶと、見どころと安心感のバランスが取りやすくなります。"],
              ["一人旅", "都市部・海辺の短距離はトゥクトゥクや配車アプリ、到着時刻が重要な移動は送迎や専用車というように、日ごとに切り替えると快適です。"],
              ["家族旅行・子ども連れ", "荷物、休憩、食事の時間を調整しやすい専用車があると、移動日でも旅程に余白をつくれます。"],
              ["予算を抑えたい旅", "移動体験として列車・バスを取り入れつつ、空港送迎や長距離の一部にだけ車を使うと、無理のない計画にできます。"],
            ].map(([style, advice]) => (
              <div key={style} className="grid md:grid-cols-[180px_1fr] gap-3 border-l-2 py-4 pl-5" style={{ borderColor: "#E8732A" }}>
                <h3 className="font-serif-jp font-bold text-white">{style}</h3>
                <p className="font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>{advice}</p>
              </div>
            ))}
          </div>

          <Heading label="SAFETY & BOOKING">移動を快適にする予約・安全の基本</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>公共交通やローカル移動を楽しむほど、予定には少し余白が必要です。初めての場所で夜に到着する日、飛行機や列車への接続がある日、暑さや雨を避けたい日は、移動手段を前もって決めておくと安心です。</p>
          <ul className="space-y-3 mt-6 font-sans text-sm leading-7" style={{ color: "#C7D3DB" }}>
            <li className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />トゥクトゥク・流しのタクシーは、乗車前に料金や目的地を確認する。</li>
            <li className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />列車を主役にする日は、駅まで・駅からの移動と荷物の扱いまで予定に入れる。</li>
            <li className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />専用車は、料金に含まれる項目、車種、連絡方法、キャンセル条件を確認して選ぶ。</li>
            <li className="flex gap-3"><Check size={17} className="shrink-0 mt-1" style={{ color: "#E8732A" }} />長距離の日は、移動だけで一日を終わらせず、立ち寄りや休憩を含めた旅程にする。</li>
          </ul>

          <Heading label="TRAVEL TIPS">迷ったら、移動手段より「失いたくない時間」で選ぶ</Heading>
          <div className="border-l-2 pl-5 py-1" style={{ borderColor: "#E8732A" }}>
            <p className="font-serif-jp text-lg leading-8 text-white">列車、トゥクトゥク、バスは、スリランカ旅行を豊かにしてくれます。</p>
            <p className="font-serif-jp text-lg leading-8 text-white mt-3">だからこそ、長距離移動や複数の立ち寄りまで、すべてを同じ手段で完結させる必要はありません。時間を守りたい日、荷物を預けたい日、行きたい場所がいくつもある日は、専用車を組み合わせる。これが個人旅行を無理なく楽しむための、現実的で自由な方法です。</p>
          </div>

          <Heading label="FAQ">スリランカの移動手段でよくある質問</Heading>
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

          <TransportRelatedLinks current="hub" />

          <section className="relative overflow-hidden mt-16 md:mt-20 p-7 md:p-10 border" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(110deg, rgba(232,115,42,0.16), rgba(201,168,76,0.10) 48%, rgba(9,22,34,0.65)), #102132" }}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: "22px 22px" }} />
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4"><span className="h-px w-10" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>PLAN YOUR JOURNEY</span></div>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed">移動を「制約」ではなく、<br />旅の自由に変えよう。</h2>
              <p className="font-sans text-sm md:text-base leading-8 mt-5" style={{ color: "#D7E1E7" }}>日本語対応・料金の分かりやすさ・ドライバー品質を比較し、自分の旅程に合うタクシーチャーターを選びませんか。</p>
              <a href="/#ranking" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>
                タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} />
              </a>
            </div>
          </section>

          <section className="mt-14 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            <h2 className="font-serif-jp text-lg font-bold text-white mb-4">参考情報</h2>
            <ol className="space-y-2 font-sans text-xs leading-6" style={{ color: "#9BAAB5" }}>
              <li>[1] <a className="underline underline-offset-4 hover:text-white" href="https://www.srilanka.travel/getting-around" target="_blank" rel="noopener noreferrer">Sri Lanka Tourism, Getting Around</a></li>
              <li>[2] <a className="underline underline-offset-4 hover:text-white" href="https://www.railway.gov.lk/web/" target="_blank" rel="noopener noreferrer">Sri Lanka Railways, Official Website</a></li>
            </ol>
          </section>
        </article>
      </main>
    </div>
  );
}
