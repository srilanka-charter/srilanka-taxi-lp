import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { AlertTriangle, ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, ExternalLink, FileCheck2, MessageCircle, MessagesSquare, ShieldCheck } from "lucide-react";

/* ============================================================
   DESIGN: Modern Expedition — Dark Luxury Travel LP
   PHILOSOPHY: An editorial, evidence-led travel guide. The four
   companies are presented in the user-specified order only; never
   as ranks. Bebas Neue display type leads English labels and route
   markers, while Japanese serif type adds calm authority. Deep navy,
   gold rule lines and action-only orange signal calm judgement and help
   visitors verify Japanese support, SLTDA
   licence status and third-party reviews before they contact a firm.
   ============================================================ */

const HERO_SLIDES = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/af4PKUY2YLtuM7VvgtZTdw/hero-srilanka-L6v9rdyiQKSNBXXQsMyUAM.webp",
    location: "CULTURAL TRIANGLE · 01 / 04",
    eyebrow: "SRI LANKA PRIVATE CHARTER",
    title: "スリランカを\n専用車で、自由に。",
    description: "日本語対応の専用車で、憧れの絶景を自分たちのペースで。",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/BHJpmNEJeYmvs6JETpsBKm/hero_train-e4cT44tSVSFMse7HoCf8pK.webp",
    location: "HILL COUNTRY · 02 / 04",
    eyebrow: "A JOURNEY THROUGH TEA COUNTRY",
    title: "移動さえ、\n旅のハイライトに。",
    description: "茶畑、列車、山あいの町。次の目的地まで、美しい時間が続きます。",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/BHJpmNEJeYmvs6JETpsBKm/hero_safari-JViTbLqQxwmS9rhf9nSVyM.webp",
    location: "YALA NATIONAL PARK · 03 / 04",
    eyebrow: "WILDLIFE, AT YOUR OWN PACE",
    title: "空港からサファリまで。\n自由な旅程を、ひとつに。",
    description: "長距離移動も観光も、専用車だから予定に縛られません。",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/BHJpmNEJeYmvs6JETpsBKm/hero_surfing-6iWVFB3AcyCRfbJVEa6GUh.webp",
    location: "SOUTH COAST · 04 / 04",
    eyebrow: "THE ROAD TO THE INDIAN OCEAN",
    title: "海風を感じる、\n南部海岸への道。",
    description: "行きたい場所を、行きたい順番で。あなただけのスリランカへ。",
  },
];

const LANKAME_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/af4PKUY2YLtuM7VvgtZTdw/lankame-service-UzLuTxvg7SSRaNH9dU9HnY.webp";
const LANKARIDE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/af4PKUY2YLtuM7VvgtZTdw/lankaride-service-fGCtGBg6LPxFHh7mvfqjXs.webp";
const SRI_LANKA_TAXI_TOUR_IMG = "/manus-storage/sri-lanka-taxi-tour-card_6d80919a.jpg";
const E_TOURS_IMG = "/manus-storage/e-tours-card_15b820a6.jpg";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

function RevealSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, isInView } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type Service = {
  name: string;
  nameEn: string;
  tagline: string;
  url: string;
  image?: string;
  nofollow?: boolean;
  price: string;
  priceNote: string;
  highlight: string;
  features: string[];
  strengths: string[];
  checkpoints: string[];
  ctaText: string;
  ctaColor: string;
  accentColor: string;
  glowColor: string;
};

