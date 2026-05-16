import PageLayout from "@/widgets/page-layout/ui/PageLayout";
import Breadcrumbs from "@/shared/ui/Breadcrumbs";
import SectionHeader from "@/shared/ui/SectionHeader";

const producers = [
  {
    name: "Марс",
    tagline: "Молочная продукция",
    description:
      "Творог, кефир, сметана, ряженка и сыр сулугуни. Свежая молочка небольшими партиями — основа наших полок.",
  },
  {
    name: "Беларус",
    tagline: "Молочка и заморозка",
    description:
      "Творог из топлёного молока, кефир, ряженка, пельмени и сырники по домашним рецептам.",
  },
  {
    name: "ВА",
    tagline: "Домашняя кухня и заморозка",
    description:
      "Пельмени, вареники, блины и сырники ручной лепки — как у бабушки, только готовить дома.",
  },
  {
    name: "Al Dente Lab",
    tagline: "Полуфабрикаты и детское меню",
    description:
      "Котлеты по-киевски, фалафель, тефтели и цветные детские котлетки — продуманная заморозка на каждый день.",
  },
  {
    name: "Arina Cocina",
    tagline: "Пирожки и вареники",
    description:
      "Домашние пирожки с разными начинками и вареники с картошкой и луком от Арины.",
  },
  {
    name: "Food Meditation",
    tagline: "Сырники и десерты",
    description:
      "Классические сырники и десерты для спокойного, вкусного завтрака.",
  },
];

export default function FriendsPage() {
  return (
    <PageLayout>
      <section className="sol-container py-11">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Наши производители" },
          ]}
        />
        <SectionHeader title="Наши производители" />

        <p className="mb-7 max-w-[640px] text-[clamp(16px,2.2vw,20px)] leading-[1.5] text-neutral-600">
          Мы работаем с локальными мастерами и небольшими производствами. Вот
          лишь некоторые из тех, чьи продукты вы найдёте на наших полках.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {producers.map((p) => (
            <div
              key={p.name}
              className="rounded-[14px] border border-black/10 bg-white p-6"
            >
              <h2 className="mb-1 text-[20px] font-semibold">{p.name}</h2>
              <p className="mb-3 text-[12px] tracking-[0.04em] text-neutral-500">
                {p.tagline}
              </p>
              <p className="text-[13px] leading-[1.6] text-neutral-600">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
