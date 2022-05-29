import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'user',
    initialState: {
        loginName: '',
        loginPassword: ''
    },
    reducers: {
        replaceUser(state, { payload }) {
            return {...state, loginName: payload.pay1, loginPassword: payload.pay2}
        }
    }
})

export const { replaceUser } = slice.actions;

export const selectUser = (state: { loginUser: any; }) => state.loginUser

export default slice.reducer;