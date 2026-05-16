import type { Product } from "@/types";
import { categories } from "@/data/products";
import { fmt } from "@/lib/format";
import { ProductImage } from "./ProductImage";
import { IconClose, IconBag, IconHeart, IconHeartFill, IconPlus, IconMinus } from "./icons";

type Props = {
  p: Product | null;
  onClose: () => void;
  qty: number;
  onAdd: () => void;
  onInc: () => void;
  onDec: () => void;
  fav: boolean;
  onFav: () => void;
};

const facts = [
  { k: "Производитель", v: "локальный" },
  { k: "Хранение", v: "+4°C" },
  { k: "Срок", v: "5–7 дней" },
  { k: "Доставка", v: "сегодня, 2ч" },
];

export function ProductModal({
  p,
  onClose,
  qty,
  onAdd,
  onInc,
  onDec,
  fav,
  onFav,
}: Props) {
  const open = !!p;
  const cat = p ? categories.find((c) => c.id === p.c) : undefined;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-[120] grid place-items-end p-0 backdrop-blur-[3px] transition-opacity duration-200 md:place-items-center md:p-6 ${
        open
          ? "bg-[rgba(20,17,13,0.45)] opacity-100"
          : "pointer-events-none bg-[rgba(20,17,13,0.45)] opacity-0"
      }`}
    >
      {p && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[92vh] w-full max-w-[840px] overflow-y-auto rounded-t-2xl border border-line bg-bg shadow-[var(--shadow-modal)] md:max-h-[calc(100vh-48px)] md:rounded-xl"
        >
          <button
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 z-[2] grid size-8 place-items-center rounded-full border border-line bg-cream hover:bg-white"
          >
            <IconClose className="size-3.5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Картинка — квадрат под квадратный SVG-лейбл (без обрезки) */}
            <div className="relative aspect-square overflow-hidden border-b border-line bg-bg-deep md:border-r md:border-b-0">
              <ProductImage p={p} large />
              {p.tag && (
                <span className="absolute top-4 left-4 rounded-[4px] bg-red px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.08em] text-white uppercase">
                  {p.tag}
                </span>
              )}
              <button
                type="button"
                aria-label="В избранное"
                onClick={onFav}
                className={`absolute top-4 right-4 grid size-9 place-items-center rounded-full border transition-colors ${
                  fav
                    ? "border-red bg-red text-white"
                    : "border-line bg-cream/85 hover:bg-white hover:text-red"
                }`}
              >
                {fav ? (
                  <IconHeartFill className="size-3.5" />
                ) : (
                  <IconHeart className="size-3.5" />
                )}
              </button>
            </div>

            {/* Тело — на десктопе скроллится внутри, высота = квадрату картинки */}
            <div className="flex flex-col bg-bg-card px-[22px] pt-6 pb-7 md:min-h-0 md:overflow-y-auto md:p-9">
              <div className="font-mono text-[11px] tracking-[0.1em] text-red uppercase">
                {cat?.title}
              </div>
              <h3 className="mt-2.5 mb-1.5 font-display text-[22px] leading-[1.1] font-extrabold tracking-[-0.025em] md:text-[28px]">
                {p.n}
              </h3>
              <div className="mb-5 font-mono text-xs tracking-[0.02em] text-ink-mute">
                {p.w}
              </div>

              <div className="mb-5 flex items-baseline gap-1.5 border-y border-line py-4">
                <span className="font-mono text-[28px] font-bold tracking-[-0.02em] text-ink">
                  {p.p2 ? `${fmt(p.p)}–${fmt(p.p2)}` : fmt(p.p)}
                </span>
                <span className="font-mono text-xs font-medium text-ink-mute">
                  ARS
                </span>
              </div>

              <ul className="mb-5 grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2">
                {facts.map((f) => (
                  <li
                    key={f.k}
                    className="flex items-baseline justify-between border-b border-dashed border-line-soft py-1.5 text-[13px]"
                  >
                    <span className="text-xs text-ink-mute">{f.k}</span>
                    <span className="font-mono text-xs text-ink">{f.v}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-5 text-[13px] leading-[1.55] text-ink-soft">
                Привозим утром от проверенного производителя. Без консервантов и
                заморозки. Идеально к завтраку или ужину — на хлеб, к чаю,
                к&nbsp;борщу.
              </p>

              <div className="mt-auto flex flex-col gap-2">
                {qty === 0 ? (
                  <button
                    type="button"
                    onClick={onAdd}
                    className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-ink px-[18px] py-3 text-sm font-semibold text-cream transition-colors hover:bg-black"
                  >
                    <IconBag className="size-3.5" /> В корзину · {fmt(p.p)} ARS
                  </button>
                ) : (
                  <>
                    <div className="flex h-11 items-center justify-between self-stretch rounded-full bg-ink px-3 text-cream">
                      <button
                        type="button"
                        aria-label="Убрать"
                        onClick={onDec}
                        className="grid size-10 place-items-center rounded-full hover:bg-white/12"
                      >
                        <IconMinus className="size-4" />
                      </button>
                      <span className="font-mono text-[15px] font-semibold">
                        {qty}
                      </span>
                      <button
                        type="button"
                        aria-label="Добавить"
                        onClick={onInc}
                        className="grid size-10 place-items-center rounded-full hover:bg-white/12"
                      >
                        <IconPlus className="size-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex w-full items-center justify-center rounded-[8px] border border-line bg-cream px-[18px] py-3 text-sm font-medium transition-colors hover:border-ink-soft hover:bg-white"
                    >
                      Продолжить покупки
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
