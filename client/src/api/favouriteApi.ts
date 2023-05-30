import { Product } from './types/product';
import { api } from './rtkConfig';
import { ApiArrayResponse, ApiObjectResponse } from './types/apiResponse';
import { Category } from './types/category';
import { FavouriteProduct } from './types/favouriteProduct';

const favouriteApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllFavourites: builder.query<
            ApiArrayResponse<FavouriteProduct>,
            number
        >({
            query: (id) =>
                `/favourites?filters[user_id][id][$eq]=${id}&populate=deep,4`,
            providesTags: ['favourite'],
        }),
        getFavourite: builder.query<
            ApiArrayResponse<FavouriteProduct>,
            { userId: number; productId: number }
        >({
            query: ({ userId, productId }) =>
                `/favourites?filters[user_id][id][$eq]=${userId}&populate=deep,4&filters[product][id][$eq]=${productId}`,
            providesTags: ['favourite'],
        }),
        addNewFavoriteProduct: builder.mutation({
            query: (newProduct) => ({
                url: `/favourites`,
                method: 'POST',
                body: newProduct,
            }),
            invalidatesTags: ['favourite'],
        }),
        deleteFavoriteProduct: builder.mutation({
            query: (id) => ({
                url: `/favourites/${id}`,
                method: 'DELETE',
                credentials: 'include',
            }),
            invalidatesTags: ['favourite'],
        }),
    }),
});

export const {
    useGetAllFavouritesQuery,
    useGetFavouriteQuery,
    useAddNewFavoriteProductMutation,
    useDeleteFavoriteProductMutation,
    useLazyGetFavouriteQuery,
} = favouriteApi;
