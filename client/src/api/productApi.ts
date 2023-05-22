import {Product} from "./types/product";
import {api} from './rtkConfig';
import {ApiArrayResponse, ApiObjectResponse} from "./types/apiResponse";
import {Category} from "./types/category";
import {FavouriteProduct} from "./types/favouriteProduct";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<ApiArrayResponse<Product>, void>({
      query: () => '/products?populate=*',
    }),
    getProduct: builder.query<ApiObjectResponse<Product>, string>({
      query: id => `/products/${id}?populate=*`
    }),
    // getFilter: builder.query({
    //   query: () => `/categories?populate=*`
    // }),
    addNewProduct: builder.mutation({
      query: newProduct => ({
        url: `/products`,
        method: 'POST',
        body: newProduct
      })
    }),
    getAllCategories: builder.query<ApiArrayResponse<Category>, void>({
      query: () => '/categories?populate=*',
    }),
    getAllFavourites: builder.query<ApiArrayResponse<FavouriteProduct>, void>({
      query: () => '/favourites?populate=deep,3',
    }),
    addNewFavoriteProduct: builder.mutation({
      query: newProduct => ({
        url: `/favourites`,
        method: 'POST',
        body: newProduct
      })
    }),
  }),
})

export const {useGetAllProductsQuery, useGetAllCategoriesQuery,useGetAllFavouritesQuery, useGetProductQuery, useAddNewFavoriteProductMutation, useLazyGetProductQuery} = productApi

