import { categories } from "@/data/products";
import { IconInsta, IconTg } from "./icons";

export function Footer() {
  return (
    <footer className="bg-ink pt-10 pb-6 text-[#DBD2BF] md:pt-16 md:pb-7">
      <div className="mx-auto max-w-[1280px] px-4 md:px-7">
        <div className="grid grid-cols-1 gap-7 border-b border-white/10 pb-8 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-10 md:pb-12">
          <div>
            <div className="mb-4 font-display text-[48px] leading-none font-extrabold tracking-[-0.04em] text-red">
              gastronom1
            </div>
            <p className="max-w-[400px] text-sm leading-[1.55] text-[#C9C1AE]">
              Соседский гастроном с локальной едой от фермеров, пекарей и шефов.
            </p>
          </div>

          <FooterCol title="/ каталог">
            {categories.slice(0, 6).map((c) => (
              <FooterLink key={c.id}>{c.title}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="/ ещё">
            {categories.slice(6).map((c) => (
              <FooterLink key={c.id}>{c.title}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="/ контакты">
            <li>
              <a
                href="tel:+5491167890123"
                className="text-sm text-[#DBD2BF] transition-colors hover:text-white"
              >
                +54 9 11 6789-0123
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/S2ozPCcHMEBZvbzR9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#DBD2BF] transition-colors hover:text-white"
              >
                Soler 5775, Palermo
              </a>
            </li>
            <li className="text-sm text-[#DBD2BF]">пн—вс · 12:00—22:00</li>
            <li className="mt-2 flex gap-2.5">
              <a
                href="https://www.instagram.com/gastronom.palermo?igsh=bmFrODV4cnAxNXIz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid size-9 place-items-center rounded-full border border-white/15 transition-colors hover:text-white"
              >
                <IconInsta className="size-4" />
              </a>
              <a
                href="https://t.me/gastronompalermo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="grid size-9 place-items-center rounded-full border border-white/15 transition-colors hover:text-white"
              >
                <IconTg className="size-4" />
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="flex flex-col items-start gap-2 pt-6 font-mono text-[11px] tracking-[0.05em] text-ink-mute md:flex-row md:items-center md:justify-between">
          <span>© 2026 gastronom1 · Buenos Aires</span>
          <span>v1.0 · made with care</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h5 className="mb-4 font-mono text-[11px] tracking-[0.1em] text-ink-mute uppercase">
        {title}
      </h5>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <a
        href="#"
        className="text-sm text-[#DBD2BF] transition-colors hover:text-white"
      >
        {children}
      </a>
    </li>
  );
}
