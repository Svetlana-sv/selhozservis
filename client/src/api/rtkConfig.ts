import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        // prepareHeaders: (headers, {getState}) => {
        //     // const token = (getState() as RootState).auth.userToken;
        //     // console.log(token)
        //     // if (token) {
        //     //     headers.set('Authorization', `Bearer ${token}`);
        //     // }else{
        //         headers.set('Authorization', `Bearer
        //         39bec0c8667db67a6814b9063d20e430ef8588eeed910cf9d70fc22a39eae1e521040b67ab9d08447ae6ee67f9bbf964cb289a923e3e79c89c0bf3ad5c92eddd5ed102d80f9cc51930cd0985a8d076e835695ed46884664a7f3f103301753a14d816e2eda53ce603daa69ed472ac815bc39a5679617ff6db067d3b35a007fda0`);
        //     // }
        //
        //
        //     headers.set('Accept', 'application/json');
        //     headers.set('Content-Type', 'application/json;charset=UTF-8');
        //
        //     return headers;
        // },
    }),
    endpoints: () => ({}),
    tagTypes: ['order', 'favourite'],
});
