export type Product = {
  id: number
  attributes: {
    title: string
    image: string
    description: string
    price: number
    price_old: number
    composition: string,
    expiration_date: string,
    period_storage: string,
    danger_class: string,
    destination: string,
    application: string,
    // publishedAt: string

  }
  // category_id: number // category: number || string ??
  // price: number
  // count: number
  // packing_id: number // packing: number || string ??
}

export type CountMapProduct = {
  product: Product;
  count: number;
};