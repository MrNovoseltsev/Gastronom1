import { IconArrow } from "./icons";

export function Hero({ onShop }: { onShop: () => void }) {
  return (
    <section className="border-b border-line py-5 md:pt-9 md:pb-7">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-4 md:grid-cols-[1.4fr_1fr] md:gap-7 md:px-7">
        {/* Левая чёрная карточка */}
        <div className="flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[8px] bg-ink p-7 text-cream md:min-h-[420px] md:p-10">
          <div className="flex gap-2 font-mono text-[11px] tracking-[0.1em] text-[#C9C1AE] uppercase">
            <span className="rounded-full border border-white/12 bg-white/8 px-2.5 py-[5px]">
              N° 01 · 2026
            </span>
            <span className="rounded-full border border-white/12 bg-white/8 px-2.5 py-[5px]">
              Buenos Aires · Palermo
            </span>
          </div>

          <h1 className="mt-5 font-display text-[clamp(34px,11vw,52px)] leading-[0.95] font-extrabold tracking-[-0.04em] md:text-[clamp(40px,5.6vw,76px)]">
            Локальная еда,
            <br />
            от <em className="not-italic text-red">фермеров</em> и шефов —
            <br />
            <span className="border-b-4 border-red pb-0.5">
              к вашему столу
            </span>{" "}
            за&nbsp;2&nbsp;часа.
          </h1>

          <div>
            <div className="mt-8 flex flex-wrap gap-5 text-[13px] text-[#C9C1AE] md:mt-9 md:gap-10">
              <div>
                <span className="mb-0.5 block font-mono text-cream">/ 151</span>
                позиция в каталоге
              </div>
              <div>
                <span className="mb-0.5 block font-mono text-cream">/ 22</span>
                локальных производителя
              </div>
              <div>
                <span className="mb-0.5 block font-mono text-cream">/ 2ч</span>
                окно доставки
              </div>
            </div>
            <button
              type="button"
              onClick={onShop}
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-red px-[22px] py-3.5 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-px hover:bg-red-deep"
            >
              В каталог
              <IconArrow className="size-3.5" />
            </button>
          </div>
        </div>

        {/* Правые кремовые карточки */}
        <div className="grid gap-4 md:grid-rows-2">
          <HeroCard
            kicker="/ свежий приход"
            title={
              <>
                Творог Беларуса —<br />
                привезли утром
              </>
            }
            desc="9% и 1%, в брикетах 250 и 500 г. Срок 5 дней."
            onClick={onShop}
          />
          <HeroCard
            kicker="/ от шефа"
            title={
              <>
                Лосось
                <br />
                слабосолёный
              </>
            }
            desc="Засол на месте, без консервантов. 100 г — 8 800."
            onClick={onShop}
          />
        </div>
      </div>
    </section>
  );
}

function HeroCard({
  kicker,
  title,
  desc,
  onClick,
}: {
  kicker: string;
  title: React.ReactNode;
  desc: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col justify-between overflow-hidden rounded-[8px] border border-line bg-cream p-6 text-left"
    >
      <div>
        <div className="font-mono text-[11px] tracking-[0.1em] text-red uppercase">
          {kicker}
        </div>
        <h3 className="mt-2 font-display text-[22px] leading-[1.15] font-bold tracking-[-0.02em]">
          {title}
        </h3>
        <p className="mt-2 text-[13px] leading-normal text-ink-soft">{desc}</p>
      </div>
      <span className="mt-4 grid size-9 place-items-center self-end rounded-full border border-line transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
        <IconArrow className="size-4" />
      </span>
    </button>
  );
}
