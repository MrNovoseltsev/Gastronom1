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

Публикация — через GitHub Actions: workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
при каждом пуше в ветку `exmpl2` собирает статику и публикует её на Pages.
Ветка хранит **только исходный код**, без собранных файлов.

Адрес страницы: `https://mrnovoseltsev.github.io/Gastronom1/` — это project page,
поэтому сборка идёт с `basePath=/Gastronom1` (имя репозитория, регистр важен).

**Настройка репозитория (один раз):** Settings → Pages → Source = **GitHub
Actions**. После этого деплой полностью автоматический.

**Обновить сайт:** просто запушить изменения в `exmpl2` — workflow соберёт и
опубликует. Прогресс виден во вкладке **Actions**.

> Почему так, а не «Deploy from a branch»: при раздаче из ветки GitHub прогоняет
> Jekyll, который рендерит `README.md` вместо сайта и вырезает папку `_next/`
> (имена с `_` он игнорирует). GitHub Actions публикует артефакт напрямую — без
> Jekyll, поэтому проблема не возникает в принципе.

## Структура

```
src/
  app/        layout, страница, globals.css (Tailwind + дизайн-токены)
  components/ App (состояние) + виджеты разделов, модалки, корзина
  data/       products.ts — 12 категорий и каталог товаров
  lib/        format.ts — форматирование цен, скролл, хэш
  types.ts    модель Product / Category
```
