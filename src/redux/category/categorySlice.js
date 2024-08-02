import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosBaseURL from '../../api/axios';
// import { jwtDecode } from "jwt-decode";


export const getCategory = createAsyncThunk(
    'category/getCategory',
    async() => {
        const request = await axiosBaseURL.get(`categories`, {
            withCredentials: true,
        });
        const response = await request.data;
        
        return response;
    }
)


const initialState = {
    loading: false,
    category: null,
    error: null
};

export const categorySlice = createSlice({
    name: "category",
    initialState,

    extraReducers:(builder) => {
        builder
        .addCase(getCategory.pending,(state) => {
            state.loading = true;
            state.category = null;
            state.error = null;
        })
        .addCase(getCategory.fulfilled,(state,action) =>{
            state.loading = false;
            state.category = action.payload;
            state.error = null;
        })
        .addCase(getCategory.rejected,(state,action) =>{
            state.loading = false;
            state.category = null;

            if (action.error.message == 'Request failed with status code 401') {
                state.error = 'Access Denied! Invalid Credentials';
            } else {
                state.error = action.error.message;
            }
        })
    }


})