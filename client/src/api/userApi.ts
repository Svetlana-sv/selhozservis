import { api } from './rtkConfig';
import { ApiObjectResponse } from './types/apiResponse';
import { User, UserInfo } from './types/user';

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUserInfo: builder.query<UserInfo, number>({
            query: (id) => `/users/${id}?populate=*`,
            providesTags: ['personalData'],
        }),
        updateUserInfo: builder.mutation({
            query: ({ id, data }) => ({
                url: `/users/${id}?populate=*`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['personalData'],
        }),
    }),
});

export const { useGetUserInfoQuery, useUpdateUserInfoMutation } = userApi;
