/**
 * Design system: dark editorial travel journal with warm orange calls to action.
 * The article uses a measured comparison tone: each transport option has a role, while private charter is positioned as the itinerary backbone.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BusFront, CarFront, Check, Clock3, Compass, ExternalLink, MapPinned, TrainFront } from "lucide-react";
import { MediaHeader } from "@/components/MediaHeader";

const ARTICLE_TITLE = "スリランカの移動手段は何が正解？列車・トゥクトゥク・ローカルバス・専用車を比較";

const images = {
  trainHero: "/manus-storage/train-1_47ef775a.jpg",
  tukTukRide: "/manus-storage/tuktuk-1_9860c65d.jpg",
  tukTukStreet: "/manus-storage/tuktuk-2_12590549.jpg",
  trainView: "/manus-storage/train-2_f8e3345f.jpg",
  charterVan: "/manus-storage/charter-1_ee4f51c5.png",
  charterSafari: "/manus-storage/charter-2_527a7d47.png",
  charterSigiriya: "/manus-storage/charter-3_51d499c2.png",
  busBlue: "/manus-storage/bus-1_182565aa.png",
  busRed: "/manus-storage/bus-2_7bb3a877.png",
};

function Figure({ src, alt, caption, className = "" }: { src: string; alt: string; caption: string; className?: string }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden" style={{ backgroundColor: "#132434" }}>
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
    document.title = `${ARTICLE_TITLE}｜スリランカ タクシーチャーターおすすめ3選`;
    const description = "スリランカ旅行の移動は列車・トゥクトゥク・ローカルバス・専用車のどれが正解？それぞれの向いている場面と、個人旅行で専用車を活用するコツを解説します。";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A1520", color: "#F0F4F8" }}>
      <MediaHeader activeCategory="transport" />
      <main>
        <section className="relative overflow-hidden" style={{ minHeight: "min(680px, 78svh)" }}>
          <img src={images.trainHero} alt="茶畑を走るスリランカの列車" className="absolute inset-0 w-full h-full object-cover" />
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
            <p className="font-serif-jp text-lg md:text-xl leading-9" style={{ color: "#DCE6EC" }}>列車の窓から眺める高原、風を感じるトゥクトゥク、地元の人と同じ景色を見るローカルバス。スリランカの移動は、単なる「目的地までの時間」ではありません。</p>
            <p className="font-serif-jp text-lg md:text-xl leading-9 mt-5" style={{ color: "#DCE6EC" }}>ただし、複数の都市や世界遺産をめぐる個人旅行では、移動そのものが旅程の成否を左右します。列車やバスを楽しむ日と、専用車で確実に進む日を使い分けるのが、自由度と安心感を両立させる近道です。</p>
          </div>

          <Heading label="THE SHORT ANSWER">まずは結論：移動手段は「目的別」に使い分ける</Heading>
          <div className="overflow-x-auto border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <table className="w-full min-w-[620px] text-left">
              <thead style={{ backgroundColor: "rgba(232,115,42,0.12)" }}>
                <tr className="font-montserrat text-[11px] tracking-[0.12em]" style={{ color: "#F1A368" }}><th className="px-5 py-4">手段</th><th className="px-5 py-4">特に向く場面</th><th className="px-5 py-4">旅程での役割</th></tr>
              </thead>
              <tbody className="font-sans text-sm" style={{ color: "#D7E0E6" }}>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">列車</td><td className="px-5 py-4">絶景を楽しむ区間</td><td className="px-5 py-4">「移動そのもの」を旅の体験にする</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">トゥクトゥク</td><td className="px-5 py-4">町歩き・短距離</td><td className="px-5 py-4">ローカルの空気を気軽に味わう</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold">ローカルバス</td><td className="px-5 py-4">時間に余裕がある短〜中距離</td><td className="px-5 py-4">予算を抑えつつ暮らしに触れる</td></tr>
                <tr className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}><td className="px-5 py-4 font-bold" style={{ color: "#F1A368" }}>専用車チャーター</td><td className="px-5 py-4">都市間移動・荷物が多い日・複数の立ち寄り</td><td className="px-5 py-4">旅程の土台を安定させる</td></tr>
              </tbody>
            </table>
          </div>

          <Heading label="TRAIN">列車：景色を味わうために選びたい移動手段</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>コロンボと主要観光地を結ぶ鉄道は、スリランカを象徴する旅の体験の一つです。とくに山岳部へ向かう列車は、茶畑や緑の景色を車窓から楽しめるため、「移動の時間」自体を思い出にしたい日に向いています。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>一方で、快適な設備がある車両や速い列車は一部の路線に限られ、主要区間以外では時間にゆとりを持つ必要があります。駅までの移動、荷物の運搬、到着後のホテルへの移動をあらかじめ組み込んでおくと、列車の魅力を心から楽しめます。[1]</p>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <Figure src={images.trainHero} alt="茶畑の中を走る列車" caption="山岳部の列車は、風景を味わう時間として旅程に入れたい体験です。" className="aspect-[4/3] [&>div]:h-[calc(100%-28px)]" />
            <Figure src={images.trainView} alt="列車の窓から高原を眺める旅行者" caption="座席・予約・駅までの移動を事前に整えると、旅の満足度が上がります。" className="aspect-[4/3] [&>div]:h-[calc(100%-28px)]" />
          </div>

          <Heading label="TUKTUK">トゥクトゥク：短距離を、旅らしい寄り道に変える</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>町に着いてからカフェへ向かう、海辺のホテルからレストランへ行く、少し離れた展望台へ寄る。そんな短距離なら、トゥクトゥクは便利で楽しい選択肢です。風や音を間近に感じるので、街の空気を味わうにはぴったりです。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>観光局もトゥクトゥクを町・都市部の短い移動や小旅行に適した手段として案内しています。メーターがない車両もあるため、乗車前に料金を確認する習慣をつけましょう。[1]</p>
          <div className="grid md:grid-cols-[1.15fr_.85fr] gap-5 mt-8">
            <Figure src={images.tukTukRide} alt="乗客とドライバーが乗った青いトゥクトゥク" caption="短い区間を楽しみながら移動するなら、トゥクトゥクがよく似合います。" className="aspect-[4/3] [&>div]:h-[calc(100%-28px)]" />
            <Figure src={images.tukTukStreet} alt="木陰に停まる赤いトゥクトゥク" caption="町の移動は、現地ならではの乗り物を選ぶ楽しさもあります。" className="aspect-[3/4] [&>div]:h-[calc(100%-28px)]" />
          </div>

          <Heading label="LOCAL BUS">ローカルバス：時間に余裕がある日にこそ面白い</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>島内を広く結ぶローカルバスは、現地の人の暮らしに最も近い移動手段です。予定を詰め込みすぎず、途中下車や乗り換えも含めて旅を楽しめる人には、印象に残る体験になります。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>ただし、都市部では混雑することがあり、運行のリズムや道路事情によって所要時間を読みづらい場面もあります。到着時刻が決まっている移動や、長時間の移動を伴う日は、バスだけに頼らない設計が安心です。[1]</p>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <Figure src={images.busBlue} alt="道路を走る青いローカルバス" caption="主要な町をつなぐローカルバス。時間に余白を持たせて利用しましょう。" className="aspect-[4/3] [&>div]:h-[calc(100%-28px)]" />
            <Figure src={images.busRed} alt="装飾された赤いローカルバス" caption="地域ごとに異なるバスの表情も、ローカル移動ならではの魅力です。" className="aspect-[4/3] [&>div]:h-[calc(100%-28px)]" />
          </div>

          <Heading label="PRIVATE CHARTER">専用車チャーター：旅程を「できること」に変える移動手段</Heading>
          <p className="font-sans text-[15px] md:text-base leading-8" style={{ color: "#C7D3DB" }}>専用車の価値は、単に「楽に移動できる」ことだけではありません。ホテルを出て、途中で景色の良い場所に寄り、遺跡を訪ね、ランチをとり、次の街へ進む。目的地が点在するスリランカでは、移動の選択肢がそのまま旅程の自由度になります。</p>
          <p className="font-sans text-[15px] md:text-base leading-8 mt-5" style={{ color: "#C7D3DB" }}>観光局も、道路が狭く交通が混み合うことで島内移動が時間を要する場合があると案内しています。複数都市をめぐる個人旅行、家族旅行、荷物が多い日、列車の駅前後をつなぐ日には、専用車を旅の「軸」に置くと計画がぐっと安定します。[1]</p>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            <Figure src={images.charterVan} alt="スリランカで使われるシルバーのバン" caption="人数や荷物に応じた車両を選べます。" className="aspect-[4/3] [&>div]:h-[calc(100%-28px)]" />
            <Figure src={images.charterSafari} alt="サファリジープと象を楽しむ旅行者" caption="サファリなど、体験をつなぐ日にも相性が良い選択です。" className="aspect-[3/4] [&>div]:h-[calc(100%-28px)]" />
            <Figure src={images.charterSigiriya} alt="シーギリヤロックを背景にした旅行者とドライバー" caption="遠方の観光地も、立ち寄りながら無理なくめぐれます。" className="aspect-[4/3] [&>div]:h-[calc(100%-28px)]" />
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

          <Heading label="TRAVEL TIPS">迷ったら、移動手段より「失いたくない時間」で選ぶ</Heading>
          <div className="border-l-2 pl-5 py-1" style={{ borderColor: "#E8732A" }}>
            <p className="font-serif-jp text-lg leading-8 text-white">列車、トゥクトゥク、バスは、スリランカ旅行を豊かにしてくれます。</p>
            <p className="font-serif-jp text-lg leading-8 text-white mt-3">だからこそ、長距離移動や複数の立ち寄りまで、すべてを同じ手段で完結させる必要はありません。時間を守りたい日、荷物を預けたい日、行きたい場所がいくつもある日は、専用車を組み合わせる。これが個人旅行を無理なく楽しむための、現実的で自由な方法です。</p>
          </div>

          <section className="relative overflow-hidden mt-16 md:mt-20 p-7 md:p-10 border" style={{ borderColor: "rgba(232,115,42,0.55)", background: "linear-gradient(110deg, rgba(232,115,42,0.16), rgba(201,168,76,0.10) 48%, rgba(9,22,34,0.65)), #102132" }}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: "22px 22px" }} />
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4"><span className="h-px w-10" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.22em]" style={{ color: "#F1A368" }}>PLAN YOUR JOURNEY</span></div>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-white leading-relaxed">移動を「制約」ではなく、<br />旅の自由に変えよう。</h2>
              <p className="font-sans text-sm md:text-base leading-8 mt-5" style={{ color: "#D7E1E7" }}>日本語対応・料金の分かりやすさ・ドライバー品質を比較し、自分の旅程に合うタクシーチャーターを選びませんか。</p>
              <Link href="/" className="inline-flex items-center gap-3 mt-7 px-6 py-4 font-montserrat text-xs font-bold tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", boxShadow: "0 12px 26px rgba(0,0,0,0.25)" }}>
                タクシーチャーターおすすめ3選を比較する <ArrowRight size={15} />
              </Link>
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
