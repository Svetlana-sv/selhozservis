import {Product} from "./product";
import {ApiArrayResponse} from "./apiResponse";

export type Order = {
    id: number
    attributes: {
        products: ApiArrayResponse<OrderProducts>,
        status: string,
        payment: string,
        delivery: string,
        total: number,
        createdAt: string
    }
}

export type OrderProducts = {
    product: Product,
    count: number,
    price: number,
    sum_price: number,
}