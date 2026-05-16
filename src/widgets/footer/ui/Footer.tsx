import Link from "next/link";
import Instagram from "@/shared/ui/icons/Instagram";
import Telegram from "@/shared/ui/icons/Telegram";

type FooterLink = { href: string; label: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Магазин",
    links: [
      { href: "/about", label: "О магазине" },
      { href: "/news", label: "Новинки и акции" },
      { href: "/contacts", label: "Контакты" },
    ],
  },
  {
    title: "Покупателю",
    links: [
      { href: "/order", label: "Как сделать заказ" },
      { href: "/order#payment", label: "Оплата" },
      { href: "/order#delivery", label: "Доставка" },
    ],
  },
  {
    title: "Производители",
    links: [
      { href: "/friends", label: "Наши производители" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10">
      <div className="sol-container">
        <div className="grid grid-cols-1 gap-7 pb-7 pt-9 min-[481px]:grid-cols-2 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                {col.title}
              </p>
              {col.links.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="block py-[3px] text-[13px] text-neutral-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
              Социальные сети
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://www.instagram.com/gastronom.palermo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-black/15"
              >
                <Instagram />
              </a>
              <a
                href="https://t.me/gastronompalermo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-black/15"
              >
                <Telegram />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-black/10 py-4 pb-6">
          <p className="text-[11px] tracking-[0.04em] text-neutral-500">
            © 2026 продуктовый магазин «Gastronom1»
          </p>
        </div>
      </div>
    </footer>
  );
}
