import {Product} from "./types/product";
import {api} from './rtkConfig';
import {ApiArrayResponse, ApiObjectResponse} from "./types/apiResponse";
import {IGenericResponse} from "./types/user";

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({

    }),
})

// export const {useRegisterUserQuery} = userApi