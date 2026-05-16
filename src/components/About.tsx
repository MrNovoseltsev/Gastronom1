import { Section, SectionHead } from "./Section";
import { IconPin } from "./icons";

const bullets = [
  "Прайс обновляется каждое утро в 8:00",
  "Без консервантов, без срока «годности 2 года»",
  "Доставка курьером — окно 2 часа, по Буэнос-Айресу",
  "Самовывоз — через 15 минут после заказа",
];

export function About() {
  return (
    <Section>
      <SectionHead
        kicker="/ о нас"
        title={
          <>
            Маленький гастроном.
            <br />
            Большая разница.
          </>
        }
      />
      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[1.1fr_1fr]">
        {/* Текстовая карточка */}
        <div className="rounded-[8px] border border-line bg-cream p-6 md:p-9">
          <div className="mb-4 font-mono text-[11px] tracking-[0.1em] text-red uppercase">
            / философия
          </div>
          <h3 className="mb-4 font-display text-[clamp(28px,3vw,40px)] leading-[1.05] font-extrabold tracking-[-0.03em]">
            Мы не магазин — мы соседский&nbsp;холодильник.
          </h3>
          <p className="mb-3 text-[15px] leading-[1.55] text-ink-soft">
            Каждое утро забираем у фермеров творог, кефир и сметану. Берём
            столько, сколько съедят за день. На полках нет ничего, что бы мы
            сами не ели дома.
          </p>
          <p className="mb-3 text-[15px] leading-[1.55] text-ink-soft">
            Работаем с 22 локальными производителями: пекари, мясники,
            сыровары, шефы.
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm">
                <span className="mt-[6px] size-1.5 shrink-0 rounded-full bg-red" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Карта */}
        <div className="flex min-h-[320px] flex-col gap-4 overflow-hidden rounded-[8px] bg-ink p-[22px] text-cream md:min-h-[380px] md:p-7">
          <div className="font-mono text-[11px] tracking-[0.1em] text-red uppercase">
            / забрать самому
          </div>
          <h4 className="font-display text-2xl font-extrabold tracking-[-0.02em]">
            Soler 5775
          </h4>
          <div className="text-sm leading-normal text-[#DBD2BF]">
            C1414 · Palermo, Buenos Aires
            <br />
            Planta baja, entrada por el patio
          </div>
          <div className="mt-2 min-h-[180px] flex-1 overflow-hidden rounded-md bg-[#2a261e]">
            <iframe
              title="gastronom1 на карте — Soler 5775, Palermo"
              src="https://www.google.com/maps?q=Soler+5775,+Palermo,+Buenos+Aires&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[180px] w-full border-0"
            />
          </div>
          <div className="mt-1 border-t border-white/10 pt-3.5 font-mono text-xs text-[#C9C1AE]">
            <div className="flex justify-between py-1 text-cream">
              <span>Сегодня · сб</span>
              <span className="text-olive">открыто · до 22:00</span>
            </div>
            <div className="flex justify-between py-1">
              <span>пн — пт</span>
              <span>12:00 — 22:00</span>
            </div>
            <div className="flex justify-between py-1">
              <span>сб — вс</span>
              <span>12:00 — 22:00</span>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/S2ozPCcHMEBZvbzR9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-red px-[18px] py-3 text-sm font-semibold text-white transition-colors hover:bg-red-deep"
          >
            <IconPin className="size-3.5" /> Открыть в Google Maps
          </a>
        </div>
      </div>
    </Section>
  );
}