// Presentation order is specified by the client and does not express a ranking.
const services: Service[] = [
  {
    name: "ランカミー",
    nameEn: "LankaMe",
    tagline: "日本人経営の日本語サポートと、旅程に合わせた専用車手配",
    url: "https://srilankataxicharterservice.com/ja/",
    image: LANKAME_IMG,
    price: "距離・日数・車種等に応じて見積もり",
    priceNote: "希望の旅程・季節・車種などを伝え、内容を確認して見積もりを依頼できます。",
    highlight: "大手商社出身の日本人が経営。スリランカ観光庁(SLTDA)認可の会社と提携し、政府公認ドライバーのみ採用し高い水準のサービスを提供。",
    features: [
      "日本人スタッフによる日本語対応",
      "SLTDA認可会社との提携体制",
      "旅程の無料相談・カスタマイズ対応",
      "サファリ・アーユルヴェーダの手配相談",
    ],
    strengths: ["日本語で旅程を相談できる", "観光地同行・説明プランの相談が可能", "利用者コメントと第三者口コミを確認できる"],
    checkpoints: ["出発日・人数・希望車種を伝え、見積もり条件を確認", "希望するドライバー資格・プラン内容を事前に確認"],
    ctaText: "ランカミーの公式サイトを見る",
    ctaColor: "bg-amber-500 hover:bg-amber-400",
    accentColor: "#C9A84C",
    glowColor: "rgba(201, 168, 76, 0.3)",
  },
  {
    name: "Sri Lanka Taxi Tour",
    nameEn: "SRI LANKA TAXI TOUR",
    tagline: "日本語で相談できる、希望に合わせたプライベートチャーター",
    url: "https://sltaxitour.com/contact/",
    image: SRI_LANKA_TAXI_TOUR_IMG,
    nofollow: true,
    price: "距離・日数・車種等に応じて見積もり",
    priceNote: "日程と希望ルートを共有し、公式サイトから料金・条件を確認できます。",
    highlight: "公式サイトでは、希望に従って効率よく巡るプランを無料で相談できると案内。日本語教育・滞在経験のあるドライバーが2名在籍する旨も掲載されています。",
    features: [
      "日本語を交えた旅程相談の案内",
      "希望に合わせたルートの相談",
      "サンプルツアーを公式サイトで確認可能",
      "料金・予約条件は公式サイトで要確認",
    ],
    strengths: ["希望に沿うチャーターを相談できる", "日本語経験のあるドライバーに関する案内がある", "公式サイトに問い合わせ窓口がある"],
    checkpoints: ["SLTDAライセンスの表示と有効性を依頼前に確認", "第三者口コミ・キャンセル条件を公式サイトで確認"],
    ctaText: "Sri Lanka Taxi Tourの公式サイトを見る",
    ctaColor: "bg-sky-700 hover:bg-sky-600",
    accentColor: "#6FA7C9",
    glowColor: "rgba(111, 167, 201, 0.2)",
  },
  {
    name: "ランカライド",
    nameEn: "LankaRide",
    tagline: "日本語での旅程相談と、現地パートナーによる専用車手配",
    url: "https://srilankacarhirewithprivatedriver.com/ja/",
    image: LANKARIDE_IMG,
    price: "距離・日数・車種等に応じて見積もり",
    priceNote: "希望ルート・人数・車種をもとに、公式サイトで個別の条件を確認できます。",
    highlight: "スリランカの現地パートナーと連携し、日本語で旅行計画を相談できるチャーターサービスです。旅程策定から旅行中までのサポートを案内しています。",
    features: [
      "日本人スタッフによる日本語対応",
      "旅程策定から旅行中までの相談",
      "日本語ドライバーの手配を相談可能",
      "紅茶列車・サファリの手配相談",
    ],
    strengths: ["日本語で旅行計画を相談できる", "現地パートナーとの連携体制", "旅程に合わせた車種・プランを相談できる"],
    checkpoints: ["SLTDAライセンスの表示と有効性を依頼前に確認", "第三者口コミ・見積もりの対象範囲を事前に確認"],
    ctaText: "ランカライドの公式サイトを見る",
    ctaColor: "bg-slate-500 hover:bg-slate-400",
    accentColor: "#B8C5D0",
    glowColor: "rgba(184, 197, 208, 0.2)",
  },
  {
    name: "E-tours",
    nameEn: "E-TOURS",
    tagline: "日本語スタッフへの相談と、日数・距離を軸にした見積もり導線",
    url: "https://tours.yasmeen.jp/",
    image: E_TOURS_IMG,
    nofollow: true,
    price: "距離・日数・車種等に応じて見積もり",
    priceNote: "公式サイトでは、タクシー料金は日数と距離で決まる旨が案内されています。",
    highlight: "公式サイトで日本人スタッフによる見積もり相談を案内。行き先や時間割をもとにしたオンライン料金計算・予約導線と、Tripadvisor掲載ページへのリンクが用意されています。",
    features: [
      "日本語スタッフへの見積もり相談",
      "日数・距離・車種を踏まえた料金案内",
      "オンライン料金計算・予約導線",
      "Tripadvisor掲載ページへのリンクあり",
    ],
    strengths: ["見積もり方法を選んで相談できる", "日数・距離で料金条件を確認できる", "第三者口コミの参照先が案内されている"],
    checkpoints: ["SLTDAライセンスの表示と有効性を依頼前に確認", "見積もりに含まれる項目と変更条件を確認"],
    ctaText: "E-toursの公式サイトを見る",
    ctaColor: "bg-orange-700 hover:bg-orange-600",
    accentColor: "#E8732A",
    glowColor: "rgba(232, 115, 42, 0.24)",
  },
];

const comparisonItems = [
  { feature: "日本語での相談", lankame: "日本人スタッフによる対応", sriLankaTaxiTour: "日本語対応の案内あり", lankaride: "日本人スタッフによる対応", eTours: "日本人スタッフへの相談" },
  { feature: "見積もりの考え方", lankame: "距離・日数・車種等で確認", sriLankaTaxiTour: "距離・日数・車種等で確認", lankaride: "距離・日数・車種等で確認", eTours: "距離・日数・車種等で確認" },
  { feature: "SLTDAライセンス", lankame: "SLTDA認可会社と提携", sriLankaTaxiTour: "公式サイトで要確認", lankaride: "公式サイトで要確認", eTours: "公式サイトで要確認" },
  { feature: "第三者口コミ", lankame: "Tripadvisor掲載あり", sriLankaTaxiTour: "公式サイトで要確認", lankaride: "公式サイトで要確認", eTours: "Tripadvisor掲載ページあり" },
  { feature: "旅程相談", lankame: "無料相談・カスタマイズ対応", sriLankaTaxiTour: "無料相談の案内あり", lankaride: "旅程策定を相談可能", eTours: "見積もり・相談導線あり" },
  { feature: "依頼前の確認", lankame: "プラン・資格・見積もり範囲", sriLankaTaxiTour: "資格・口コミ・予約条件", lankaride: "資格・口コミ・見積もり範囲", eTours: "資格・見積もり範囲・変更条件" },
];

