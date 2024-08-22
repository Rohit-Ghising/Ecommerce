import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.0.179:5000/api/products'
  }),


  endpoints: (builder) => ({

    getProducts: builder.query({
      query: (query) => {

        return {
          url: '/',
          method: 'GET'
        };
      },
      providesTags: ['Product']
    }),


    getProductById: builder.query({
      query: (query) => ({
        url: `/${query}`,
        method: 'GET'
      }),
      providesTags: ['Product']
    }),


  }),
});


export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;