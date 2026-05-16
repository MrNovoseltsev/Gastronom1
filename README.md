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

Собранный сайт лежит **в корне ветки `exmpl2`** (`index.html`, `404.html`,
`_next/`, `.nojekyll`) — GitHub Pages раздаёт его как статику напрямую.

Адрес страницы: `https://mrnovoseltsev.github.io/Gastronom1/` — это project page,
поэтому сборка идёт с `basePath=/Gastronom1` (имя репозитория, регистр важен).

**Пересобрать сайт после правок:**

```bash
NEXT_BASE_PATH=/Gastronom1 npm run build   # статика → out/
cp -R out/. .                              # выложить сборку в корень ветки
git add -A && git commit -m "rebuild site" && git push
```

`.nojekyll` в корне отключает Jekyll — иначе Pages рендерит `README.md` вместо
сайта и игнорирует папку `_next/`.

**Настройка репозитория (один раз):** Settings → Pages → Source = **Deploy from
a branch** → Branch = **`exmpl2`**, папка = **`/ (root)`** → Save.

> README не подменяет сайт: рядом с ним в корне лежит `index.html`, а `.nojekyll`
> запрещает Jekyll рендерить README.

## Структура

```
src/
  app/        layout, страница, globals.css (Tailwind + дизайн-токены)
  components/ App (состояние) + виджеты разделов, модалки, корзина
  data/       products.ts — 12 категорий и каталог товаров
  lib/        format.ts — форматирование цен, скролл, хэш
  types.ts    модель Product / Category
```
