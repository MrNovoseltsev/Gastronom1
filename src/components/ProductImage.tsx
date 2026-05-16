import type { Product } from "@/types";
import { hashStr } from "@/lib/format";

/* Процедурный SVG-лейбл товара — часть айдентики дизайна (см. README).
   Детерминирован по p.id: паттерн, метка и номер выводятся из хэша. */

type Palette = { bg: string; ink: string; accent: string };

const CAT_PALETTES: Record<string, Palette> = {
  ready: { bg: "#3B5A3A", ink: "#FAF6EE", accent: "#E1241C" },
  smoked: { bg: "#7A2A1F", ink: "#FAF0E2", accent: "#E8B341" },
  drinks: { bg: "#1F4A6B", ink: "#EAF2F6", accent: "#E1241C" },
  dairy: { bg: "#F1E2BA", ink: "#3A2E18", accent: "#B91A12" },
  bakery: { bg: "#C68A3E", ink: "#FFF6E1", accent: "#3A2E18" },
  bread: { bg: "#5A3A22", ink: "#F4E3C2", accent: "#E1241C" },
  desserts: { bg: "#D88AA3", ink: "#3A1A24", accent: "#FAF6EE" },
  frozen: { bg: "#8DB3C1", ink: "#1A2A30", accent: "#E1241C" },
  spices: { bg: "#B8521E", ink: "#FFEBB8", accent: "#3A1A0A" },
  pickles: { bg: "#6E7A2E", ink: "#F4F0D2", accent: "#E1241C" },
  pantry: { bg: "#D89C2E", ink: "#3A2A10", accent: "#7A2A1F" },
  coffee: { bg: "#2E1F18", ink: "#E8C58E", accent: "#E1241C" },
};

export function ProductImage({
  p,
  large = false,
}: {
  p: Product;
  large?: boolean;
}) {
  const pal = CAT_PALETTES[p.c] ?? CAT_PALETTES.ready;
  const h = hashStr(p.id || p.n);
  const patternIdx = h % 5; // 0 dots, 1 v-stripes, 2 diag, 3 grid, 4 chevron
  const markIdx = (h >> 3) % 4; // 0 circle, 1 square, 2 diamond, 3 ring
  const num = String((h % 99) + 1).padStart(2, "0");

  // Имя — до 3 строк по длине.
  const words = p.n.split(" ");
  const lines: string[] = [];
  let cur = "";
  const max = large ? 14 : 11;
  for (const w of words) {
    if ((cur + " " + w).trim().length > max && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = (cur + " " + w).trim();
    }
    if (lines.length === 2) break;
  }
  if (cur) lines.push(cur);
  if (lines.length > 3) lines.length = 3;

  const patId = `pat-${p.id}`;
  const W = 400;
  const H = 400;
  const baseFont = large
    ? 38
    : lines.length === 3
      ? 26
      : lines.length === 2
        ? 32
        : 40;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="block h-full w-full"
    >
      <defs>
        {patternIdx === 0 && (
          <pattern id={patId} width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.6" fill={pal.ink} opacity="0.18" />
          </pattern>
        )}
        {patternIdx === 1 && (
          <pattern id={patId} width="16" height="16" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="2" height="16" fill={pal.ink} opacity="0.14" />
          </pattern>
        )}
        {patternIdx === 2 && (
          <pattern
            id={patId}
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect x="0" y="0" width="2" height="14" fill={pal.ink} opacity="0.16" />
          </pattern>
        )}
        {patternIdx === 3 && (
          <pattern id={patId} width="24" height="24" patternUnits="userSpaceOnUse">
            <path
              d="M0 0H24M0 0V24"
              stroke={pal.ink}
              strokeWidth="0.6"
              opacity="0.18"
              fill="none"
            />
          </pattern>
        )}
        {patternIdx === 4 && (
          <pattern id={patId} width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M0 14 L10 4 L20 14"
              stroke={pal.ink}
              strokeWidth="1"
              opacity="0.16"
              fill="none"
            />
          </pattern>
        )}
      </defs>

      <rect width={W} height={H} fill={pal.bg} />
      <rect width={W} height={H} fill={`url(#${patId})`} />

      {markIdx === 0 && (
        <circle cx="80" cy="80" r="44" fill={pal.accent} opacity="0.88" />
      )}
      {markIdx === 1 && (
        <rect x="36" y="36" width="88" height="88" fill={pal.accent} opacity="0.88" />
      )}
      {markIdx === 2 && (
        <g transform="translate(80 80) rotate(45)">
          <rect x="-44" y="-44" width="88" height="88" fill={pal.accent} opacity="0.88" />
        </g>
      )}
      {markIdx === 3 && (
        <circle
          cx="80"
          cy="80"
          r="44"
          fill="none"
          stroke={pal.accent}
          strokeWidth="14"
          opacity="0.88"
        />
      )}

      <text
        x={W - 24}
        y="36"
        textAnchor="end"
        fontFamily="JetBrains Mono, monospace"
        fontSize="13"
        fill={pal.ink}
        opacity="0.7"
        letterSpacing="0.06em"
      >
        / N°{num}
      </text>

      <g fontFamily="Manrope, sans-serif" fontWeight="800" fill={pal.ink}>
        {lines.map((ln, i) => {
          const y = H - 90 - (lines.length - 1 - i) * (baseFont + 4);
          return (
            <text key={i} x="24" y={y} fontSize={baseFont} letterSpacing="-0.025em">
              {ln.toLowerCase()}
            </text>
          );
        })}
      </g>

      <text
        x="24"
        y={H - 28}
        fontFamily="JetBrains Mono, monospace"
        fontSize="13"
        fill={pal.ink}
        opacity="0.7"
        letterSpacing="0.04em"
      >
        — {p.w}
      </text>

      <rect
        x="6"
        y="6"
        width={W - 12}
        height={H - 12}
        fill="none"
        stroke={pal.ink}
        strokeOpacity="0.18"
        strokeWidth="1"
      />
    </svg>
  );
}
