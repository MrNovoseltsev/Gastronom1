'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { useCart } from '../model/CartContext';
import CartItemRow from './CartItem';
import Close from '@/shared/ui/icons/Close';
import CartIcon from '@/shared/ui/icons/Cart';
import { formatPrice } from '@/shared/lib/formatPrice';

type Props = {
  open: boolean;
  onClose: () => void;
};

function plural(n: number, forms: [string, string, string]) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
}

const emptySubscribe = () => () => {};

export default function CartDrawer({ open, onClose }: Props) {
  const { state, dispatch } = useCart();
  const router = useRouter();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!open) return;
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  function handleCheckout() {
    onClose();
    router.push('/order');
  }

  const totalPrice = state.items.reduce((n, i) => n + i.price * i.quantity, 0);
  const totalCount = state.items.reduce((n, i) => n + i.quantity, 0);
  const isEmpty = state.items.length === 0;

  const content = (
    <>
      {/* Подложка */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[300] bg-black/30 transition-opacity duration-[320ms] ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Панель */}
      <div
        className={`fixed bottom-0 right-0 top-0 z-[310] flex w-full max-w-[440px] flex-col bg-white transition-transform duration-[420ms] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Шапка */}
        <div className="flex shrink-0 items-center justify-between border-b border-black/10 px-6 pb-[18px] pt-[22px]">
          <div className="flex items-baseline gap-2.5">
            <h2 className="text-[24px] font-semibold">Корзина</h2>
            {!isEmpty && (
              <span className="text-[11px] tracking-[0.12em] text-neutral-500">
                {totalCount}{' '}
                {plural(totalCount, ['товар', 'товара', 'товаров'])}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-black/15"
          >
            <Close />
          </button>
        </div>

        {/* Позиции */}
        <div className="flex-1 overflow-y-auto px-6 py-2">
          {isEmpty ? (
            <div className="flex h-full flex-col items-center justify-center px-6 py-[60px] text-center">
              <div className="mb-[18px] flex h-[72px] w-[72px] items-center justify-center rounded-full bg-black/[0.05]">
                <CartIcon width={32} height={32} />
              </div>
              <h3 className="mb-1.5 text-[20px] font-semibold">
                Корзина пуста
              </h3>
              <p className="max-w-[260px] text-[13px] leading-[1.55] text-neutral-500">
                Добавьте товары, чтобы оформить заказ.
              </p>
            </div>
          ) : (
            state.items.map((item) => (
              <CartItemRow key={item.sku} item={item} />
            ))
          )}
        </div>

        {/* Подвал */}
        {!isEmpty && (
          <div className="shrink-0 border-t border-black/10 px-6 pb-6 pt-5">
            <div className="mb-4">
              <div className="flex justify-between py-1.5 text-[13px] text-neutral-600">
                <span>Подытог</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between py-1.5 text-[13px] text-neutral-600">
                <span>Доставка</span>
                <span>Уточняется</span>
              </div>
              <div className="mt-2.5 flex items-baseline justify-between border-t border-black/10 pt-3.5">
                <span className="text-[11px] tracking-[0.16em] text-neutral-500">
                  ИТОГО
                </span>
                <span className="text-[20px] font-semibold">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="mb-2.5 w-full cursor-pointer rounded-full bg-neutral-900 py-3.5 text-[13px] text-white"
            >
              Оформить заказ
            </button>
            <button
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
              className="w-full cursor-pointer text-[12px] text-neutral-500"
            >
              Очистить корзину
            </button>
          </div>
        )}
      </div>
    </>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}
