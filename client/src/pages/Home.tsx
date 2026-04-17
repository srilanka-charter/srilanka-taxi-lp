import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, Shield, Clock, Phone, CheckCircle, Award, Users, MapPin, ArrowRight, ExternalLink } from "lucide-react";

/* ============================================================
   DESIGN: Modern Expedition — Dark Luxury Travel LP
   
   Sections:
   1. Hero — Full-screen with parallax
   2. Why Charter — Problem/Solution with comparison image
   3. Ranking — 3 service cards with detailed info
   4. Comparison Table — Feature comparison
   5. CTA — Final call to action
   6. Footer
   ============================================================ */

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/af4PKUY2YLtuM7VvgtZTdw/hero-srilanka-L6v9rdyiQKSNBXXQsMyUAM.webp";
const WHY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/af4PKUY2YLtuM7VvgtZTdw/srilanka-why-FohivTqgkv5nbp7J2RCAP5.webp";
const LANKAME_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/af4PKUY2YLtuM7VvgtZTdw/lankame-service-UzLuTxvg7SSRaNH9dU9HnY.webp";
const LANKARIDE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/af4PKUY2YLtuM7VvgtZTdw/lankaride-service-fGCtGBg6LPxFHh7mvfqjXs.webp";
const SLTCS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663529989815/af4PKUY2YLtuM7VvgtZTdw/sltcs-service-CdGtA77YZ2dFBdc7RLmBKm.webp";

// Scroll reveal hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

// Animated section wrapper
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

// Service data
const services = [
  {
    rank: 1,
    rankLabel: "1位",
    name: "ランカミー",
    nameEn: "LankaMe",
    tagline: "業界最安値保証 × 日本人経営の安心感",
    url: "https://srilankataxicharterservice.com/ja/",
    image: LANKAME_IMG,
    badge: "rank-gold",
    badgeText: "BEST CHOICE",
    price: "15,000円〜/日",
    priceNote: "5日チャーター(SEDAN) 77,000円〜\n利用日数が長くなるほど1日あたり金額は低下\n距離・車種・ドライバーにより金額変動",
    highlight: "大手商社出身の日本人が経営。政府公認ドライバーのみ採用し、業界最安値保証の定額プランを提供。",
    features: [
      "日本人スタッフ常駐・日本語で全対応",
      "政府公認ドライバー中心に厳選採用",
      "業界最安値保証（定額・追加料金なし）",
      "観光地同行・説明できるプラチナプラン",
      "旅程の無料相談・カスタマイズ対応",
      "サファリ・アーユルヴェーダ手配可能",
    ],
    pros: ["大手と同じ品質で大幅に安い", "プラチナプランで観光ガイド付き", "日本語ドライバーも在籍"],
    cons: ["繁忙期は早めの予約が必要"],
    rating: 5.0,
    reviewCount: "多数",
    ctaText: "ランカミーに問い合わせる",
    ctaColor: "bg-amber-500 hover:bg-amber-400",
    accentColor: "#C9A84C",
    borderColor: "border-amber-500/50",
    glowColor: "rgba(201, 168, 76, 0.3)",
  },
  {
    rank: 2,
    rankLabel: "2位",
    name: "ランカライド",
    nameEn: "LankaRide",
    tagline: "現地最大手とのマッチングプラットフォーム",
    url: "https://srilankacarhirewithprivatedriver.com/ja/",
    image: LANKARIDE_IMG,
    badge: "rank-silver",
    badgeText: "RECOMMENDED",
    price: "80,000円〜/5日",
    priceNote: "7日チャーター(SEDAN) 109,000円〜",
    highlight: "スリランカ最大手Chari Travel and Tours Pvt Ltdとのマッチング。日本語ドライバーを多数抱え、品質面で高い評価。",
    features: [
      "日本人スタッフ常駐・日本語対応",
      "日本語ドライバー多数在籍",
      "Chauffeur Guide Driver資格保持者多数",
      "旅程策定から旅行中まで幅広くサポート",
      "定額制・追加料金なし",
      "紅茶列車・サファリ手配代行可能",
    ],
    pros: ["日本語ドライバーが豊富", "現地最大手との連携で安定品質", "Pro Planで観光地同行可能", "事前に料金がきまり定額制"],
    cons: ["シーズンによって価格変動あり"],
    rating: 4.8,
    reviewCount: "多数",
    ctaText: "ランカライドに問い合わせる",
    ctaColor: "bg-slate-500 hover:bg-slate-400",
    accentColor: "#B8C5D0",
    borderColor: "border-slate-400/50",
    glowColor: "rgba(184, 197, 208, 0.2)",
  },
  {
    rank: 3,
    rankLabel: "3位",
    name: "スリランカタクシーチャーターサービス",
    nameEn: "SLTCS",
    tagline: "5年の実績・業界最安値・24時間予約可能",
    url: "https://srilanka-charter.com/",
    image: SLTCS_IMG,
    badge: "rank-bronze",
    badgeText: "TRUSTED",
    price: "14,400円〜/日",
    priceNote: "5日チャーター 72,000円〜（全部込み）",
    highlight: "香港拠点の日本人経営。毎年1,000人以上が利用する実績。時間・距離無制限の定額制で7日前まで完全無料キャンセル。",
    features: [
      "日本人スタッフ常駐・日本語ドライバー在籍",
      "業界最安値保証（全部込み）",
      "時間・距離無制限・追加料金なし",
      "7日前まで完全無料キャンセル",
      "急なコース変更も完全無料",
      "法人・ビジネス利用も対応",
    ],
    pros: ["キャンセル料が7日前まで無料", "時間・距離無制限の明瞭定額", "毎年1,000人以上の実績"],
    cons: ["香港拠点のため一部対応に時差あり"],
    rating: 4.7,
    reviewCount: "1,000人以上/年",
    ctaText: "SLTCSに問い合わせる",
    ctaColor: "bg-orange-700 hover:bg-orange-600",
    accentColor: "#C47A3A",
    borderColor: "border-orange-700/50",
    glowColor: "rgba(196, 122, 58, 0.2)",
  },
];

