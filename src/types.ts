export type Category = {
  id: string;
  title: string;
  sub: string;
  count: number;
};

export type Product = {
  id: string;
  c: string; // category id
  n: string; // name
  w: string; // weight / serving
  p: number; // price, ARS
  p2?: number; // optional upper bound
  tag?: string; // optional label
};

export type SortMode = "popular" | "priceAsc" | "priceDesc";

export type User = { email: string };
