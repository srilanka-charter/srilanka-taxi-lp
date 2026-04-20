import { useEffect, useRef } from "react";

/* ============================================================
   ReviewCard — Canvas-rendered review card (anti-duplicate SEO)
   Renders review text as an image via HTML Canvas to prevent
   duplicate content detection by search engines.
   ============================================================ */

interface ReviewCardProps {
  reviewer: string;
  date: string;
  driver: string;
  title: string;
  body: string;
  service: "lankame" | "lankaride" | "sltcs";
  accentColor: string;
  badgeLabel: string;
}

const SERVICE_COLORS = {
  lankame: { bg: "#1A1200", border: "#C9A84C", accent: "#C9A84C", badge: "#C9A84C" },
  lankaride: { bg: "#0D1520", border: "#7BA7BC", accent: "#7BA7BC", badge: "#7BA7BC" },
  sltcs: { bg: "#130D00", border: "#C47A3A", accent: "#C47A3A", badge: "#C47A3A" },
};

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number): number {
  const words = text.split("");
  let line = "";
  let currentY = y;
  const chars: string[] = [];

  // Japanese text wrapping by character
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && line !== "") {
      ctx.fillText(line, x, currentY);
      line = words[i];
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, currentY);
    currentY += lineHeight;
  }
  return currentY;
}

export default function ReviewCard({ reviewer, date, driver, title, body, service }: ReviewCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = SERVICE_COLORS[service];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const PAD = 28;

    // Background
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, W, H);

    // Border (rounded rect simulation via clip)
    ctx.strokeStyle = colors.border;
    ctx.lineWidth = 1.5;
    const r = 16;
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.lineTo(W - r, 0);
    ctx.quadraticCurveTo(W, 0, W, r);
    ctx.lineTo(W, H - r);
    ctx.quadraticCurveTo(W, H, W - r, H);
    ctx.lineTo(r, H);
    ctx.quadraticCurveTo(0, H, 0, H - r);
    ctx.lineTo(0, r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.closePath();
    ctx.stroke();

    // Stars (5 stars)
    ctx.fillStyle = colors.accent;
    ctx.font = "bold 14px sans-serif";
    ctx.fillText("★★★★★", PAD, PAD + 14);

    // Reviewer name + date
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 13px 'Noto Sans JP', sans-serif";
    ctx.fillText(reviewer, PAD, PAD + 38);

    ctx.fillStyle = "#8A9BA8";
    ctx.font = "11px sans-serif";
    ctx.fillText(`${date}  ドライバー: ${driver}`, PAD, PAD + 56);

    // Divider
    ctx.strokeStyle = `${colors.border}60`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(PAD, PAD + 66);
    ctx.lineTo(W - PAD, PAD + 66);
    ctx.stroke();

    // Title
    ctx.fillStyle = colors.accent;
    ctx.font = "bold 13px 'Noto Sans JP', sans-serif";
    const titleEndY = wrapText(ctx, `「${title}」`, PAD, PAD + 86, W - PAD * 2, 20);

    // Body
    ctx.fillStyle = "#C8D5E0";
    ctx.font = "12px 'Noto Sans JP', sans-serif";
    wrapText(ctx, body, PAD, titleEndY + 8, W - PAD * 2, 18);

  }, [reviewer, date, driver, title, body, service, colors]);

  return (
    <canvas
      ref={canvasRef}
      width={360}
      height={260}
      style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }}
      aria-label={`${reviewer}様のレビュー`}
      role="img"
    />
  );
}
