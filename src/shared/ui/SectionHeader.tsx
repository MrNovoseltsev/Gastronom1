import Link from "next/link";
import ArrowRight from "@/shared/ui/icons/ArrowRight";

type Props = {
  title: string;
  href?: string;
  link?: { label: string; href: string };
};

export default function SectionHeader({ title, href, link }: Props) {
  const titleClasses =
    "text-[clamp(26px,4vw,38px)] font-semibold tracking-[0.01em]";

  return (
    <div className="mb-5 flex items-baseline justify-between">
      {href ? (
        <Link href={href} className={titleClasses}>
          {title}
        </Link>
      ) : (
        <h2 className={titleClasses}>{title}</h2>
      )}

      {link && (
        <Link
          href={link.href}
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-neutral-500"
        >
          {link.label}
          <ArrowRight />
        </Link>
      )}
    </div>
  );
}
