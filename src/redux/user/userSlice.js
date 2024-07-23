import { createSlice } from "@reduxjs/toolkit";
import axios from '../../api/axios';
import { jwtDecode } from "jwt-decode";




const initialState = {
    loading: false,
    user: null,
    error: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        login: (state, action) => {
            console.log("state", state)
            // {type: "ADD_TASK", payload: "Aller faire les courses"}
            axios.post(`login`, JSON.stringify(action.payload), {
                headers: {
                    'Content-type': 'application/json',
                },
                credentials: true
            })
                .then(res => {
                    if (res.data.token) {


                        console.log("state", res.data.token)
                        // return navigate("/product")
                        const decoded = jwtDecode(res.data.token);
console.log("state", state)

return
                        // state.user = decoded.username
                        // On enregistre les informations dans le localStorage
                        localStorage.setItem('auth', JSON.stringify(res.data.token))

                        // state.error = null
                        // state.loading = false

                        window.location.href = '/product'
                        // const headers = { 'Authorization': `Bearer ${res.data.token}` }; 
                        //     console.log("headers", headers)
                        // axios.post('https://localhost:8000/api/user', {headers})
                        //     .then(res => {

                        //     state.user = res.data.user
                        //     console.log(res.data)

                        // }).catch(error => {
                        //     console.log("user", error);
                        // })
                    }
                    
                })
                .catch(error => {
                    console.log("eeeeeeeeeeeeeee", error);
                    // state.error = null
                    // state.loading = false
                })
            
        },
        toggleTask: (state, action) => {
            // { tyoe: "TOGGLE_TASK", payload: 20 }
            const task = state.find((t) => t.id === action.payload)
            task.done = !task.done
        },
        deleteTask: (state, action) => {
            // { type: "DELETE_TASK", payload: 20 }
            state = state.filter((t) => t.id !== action.payload)
            return state;
        },
    }

})