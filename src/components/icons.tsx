import type { SVGProps } from "react";

/* Набор иконок — порт объекта `I` из app.jsx макета.
   Размер задаётся через className (по умолчанию 1em). */

type P = SVGProps<SVGSVGElement>;

const stroke = (p: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  ...p,
});

export const IconSearch = (p: P) => (
  <svg {...stroke(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const IconHeart = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const IconHeartFill = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const IconUser = (p: P) => (
  <svg {...stroke(p)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);

export const IconBag = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M6 7h12l-1 13H7L6 7z" />
    <path d="M9 7V5a3 3 0 0 1 6 0v2" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg {...stroke({ strokeWidth: 2.5, ...p })}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconMinus = (p: P) => (
  <svg {...stroke({ strokeWidth: 2.5, ...p })}>
    <path d="M5 12h14" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconTruck = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M3 7h11v10H3z" />
    <path d="M14 10h4l3 3v4h-7" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

export const IconLeaf = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M11 20A7 7 0 0 1 4 13c0-6 9-9 16-9 0 7-3 16-9 16-3 0-5-2-5-5" />
    <path d="M2 22c2-5 5-8 9-11" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M12 22s-7-7-7-13a7 7 0 0 1 14 0c0 6-7 13-7 13z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M5 4h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const IconInsta = (p: P) => (
  <svg {...stroke(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export const IconTg = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="m21.5 3-19 7.5 5.5 2 2.5 7 3.5-4 5 4 4-16.5z" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...stroke({ strokeWidth: 2.5, ...p })}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);
