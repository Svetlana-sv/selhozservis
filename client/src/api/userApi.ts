import {Product} from "./types/product";
import {api} from './rtkConfig';
import {ApiArrayResponse, ApiObjectResponse} from "./types/apiResponse";

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({

    }),
})

// export const {useRegisterUserQuery} = userApi