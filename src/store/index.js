import { configureStore } from '@reduxjs/toolkit'

import darkmodeSlice from './darkmode'

export const store = configureStore({
  reducer: {
    darkmode: darkmodeSlice.reducer
  },
})