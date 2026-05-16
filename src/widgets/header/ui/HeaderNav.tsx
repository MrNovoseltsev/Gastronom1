'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Menu from '@/shared/ui/icons/Menu';

const navLinks = [
  { href: "/catalog", label: "КАТАЛОГ" },
  { href: "/news", label: "НОВИНКИ" },
  { href: "/order", label: "КАК ЗАКАЗАТЬ" },
  { href: "/contacts", label: "КОНТАКТЫ" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function HeaderNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Десктоп-навигация */}
      <nav className="hidden flex-1 items-center gap-0.5 md:flex">
        {navLinks.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12px] tracking-[0.13em] ${
                active ? "bg-neutral-900 text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Кнопка мобильного меню */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Навигация"
        className="order-last flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black/15 md:hidden"
      >
        <Menu open={open} />
      </button>

      {/* Мобильное меню */}
      <div
        className={`absolute left-0 right-0 top-[68px] z-[199] flex-col gap-0.5 border-b border-black/10 bg-white px-4 pb-5 pt-2 md:hidden ${
          open ? "flex" : "hidden"
        }`}
      >
        {navLinks.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-[10px] px-4 py-3 text-[15px] tracking-[0.1em] ${
                active ? "bg-neutral-900 text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
