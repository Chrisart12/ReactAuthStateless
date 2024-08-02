import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from './user/userSlice';
import { categorySlice } from './category/categorySlice'
import { productSlice } from './product/productSlice'

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        category: categorySlice.reducer,
        product: productSlice.reducer
    }
})