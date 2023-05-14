import {Product} from "./types/product";
import {api} from './rtkConfig';
import {ApiArrayResponse, ApiObjectResponse} from "./types/apiResponse";
import {Order} from "./types/order";

const orderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query<ApiArrayResponse<Order>, void>({
            query: () => '/orders?populate=*',
        }),
        getOrder: builder.query<ApiObjectResponse<Order>, string>({
            query: id => `/orders/${id}?populate=*`
        }),
        // getFilter: builder.query({
        //   query: () => `/categories?populate=*`
        // }),
        addOrder: builder.mutation({
            query: newProduct => ({
                url: `/products`,
                method: 'POST',
                body: newProduct
            })
        }),
    }),
})

export const {useGetOrdersQuery, useGetOrderQuery} = orderApi

