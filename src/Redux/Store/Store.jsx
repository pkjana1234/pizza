import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "../Slices/AuthSlice";
import { HomeApi } from "../Slices/HomeDataSlice";
import { AdminApiSlice } from "../Slices/AdminSlice";

export const Store = configureStore({
    reducer: {
        Auth: AuthSlice.reducer,
        Home: HomeApi.reducer,
        Admin: AdminApiSlice.reducer
    }
})