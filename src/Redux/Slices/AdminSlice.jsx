import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../Axios/AxiosInstance";

export const adminApi = createAsyncThunk('api/adminData', async () => {
    const res = await AxiosInstance.get('admin')
    return res?.data

})
export const AdminApiSlice = createSlice({
    name: 'adminapi',
    initialState: {
        adminData: []
    },
    reducers: {},
    extraReducers: {
        [adminApi.pending]: (state) => {
            console.log("adminPending");
        },
        [adminApi.fulfilled]: (state, { payload }) => {
            state.adminData = payload
        },
        [adminApi.pending]: (state) => {
            console.log("adminError");
        }
    }
})