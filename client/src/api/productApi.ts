import {Product} from "./types/product";
import {api} from './rtkConfig';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], string>({
      query: () => '/products',
    }),
    getProduct: builder.query<Product, string>({
      query: productId => `/products/${productId}`
    }),
    addNewProduct: builder.mutation({
      query: newProduct => ({
        url: `/products`,
        method: 'POST',
        // Include the entire post object as the body of the request
        body: newProduct
      })
    }),
  }),
})

export const {useGetProductQuery, useLazyGetProductQuery} = productApi