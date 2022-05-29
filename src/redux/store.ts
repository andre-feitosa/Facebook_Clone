import { configureStore } from '@reduxjs/toolkit'
import user from './user'
import post from './post'

export default configureStore({
    reducer: {
        loginUser: user,
        loginPost: post
    }
})