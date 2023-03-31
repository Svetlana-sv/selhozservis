import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Product} from "./types/product";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(
      {
        baseUrl: '/api'}),
  endpoints: () => ({}),
})