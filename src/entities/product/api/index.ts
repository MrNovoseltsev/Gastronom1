import type { Product, CategorySlug } from "../model/types";
import productsData from "@/data/products.json";

// Источник данных — статический мок-файл (приложение работает без БД).
const products = productsData as Product[];

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getProductBySku(
  sku: string,
): Promise<Product | undefined> {
  return products.find((p) => p.sku === sku);
}

export async function getProductsByCategory(
  category: CategorySlug,
): Promise<Product[]> {
  return products.filter((p) => p.category === category);
}
