import type { Metadata, Viewport } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "gastronom1 — almacén de barrio · Buenos Aires",
  description:
    "Локальная еда от фермеров, пекарей и шефов в Буэнос-Айресе. Творог Беларуса, долма, бородинский, лосось от шефа. Доставка по городу за 2 часа.",
  openGraph: {
    title: "gastronom1 — соседский гастроном · Buenos Aires",
    description:
      "Локальная еда от фермеров, пекарей и шефов. Доставка по Буэнос-Айресу за 2 часа.",
    images: ["/logo-gastronom1.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
