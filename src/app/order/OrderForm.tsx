'use client';

import { useActionState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/features/cart/model/CartContext';
import { placeOrder, type PlaceOrderState } from '@/features/checkout/actions';
import { formatPrice } from '@/shared/lib/formatPrice';

const INIT: PlaceOrderState = { error: null, success: false, orderId: null };

const inputClass =
  'w-full rounded-[10px] border border-black/15 px-3.5 py-[11px] text-[14px] outline-none';

export default function OrderForm() {
  const { state: cart, dispatch, hydrated } = useCart();
  const [orderState, formAction, pending] = useActionState(placeOrder, INIT);

  useEffect(() => {
    if (orderState.success) {
      dispatch({ type: 'CLEAR_CART' });
    }
  }, [orderState.success, dispatch]);

  if (!hydrated) {
    return <div className="h-48 animate-pulse rounded-[16px] bg-black/[0.05]" />;
  }

  if (orderState.success) {
    return (
      <div className="rounded-[16px] border border-black/10 px-7 py-9 text-center">
        <p className="mb-1.5 text-[24px] font-semibold">Заявка принята!</p>
        <p className="mb-1 text-[14px] text-neutral-600">
          Номер заявки: <strong>#{orderState.orderId}</strong>
        </p>
        <p className="mb-6 text-[13px] text-neutral-500">
          Мы свяжемся с вами по указанным контактам, чтобы подтвердить заказ.
        </p>
        <Link
          href="/catalog"
          className="inline-block rounded-full bg-neutral-900 px-7 py-3 text-[12px] tracking-[0.1em] text-white"
        >
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="rounded-[16px] border border-black/10 px-7 py-9 text-center">
        <p className="mb-5 text-[14px] text-neutral-600">Корзина пуста.</p>
        <Link
          href="/catalog"
          className="inline-block rounded-full bg-neutral-900 px-7 py-3 text-[12px] tracking-[0.1em] text-white"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  const totalPrice = cart.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0,
  );
  const totalCount = cart.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <input
        type="hidden"
        name="items"
        value={JSON.stringify(cart.items)}
        readOnly
      />

      {/* Состав корзины */}
      <div className="overflow-hidden rounded-[16px] border border-black/10">
        {cart.items.map((item) => (
          <div
            key={item.sku}
            className="flex items-center gap-3.5 border-b border-black/10 px-4 py-3.5 last:border-0"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={44}
              height={44}
              className="shrink-0 rounded-[8px] object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px]">{item.name}</p>
              <p className="text-[12px] text-neutral-500">
                {formatPrice(item.price)} × {item.quantity}
              </p>
            </div>
            <p className="shrink-0 text-[14px] font-medium">
              {formatPrice(item.price * item.quantity)}
            </p>
          </div>
        ))}
      </div>

      {/* Итого */}
      <div className="flex items-baseline justify-between border-t border-black/10 pt-3.5">
        <span className="text-[12px] tracking-[0.1em] text-neutral-500">
          ИТОГО ({totalCount} шт.)
        </span>
        <span className="text-[20px] font-semibold">
          {formatPrice(totalPrice)}
        </span>
      </div>

      {/* Имя */}
      <div>
        <label className="mb-1.5 block text-[11px] tracking-[0.1em] text-neutral-500">
          Ваше имя
        </label>
        <input
          name="name"
          type="text"
          required
          placeholder="Как к вам обращаться"
          className={inputClass}
        />
      </div>

      {/* Контакт */}
      <div>
        <label className="mb-1.5 block text-[11px] tracking-[0.1em] text-neutral-500">
          Контакт для связи
        </label>
        <input
          name="contact"
          type="text"
          required
          placeholder="Telegram, телефон или e-mail"
          className={inputClass}
        />
      </div>

      {/* Комментарий */}
      <div>
        <label className="mb-1.5 block text-[11px] tracking-[0.1em] text-neutral-500">
          Комментарий к заказу{' '}
          <span className="text-neutral-400">(необязательно)</span>
        </label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Удобное время самовывоза, пожелания..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {orderState.error && (
        <p className="rounded-[10px] border border-red-200 bg-red-50 px-3 py-2 text-[13px] text-red-600">
          {orderState.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full cursor-pointer rounded-full bg-neutral-900 py-4 text-[13px] tracking-[0.1em] text-white disabled:opacity-60"
      >
        {pending ? 'Отправляем...' : 'Оформить заявку'}
      </button>
    </form>
  );
}
