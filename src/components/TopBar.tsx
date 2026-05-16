import { IconPhone } from "./icons";

export function TopBar() {
  return (
    <div className="bg-ink text-[#DBD2BF] text-[11px] md:text-xs tracking-[0.04em]">
      <div className="mx-auto flex h-8 max-w-[1280px] items-center justify-between gap-2 px-4 md:h-9 md:gap-4 md:px-7">
        <div className="flex items-center gap-3 md:gap-5">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-olive" />
            Открыто · до 20:00
          </span>
          <span className="hidden md:inline">
            Доставка по Буэнос-Айресу — от 25 000 ARS
          </span>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <a href="#" className="hidden hover:text-white md:inline">
            Доставка и оплата
          </a>
          <a href="tel:+5491167890123" className="flex items-center gap-1.5 hover:text-white">
            <IconPhone className="size-3.5" />
            +54 1 23 4567-8910
          </a>
        </div>
      </div>
    </div>
  );
}
