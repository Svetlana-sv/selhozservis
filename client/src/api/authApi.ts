import { api } from './rtkConfig';
import { AuthResponse, IUser, IUserAuth, RegisterResponse } from './types/user';

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
});

export const { useRegisterUserMutation, useAuthUserMutation } = authApi;
