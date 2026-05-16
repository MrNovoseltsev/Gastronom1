import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Product } from "../model/types";
import { formatPrice } from "@/shared/lib/formatPrice";

type Props = {
  product: Product;
  href: string;
  action?: ReactNode;
};

export default function ProductCard({ product, href, action }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[12px] border border-black/10 bg-white">
      <Link href={href} className="block">
        <div className="relative w-full overflow-hidden bg-black/[0.04] pb-[100%]">
          <Image
            src={product.image.preview}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 220px"
          />
          {action && (
            <div className="absolute bottom-2.5 right-2.5">{action}</div>
          )}
        </div>
        <div className="px-3.5 pb-[15px] pt-[11px]">
          <p className="text-[15px] leading-snug">{product.name}</p>
          <p className="mt-1.5 text-[12px] text-neutral-500">{product.unit}</p>
          <p className="mt-1 text-[14px] font-semibold">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </div>
  );
}
