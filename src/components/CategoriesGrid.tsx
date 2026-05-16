import { categories } from "@/data/products";
import { Section, SectionHead } from "./Section";

type Props = {
  active: string;
  onPick: (id: string) => void;
};

export function CategoriesGrid({ active, onPick }: Props) {
  return (
    <Section>
      <SectionHead
        kicker="/ 12 категорий"
        title="Что у нас сегодня"
        right={
          <>
            Все позиции — от фермеров и локальных пекарен.
            <br />
            Прайс обновляется каждое утро.
          </>
        }
      />
      <div className="grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-3">
        {categories.map((c, i) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onPick(c.id)}
              className={`relative flex min-h-[108px] flex-col justify-between gap-1.5 rounded-[8px] border p-3.5 text-left transition-[background-color,border-color,transform] hover:-translate-y-0.5 md:min-h-[130px] md:px-4 md:py-[18px] ${
                isActive
                  ? "border-ink bg-ink text-cream"
                  : "border-line bg-cream hover:border-ink"
              }`}
            >
              <span
                className={`absolute top-3.5 right-3.5 font-mono text-[11px] ${
                  isActive ? "text-[#C9C1AE]" : "text-ink-mute"
                }`}
              >
                / {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="font-display text-[17px] leading-[1.1] font-bold tracking-[-0.01em]">
                  {c.title}
                </div>
                <div
                  className={`text-[11px] leading-[1.3] ${
                    isActive ? "text-[#C9C1AE]" : "text-ink-mute"
                  }`}
                >
                  {c.sub}
                </div>
              </div>
              <span
                className={`self-end font-mono text-[11px] ${
                  isActive ? "text-cream" : "text-ink-mute"
                }`}
              >
                {c.count} поз.
              </span>
            </button>
          );
        })}
      </div>
    </Section>
  );
}
