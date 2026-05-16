import PageLayout from "@/widgets/page-layout/ui/PageLayout";
import Breadcrumbs from "@/shared/ui/Breadcrumbs";
import SectionHeader from "@/shared/ui/SectionHeader";

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="sol-container py-11">
        <Breadcrumbs
          items={[{ label: "Главная", href: "/" }, { label: "О магазине" }]}
        />
        <SectionHeader title="О магазине" />

        <div className="flex max-w-[760px] flex-col gap-5">
          <p className="text-[14px] leading-[1.75] text-neutral-600">
            «Gastronom1» — это продуктовый гастроном в Буэнос-Айресе, район
            Палермо. Мы собрали под одной крышей вкусы, по которым скучаешь
            вдали от дома: домашнюю готовую еду, копчёности, фермерскую молочную
            продукцию, свежую выпечку, десерты и удобную заморозку.
          </p>
          <p className="text-[14px] leading-[1.75] text-neutral-600">
            Большая часть ассортимента — от локальных производителей и частных
            мастеров, которые готовят небольшими партиями из качественных
            продуктов. Мы тщательно отбираем поставщиков и следим за тем, чтобы
            на полках было только то, что не стыдно поставить на собственный
            стол.
          </p>
          <p className="text-[14px] leading-[1.75] text-neutral-600">
            Заходите за пельменями и сырниками, копчёной колбасой и сулугуни,
            творогом и кефиром, медовиком и пастилой, кофе и травяным чаем —
            и за тёплым ощущением, что вкусный дом всегда рядом.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
