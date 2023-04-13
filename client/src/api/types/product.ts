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
  }
}

export type CountMapProduct = {
  product: Product;
  count: number;
};