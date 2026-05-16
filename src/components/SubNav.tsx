import { categories, totalCount } from "@/data/products";

type Props = {
  active: string;
  onPick: (id: string) => void;
};

export function SubNav({ active, onPick }: Props) {
  return (
    <nav className="border-b border-line bg-bg">
      <div className="no-scrollbar mx-auto flex h-12 max-w-[1280px] items-center gap-2 overflow-x-auto px-4 md:px-7">
        <Pill
          label="Все товары"
          count={totalCount}
          active={active === "all"}
          onClick={() => onPick("all")}
        />
        {categories.map((c) => (
          <Pill
            key={c.id}
            label={c.title}
            count={c.count}
            active={active === c.id}
            onClick={() => onPick(c.id)}
          />
        ))}
      </div>
    </nav>
  );
}

function Pill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-none rounded-full px-3.5 py-2 text-[13px] font-medium whitespace-nowrap tracking-[-0.005em] transition-colors ${
        active
          ? "bg-ink text-cream"
          : "text-ink-soft hover:bg-bg-deep hover:text-ink"
      }`}
    >
      {label}
      <span
        className={`ml-1 font-mono text-[11px] ${
          active ? "text-[#C9C1AE]" : "text-ink-mute"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
