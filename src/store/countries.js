import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countries: []
}

 const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        add: (state, payload) => {
            state.countries = payload.payload
            console.log(payload.payload)
        }
    }
})

export const countriesActions = countriesSlice.actions;

export default countriesSlice