// Comparison table data
const comparisonItems = [
  { feature: "日本語対応", lankame: "◎ 日本人スタッフ常駐", lankaride: "◎ 日本人スタッフ常駐", sltcs: "◎ 日本人スタッフ常駐" },
  { feature: "日本語ドライバー", lankame: "◎ 在籍", lankaride: "◎ 多数在籍", sltcs: "◎ 在籍" },
  { feature: "政府公認ドライバー", lankame: "◎ 全員", lankaride: "◎ 多数", sltcs: "◎ 厳格審査通過" },
  { feature: "観光地同行・説明", lankame: "◎ プラチナプラン", lankaride: "◎ Pro Plan", sltcs: "○ 対応可" },
  { feature: "最安値保証", lankame: "◎ 業界最安値保証", lankaride: "○ 競争力ある価格", sltcs: "◎ 業界最安値保証" },
  { feature: "追加料金", lankame: "◎ 一切なし", lankaride: "◎ なし", sltcs: "◎ 一切なし" },
  { feature: "キャンセル規定", lankame: "○ 要確認", lankaride: "○ 要確認", sltcs: "◎ 7日前まで無料" },
  { feature: "旅程相談", lankame: "◎ 無料・丁寧", lankaride: "◎ 無料", sltcs: "◎ 無料" },
  { feature: "サファリ等手配", lankame: "◎ 可能", lankaride: "◎ 可能", sltcs: "◎ 可能" },
  { feature: "法人対応", lankame: "◎ 対応", lankaride: "○ 相談可", sltcs: "◎ 大歓迎" },
];

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [activeTab, setActiveTab] = useState(0);

  // Sticky CTA bar visibility
  const [showStickyBar, setShowStickyBar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1923", color: "#F0F4F8" }}>

      {/* ===== STICKY CTA BAR ===== */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: showStickyBar ? 0 : -80 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 md:px-8"
        style={{ backgroundColor: "rgba(15, 25, 35, 0.95)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(232, 115, 42, 0.3)" }}
      >
        <div className="flex items-center gap-2">
          <span className="font-montserrat text-xs font-semibold tracking-widest uppercase" style={{ color: "#E8732A" }}>SRI LANKA</span>
          <span className="text-white font-serif-jp text-sm font-semibold hidden sm:block">タクシーチャーターおすすめ3選</span>
        </div>
        <a
          href="#ranking"
          className="cta-pulse font-montserrat text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full transition-all"
          style={{ backgroundColor: "#E8732A", color: "#fff" }}
        >
          サービスを見る
        </a>
      </motion.div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,25,35,0.3) 0%, rgba(15,25,35,0.6) 60%, rgba(15,25,35,1) 100%)" }} />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="font-montserrat text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border" style={{ color: "#E8732A", borderColor: "#E8732A" }}>
              SRI LANKA TAXI CHARTER GUIDE 2025-2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            スリランカ
            <br />
            <span style={{ color: "#E8732A" }}>タクシーチャーター</span>
            <br />
            おすすめ3選
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-serif-jp text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            style={{ color: "#B8C5D0" }}
          >
            日本語対応・政府公認ドライバー・定額制。<br />
            安心して旅を任せられる厳選3サービスを徹底比較。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#ranking"
              className="cta-pulse font-montserrat font-bold tracking-wider uppercase px-8 py-4 rounded-full text-white transition-all hover:scale-105 text-sm md:text-base"
              style={{ backgroundColor: "#E8732A", boxShadow: "0 0 30px rgba(232, 115, 42, 0.4)" }}
            >
              ランキングを見る
            </a>
            <a
              href="#why"
              className="font-montserrat font-semibold tracking-wider uppercase px-8 py-4 rounded-full border transition-all hover:bg-white/10 text-sm md:text-base"
              style={{ color: "#B8C5D0", borderColor: "rgba(184, 197, 208, 0.4)" }}
            >
              なぜチャーターが必要？
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { num: "8", label: "世界遺産" },
              { num: "15,000円/日〜", label: "5日以上利用の場合" },
              { num: "1,000人+", label: "年間利用者" },
              { num: "選択可能", label: "ガイドドライバー" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#E8732A" }}>{stat.num}</div>
                <div className="font-montserrat text-xs tracking-wider" style={{ color: "#B8C5D0" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "#B8C5D0" }}
        >
          <span className="font-montserrat text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== WHY CHARTER SECTION ===== */}
      <section id="why" className="py-20 md:py-32" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="font-montserrat text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: "#E8732A" }}>WHY CHARTER</span>
              <h2 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                スリランカで<span style={{ color: "#E8732A" }}>タクシーチャーター</span>が<br />必要な理由
              </h2>
              <p className="font-sans text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#B8C5D0" }}>
                スリランカは北海道の8割という広大な国土に8つの世界遺産が点在。しかし公共交通機関は未発達で、観光地へのアクセスは困難を極めます。
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <RevealSection delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(232, 115, 42, 0.2)" }}>
                <img src={WHY_IMG} alt="公共交通 vs プライベートチャーター" className="w-full h-64 md:h-80 object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,27,42,0.8) 0%, transparent 50%)" }} />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="glass-card px-3 py-2 rounded-lg">
                    <div className="font-montserrat text-xs font-bold" style={{ color: "#ff6b6b" }}>✗ ローカルバス</div>
                    <div className="text-xs" style={{ color: "#B8C5D0" }}>乗り換え多数・時間ロス</div>
                  </div>
                  <div className="glass-card px-3 py-2 rounded-lg" style={{ border: "1px solid rgba(232, 115, 42, 0.4)" }}>
                    <div className="font-montserrat text-xs font-bold" style={{ color: "#E8732A" }}>◎ プライベートチャーター</div>
                    <div className="text-xs" style={{ color: "#B8C5D0" }}>Door to Door・快適</div>
                  </div>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin size={20} />,
                    title: "公共交通機関が未発達",
                    desc: "シーギリヤロック等の主要観光地へはバスで複数乗り換えが必要。高速道路も整備されておらず、移動時間が大幅にかかります。プロドライバーによる効率的なルート設計が不可欠です。",
                  },
                  {
                    icon: <Shield size={20} />,
                    title: "治安面での安心感",
                    desc: "外務省「レベル1：十分注意」指定のスリランカ。スリや置き引きへの対策として、政府公認ドライバーがボディガードの役割も担います。特に女性の一人旅にも安心です。",
                  },
                  {
                    icon: <Award size={20} />,
                    title: "観光ガイドも兼任できるドライバー",
                    desc: "Chauffeur Guide Driver資格を持つドライバーは観光地への同行・説明が可能。大手旅行代理店のガイド料（1万円以上/日）と比べ、大幅に安い追加料金で利用できます。",
                  },
                  {
                    icon: <Clock size={20} />,
                    title: "サファリ・アーユルヴェーダも手配可能",
                    desc: "スリランカ人気アクティビティのサファリジープツアーやアーユルヴェーダも、ドライバー経由で手配可能。現地の最新情報をもとに最適なプランを提案してくれます。",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(232, 115, 42, 0.15)", color: "#E8732A" }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-serif-jp font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8A9BA8" }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </RevealSection>
          </div>

          {/* Quick stats */}
          <RevealSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: "8", unit: "個", label: "世界遺産" },
                { num: "北海道の", unit: "8割", label: "の国土面積" },
                { num: "高速道路", unit: "未整備", label: "の主要観光地" },
                { num: "Door to", unit: "Door", label: "でどこでも移動" },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-4 text-center" style={{ border: "1px solid rgba(232, 115, 42, 0.15)" }}>
                  <div className="font-serif-jp text-sm font-bold" style={{ color: "#8A9BA8" }}>{stat.num}</div>
                  <div className="font-display text-2xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#E8732A" }}>{stat.unit}</div>
                  <div className="font-sans text-xs mt-1" style={{ color: "#8A9BA8" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===== RANKING SECTION ===== */}
      <section id="ranking" className="py-20 md:py-32" style={{ backgroundColor: "#0F1923" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="font-montserrat text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: "#E8732A" }}>RANKING 2025-2026</span>
              <h2 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                おすすめ<span style={{ color: "#E8732A" }}>3選</span>を徹底比較
              </h2>
              <p className="font-sans text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#B8C5D0" }}>
                日本語対応・ドライバー品質・価格・サポート体制の観点から厳選した3サービスをご紹介します。
              </p>
            </div>
          </RevealSection>

          {/* Service cards */}
          <div className="space-y-12 md:space-y-20">
            {services.map((service, index) => (
              <RevealSection key={service.rank} delay={0.1}>
                <div
                  className={`relative rounded-2xl overflow-hidden ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  style={{
                    border: `1px solid ${service.accentColor}40`,
                    boxShadow: `0 0 40px ${service.glowColor}`,
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  {/* Rank number background */}
                  <div
                    className="absolute top-0 right-0 font-display text-[120px] md:text-[180px] font-bold leading-none opacity-5 pointer-events-none select-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", color: service.accentColor, lineHeight: 1 }}
                  >
                    {service.rank}
                  </div>

                  <div className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-0`}>
                    {/* Image */}
                    <div className="md:w-2/5 relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-56 md:h-full object-cover transition-transform duration-700 hover:scale-105"
                        style={{ minHeight: "280px" }}
                      />
                      <div className="absolute inset-0" style={{ background: `linear-gradient(${index % 2 === 1 ? "to right" : "to left"}, rgba(15,25,35,0.8) 0%, transparent 50%)` }} />
                      {/* Rank badge */}
                      <div className={`absolute top-4 ${index % 2 === 1 ? "right-4" : "left-4"} ${service.badge} px-4 py-2 rounded-full font-montserrat text-xs font-bold tracking-wider uppercase`}>
                        {service.badgeText}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-6 md:p-8 lg:p-10 relative">
                      {/* Rank indicator */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`${service.badge} w-12 h-12 rounded-full flex items-center justify-center font-display text-xl font-bold`}
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {service.rank}
                        </div>
                        <div>
                          <div className="font-montserrat text-xs font-bold tracking-widest uppercase" style={{ color: service.accentColor }}>
                            {service.rankLabel} — {service.nameEn}
                          </div>
                        </div>
                      </div>

                      <h3 className="font-serif-jp text-2xl md:text-3xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="font-montserrat text-sm font-semibold mb-4" style={{ color: service.accentColor }}>{service.tagline}</p>

                      {/* Price */}
                      <div className="glass-card rounded-xl px-4 py-3 mb-5 inline-flex flex-col" style={{ border: `1px solid ${service.accentColor}30` }}>
                        <span className="font-montserrat text-xs tracking-wider uppercase" style={{ color: "#8A9BA8" }}>料金目安</span>
                        <span className="font-display text-2xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", color: service.accentColor }}>{service.price}</span>
                        <span className="text-xs whitespace-pre-line" style={{ color: "#8A9BA8" }}>{service.priceNote}</span>
                      </div>

                      <p className="font-sans text-sm md:text-base leading-relaxed mb-5" style={{ color: "#B8C5D0" }}>{service.highlight}</p>

                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {service.features.map((feat, fi) => (
                          <div key={fi} className="flex items-start gap-2">
                            <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: service.accentColor }} />
                            <span className="text-xs" style={{ color: "#B8C5D0" }}>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pros/Cons */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="font-montserrat text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#4ade80" }}>メリット</div>
                          {service.pros.map((pro, pi) => (
                            <div key={pi} className="flex items-start gap-1.5 mb-1">
                              <span className="text-xs" style={{ color: "#4ade80" }}>+</span>
                              <span className="text-xs" style={{ color: "#B8C5D0" }}>{pro}</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className="font-montserrat text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#f87171" }}>注意点</div>
                          {service.cons.map((con, ci) => (
                            <div key={ci} className="flex items-start gap-1.5 mb-1">
                              <span className="text-xs" style={{ color: "#f87171" }}>!</span>
                              <span className="text-xs" style={{ color: "#B8C5D0" }}>{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-6">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, si) => (
                            <Star key={si} size={14} fill={si < Math.floor(service.rating) ? service.accentColor : "transparent"} style={{ color: service.accentColor }} />
                          ))}
                        </div>
                        <span className="font-montserrat text-sm font-bold" style={{ color: service.accentColor }}>{service.rating}</span>
                        <span className="text-xs" style={{ color: "#8A9BA8" }}>（利用者 {service.reviewCount}）</span>
                      </div>

                      {/* CTA Button */}
                      <a
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 ${service.ctaColor} text-white font-montserrat font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg`}
                        style={{ boxShadow: `0 0 20px ${service.glowColor}` }}
                      >
                        {service.ctaText}
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section id="compare" className="py-20 md:py-32" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="font-montserrat text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: "#E8732A" }}>COMPARISON</span>
              <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold text-white mb-4">
                3サービス<span style={{ color: "#E8732A" }}>徹底比較</span>
              </h2>
              <p className="font-sans text-sm md:text-base" style={{ color: "#B8C5D0" }}>
                主要な評価項目で3サービスを一覧比較
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.2}>
            <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(232, 115, 42, 0.2)" }}>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr style={{ backgroundColor: "rgba(232, 115, 42, 0.1)", borderBottom: "1px solid rgba(232, 115, 42, 0.3)" }}>
                    <th className="text-left px-4 py-4 font-montserrat text-xs font-bold tracking-wider uppercase" style={{ color: "#8A9BA8", width: "25%" }}>評価項目</th>
                    <th className="px-4 py-4 text-center" style={{ width: "25%" }}>
                      <div className="rank-gold inline-block px-3 py-1 rounded-full font-montserrat text-xs font-bold mb-1">1位</div>
                      <div className="font-serif-jp text-sm font-bold text-white">ランカミー</div>
                    </th>
                    <th className="px-4 py-4 text-center" style={{ width: "25%" }}>
                      <div className="rank-silver inline-block px-3 py-1 rounded-full font-montserrat text-xs font-bold mb-1">2位</div>
                      <div className="font-serif-jp text-sm font-bold text-white">ランカライド</div>
                    </th>
                    <th className="px-4 py-4 text-center" style={{ width: "25%" }}>
                      <div className="rank-bronze inline-block px-3 py-1 rounded-full font-montserrat text-xs font-bold mb-1">3位</div>
                      <div className="font-serif-jp text-sm font-bold text-white">SLTCS</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonItems.map((item, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                      }}
                    >
                      <td className="px-4 py-3 font-sans text-sm font-semibold" style={{ color: "#B8C5D0" }}>{item.feature}</td>
                      <td className="px-4 py-3 text-center font-sans text-xs" style={{ color: item.lankame.startsWith("◎") ? "#C9A84C" : "#B8C5D0" }}>{item.lankame}</td>
                      <td className="px-4 py-3 text-center font-sans text-xs" style={{ color: item.lankaride.startsWith("◎") ? "#B8C5D0" : "#8A9BA8" }}>{item.lankaride}</td>
                      <td className="px-4 py-3 text-center font-sans text-xs" style={{ color: item.sltcs.startsWith("◎") ? "#C47A3A" : "#B8C5D0" }}>{item.sltcs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===== HOW TO CHOOSE ===== */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#0F1923" }}>
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="font-montserrat text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: "#E8732A" }}>HOW TO CHOOSE</span>
              <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold text-white mb-4">
                あなたに合った<span style={{ color: "#E8732A" }}>選び方</span>
              </h2>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "とにかくコストを抑えたい",
                service: "ランカミー",
                reason: "業界最安値保証で、大手旅行代理店より大幅に安い。プラチナプランでも観光ガイド付きで割安。",
                url: "https://srilankataxicharterservice.com/ja/",
                color: "#C9A84C",
              },
              {
                icon: "🗣️",
                title: "日本語ドライバーが多い方がいい",
                service: "ランカライド",
                reason: "日本語ドライバーを最も多く抱えるサービス。スリランカ最大手との連携で品質も安定。",
                url: "https://srilankacarhirewithprivatedriver.com/ja/",
                color: "#B8C5D0",
              },
              {
                icon: "🔄",
                title: "キャンセルの柔軟性を重視",
                service: "SLTCS",
                reason: "7日前まで完全無料キャンセル。急なコース変更も無料。旅程が確定していない方に最適。",
                url: "https://srilanka-charter.com/",
                color: "#C47A3A",
              },
            ].map((item, i) => (
              <RevealSection key={i} delay={i * 0.15}>
                <div
                  className="glass-card rounded-2xl p-6 h-full flex flex-col"
                  style={{ border: `1px solid ${item.color}30` }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-serif-jp text-lg font-bold text-white mb-3">{item.title}</h3>
                  <div className="font-montserrat text-xs font-bold tracking-wider uppercase mb-2" style={{ color: item.color }}>
                    → {item.service}
                  </div>
                  <p className="font-sans text-sm leading-relaxed mb-5 flex-grow" style={{ color: "#8A9BA8" }}>{item.reason}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-montserrat text-xs font-bold tracking-wider uppercase transition-all hover:gap-2"
                    style={{ color: item.color }}
                  >
                    詳細を見る <ArrowRight size={12} />
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(232, 115, 42, 0.1) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <RevealSection>
            <span className="font-montserrat text-xs font-bold tracking-widest uppercase mb-6 block" style={{ color: "#E8732A" }}>START YOUR JOURNEY</span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              スリランカの旅を<br />
              <span style={{ color: "#E8732A" }}>今すぐ計画しよう</span>
            </h2>
            <p className="font-serif-jp text-lg md:text-xl mb-10" style={{ color: "#B8C5D0" }}>
              3つのサービスはいずれも無料で旅程相談が可能です。<br />
              まずは気軽に問い合わせてみましょう。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {services.map((service, i) => (
                <a
                  key={i}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 max-w-xs mx-auto sm:mx-0 glass-card rounded-2xl p-5 text-center transition-all hover:scale-105 group"
                  style={{ border: `1px solid ${service.accentColor}40`, boxShadow: `0 0 20px ${service.glowColor}` }}
                >
                  <div className={`${service.badge} w-10 h-10 rounded-full flex items-center justify-center font-display text-lg font-bold mx-auto mb-3`} style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {service.rank}
                  </div>
                  <div className="font-serif-jp text-sm font-bold text-white mb-1">{service.name}</div>
                  <div className="font-montserrat text-xs mb-3" style={{ color: service.accentColor }}>{service.price}</div>
                  <div className="font-montserrat text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1 group-hover:gap-2 transition-all" style={{ color: service.accentColor }}>
                    問い合わせる <ExternalLink size={10} />
                  </div>
                </a>
              ))}
            </div>

            <p className="font-sans text-xs mt-8" style={{ color: "#8A9BA8" }}>
              ※ 全サービス問い合わせ・旅程相談は無料です。予約確定後に料金が発生します。
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 px-4 md:px-8" style={{ backgroundColor: "#080E14", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <div className="font-display text-2xl text-white mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                SRI LANKA <span style={{ color: "#E8732A" }}>TAXI CHARTER</span>
              </div>
              <div className="font-sans text-xs" style={{ color: "#8A9BA8" }}>スリランカ タクシーチャーターおすすめ3選</div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              {services.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="font-sans text-xs hover:underline transition-all" style={{ color: "#8A9BA8" }}>
                  {s.name}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center font-sans text-xs" style={{ color: "#4A5568" }}>
            © 2025-2026 スリランカタクシーチャーター比較サイト. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
