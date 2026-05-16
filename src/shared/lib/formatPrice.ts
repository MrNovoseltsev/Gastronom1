/** Форматирует цену в аргентинских песо: 11000 -> "11 000 ARS". */
export function formatPrice(value: number): string {
  return `${value.toLocaleString("ru-RU")} ARS`;
}
