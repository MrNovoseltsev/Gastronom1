import Link from "next/link";
import { CATEGORY_META } from "@/shared/config/categories";

export default function CatalogGrid() {
  return (
    <div className="grid grid-cols-1 gap-[14px] min-[481px]:grid-cols-2 md:grid-cols-3">
      {CATEGORY_META.map((cat) => (
        <Link
          key={cat.slug}
          href={`/catalog/${cat.slug}`}
          className="flex items-center justify-between rounded-[12px] border border-black/10 bg-white px-5 py-6"
        >
          <span className="text-[clamp(16px,2vw,20px)]">{cat.label}</span>
          <span aria-hidden="true" className="text-[16px] text-neutral-400">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
