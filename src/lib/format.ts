/** 11000 → "11 000" */
export const fmt = (n: number): string =>
  n.toLocaleString("ru-RU").replace(/,/g, " ");

/**
 * Плавный скролл к секции с поправкой на высоту липкого хедера.
 * Намеренно не используем scrollIntoView — нужна точная коррекция по offset.
 */
export const scrollToId = (id: string, offset?: number): void => {
  const el = document.getElementById(id);
  if (!el) return;
  // Поправка на липкий хедер (84/68px) + небольшой зазор.
  const auto = window.innerWidth >= 768 ? 116 : 92;
  const y = el.getBoundingClientRect().top + window.scrollY - (offset ?? auto);
  window.scrollTo({ top: y, behavior: "smooth" });
};

/** Детерминированный хэш строки — основа процедурных SVG-картинок товаров. */
export const hashStr = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
};
