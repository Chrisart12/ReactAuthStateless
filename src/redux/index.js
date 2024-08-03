import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from './user/userSlice';
import { authSlice } from './auth/authSlice';
import { categorySlice } from './category/categorySlice'
import { productSlice } from './product/productSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        category: categorySlice.reducer,
        product: productSlice.reducer
    }
})