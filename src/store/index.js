import { configureStore } from '@reduxjs/toolkit'

import darkmodeSlice from './darkmode'
import countriesSlice from './countries'
import { countriesApi } from '../api'

export const store = configureStore({
  reducer: {
    darkmode: darkmodeSlice.reducer,
    countries: countriesSlice.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
})