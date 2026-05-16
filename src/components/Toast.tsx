export function Toast({ text }: { text: string }) {
  return (
    <div
      className={`pointer-events-none fixed bottom-6 left-1/2 z-[110] flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-ink px-[18px] py-3 text-sm font-medium text-cream shadow-[var(--shadow-card)] transition-transform duration-[250ms] ease-[cubic-bezier(.4,0,.2,1)] ${
        text ? "translate-y-0" : "translate-y-[120px]"
      }`}
    >
      <span className="size-2 rounded-full bg-olive" />
      <span>{text}</span>
    </div>
  );
}