function cellColor(value: string, accent: string) {
  return value.includes("要確認") ? "#8A9BA8" : accent;
}

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    document.title = "スリランカでおすすめのタクシーチャーター会社4社｜SLTDAライセンスの選び方";
    let meta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "keywords";
      document.head.appendChild(meta);
    }
    meta.content = "スリランカタクシーチャーター,スリランカカーチャーター,SLTDA,スリランカ観光タクシー,ランカミー,Sri Lanka Taxi Tour,ランカライド,E-tours,スリランカ旅行";
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1923", color: "#F0F4F8" }}>
      <motion.div
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center gap-2 h-12 md:h-14 px-3 md:px-6"
        style={{ backgroundColor: showStickyBar ? "rgba(8, 18, 28, 0.98)" : "rgba(8, 18, 28, 0.9)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        <div className="hidden xl:flex items-center gap-2.5 shrink-0 pr-4 border-r" style={{ borderColor: "rgba(201,168,76,0.32)" }}>
          <span className="font-display text-lg leading-none tracking-[0.08em]" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#fff" }}>SRI LANKA</span>
          <span className="h-4 w-px" style={{ backgroundColor: "#C9A84C" }} />
          <span className="font-display text-lg leading-none tracking-[0.08em]" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#F1A368" }}>TAXI CHARTER</span>
          <span className="font-montserrat text-[8px] font-bold tracking-[0.18em] uppercase" style={{ color: "#9BAAB5" }}>PRIVATE ROAD EDITION</span>
        </div>
        <nav className="flex min-w-0 flex-1 items-center justify-end gap-0 overflow-x-auto" aria-label="記事カテゴリー">
          {[["移動手段", "transport"], ["モデルコース", "itinerary"], ["個人旅行ガイド", "travel-guide"], ["観光地情報", "destinations"], ["現地情報", "local-info"]].map(([label, category]) => (
            <a key={category} href={`/articles/${category}`} className="shrink-0 px-3 md:px-4 py-3 text-[11px] md:text-xs font-montserrat font-bold tracking-[0.05em] transition-colors hover:text-white" style={{ color: "#D3DEE5" }}>{label}</a>
          ))}
        </nav>
        <a href="#services" className="shrink-0 font-montserrat text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 md:px-4 py-2 rounded-full transition-all" style={{ backgroundColor: "#E8732A", color: "#fff" }}>
          <span className="hidden sm:inline">会社を見る</span><span className="sm:hidden">会社</span>
        </a>
      </motion.div>

      <section className="relative min-h-[740px] h-[100svh] overflow-hidden" aria-label="スリランカ タクシーチャーターの魅力">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-105">
          <AnimatePresence initial={false}>
            <motion.div key={HERO_SLIDES[activeHeroSlide].image} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7, ease: "easeInOut" }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_SLIDES[activeHeroSlide].image})` }} />
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(4,13,24,0.94) 0%, rgba(6,16,28,0.74) 38%, rgba(8,18,30,0.28) 72%, rgba(7,16,26,0.58) 100%), linear-gradient(0deg, rgba(5,14,24,0.9) 0%, rgba(5,14,24,0) 38%, rgba(5,14,24,0.36) 100%)" }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex items-center">
          <div className="max-w-3xl pt-12 md:pt-0">
            <motion.div key={`copy-${activeHeroSlide}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <div className="flex items-center gap-3 mb-6"><span className="h-px w-10 md:w-16" style={{ backgroundColor: "#E8732A" }} /><span className="font-montserrat text-[10px] md:text-xs font-bold tracking-[0.24em] uppercase" style={{ color: "#F1A368" }}>{HERO_SLIDES[activeHeroSlide].eyebrow}</span></div>
              <p className="font-montserrat text-[10px] md:text-xs tracking-[0.2em] uppercase mb-5" style={{ color: "#B8C5D0" }}>{HERO_SLIDES[activeHeroSlide].location}</p>
              <h1 className="font-serif-jp text-[2.7rem] sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] tracking-tight text-white whitespace-pre-line mb-6" style={{ textShadow: "0 5px 32px rgba(0,0,0,0.32)" }}>{HERO_SLIDES[activeHeroSlide].title}</h1>
              <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: "#D6DEE5" }}>{HERO_SLIDES[activeHeroSlide].description}</p>
            </motion.div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#services" className="font-montserrat text-xs font-bold tracking-[0.14em] uppercase px-6 py-4 text-center transition-transform duration-200 hover:-translate-y-0.5" style={{ backgroundColor: "#E8732A", color: "#fff", boxShadow: "0 12px 30px rgba(0,0,0,0.25)" }}>4社を確認する</a>
              <a href="#selection-guide" className="font-montserrat text-xs font-bold tracking-[0.14em] uppercase px-6 py-4 border text-center transition-colors duration-200 hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>選び方を見る</a>
            </div>
          </div>
        </motion.div>

        <div className="absolute z-20 right-5 md:right-10 bottom-16 md:bottom-20 flex items-center gap-3">
          <button type="button" onClick={() => setActiveHeroSlide((current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)} className="w-10 h-10 border flex items-center justify-center transition-colors hover:bg-white hover:text-[#0F1923]" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }} aria-label="前のスライド"><ChevronLeft size={18} /></button>
          <button type="button" onClick={() => setActiveHeroSlide((current) => (current + 1) % HERO_SLIDES.length)} className="w-10 h-10 border flex items-center justify-center transition-colors hover:bg-white hover:text-[#0F1923]" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }} aria-label="次のスライド"><ChevronRight size={18} /></button>
        </div>
        <div className="absolute z-20 left-6 md:left-10 bottom-12 md:bottom-14 flex items-center gap-3"><span className="font-montserrat text-[10px] tracking-[0.18em] text-white/70">SCENE</span>{HERO_SLIDES.map((slide, index) => <button key={slide.location} type="button" onClick={() => setActiveHeroSlide(index)} className="h-[2px] transition-all duration-300" style={{ width: index === activeHeroSlide ? "58px" : "20px", backgroundColor: index === activeHeroSlide ? "#E8732A" : "rgba(255,255,255,0.38)" }} aria-label={`${index + 1}枚目のスライド`} />)}</div>
        <div className="absolute z-20 left-1/2 -translate-x-1/2 bottom-4 flex flex-col items-center gap-1 text-white/60"><span className="font-montserrat text-[9px] tracking-[0.22em] uppercase">Scroll to explore</span><ChevronDown size={16} /></div>
      </section>

      <section id="selection-guide" className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="absolute inset-y-0 left-[8%] w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(232,115,42,0.34), transparent)" }} />
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealSection>
            <div className="max-w-4xl mb-14 md:mb-16 grid md:grid-cols-[150px_1fr] gap-5 md:gap-10 items-start">
              <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0"><span className="font-display text-6xl md:text-8xl leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C9A84C" }}>01</span><span className="font-montserrat text-[9px] font-bold tracking-[0.2em] uppercase md:mt-3" style={{ color: "#8A9BA8" }}>SELECT WITH CARE</span></div>
              <div><span className="font-montserrat text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: "#C9A84C" }}>HOW TO SELECT</span>
              <h2 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">スリランカでタクシーチャーターを<br className="hidden sm:block" />選ぶ際の<span style={{ color: "#E8732A" }}>ポイント</span></h2>
              <p className="font-sans text-base md:text-lg leading-relaxed" style={{ color: "#B8C5D0" }}>旅行の満足度は、料金だけでは決まりません。問い合わせ前に、日本語で相談できる体制、SLTDAライセンス、そして自社外の口コミを一つずつ確認しましょう。</p>
              </div>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 border-t border-l" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            {[
              { number: "01", label: "LANGUAGE", icon: <MessageCircle size={22} />, title: "日本語で、納得いくまで相談できるか", body: "日本人によって運営され、日本語で相談できるかを確認します。行き先・滞在時間・人数・希望車種を、誤解なく共有できる窓口があると、見積もりや旅程の確認が進めやすくなります。" },
              { number: "02", label: "LICENSING", icon: <ShieldCheck size={22} />, title: "SLTDAのライセンスを確認できるか", body: "会社またはドライバーが、スリランカ政府観光開発庁（SLTDA）のライセンスを得てサービスを提供しているかを確認します。表示だけで判断せず、番号と有効性を依頼先に確認してください。" },
              { number: "03", label: "REVIEWS", icon: <MessagesSquare size={22} />, title: "第三者機関の口コミを確認できるか", body: "自社サイトに載る情報だけでなく、Tripadvisorなど第三者機関の口コミも確認します。評価の数値だけでなく、直近の投稿内容、返信、利用条件に触れた記述まで読むことが大切です。" },
            ].map((item, index) => (
              <RevealSection key={item.number} delay={index * 0.12}>
                <article className="group min-h-[330px] border-r border-b p-7 md:p-8 h-full transition-colors duration-300 hover:bg-white/[0.035]" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
                  <div className="flex items-start justify-between mb-10"><span className="font-display text-5xl leading-none" style={{ color: "#E8732A" }}>{item.number}</span><span className="w-10 h-10 flex items-center justify-center border" style={{ borderColor: "rgba(232,115,42,0.38)", color: "#E8732A" }}>{item.icon}</span></div>
                  <span className="font-montserrat text-[9px] font-bold tracking-[0.18em] uppercase block mb-4" style={{ color: "#F1A368" }}>{item.label}</span>
                  <h3 className="font-serif-jp text-lg md:text-xl font-bold text-white leading-relaxed mb-4">{item.title}</h3>
                  <p className="font-sans text-sm leading-7" style={{ color: "#9BAAB5" }}>{item.body}</p>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32" style={{ backgroundColor: "#0F1923" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealSection>
            <div className="mb-16 border-t pt-7 md:pt-9 grid md:grid-cols-[190px_1fr] gap-5 md:gap-10 items-end" style={{ borderColor: "rgba(201,168,76,0.35)" }}>
              <div><span className="font-display text-7xl md:text-8xl leading-none block" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C9A84C" }}>02</span><span className="font-montserrat text-[9px] font-bold tracking-[0.22em] uppercase block mt-2" style={{ color: "#8A9BA8" }}>COMPANY DIRECTORY</span></div>
              <div><span className="font-montserrat text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: "#C9A84C" }}>SERVICE GUIDE</span>
              <h2 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">おすすめの<span style={{ color: "#E8732A" }}>タクシーチャーター会社</span></h2>
              <p className="font-sans text-base md:text-lg max-w-2xl" style={{ color: "#B8C5D0" }}>日本語対応、見積もり条件、ライセンス・口コミの確認ポイントを踏まえて、4社を紹介します。</p>
              <p className="font-sans text-xs mt-4" style={{ color: "#8A9BA8" }}>※以下はご指定の掲載順であり、優劣や順位を示すものではありません。</p></div>
            </div>
          </RevealSection>

          <div className="space-y-12 md:space-y-20">
            {services.map((service, index) => (
              <RevealSection key={service.name} delay={0.08}>
                <article className="relative overflow-hidden" style={{ border: `1px solid ${service.accentColor}40`, boxShadow: `0 0 40px ${service.glowColor}`, background: "rgba(255,255,255,0.03)" }}>
                  <div className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className="md:w-2/5 relative overflow-hidden min-h-[280px]">
                      {service.image ? <img src={service.image} alt={`${service.name}の専用車サービス`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" /> : <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 18% 22%, ${service.accentColor}42 0, transparent 34%), linear-gradient(135deg, #122738 0%, #0A1520 52%, #07111A 100%)` }} />}
                      <div className="absolute inset-0" style={{ background: `linear-gradient(${index % 2 === 1 ? "to right" : "to left"}, rgba(15,25,35,0.92) 0%, rgba(15,25,35,0.2) 67%, transparent 100%)` }} />
                      <div className="absolute inset-x-6 bottom-6">
                        <span className="font-montserrat text-[10px] font-bold tracking-[0.24em] uppercase block mb-3" style={{ color: service.accentColor }}>PRIVATE CHARTER</span>
                        <span className="font-display text-3xl md:text-4xl leading-[0.95] block text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{service.nameEn}</span>
                      </div>
                    </div>

                    <div className="md:w-3/5 p-6 md:p-8 lg:p-10 relative">
                      <div className="flex items-center gap-3 mb-4"><span className="h-px w-9" style={{ backgroundColor: service.accentColor }} /><span className="font-montserrat text-xs font-bold tracking-[0.16em] uppercase" style={{ color: service.accentColor }}>{service.nameEn}</span></div>
                      <h3 className="font-serif-jp text-2xl md:text-3xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="font-montserrat text-sm font-semibold mb-5" style={{ color: service.accentColor }}>{service.tagline}</p>

                      <div className="border-l-2 px-4 py-3 mb-5" style={{ borderColor: service.accentColor, background: `${service.accentColor}0D` }}>
                        <span className="font-montserrat text-[10px] tracking-[0.16em] uppercase block mb-1" style={{ color: "#8A9BA8" }}>ESTIMATE BASIS</span>
                        <span className="font-serif-jp text-base font-bold text-white block">{service.price}</span>
                        <span className="text-xs leading-relaxed block mt-1" style={{ color: "#8A9BA8" }}>{service.priceNote}</span>
                      </div>

                      <p className="font-sans text-sm md:text-base leading-relaxed mb-5" style={{ color: "#B8C5D0" }}>
                        {service.name === "ランカミー" ? <>
                          大手商社出身の日本人が経営。スリランカ観光庁(SLTDA)認可の会社と提携し、政府公認ドライバーのみ採用し高い水準のサービスを提供。<a href="https://srilankataxicharterservice.com/ja/voice/" target="_blank" rel="noopener noreferrer" className="underline decoration-current underline-offset-4 transition-opacity hover:opacity-80" style={{ color: service.accentColor }}>HPの利用客のコメント</a>だけでなく第三者機関である<a href="https://www.tripadvisor.jp/Attraction_Review-g1500185-d34145093-Reviews-LankaMe-Katunayake_Negombo_Western_Province.html" target="_blank" rel="noopener noreferrer" className="underline decoration-current underline-offset-4 transition-opacity hover:opacity-80" style={{ color: service.accentColor }}>Trip Advisor</a>でも高評価を得ている点からも信頼感の高さが伺える。
                        </> : service.highlight}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature) => <div key={feature} className="flex items-start gap-2"><CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: service.accentColor }} /><span className="text-xs leading-relaxed" style={{ color: "#B8C5D0" }}>{feature}</span></div>)}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7 border-t pt-5" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                        <div><div className="font-montserrat text-[10px] font-bold tracking-[0.16em] uppercase mb-2" style={{ color: "#9BE7B2" }}>主な特徴</div>{service.strengths.map((strength) => <div key={strength} className="flex items-start gap-1.5 mb-1.5"><span className="text-xs" style={{ color: "#4ade80" }}>+</span><span className="text-xs leading-relaxed" style={{ color: "#B8C5D0" }}>{strength}</span></div>)}</div>
                        <div><div className="font-montserrat text-[10px] font-bold tracking-[0.16em] uppercase mb-2" style={{ color: "#F1A368" }}>依頼前の確認</div>{service.checkpoints.map((checkpoint) => <div key={checkpoint} className="flex items-start gap-1.5 mb-1.5"><span className="text-xs" style={{ color: "#E8732A" }}>→</span><span className="text-xs leading-relaxed" style={{ color: "#B8C5D0" }}>{checkpoint}</span></div>)}</div>
                      </div>

                      <a href={service.url} target="_blank" rel={service.nofollow ? "nofollow noopener noreferrer" : "noopener noreferrer"} className={`inline-flex items-center gap-2 ${service.ctaColor} text-white font-montserrat font-bold text-xs md:text-sm tracking-wider px-5 md:px-6 py-3 transition-all hover:scale-[1.02] hover:shadow-lg`} style={{ boxShadow: `0 0 20px ${service.glowColor}` }}>{service.ctaText}<ExternalLink size={14} /></a>
                    </div>
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section id="estimate-check" className="relative overflow-hidden py-24 md:py-28" style={{ background: "radial-gradient(circle at 8% 0%, rgba(166,58,46,0.18), transparent 29%), radial-gradient(circle at 92% 100%, rgba(201,168,76,0.11), transparent 26%), #0B1620" }}>
        <div className="absolute inset-y-0 left-[8%] w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(248,113,113,0.34), transparent)" }} />
        <div className="relative max-w-5xl mx-auto px-4 md:px-8">
          <RevealSection>
            <div className="text-center mb-14"><div className="flex items-center justify-center gap-3 mb-5"><span className="h-px w-8" style={{ backgroundColor: "#F87171" }} /><span className="font-montserrat text-[10px] font-bold tracking-[0.24em] uppercase" style={{ color: "#F87171" }}>ESTIMATE CHECK</span><span className="h-px w-8" style={{ backgroundColor: "#F87171" }} /></div><h2 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">見積もりは、<span style={{ color: "#f87171" }}>価格だけで決めない。</span></h2><p className="font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#B8C5D0" }}>比較する際は、金額のほかに見積もりに含まれる範囲、追加費用が生じる条件、車種、サポート窓口を文面で確認しましょう。</p></div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(248,113,113,0.22)" }}>
            {[
              { number: "01", title: "見積もりの対象範囲", desc: "距離・日数・車種のほか、通行料、駐車料、ドライバーの宿泊・食事、観光地での待機時間など、何が含まれるかを確認します。" },
              { number: "02", title: "追加費用が生じる条件", desc: "時間延長、行程変更、遠方への移動、深夜・早朝対応などで条件が変わるかを、申し込み前に確認します。" },
              { number: "03", title: "ドライバーと車両の情報", desc: "手配予定の車種・定員・荷物量に加え、希望するライセンス区分や案内可能な範囲を確認します。" },
              { number: "04", title: "連絡・キャンセルの条件", desc: "現地での連絡方法、トラブル時の窓口、予約変更とキャンセルに関する条件を、予約前に確認します。" },
            ].map((item, index) => <RevealSection key={item.number} delay={index * 0.08}><article className="group min-h-full p-6 md:p-7 transition-colors duration-300 hover:bg-white/[0.045]" style={{ background: "rgba(10, 21, 32, 0.82)" }}><div className="flex items-start justify-between gap-5 mb-5"><span className="font-display text-4xl leading-none" style={{ color: "rgba(248,113,113,0.66)" }}>{item.number}</span><span className="mt-1 h-px flex-1 max-w-[96px]" style={{ backgroundColor: "rgba(248,113,113,0.3)" }} /></div><h3 className="font-serif-jp text-lg font-bold text-white mb-3 leading-relaxed">{item.title}</h3><p className="font-sans text-xs md:text-sm leading-7" style={{ color: "#B8C5D0" }}>{item.desc}</p></article></RevealSection>)}
          </div>
        </div>
      </section>

      <section id="compare" className="py-24 md:py-32" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RevealSection>
            <div className="mb-12 grid md:grid-cols-[180px_1fr] gap-4 md:gap-9 items-end border-b pb-7" style={{ borderColor: "rgba(201,168,76,0.28)" }}><div className="flex md:block items-center gap-3"><span className="font-display text-6xl md:text-7xl leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C9A84C" }}>03</span><span className="font-montserrat text-[9px] font-bold tracking-[0.18em] uppercase md:block md:mt-2" style={{ color: "#8A9BA8" }}>VERIFY BEFORE BOOKING</span></div><div><span className="font-montserrat text-xs font-bold tracking-widest uppercase mb-3 block" style={{ color: "#C9A84C" }}>COMPARISON</span><h2 className="font-serif-jp text-3xl sm:text-4xl font-bold text-white mb-3">4社の<span style={{ color: "#E8732A" }}>確認項目一覧</span></h2><p className="font-sans text-sm md:text-base" style={{ color: "#B8C5D0" }}>優劣を示す表ではなく、問い合わせ前に確認したい項目を一覧化しています。</p></div></div>
          </RevealSection>
          <RevealSection delay={0.2}>
            <div className="overflow-x-auto" style={{ border: "1px solid rgba(232, 115, 42, 0.2)" }}>
              <table className="w-full min-w-[920px]">
                <thead><tr style={{ backgroundColor: "rgba(232, 115, 42, 0.1)", borderBottom: "1px solid rgba(232, 115, 42, 0.3)" }}><th className="text-left px-4 py-4 font-montserrat text-xs font-bold tracking-wider uppercase" style={{ color: "#8A9BA8", width: "18%" }}>確認項目</th><th className="px-4 py-4 text-center font-serif-jp text-sm font-bold text-white" style={{ width: "20.5%" }}>ランカミー</th><th className="px-4 py-4 text-center font-serif-jp text-sm font-bold text-white" style={{ width: "20.5%" }}>Sri Lanka Taxi Tour</th><th className="px-4 py-4 text-center font-serif-jp text-sm font-bold text-white" style={{ width: "20.5%" }}>ランカライド</th><th className="px-4 py-4 text-center font-serif-jp text-sm font-bold text-white" style={{ width: "20.5%" }}>E-tours</th></tr></thead>
                <tbody>{comparisonItems.map((item, index) => <tr key={item.feature} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", backgroundColor: index % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}><td className="px-4 py-4 font-sans text-sm font-semibold" style={{ color: "#D3DEE5" }}>{item.feature}</td><td className="px-4 py-4 text-center font-sans text-xs leading-relaxed" style={{ color: cellColor(item.lankame, "#C9A84C") }}>{item.lankame}</td><td className="px-4 py-4 text-center font-sans text-xs leading-relaxed" style={{ color: cellColor(item.sriLankaTaxiTour, "#6FA7C9") }}>{item.sriLankaTaxiTour}</td><td className="px-4 py-4 text-center font-sans text-xs leading-relaxed" style={{ color: cellColor(item.lankaride, "#B8C5D0") }}>{item.lankaride}</td><td className="px-4 py-4 text-center font-sans text-xs leading-relaxed" style={{ color: cellColor(item.eTours, "#E8732A") }}>{item.eTours}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="font-sans text-xs leading-relaxed mt-4" style={{ color: "#8A9BA8" }}>※「公式サイトで要確認」としている項目は、掲載時点で本ページが確認できた公開情報だけでは判断せず、依頼先へライセンス番号・有効性・口コミ参照先を確認することをおすすめします。</p>
          </RevealSection>
        </div>
      </section>

      <section id="license-check" className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: "#0F1923" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24" style={{ background: "linear-gradient(to bottom, rgba(232,115,42,0.8), transparent)" }} />
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <RevealSection>
            <div className="text-center mb-14"><span className="font-display text-5xl md:text-6xl leading-none block mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C9A84C" }}>SLTDA / VERIFY</span><span className="font-montserrat text-[10px] font-bold tracking-[0.24em] uppercase mb-4 block" style={{ color: "#C9A84C" }}>LICENSE CHECK</span><h2 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">SLTDAライセンスを確認する際の<span style={{ color: "#E8732A" }}>注意</span></h2><p className="font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#B8C5D0" }}>ライセンスの有無は、番号やカードの見た目だけで判断せず、記載内容を確認することが重要です。</p></div>
          </RevealSection>
          <RevealSection delay={0.1}>
            <div className="relative overflow-hidden border p-6 md:p-9 mb-7" style={{ background: "linear-gradient(110deg, rgba(196,74,55,0.16), rgba(232,115,42,0.07))", borderColor: "rgba(248,113,113,0.45)" }}><div className="absolute top-0 left-0 h-px w-28" style={{ backgroundColor: "#F87171" }} /><div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start"><span className="w-11 h-11 shrink-0 flex items-center justify-center border" style={{ borderColor: "rgba(248,113,113,0.55)", color: "#F87171" }}><AlertTriangle size={20} /></span><div><span className="font-montserrat text-[10px] font-bold tracking-[0.2em] uppercase block mb-2" style={{ color: "#F1A368" }}>IMPORTANT</span><h3 className="font-serif-jp text-xl md:text-2xl font-bold text-white mb-3">P.V.番号は、SLTDAからの認可番号ではありません。</h3><p className="font-sans text-sm leading-7" style={{ color: "#D3DEE5" }}>P.V.番号が掲載されていても、それだけでSLTDAの認可を示すものではありません。ライセンス番号に<strong className="font-montserrat tracking-wide" style={{ color: "#F1A368" }}>SLTDA</strong>という文字列があるかを確認してください。</p></div></div></div>
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(232,115,42,0.25)" }}>
            <RevealSection delay={0.18}><article className="p-7 md:p-8 h-full" style={{ backgroundColor: "#101D29" }}><div className="flex items-center gap-3 mb-6"><span className="w-10 h-10 flex items-center justify-center border" style={{ borderColor: "rgba(232,115,42,0.45)", color: "#E8732A" }}><FileCheck2 size={19} /></span><span className="font-montserrat text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "#F1A368" }}>C NUMBER</span></div><h3 className="font-serif-jp text-xl font-bold text-white mb-4">Chauffeur guide license</h3><p className="font-sans text-sm leading-7" style={{ color: "#B8C5D0" }}>ドライバーのライセンスを確認する場合は、<strong className="text-white">C番号</strong>で、左側に<strong className="text-white">「Chauffeur guide license」</strong>と記載されているライセンスを保有しているかを確認してください。</p></article></RevealSection>
            <RevealSection delay={0.26}><article className="p-7 md:p-8 h-full" style={{ backgroundColor: "#101D29" }}><div className="flex items-center gap-3 mb-6"><span className="w-10 h-10 flex items-center justify-center border" style={{ borderColor: "rgba(232,115,42,0.45)", color: "#E8732A" }}><ShieldCheck size={19} /></span><span className="font-montserrat text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "#F1A368" }}>B NUMBER</span></div><h3 className="font-serif-jp text-xl font-bold text-white mb-4">Tourist Driver</h3><p className="font-sans text-sm leading-7" style={{ color: "#B8C5D0" }}>同様に、<strong className="text-white">B番号</strong>で、左側に<strong className="text-white">「Tourist Driver」</strong>と記載されているライセンスを保有しているかを確認してください。</p></article></RevealSection>
          </div>
          <RevealSection delay={0.34}><p className="font-sans text-xs md:text-sm leading-relaxed text-center mt-7 max-w-3xl mx-auto" style={{ color: "#8A9BA8" }}>不明点がある場合は、依頼先へライセンスの写し・番号・有効性を確認し、必要に応じて<a href="https://www.sltda.gov.lk/register-with-us" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white transition-colors" style={{ color: "#F1A368" }}>SLTDAの公式案内</a>も参照してください。</p></RevealSection>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(232, 115, 42, 0.1) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <RevealSection>
            <div className="flex items-center justify-center gap-3 mb-6"><span className="h-px w-12" style={{ backgroundColor: "#C9A84C" }} /><span className="font-display text-xl tracking-[0.12em]" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C9A84C" }}>SRI LANKA TAXI CHARTER</span><span className="h-px w-12" style={{ backgroundColor: "#C9A84C" }} /></div>
            <span className="font-montserrat text-xs font-bold tracking-widest uppercase mb-6 block" style={{ color: "#E8732A" }}>START YOUR JOURNEY</span>
            <h2 className="font-serif-jp text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">旅程と希望を伝え、<br /><span style={{ color: "#E8732A" }}>見積もりから始めよう。</span></h2>
            <p className="font-serif-jp text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "#B8C5D0" }}>出発日、人数、立ち寄りたい場所、荷物量、希望車種を整理してから相談すると、比較しやすい見積もりを受け取りやすくなります。</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">{services.map((service) => <a key={service.name} href={service.url} target="_blank" rel={service.nofollow ? "nofollow noopener noreferrer" : "noopener noreferrer"} className="glass-card p-5 text-left transition-all hover:-translate-y-1 group" style={{ border: `1px solid ${service.accentColor}40`, boxShadow: `0 0 20px ${service.glowColor}` }}><span className="font-montserrat text-[10px] font-bold tracking-[0.16em] uppercase block mb-3" style={{ color: service.accentColor }}>{service.nameEn}</span><span className="font-serif-jp text-sm font-bold text-white block mb-4">{service.name}</span><span className="font-montserrat text-[11px] font-bold tracking-wider uppercase flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: service.accentColor }}>公式サイトを見る <ExternalLink size={11} /></span></a>)}</div>
            <p className="font-sans text-xs mt-8" style={{ color: "#8A9BA8" }}>※予約・見積もり・相談に関する条件は、各社の公式サイトでご確認ください。</p>
          </RevealSection>
        </div>
      </section>

      <footer className="py-10 px-4 md:px-8" style={{ backgroundColor: "#080E14", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto"><div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"><div><div className="font-display text-2xl text-white mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>SRI LANKA <span style={{ color: "#E8732A" }}>TAXI CHARTER</span></div><div className="font-sans text-xs" style={{ color: "#8A9BA8" }}>スリランカのタクシーチャーター会社と選び方ガイド</div></div><div className="flex flex-wrap gap-4 justify-center md:justify-end"><a href="/editorial-policy" className="font-sans text-xs hover:underline transition-all" style={{ color: "#8A9BA8" }}>比較方針・掲載基準</a>{services.map((service) => <a key={service.name} href={service.url} target="_blank" rel={service.nofollow ? "nofollow noopener noreferrer" : "noopener noreferrer"} className="font-sans text-xs hover:underline transition-all" style={{ color: "#8A9BA8" }}>{service.name}</a>)}</div></div><div className="text-center font-sans text-xs" style={{ color: "#4A5568" }}>© 2025-2026 スリランカタクシーチャーター比較サイト. All rights reserved.</div></div>
      </footer>
    </div>
  );
}
