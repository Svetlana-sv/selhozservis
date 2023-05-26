import { api } from './rtkConfig';
import { ApiObjectResponse } from './types/apiResponse';
import { UserInfo } from './types/user';

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUserInfo: builder.query<ApiObjectResponse<UserInfo>, number>({
            query: (id) => `/user-infos/${id}?populate=*`,
        }),
        updateUserInfo: builder.mutation({
            query: ({ id, userInfo }) => ({
                url: `/user-infos/${id}?populate=*`,
                method: 'POST',
                body: userInfo,
            }),
        }),
    }),
});

export const { useGetUserInfoQuery, useUpdateUserInfoMutation } = userApi;
