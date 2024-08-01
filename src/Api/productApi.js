import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.0.147:5000/api'
  }),


  endpoints: (builder) => ({




    getProducts: builder.query({
      query: (query) => {

        return {
          url: '/products',
          method: 'GET'
        };
      },
      providesTags: ['Product']
    }),

   
  }),
});


export const {useGetProductsQuery } = productApi;