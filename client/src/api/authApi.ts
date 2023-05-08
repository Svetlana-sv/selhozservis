import {Product} from "./types/product";
import {api} from './rtkConfig';
import {ApiArrayResponse, ApiObjectResponse} from "./types/apiResponse";
import {AuthResponse, IUser, RegisterResponse, IUserAuth} from "./types/user";

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<RegisterResponse, IUser>({
            query(data) {
                return {
                    url: '/auth/local/register',
                    method: 'POST',
                    body: data,
                };
            },

        }),
        authUser: builder.mutation<AuthResponse, IUserAuth>({
            query(data) {
                return {
                    url: '/auth/local',
                    method: 'POST',
                    body: data,
                };
            },
// transformResponse -


        }),

    }),
})

export const {useRegisterUserMutation,useAuthUserMutation} = authApi