import type { CategorySlug } from "@/entities/product/model/types";

interface CategoryMeta {
  slug: CategorySlug;
  label: string;
}

export const CATEGORY_META: CategoryMeta[] = [
  { slug: 'ready-meals', label: 'Готовая еда' },
  { slug: 'smoked',      label: 'Копчёности' },
  { slug: 'drinks',      label: 'Напитки' },
  { slug: 'dairy',       label: 'Молочные продукты' },
  { slug: 'bakery',      label: 'Выпечка' },
  { slug: 'bread',       label: 'Хлеб' },
  { slug: 'desserts',    label: 'Десерты' },
  { slug: 'frozen',      label: 'Заморозка' },
  { slug: 'spices',      label: 'Приправы' },
  { slug: 'pickles',     label: 'Соленья' },
  { slug: 'coffee',      label: 'Кофе' },
  { slug: 'tea',         label: 'Чай' },
];

export const CATEGORY_SLUGS = CATEGORY_META.map((c) => c.slug);
