import type { Product } from "@/types";
import { fmt } from "@/lib/format";
import { ProductImage } from "./ProductImage";
import { IconClose, IconPlus, IconMinus, IconArrow } from "./icons";

type CartItem = Product & { qty: number };

type Props = {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onQty: (id: string, q: number) => void;
  total: number;
};

const FREE_DELIVERY = 25000;
const DELIVERY_FEE = 15000;

export function CartDrawer({ open, onClose, items, onQty, total }: Props) {
  const delivery = total >= FREE_DELIVERY ? 0 : DELIVERY_FEE;

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[100] bg-[rgba(20,17,13,0.4)] backdrop-blur-[2px] transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-[101] flex w-full max-w-[460px] flex-col bg-bg shadow-[var(--shadow-drawer)] transition-transform duration-[250ms] ease-[cubic-bezier(.4,0,.2,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h3 className="font-display text-[22px] font-extrabold tracking-[-0.02em]">
            Корзина
            {items.length > 0 && (
              <span className="ml-1.5 font-mono text-sm text-ink-mute">
                · {items.length}
              </span>
            )}
          </h3>
          <button
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
            className="grid size-9 place-items-center rounded-full border border-line bg-cream"
          >
            <IconClose className="size-3.5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-10 text-center">
              <div className="font-display text-2xl font-extrabold tracking-[-0.02em]">
                Пусто
              </div>
              <div className="text-[13px] text-ink-soft">
                Добавьте что-нибудь
                <br />
                из каталога — творожок, долму, бородинский.
              </div>
            </div>
          ) : (
            items.map((it) => (
              <div
                key={it.id}
                className="grid grid-cols-[56px_1fr_auto] items-center gap-3.5 border-b border-dashed border-line-soft py-3.5"
              >
                <div className="size-14 overflow-hidden rounded-md bg-bg-deep">
                  <ProductImage p={it} />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold tracking-[-0.01em]">
                    {it.n}
                  </div>
                  <div className="mt-0.5 font-mono text-[11px] text-ink-mute">
                    {it.w} · {fmt(it.p)} ARS
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <div className="font-mono text-sm font-bold">
                    {fmt(it.p * it.qty)}
                  </div>
                  <div className="inline-flex items-center rounded-full border border-line bg-cream">
                    <button
                      type="button"
                      aria-label="Убрать"
                      onClick={() => onQty(it.id, it.qty - 1)}
                      className="grid size-6 place-items-center"
                    >
                      <IconMinus className="size-3" />
                    </button>
                    <span className="min-w-6 text-center font-mono text-xs">
                      {it.qty}
                    </span>
                    <button
                      type="button"
                      aria-label="Добавить"
                      onClick={() => onQty(it.id, it.qty + 1)}
                      className="grid size-6 place-items-center"
                    >
                      <IconPlus className="size-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5">
            <div className="flex justify-between py-1 text-[13px] text-ink-soft">
              <span>Сумма</span>
              <span className="font-mono">{fmt(total)} ARS</span>
            </div>
            <div className="flex justify-between py-1 text-[13px] text-ink-soft">
              <span>Доставка</span>
              <span className="font-mono">
                {delivery === 0 ? "бесплатно" : `${fmt(DELIVERY_FEE)} ARS`}
              </span>
            </div>
            <div className="mt-2 flex justify-between border-t border-line pt-3 font-display text-xl font-extrabold text-ink">
              <span>К оплате</span>
              <span className="font-mono">{fmt(total + delivery)} ARS</span>
            </div>
            <button
              type="button"
              className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-[8px] bg-ink px-[18px] py-3 text-sm font-semibold text-cream transition-colors hover:bg-black"
            >
              Оформить заказ <IconArrow className="size-3.5" />
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
