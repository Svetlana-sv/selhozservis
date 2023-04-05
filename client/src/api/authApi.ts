import {Product} from "./types/product";
import {api} from './rtkConfig';
import {ApiArrayResponse, ApiObjectResponse} from "./types/apiResponse";
import {IGenericResponse, IUser, RegisterResponse} from "./types/user";

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<RegisterResponse, IUser>({
        // registerUser: builder.mutation<IGenericResponse, RegisterInput>({
            query(data) {
                return {
                    url: '/auth/local/register',
                    method: 'POST',
                    body: data,
                };
            },
        }),

    }),
})

export const {useRegisterUserMutation} = authApi