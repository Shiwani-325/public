import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.weatherstack.com/current?access_key=bcb8a8320e7aec97b047fb8b10ee35f0&query=",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: (data) => ({
        url: `${data}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllPostQuery } = postApi;