import { api } from './rtkConfig';
import { ApiObjectResponse } from './types/apiResponse';
import { AboutCompany, SaleInfo } from './types/staticInfo';

const staticInfoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAboutCompany: builder.query<ApiObjectResponse<AboutCompany>, void>({
            query: () => '/about',
        }),

        getSaleInfo: builder.query<ApiObjectResponse<SaleInfo>, void>({
            query: () => '/sale',
        }),
    }),
});

export const { useGetAboutCompanyQuery, useGetSaleInfoQuery } = staticInfoApi;
