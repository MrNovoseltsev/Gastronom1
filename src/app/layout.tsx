import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/features/cart/model/CartContext";

export const metadata: Metadata = {
  title: "Gastronom1 — продуктовый магазин",
  description:
    "Gastronom1 — продуктовый гастроном в Буэнос-Айресе: готовая еда, копчёности, молочная продукция, выпечка, десерты и заморозка от локальных производителей.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
