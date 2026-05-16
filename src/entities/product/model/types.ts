export type CategorySlug =
  | 'ready-meals'
  | 'smoked'
  | 'drinks'
  | 'dairy'
  | 'bakery'
  | 'bread'
  | 'desserts'
  | 'frozen'
  | 'spices'
  | 'pickles'
  | 'coffee'
  | 'tea';

export interface Product {
  sku: string;            // напр. RM-001
  category: CategorySlug;
  name: string;
  price: number;          // ARS, целое число
  unit: string;           // фасовка: "100 гр", "1 кг", "0,5 л", "8 шт"
  description: string;
  image: {
    full: string;
    preview: string;
  };
}
