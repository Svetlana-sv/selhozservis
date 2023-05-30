import { ApiArrayResponse } from './apiResponse';
import { Product } from './product';

export type Guide = {
    id: number;
    attributes: {
        title: string;
        type: string;
        products: ApiArrayResponse<Product>;
        info: string;
    };
};
