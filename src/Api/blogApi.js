import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.0.147:5000/api'
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: '/blogs',
        method: 'GET',
      }),
      providesTags: ['Blog'],
    }),
  }),
});

export const { useGetBlogsQuery } = blogApi;
