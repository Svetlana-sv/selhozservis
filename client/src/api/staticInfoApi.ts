import { api } from './rtkConfig';
import { ApiObjectResponse } from './types/apiResponse';
import {AboutCompany, SaleInfo, StaticInfo} from './types/staticInfo';
import PublicOfferAgreement from "../pages/PublicOfferAgreement/PublicOfferAgreement";
import PersonalDataProtection from "../pages/PersonalDataProtection/PersonalDataProtection";

const staticInfoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAboutCompany: builder.query<ApiObjectResponse<AboutCompany>, void>({
            query: () => '/about',
        }),

        getSaleInfo: builder.query<ApiObjectResponse<SaleInfo>, void>({
            query: () => '/sale',
        }),

        getPublicOfferAgreement: builder.query<ApiObjectResponse<StaticInfo>, void>({
            query: () => '/public-offer-agreement   ',
        }),

        getPersonalDataProtection: builder.query<ApiObjectResponse<StaticInfo>, void>({
            query: () => '/personal-data-protection',
        }),
    }),
});

export const { useGetAboutCompanyQuery, useGetSaleInfoQuery, useGetPersonalDataProtectionQuery , useGetPublicOfferAgreementQuery } = staticInfoApi;
