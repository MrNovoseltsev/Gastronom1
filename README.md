# Gastronom1

Витрина-каталог продуктового гастронома «Gastronom1» (Буэнос-Айрес, район Палермо).

Next.js 16 (App Router), статический сайт на мок-данных — без подключения к БД.
Размещается на GitHub Pages.

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000/Gastronom1](http://localhost:3000/Gastronom1).

## Сборка статического сайта

```bash
NEXT_PUBLIC_BASE_PATH="/Gastronom1" npm run build
```

Результат — статический экспорт в папке `out/`.

## Деплой

Push в ветку `main` запускает GitHub Actions
(`.github/workflows/deploy.yml`), который собирает сайт и публикует на GitHub Pages:
`https://mrnovoseltsev.github.io/Gastronom1/`.

## Структура данных

- Каталог товаров — `src/data/products.json`
- Новинки и акции — `src/data/news.json`
- Категории — `src/shared/config/categories.ts`

Изображения — нейтральные заглушки (`public/images/placeholder.svg`).
Оформление намеренно сброшено до нейтральной базы: отдельный дизайн
разрабатывается в Claude Design.
