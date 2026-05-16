import type { CartItem } from '@/features/cart/model/types';

export type PlaceOrderState = {
  error: string | null;
  success: boolean;
  orderId: number | null;
};

// Статический сайт без бэкенда: заявка не отправляется на сервер,
// а лишь подтверждается на клиенте. Магазин связывается с покупателем
// по указанным контактам.
export async function placeOrder(
  _prev: PlaceOrderState,
  formData: FormData,
): Promise<PlaceOrderState> {
  const itemsRaw = String(formData.get('items') ?? '[]');

  let items: CartItem[];
  try {
    items = JSON.parse(itemsRaw) as CartItem[];
  } catch {
    return { error: 'Ошибка данных корзины', success: false, orderId: null };
  }

  if (!items.length) {
    return { error: 'Корзина пуста', success: false, orderId: null };
  }

  const orderId = Math.floor(100000 + Math.random() * 900000);
  return { error: null, success: true, orderId };
}
