# gastronom1

Демо интернет-магазина продуктов **gastronom1** (Буэнос-Айрес) — развёрнутый
дизайн-макет на Next.js. Подготовлено для показа клиенту на GitHub Pages.

## Стек

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — все стили, токены дизайна в `src/app/globals.css`
- Без сторонних библиотек состояния — только React `useState`
- Шрифты (Manrope, Inter, JetBrains Mono) — через `next/font/google`

Две раскладки: десктоп (`≥ 768px`) и мобильный телефон (`< 768px`).

## Разработка

```bash
npm install
npm run dev      # http://localhost:3000
```

## Сборка (статический экспорт)

```bash
npm run build    # статика собирается в папку out/
```

## Деплой на GitHub Pages

Сайт публикуется из ветки `exmpl2`, папка `docs/` — GitHub Pages раздаёт её
содержимое как статику (Next.js при этом не собирается на стороне Pages).

Адрес страницы: `https://mrnovoseltsev.github.io/Gastronom1/` — это project page,
поэтому сборка идёт с `basePath=/Gastronom1` (имя репозитория, регистр важен).

**Пересобрать сайт после правок:**

```bash
NEXT_BASE_PATH=/Gastronom1 npm run build   # статика → out/
rm -rf docs && mkdir docs && cp -R out/. docs/
git add docs && git commit -m "rebuild site" && git push
```

`docs/.nojekyll` отключает обработку Jekyll (иначе Pages игнорирует `_next/`).

**Настройка репозитория (один раз):** Settings → Pages → Source = **Deploy from
a branch** → Branch = **`exmpl2`**, папка = **`/docs`** → Save.

> README не открывается вместо сайта, потому что Pages раздаёт папку `docs/`
> (там лежит `index.html`), а не корень ветки.

## Структура

```
src/
  app/        layout, страница, globals.css (Tailwind + дизайн-токены)
  components/ App (состояние) + виджеты разделов, модалки, корзина
  data/       products.ts — 12 категорий и каталог товаров
  lib/        format.ts — форматирование цен, скролл, хэш
  types.ts    модель Product / Category
```
