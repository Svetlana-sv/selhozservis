import { api } from './rtkConfig';
import { ApiArrayResponse, ApiObjectResponse } from './types/apiResponse';
import {
    GetOrderProducts,
    Order,
    PostOrderAttributes,
    PostOrderProducts,
} from './types/order';

const orderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query<ApiArrayResponse<Order>, number>({
            query: (id) =>
                `/orders?filters[user][id][$eq]=${id}&populate=deep,4`,
            providesTags: ['order'],
        }),
        getOrder: builder.query<ApiArrayResponse<Order>, string>({
            query: (id) => `/orders?filters[id][$eq]=${id}&populate=deep,4`,
        }),
        addOrder: builder.mutation<
            ApiObjectResponse<Order>,
            ApiObjectResponse<PostOrderAttributes>
        >({
            query: (newProduct) => ({
                url: `/orders?populate=deep,4`,
                method: 'POST',
                body: newProduct,
            }),
            invalidatesTags: ['order'],
        }),
        addOrderProducts: builder.mutation<
            ApiObjectResponse<GetOrderProducts>,
            ApiObjectResponse<PostOrderProducts>
        >({
            query: (newProduct) => ({
                url: `/orders-products`,
                method: 'POST',
                body: newProduct,
            }),
        }),
        cancelOrder: builder.mutation({
            query: (id) => ({
                url: `/orders/${id}?populate=deep,4`,
                method: 'PUT',
                body: {
                    "data":{
                        "status":"Отменено"
                    }
                },
            }),
            invalidatesTags: ['order'],
        }),
    }),
});

export const {
    useGetOrdersQuery,
    useGetOrderQuery,
    useAddOrderMutation,
    useAddOrderProductsMutation,
    useCancelOrderMutation,
} = orderApi;
