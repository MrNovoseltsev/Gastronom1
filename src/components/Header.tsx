import type { User } from "@/types";
import { fmt } from "@/lib/format";
import { IconSearch, IconUser, IconBag } from "./icons";

type Props = {
  cartCount: number;
  cartTotal: number;
  query: string;
  onQuery: (v: string) => void;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  user: User | null;
};

export function Header({
  cartCount,
  cartTotal,
  query,
  onQuery,
  onOpenCart,
  onOpenAuth,
  user,
}: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="mx-auto grid h-[68px] max-w-[1280px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 md:h-[84px] md:gap-8 md:px-7">
        <a
          href="#"
          aria-label="gastronom1"
          className="font-display text-[26px] font-extrabold leading-none tracking-[-0.04em] text-red md:text-[34px]"
        >
          gastronom1
        </a>

        <label className="relative flex h-10 items-center rounded-full border border-line bg-cream pr-3 pl-9 transition-colors focus-within:border-ink md:h-11 md:pr-4 md:pl-11">
          <span className="absolute left-3 text-ink-soft md:left-4">
            <IconSearch className="size-4" />
          </span>
          <input
            type="search"
            placeholder="Найти долму, кефир, бородинский…"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            className="min-w-0 flex-1 bg-transparent text-[13px] text-ink outline-none placeholder:text-ink-mute md:text-sm"
          />
          {!query && (
            <span className="hidden rounded bg-bg-deep px-1.5 py-0.5 font-mono text-[11px] text-ink-soft md:inline">
              ⌘ K
            </span>
          )}
        </label>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Профиль"
            onClick={onOpenAuth}
            className="grid size-11 place-items-center rounded-full border border-line bg-cream transition-colors hover:border-ink-soft hover:bg-white"
          >
            {user ? (
              <span className="grid size-[26px] place-items-center rounded-full bg-ink font-mono text-[13px] font-bold text-cream">
                {user.email[0].toUpperCase()}
              </span>
            ) : (
              <IconUser className="size-[18px]" />
            )}
          </button>

          <button
            type="button"
            aria-label="Корзина"
            onClick={onOpenCart}
            className="flex h-11 items-center gap-2.5 rounded-full bg-ink px-4 text-sm font-medium text-cream transition-colors hover:bg-black"
          >
            <IconBag className="size-[18px]" />
            <span className="hidden md:inline">Корзина</span>
            {cartCount > 0 && (
              <span className="grid h-[22px] min-w-[22px] place-items-center rounded-full bg-red px-1.5 font-mono text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            )}
            {cartCount > 0 && (
              <span className="hidden font-mono text-xs text-[#C9C1AE] md:inline">
                {fmt(cartTotal)}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
