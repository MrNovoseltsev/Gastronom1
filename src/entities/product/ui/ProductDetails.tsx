import Image from "next/image";
import type { ReactNode } from "react";
import type { Product } from "../model/types";
import { formatPrice } from "@/shared/lib/formatPrice";

type Props = {
  product: Product;
  categoryLabel?: string;
  action?: ReactNode;
};

export default function ProductDetails({
  product,
  categoryLabel,
  action,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
      {/* Изображение */}
      <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-black/[0.04]">
        <Image
          src={product.image.full}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 520px"
          priority
        />
      </div>

      {/* Информация */}
      <div className="pt-2">
        {categoryLabel && (
          <span className="mb-4 inline-block rounded-full bg-black/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            {categoryLabel}
          </span>
        )}

        <h1 className="mb-3.5 text-[clamp(26px,3.5vw,38px)] font-semibold leading-[1.15]">
          {product.name}
        </h1>

        <p className="mb-6 text-[30px] font-semibold">
          {formatPrice(product.price)}
        </p>

        <p className="mb-7 text-[14px] leading-[1.7] text-neutral-600">
          {product.description}
        </p>

        <dl className="mb-8">
          <div className="flex gap-3 border-b border-black/10 py-[9px] text-[13px]">
            <dt className="min-w-[100px] shrink-0 text-neutral-500">Артикул</dt>
            <dd>{product.sku}</dd>
          </div>
          <div className="flex gap-3 border-b border-black/10 py-[9px] text-[13px]">
            <dt className="min-w-[100px] shrink-0 text-neutral-500">Фасовка</dt>
            <dd>{product.unit}</dd>
          </div>
        </dl>

        {action}
      </div>
    </div>
  );
}
