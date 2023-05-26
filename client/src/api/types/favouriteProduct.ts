import { Product } from './product';
import { ApiObjectResponse } from './apiResponse';
import { UserRes } from './user';

export type FavouriteProduct = {
    id: number;
    attributes: {
        user_id: ApiObjectResponse<UserRes>;
        product: ApiObjectResponse<Product>;
    };
};
