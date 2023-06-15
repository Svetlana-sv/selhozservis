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
        guide: ApiObjectResponse<Guide>;
        product_application: ApiArrayResponse<ProductApplication>;
        rest_products: number;
    };
};

export type ProductApplication = {
    id: number;
    attributes: {
        consumption_rate: string;
        fluid_flow_rate: string;
        processing_time: string;
        types: ApiArrayResponse<Type>;
        cultures: ApiArrayResponse<Culture>;
        norm_application_quantity: ApiObjectResponse<Norm>;
        norm_application_area: ApiObjectResponse<Norm>;
        processing_method: ApiArrayResponse<ProcessingMethod>,
        count_application_area: number,
        count_application_quantity: number,
        destination: string,
        instruction: string
        products: ApiArrayResponse<Product>;
    };
};

export type Culture = {
    id: number;
    attributes: {
        title: string,
    }
}

export type Norm = {
    id: number;
    attributes: {
        title: string,
        short: string,
    }
}

export type ProcessingMethod = {
    id: number;
    attributes: {
        title: string,
    }
}

export type Type = {
    id: number;
    attributes: {
        title: string,
    }
}

export type CountMapProduct = {
    product: Product;
    count: number;
    price: number;
};
