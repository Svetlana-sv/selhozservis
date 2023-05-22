import {ApiArrayResponse, ApiObjectResponse} from "./apiResponse";
import {Category} from "./category";

type Image = {
    attributes: {
      url: string;
  }
}

type Packing = {
  data?: {
    attributes: {
      title: string;
    }
  }
}

type Metric = {
  data?: {
    attributes: {
      title: string;
    }
  }
}

type Tag = {
    attributes: {
      title: string,
      color: string
    }
}

export type Product = {
  id: number
  attributes: {
    title: string
    image: ApiObjectResponse<Image>
    description: string
    price: number
    price_old: number
    composition: string,
    expiration_date: string,
    period_storage: string,
    danger_class: string,
    destination: string,
    application: string,
    packing: Packing,
    packing_count: number,
    metric: Metric,
    count_metric: number
    categories: ApiArrayResponse<Category>,
    tags: ApiArrayResponse<Tag>
}
}

export type CountMapProduct = {
  product: Product;
  count: number;
  price: number;
};