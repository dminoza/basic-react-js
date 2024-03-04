import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            firstName: '',
            lastName: '',
            email: ''
        },
        token: ''
    },
    reducers: {
        storeUser: (state, action) => {
            state.user = action.payload
        },
        storeToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { storeToken, storeUser } = authSlice.actions

export default authSlice.reducer