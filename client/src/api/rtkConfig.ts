import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Product} from "./types/product";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(
      {
        baseUrl: 'http://127.0.0.1:5173/api/'}),// todo /api
  endpoints: () => ({}),
})