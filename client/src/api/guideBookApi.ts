import { api } from './rtkConfig';
import { ApiArrayResponse } from './types/apiResponse';
import { Guide } from './types/guide';

const guideBookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getGuides: builder.query<ApiArrayResponse<Guide>, void>({
            query: () => '/guides?populate=deep,3',
        }),
        getGuidesById: builder.query<ApiArrayResponse<Guide>, string>({
            query: (id) => `/guides?filters[id][$eq]=${id}&populate=deep,3`,
        }),
    }),
});

export const { useGetGuidesByIdQuery, useGetGuidesQuery } = guideBookApi;
