import Link from "next/link";
import ArrowRight from "@/shared/ui/icons/ArrowRight";

export default function Hero() {
  return (
    <section className="sol-container pb-11 pt-[60px] text-center">
      <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-neutral-500">
        Продуктовый магазин в Буэнос-Айресе
      </p>

      <h1 className="mx-auto mb-[22px] text-[clamp(36px,7vw,68px)] font-semibold leading-[1.05] tracking-[-0.01em]">
        Вкус дома — рядом с вами
      </h1>

      <p className="mx-auto mb-9 max-w-[540px] text-[clamp(15px,2vw,19px)] leading-[1.6] text-neutral-600">
        Гастроном «Gastronom1»: домашняя готовая еда, копчёности, фермерская
        молочная продукция, выпечка и десерты от локальных производителей.
      </p>

      <Link
        href="/catalog"
        className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-9 py-3.5 text-[12px] tracking-[0.12em] text-white"
      >
        Перейти в каталог
        <ArrowRight />
      </Link>
    </section>
  );
}
