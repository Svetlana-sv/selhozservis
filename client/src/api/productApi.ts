import { Product } from './types/product';
import { api } from './rtkConfig';
import { ApiArrayResponse, ApiObjectResponse } from './types/apiResponse';
import { Category } from './types/category';
import { FavouriteProduct } from './types/favouriteProduct';

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<ApiArrayResponse<Product>, void>({
            query: () => '/products?populate=*',
        }),
        getProduct: builder.query<ApiObjectResponse<Product>, string>({
            query: (id) => `/products/${id}?populate=*`,
        }),
        // getFilter: builder.query({
        //   query: () => `/categories?populate=*`
        // }),
        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: `/products`,
                method: 'POST',
                body: newProduct,
            }),
        }),
        getAllCategories: builder.query<ApiArrayResponse<Category>, void>({
            query: () => '/categories?populate=*',
        }),
        getAllFavourites: builder.query<
            ApiArrayResponse<FavouriteProduct>,
            number
        >({
            query: (id) =>
                `/favourites?filters[user_id][id][$eq]=${id}&populate=deep,4`,
        }),
        // getProductsInfo: builder.query<
        //     ApiArrayResponse<ProductInfo>,
        //     void
        //     >({
        //     query: (id) =>
        //         `/product-infos?populate=deep,5`,
        // }),
        addNewFavoriteProduct: builder.mutation({
            query: (newProduct) => ({
                url: `/favourites`,
                method: 'POST',
                body: newProduct,
            }),
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetAllCategoriesQuery,
    useGetAllFavouritesQuery,
    useGetProductQuery,
    useAddNewFavoriteProductMutation,
    useLazyGetProductQuery,
} = productApi;
