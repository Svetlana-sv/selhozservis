import {Product} from "./product";
import {ApiArrayResponse, ApiObjectResponse} from "./apiResponse";

export type FavouriteProduct = {
    id: number
    attributes: {
        user_id: string,
        product: ApiObjectResponse<Product>,
    }
}