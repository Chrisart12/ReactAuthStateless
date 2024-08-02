import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosBaseURL from '../../api/axios';
// import { jwtDecode } from "jwt-decode";
import products from '../../data';


export const geProduct = createAsyncThunk(
    'product/geProduct',
    async() => {
        const request = await axiosBaseURL.get(`products`, {
            withCredentials: true,
        });
        const response = await request.data;
        
        return response;
    }
)


const initialState = {
    loading: false,
    product: products,
    error: null
};

export const productSlice = createSlice({
    name: "product",
    initialState,

    extraReducers:(builder) => {
        builder
        .addCase(geProduct.pending,(state) => {
            state.loading = true;
            state.product = null;
            state.error = null;
        })
        .addCase(geProduct.fulfilled,(state,action) =>{
            state.loading = false;
            state.product = action.payload;
            state.error = null;
        })
        .addCase(geProduct.rejected,(state,action) =>{
            state.loading = false;
            state.product = null;

            if (action.error.message == 'Request failed with status code 401') {
                state.error = 'Access Denied! Invalid Credentials';
            } else {
                state.error = action.error.message;
            }
        })
    }


})