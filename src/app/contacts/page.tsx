import PageLayout from "@/widgets/page-layout/ui/PageLayout";
import Breadcrumbs from "@/shared/ui/Breadcrumbs";
import SectionHeader from "@/shared/ui/SectionHeader";
import Instagram from "@/shared/ui/icons/Instagram";
import Telegram from "@/shared/ui/icons/Telegram";

const HOURS = [
  "Понедельник", "Вторник", "Среда", "Четверг",
  "Пятница", "Суббота", "Воскресенье",
];

export default function ContactsPage() {
  return (
    <PageLayout>
      <section className="sol-container py-11">
        <Breadcrumbs
          items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
        />
        <SectionHeader title="Наши контакты" />

        <p className="mb-8 max-w-[640px] text-[14px] leading-[1.75] text-neutral-600">
          Будем рады видеть вас в гастрономе «Gastronom1» в районе Палермо.
          Заказы и вопросы удобнее всего задавать через наш Telegram-бот или в
          Instagram — отвечаем быстро.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Левая колонка — контактные данные */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-1 text-[16px] font-semibold">Адрес</h3>
              <p className="text-[14px] text-neutral-600">
                Soler 5775, C1414 Cdad. Autónoma de Buenos Aires, Аргентина
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-[16px] font-semibold">Часы работы</h3>
              <ul className="max-w-[320px]">
                {HOURS.map((day) => (
                  <li
                    key={day}
                    className="flex justify-between border-b border-black/10 py-[7px] text-[13px] last:border-b-0"
                  >
                    <span className="text-neutral-600">{day}</span>
                    <span>12:00 — 20:00</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-[16px] font-semibold">Связаться с нами</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://t.me/gastronompalermo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[14px]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15">
                    <Telegram />
                  </span>
                  Telegram-бот: @gastronompalermo
                </a>
                <a
                  href="https://www.instagram.com/gastronom.palermo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[14px]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15">
                    <Instagram />
                  </span>
                  Instagram: @gastronom.palermo
                </a>
              </div>
            </div>
          </div>

          {/* Правая колонка — карта */}
          <div className="overflow-hidden rounded-[16px] border border-black/10">
            <iframe
              title="Gastronom1 на карте"
              src="https://www.google.com/maps?q=Soler%205775,%20C1414%20CABA,%20Buenos%20Aires&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
