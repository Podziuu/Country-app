import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: true
}

 const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
        toggle: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const darkmodeActions = darkmodeSlice.actions;

export default darkmodeSlice