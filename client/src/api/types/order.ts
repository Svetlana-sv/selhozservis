import { Product } from './product';
import { ApiArrayResponse, ApiObjectResponse } from './apiResponse';
import { UserRes } from './user';

export type Order = {
    id: number;
    attributes: OrderAttributes & {
        order_products: ApiArrayResponse<OrderProducts>;
        createdAt: string;
        user: ApiArrayResponse<UserRes>;
    };
};

export type OrderProducts = {
    id: number;
    attributes: {
        product: ApiObjectResponse<Product>;
        count: number;
        price: number;
        sum_price: number;
    };
};

export type PostOrderProducts = {
    count: number;
    price: number;
    sum_price: number;
    product: number[];
    order: number[];
};

export type OrderAttributes = {
    status: string;
    payment: string;
    delivery: string;
    total: number;
    address?: string;
};

export type PostOrderAttributes = OrderAttributes & {
    order_products: number[];
    user: number[];
};

export type GetOrderProducts = {
    id: number;
};
