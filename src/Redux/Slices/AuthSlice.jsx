import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../Axios/AxiosInstance";
import { toast } from "react-toastify";

export const RegisterApi = createAsyncThunk('Api/register', async (data) => {
    try {
        const res = await AxiosInstance.post('register', data)
        return res
    } catch (error) {
        console.log(error);
    }
})
export const AllauthApi = createAsyncThunk('Api/Auth', async () => {
    const res = await AxiosInstance.get('register')
    return res?.data
})
export const FetchCartApi = createAsyncThunk('Api/cart', async () => {
    const res = await AxiosInstance.get('cart')
    return res?.data
})
export const StoreCartApi = createAsyncThunk('Api/storeCart', async (data) => {
    const res = await AxiosInstance.post('cart',data)
    return res?.data
})
export const MatchCartApi = createAsyncThunk('Api/matchCart', async (id) => {
    const res = await AxiosInstance.get(`cart/${id}`)
    return res?.data
})
export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        loader: 'false',
        AuthData: [],
        regData: [],
        logData: [],
        cartData: [],
        successCart: [],
        matchUserCart : [],
        cardlength : null,
        authRedirect: null
    },
    reducers: {
        AuthState: (state, { payload }) => {
            state.authRedirect = null
        },
        Logout: (state, { payload }) => {
            localStorage.removeItem('name')
            localStorage.removeItem('id')
            state.authRedirect = '/login'
            toast.success("Logout Successful")
        },
        CartD: (state, { payload }) => {
            state.cardlength = false
        }
    },
    extraReducers: {
        //Register Api
        [RegisterApi.pending]: (state) => {
            state.loader = true
        },
        [RegisterApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.regData = payload
            state.authRedirect = '/login'
        },
        [RegisterApi.rejected]: (state) => {
            state.loader = true
            alert("error")
        },
        // Fetch All Api
        [AllauthApi.pending]: (state) => {
            state.loader = true
        },
        [AllauthApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.AuthData = payload
        },
        [AllauthApi.rejected]: (state) => {
            state.loader = true
            alert("error")
        },
        // Fetch AllCart Api
        [FetchCartApi.pending]: (state) => {
            state.loader = true
        },
        [FetchCartApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.cartData = payload
        },
        [FetchCartApi.rejected]: (state) => {
            state.loader = true
            // alert("error awd")
        },
        // Store cart Api
        [StoreCartApi.pending]: (state) => {
            state.loader = true
        },
        [StoreCartApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.successCart = payload
        },
        [StoreCartApi.rejected]: (state) => {
            state.loader = true
            alert("error")
        },
        // Store cart Api
        [MatchCartApi.pending]: (state) => {
            state.loader = true
        },
        [MatchCartApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.matchUserCart = payload
        },
        [MatchCartApi.rejected]: (state) => {
            state.loader = true
            // alert("error")
        }
    }
})
export const { AuthState, Logout, CartD } = AuthSlice.actions 