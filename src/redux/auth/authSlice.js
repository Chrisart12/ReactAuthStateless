import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from '../../api/axios';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    
    async(jwtoken) => {

        const headers = { 'Authorization': `Bearer ${jwtoken}`  }; 
        const request = await axios.post(`https://localhost:8000/api/dashboard`, '', { headers })
        
        const response = await request.data;
        
        return response;
    }

)


// const initialState = {
//     test: null,
// };

export const userSlice = createSlice({
    name: "auth",
    // initialState,

    extraReducers:(builder) => {
        builder
        .addCase(checkAuth.pending,(state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(checkAuth.fulfilled,(state,action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(checkAuth.rejected,(state,action) => {
            state.loading = false;
            state.user = null;
            if (action.error.message == 'Request failed with status code 401') {
                state.error = 'Access Denied! Invalid Credentials';
            } else {
                state.error = action.error.message;
            }
        })
    }

})
