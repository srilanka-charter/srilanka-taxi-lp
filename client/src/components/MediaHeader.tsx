/**
 * Design system: dark editorial travel media.
 * The media header keeps the five category routes visible without competing with article photography.
 */
import { Link } from "wouter";

const categories = [
  { label: "移動手段", key: "transport" },
  { label: "モデルコース", key: "itinerary" },
  { label: "個人旅行ガイド", key: "travel-guide" },
  { label: "観光地情報", key: "destinations" },
  { label: "現地情報", key: "local-info" },
];

type MediaHeaderProps = {
  activeCategory?: string;
};

export function MediaHeader({ activeCategory }: MediaHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "rgba(8, 18, 28, 0.94)", borderColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(16px)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="h-16 flex items-center justify-between gap-5">
          <Link href="/" className="shrink-0 leading-none">
            <span className="font-display text-xl tracking-wide text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              SRI LANKA <span style={{ color: "#E8732A" }}>TRAVEL MEDIA</span>
            </span>
          </Link>
          <Link href="/" className="hidden md:inline-flex text-xs font-montserrat font-bold tracking-[0.12em] uppercase transition-colors hover:text-white" style={{ color: "#B8C5D0" }}>
            タクシーチャーター比較へ
          </Link>
        </div>
      </div>
      <nav className="border-t overflow-x-auto" style={{ borderColor: "rgba(255,255,255,0.08)" }} aria-label="記事カテゴリー">
        <div className="max-w-7xl mx-auto min-w-max px-4 md:px-8 flex items-stretch">
          {categories.map((category) => {
            const isActive = activeCategory === category.key;
            return (
              <Link
                key={category.key}
                href={`/articles/${category.key}`}
                className="relative px-4 md:px-5 py-3.5 text-xs font-montserrat font-bold tracking-[0.08em] transition-colors whitespace-nowrap"
                style={{ color: isActive ? "#fff" : "#91A1AE" }}
              >
                {category.label}
                {isActive && <span className="absolute inset-x-4 bottom-0 h-[2px]" style={{ backgroundColor: "#E8732A" }} />}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export const mediaCategories = categories;
