import { ApiArrayResponse, ApiObjectResponse } from './apiResponse';
import { Category } from './category';
import { Guide } from './guide';

type Image = {
    attributes: {
        url: string;
    };
};

type Packing = {
    data?: {
        attributes: {
            title: string;
        };
    };
};

type Metric = {
    data?: {
        attributes: {
            title: string;
        };
    };
};

type Tag = {
    attributes: {
        title: string;
        color: string;
    };
};

export type Product = {
    id: number;
    attributes: {
        title: string;
        image: ApiObjectResponse<Image>;
        description: string;
        price: number;
        price_old: number;
        composition: string;
        expiration_date: string;
        period_storage: string;
        danger_class: string;
        destination: string;
        application: string;
        packing: Packing;
        packing_count: number;
        metric: Metric;
        count_metric: number;
        categories: ApiArrayResponse<Category>;
        tags: ApiArrayResponse<Tag>;
        guide: ApiArrayResponse<Guide>;
        product_application: ApiArrayResponse<ProductApplication>;
    };
};

export type ProductApplication = {
    id: number;
    attributes: {
        description: string;
        consumption_rate: string;
        fluid_flow_rate: string;
        processing_method: string;
        processing_time: string;
        type: string;
        norm_application: number;
        norm_application_quantity: string;
        norm_application_area: string;
        products: ApiArrayResponse<Product>;
    };
};

export type CountMapProduct = {
    product: Product;
    count: number;
    price: number;
};
