import type { Product } from "@/types";
import { fmt } from "@/lib/format";
import { ProductImage } from "./ProductImage";
import { IconHeart, IconHeartFill, IconPlus, IconMinus } from "./icons";

type Props = {
  p: Product;
  qty: number;
  onAdd: () => void;
  onInc: () => void;
  onDec: () => void;
  fav: boolean;
  onFav: () => void;
  onOpen: () => void;
};

export function ProductCard({
  p,
  qty,
  onAdd,
  onInc,
  onDec,
  fav,
  onFav,
  onOpen,
}: Props) {
  const stop = (e: React.MouseEvent, fn: () => void) => {
    e.stopPropagation();
    fn();
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter") onOpen();
      }}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[8px] border border-line bg-cream transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-ink hover:shadow-[var(--shadow-card)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      <div className="relative aspect-square overflow-hidden border-b border-line bg-bg-deep">
        <ProductImage p={p} />
        {p.tag && (
          <span className="absolute top-2.5 left-2.5 rounded-[4px] bg-red px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.08em] text-white uppercase">
            {p.tag}
          </span>
        )}
        <button
          type="button"
          aria-label="В избранное"
          onClick={(e) => stop(e, onFav)}
          className={`absolute top-2.5 right-2.5 grid size-8 place-items-center rounded-full border transition-colors ${
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

      <div className="flex flex-1 flex-col gap-1.5 px-3.5 pt-3.5 pb-4">
        <div className="line-clamp-2 min-h-[35px] font-display text-sm leading-[1.25] font-semibold tracking-[-0.01em] text-ink">
          {p.n}
        </div>
        <div className="font-mono text-[11px] tracking-[0.02em] text-ink-mute">
          {p.w}
        </div>
        <div className="mt-auto flex items-baseline justify-between gap-2 pt-2.5">
          <div className="font-mono text-[17px] font-bold tracking-[-0.01em] whitespace-nowrap text-ink">
            {p.p2 ? `${fmt(p.p)}–${fmt(p.p2)}` : fmt(p.p)}
            <span className="ml-0.5 text-[11px] font-medium text-ink-mute">
              {" "}
              ARS
            </span>
          </div>
          {qty === 0 ? (
            <button
              type="button"
              aria-label="В корзину"
              onClick={(e) => stop(e, onAdd)}
              className="grid size-8 flex-none place-items-center rounded-full bg-ink text-cream transition-[background-color,transform] hover:scale-[1.08] hover:bg-red"
            >
              <IconPlus className="size-3.5" />
            </button>
          ) : (
            <div
              className="flex flex-none items-center rounded-full bg-ink text-cream"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Убрать"
                onClick={onDec}
                className="grid size-8 place-items-center rounded-full hover:bg-white/12"
              >
                <IconMinus className="size-3.5" />
              </button>
              <span className="min-w-[18px] text-center font-mono text-[13px] font-semibold">
                {qty}
              </span>
              <button
                type="button"
                aria-label="Добавить"
                onClick={onInc}
                className="grid size-8 place-items-center rounded-full hover:bg-white/12"
              >
                <IconPlus className="size-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
