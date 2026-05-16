'use client';

import { useState } from 'react';
import { useCart } from '../model/CartContext';
import CartDrawer from './CartDrawer';
import CartIcon from '@/shared/ui/icons/Cart';

export default function CartButton() {
  const { state, hydrated } = useCart();
  const [open, setOpen] = useState(false);

  const totalItems = state.items.reduce((n, i) => n + i.quantity, 0);
  const hasItems = hydrated && totalItems > 0;

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setOpen(true)}
          aria-label="Корзина"
          className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full border border-black/15"
        >
          <CartIcon />
        </button>
        {hasItems && (
          <span className="absolute right-[6px] top-[6px] h-[8px] w-[8px] rounded-full border-2 border-white bg-neutral-900" />
        )}
      </div>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
