import {Culture, ProcessingMethod, Product, ProductApplication, Type} from './types/product';
import { api } from './rtkConfig';
import { ApiArrayResponse, ApiObjectResponse } from './types/apiResponse';
import { Category } from './types/category';
import { FavouriteProduct } from './types/favouriteProduct';

const calculatorApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllCultures: builder.query<
            ApiArrayResponse<Culture>,
            void
            >({
            query: () =>
                `/cultures?populate=*`,
        }),
        getAllTypes: builder.query<
            ApiArrayResponse<Type>,
            void
            >({
            query: () =>
                `/place-uses?populate=*`,
        }),
        getAllMethods: builder.query<
            ApiArrayResponse<ProcessingMethod>,
            void
            >({
            query: () =>
                `/processing-methods?populate=*`,
        }),
        getInfoByIdGuide: builder.query<
            ApiArrayResponse<ProductApplication>,
            string
            >({
            query: (id) =>
                `/product-applications?populate=deep,4&filters[products][guide][id][$eq]=${id}`,
        }),
    }),
});

export const {
    useGetAllCulturesQuery,
    useGetAllMethodsQuery,
    useGetAllTypesQuery,
    useGetInfoByIdGuideQuery,
} = calculatorApi;
