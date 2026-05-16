'use client';

import Image from 'next/image';
import { useCart } from '../model/CartContext';
import type { CartItem } from '../model/types';
import { formatPrice } from '@/shared/lib/formatPrice';

type Props = { item: CartItem };

export default function CartItemRow({ item }: Props) {
  const { dispatch } = useCart();
  const lineTotal = item.price * item.quantity;

  return (
    <div className="flex gap-3.5 border-b border-black/10 py-4 last:border-b-0">
      <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-[10px] bg-black/[0.04]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="76px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <p className="mb-1 text-[15px] leading-[1.25]">{item.name}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-[13px] text-neutral-500">
            {item.quantity} шт.
          </span>
          <span className="text-[15px] font-semibold">
            {formatPrice(lineTotal)}
          </span>
        </div>

        <button
          onClick={() =>
            dispatch({ type: 'REMOVE_ITEM', payload: { sku: item.sku } })
          }
          className="mt-1.5 cursor-pointer self-start text-[11px] uppercase tracking-[0.08em] text-neutral-400"
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
