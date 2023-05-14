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

type OrderProducts = {
    id: number
    attributes: {
        count: number,
        price: number,
        sum_price: number,
    }
}