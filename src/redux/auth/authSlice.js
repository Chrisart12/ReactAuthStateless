import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from '../../api/axios';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


// export const getToken = createAsyncThunk(
//     'auth/getToken',
    
//     async(jwtoken) => {

//         const headers = { 'Authorization': `Bearer ${jwtoken}`  }; 
//         const request = await axios.post(`https://localhost:8000/api/dashboard`, '', { headers })
        
//         const response = await request.data;
        
//         return response;
//     }

// )


export const getToken = createAsyncThunk(
    'auth/getToken',
    
    async(user) => {
        const request = await axios.post(`http://localhost:8000/api/auth/login`, user)
        
        const response = await request.data;
    
        // On fait l'enregistrement dans le localstorage
        localStorage.setItem('token', JSON.stringify(response))
        
        return response;
    }

)


const initialState = {
    loading: false,
    auth: JSON.parse(localStorage.getItem('token')),
    error: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,

    extraReducers:(builder) => {
        builder
        .addCase(getToken.pending,(state) => {
            state.loading = true;
            state.auth = null;
            state.error = null;
        })
        .addCase(getToken.fulfilled,(state,action) => {
            state.loading = false;
            state.auth = action.payload;
            state.error = null;
        })
        .addCase(getToken.rejected,(state,action) => {
            state.loading = false;
            state.auth = null;
            if (action.error.message == 'Request failed with status code 401') {
                state.error = 'Access Denied! Invalid Credentials';
            } else {
                state.error = action.error.message;
            }
        })
    }

})
