import {Product} from "./types/product";
import {api} from './rtkConfig';
import {ApiArrayResponse, ApiObjectResponse} from "./types/apiResponse";

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
  }),
})

export const {useGetAllProductsQuery, useGetProductQuery, useLazyGetProductQuery} = productApi

