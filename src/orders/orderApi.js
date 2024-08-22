import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';






export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.0.179:5000/api/orders'
  }),


  endpoints: (builder) => ({



    getOrderById: builder.query({
      query: (query) => ({
        url: `/${query.id}`,
        method: 'GET',

      }),
      providesTags: ['Order']
    }),

    getOrders: builder.query({
      query: (query) => {

        return {
          url: '/',
          method: 'GET',

        };
      },
      providesTags: ['Order']
    }),

    addOrder: builder.mutation({
      query: (query) => ({
        url: '/',
        body: query,
        method: 'POST',

      }),
      invalidatesTags: ['Order']
    }),


  }),
});


export const { useAddOrderMutation, useGetAllOrdersQuery, useGetOrderByIdQuery, useGetOrdersQuery } = orderApi;