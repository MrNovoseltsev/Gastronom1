import type { ReactNode } from "react";
import { IconTruck, IconLeaf, IconCheck } from "./icons";

const items: { icon: ReactNode; t: string; s: string }[] = [
  {
    icon: <IconTruck className="size-[18px]" />,
    t: "Доставка за 2 часа",
    s: "По Буэнос-Айресу, окнами по 30 минут",
  },
  {
    icon: <IconLeaf className="size-[18px]" />,
    t: "Только локальные",
    s: "Беларус · Марс · ВА · Al Dente Lab",
  },
  {
    icon: <IconCheck className="size-[18px]" />,
    t: "Возврат без вопросов",
    s: "Если что-то не понравилось — заберём",
  },
];

export function PromoStrip() {
  return (
    <section className="pt-8">
      <div className="mx-auto max-w-[1280px] px-4 md:px-7">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {items.map((x) => (
            <div
              key={x.t}
              className="flex items-center gap-3.5 rounded-[8px] border border-line bg-cream px-5 py-[18px]"
            >
              <span className="grid size-9 flex-none place-items-center rounded-[8px] bg-ink text-cream">
                {x.icon}
              </span>
              <div>
                <div className="font-display text-sm font-bold tracking-[-0.01em]">
                  {x.t}
                </div>
                <div className="mt-0.5 text-xs text-ink-mute">{x.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
