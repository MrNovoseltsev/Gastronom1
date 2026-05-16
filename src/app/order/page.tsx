import PageLayout from "@/widgets/page-layout/ui/PageLayout";
import Breadcrumbs from "@/shared/ui/Breadcrumbs";
import SectionHeader from "@/shared/ui/SectionHeader";
import OrderForm from "./OrderForm";

export default function OrderPage() {
  return (
    <PageLayout>
      <section className="sol-container py-11">
        <Breadcrumbs
          items={[{ label: "Главная", href: "/" }, { label: "Как заказать" }]}
        />
        <SectionHeader title="Как заказать" />

        <div className="grid grid-cols-1 gap-14 md:[grid-template-columns:1.4fr_1fr]">
          {/* Форма заявки */}
          <div>
            <OrderForm />
          </div>

          {/* Информационные блоки */}
          <div className="flex flex-col gap-6">
            <div
              id="payment"
              className="scroll-mt-24 rounded-[16px] border border-black/10 bg-white p-7"
            >
              <h3 className="mb-4 text-[20px] font-semibold">Как оплатить</h3>
              <ul className="flex flex-col">
                {[
                  "Наличными при получении",
                  "Банковской картой в магазине",
                  "Переводом по согласованию с менеджером",
                ].map((row) => (
                  <li
                    key={row}
                    className="border-b border-black/10 py-[9px] text-[13px] text-neutral-600 last:border-b-0"
                  >
                    {row}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[13px] font-medium">
                Заявка с сайта ни к чему не обязывает — мы свяжемся с вами,
                чтобы подтвердить состав и сумму заказа.
              </p>
            </div>

            <div
              id="delivery"
              className="scroll-mt-24 rounded-[16px] border border-black/10 bg-white p-7"
            >
              <h3 className="mb-4 text-[20px] font-semibold">
                Как получить заказ
              </h3>
              <ul className="flex flex-col">
                {[
                  ["Самовывоз", "Soler 5775, Палермо"],
                  ["Доставка", "по Буэнос-Айресу, по договорённости"],
                  ["Часы работы", "ежедневно 12:00 — 20:00"],
                ].map(([label, value]) => (
                  <li
                    key={label}
                    className="flex justify-between gap-3 border-b border-black/10 py-[9px] text-[13px] last:border-b-0"
                  >
                    <span className="text-neutral-500">{label}</span>
                    <span className="text-right font-medium">{value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[13px] font-medium">
                Оформить заказ также можно через Telegram-бот магазина:
                @gastronompalermo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
