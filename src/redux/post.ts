import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'post',
    initialState: {
        messagePost: '',
        imagePost: ''
    },
    reducers: {
        replacePost(state, { payload }) {
            return {...state, messagePost: payload.pay1, imagePost: payload.pay2}
        }
    }
})

export const { replacePost } = slice.actions;

export const selectPost = (state: { loginPost: any; }) => state.loginPost

export default slice.reducer;