import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosBaseURL from '../../api/axios';
// import { jwtDecode } from "jwt-decode";


export const getUser = createAsyncThunk(
    'user/getUser',
    async(jwtoken) => {
        const headers = { 'Authorization': `Bearer ${jwtoken}` }; 
        const request = await axiosBaseURL.post(`me`, '', { headers });
        const response = await request.data;

        localStorage.setItem('user', JSON.stringify(response))
        
        return response;
    }
)



const initialState = {
    loading: false,
    user: JSON.parse(localStorage.getItem('user')),
    error: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,

    extraReducers:(builder) => {
        builder
        .addCase(getUser.pending,(state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(getUser.fulfilled,(state,action) =>{
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(getUser.rejected,(state,action) =>{
            state.loading = false;
            state.user = null;
            console.log(action.error.message)
            if (action.error.message == 'Request failed with status code 401') {
                state.error = 'Access Denied! Invalid Credentials';
            } else {
                state.error = action.error.message;
            }
        })
    }


})