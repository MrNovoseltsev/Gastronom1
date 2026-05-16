import type { ReactNode } from "react";

export function Section({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-b border-line py-8 md:py-12">
      <div className="mx-auto max-w-[1280px] px-4 md:px-7">{children}</div>
    </section>
  );
}

export function SectionHead({
  kicker,
  title,
  right,
}: {
  kicker: string;
  title: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-col items-stretch gap-1 md:flex-row md:items-end md:justify-between md:gap-4">
      <div>
        <div className="mb-2 font-mono text-[11px] tracking-[0.1em] text-ink-mute uppercase">
          {kicker}
        </div>
        <h2 className="font-display text-[clamp(28px,3.4vw,44px)] leading-none font-extrabold tracking-[-0.03em]">
          {title}
        </h2>
      </div>
      {right && (
        <div className="text-[13px] text-ink-soft md:text-right">{right}</div>
      )}
    </div>
  );
}
