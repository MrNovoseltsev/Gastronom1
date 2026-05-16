import type { Product, SortMode } from "@/types";
import { categories, totalCount } from "@/data/products";
import { ProductCard } from "./ProductCard";

type Props = {
  activeCat: string;
  onPickCategory: (id: string) => void;
  items: Product[];
  sort: SortMode;
  setSort: (s: SortMode) => void;
  query: string;
  cart: Record<string, number>;
  onAdd: (p: Product) => void;
  onQty: (id: string, q: number) => void;
  favs: Set<string>;
  onFav: (id: string) => void;
  onOpenProduct: (p: Product) => void;
};

const sortOptions: { id: SortMode; label: string }[] = [
  { id: "popular", label: "По умолчанию" },
  { id: "priceAsc", label: "Цена ↑" },
  { id: "priceDesc", label: "Цена ↓" },
];

const filterChips = ["Хит", "От шефа", "Премиум", "Новинка"];

export function Catalog({
  activeCat,
  onPickCategory,
  items,
  sort,
  setSort,
  query,
  cart,
  onAdd,
  onQty,
  favs,
  onFav,
  onOpenProduct,
}: Props) {
  const activeCatObj = categories.find((c) => c.id === activeCat);
  const headTitle = query
    ? `Поиск: «${query}»`
    : activeCat === "all"
      ? "Все товары"
      : (activeCatObj?.title ?? "Каталог");
  const headSub = query
    ? `Найдено позиций: ${items.length}`
    : activeCat === "all"
      ? "Весь каталог — 12 категорий"
      : activeCatObj?.sub;

  return (
    <section id="catalog" className="border-b border-line py-8 md:py-12">
      <div className="mx-auto max-w-[1280px] px-4 md:px-7">
        <div className="mb-7 flex flex-col items-stretch gap-1 md:flex-row md:items-end md:justify-between md:gap-4">
          <div>
            <div className="mb-2 font-mono text-[11px] tracking-[0.1em] text-ink-mute uppercase">
              / каталог
            </div>
            <h2 className="font-display text-[clamp(28px,3.4vw,44px)] leading-none font-extrabold tracking-[-0.03em]">
              {headTitle}
            </h2>
          </div>
          <div className="text-[13px] text-ink-soft md:text-right">
            {headSub}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-[240px_1fr]">
          {/* Сайдбар категорий */}
          <aside className="md:sticky md:top-[100px] md:self-start">
            <h4 className="mb-3 border-b border-line pb-2 font-mono text-[11px] tracking-[0.1em] text-ink-mute uppercase">
              Категории
            </h4>
            <div className="no-scrollbar flex gap-1 overflow-x-auto md:flex-col md:gap-0.5 md:overflow-visible">
              <SideButton
                label="Все товары"
                count={totalCount}
                active={activeCat === "all" && !query}
                onClick={() => onPickCategory("all")}
              />
              {categories.map((c) => (
                <SideButton
                  key={c.id}
                  label={c.title}
                  count={c.count}
                  active={activeCat === c.id && !query}
                  onClick={() => onPickCategory(c.id)}
                />
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {filterChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line bg-cream px-3 py-1.5 text-xs text-ink-soft"
                >
                  {chip}
                </span>
              ))}
            </div>
          </aside>

          {/* Сетка товаров */}
          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs whitespace-nowrap text-ink-mute">
                {items.length} позиций
              </span>
              <div className="flex gap-1 rounded-full border border-line bg-cream p-[3px]">
                {sortOptions.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setSort(o.id)}
                    className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                      sort === o.id
                        ? "bg-ink text-cream"
                        : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {items.map((p) => (
                <ProductCard
                  key={p.id}
                  p={p}
                  qty={cart[p.id] || 0}
                  onAdd={() => onAdd(p)}
                  onInc={() => onQty(p.id, (cart[p.id] || 0) + 1)}
                  onDec={() => onQty(p.id, (cart[p.id] || 0) - 1)}
                  fav={favs.has(p.id)}
                  onFav={() => onFav(p.id)}
                  onOpen={() => onOpenProduct(p)}
                />
              ))}
              {items.length === 0 && (
                <div className="col-span-full px-5 py-16 text-center font-mono text-sm text-ink-mute">
                  / ничего не найдено
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SideButton({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[13px] whitespace-nowrap transition-colors md:w-full md:justify-between md:gap-0 md:rounded-md md:border-0 md:px-2.5 ${
        active
          ? "border-ink bg-ink font-medium text-cream md:border-0"
          : "border-line bg-cream text-ink-soft hover:bg-bg-deep hover:text-ink md:bg-transparent"
      }`}
    >
      <span>{label}</span>
      <span
        className={`font-mono text-[11px] ${
          active ? "text-[#C9C1AE]" : "text-ink-mute"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
