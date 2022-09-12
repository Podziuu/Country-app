import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `/all`,
    }),
    getCountriesByRegion: builder.query({
        query: (region) => `/region/${region}`
    })
  }),
})

export const { useGetAllCountriesQuery, useGetCountriesByRegionQuery } = countriesApi