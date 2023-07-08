import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosHome from "../../Axios/AxiosHomeInstance";
import { toast } from "react-toastify";

export const BannerApi = createAsyncThunk('Api/banner', async () => {
    const res = await AxiosHome.get('banner')
    return res?.data
})
export const CustomerApi = createAsyncThunk('Api/customer', async () => {
    const res = await AxiosHome.get('customer')
    return res?.data
})
export const MenuApi = createAsyncThunk('Api/menu', async () => {
    const res = await AxiosHome.get('menu')
    return res?.data
})
export const SingleMenuApi = createAsyncThunk('Api/singlemenu', async (id) => {
    const res = await AxiosHome.get(`menu/${id}`)
    return res?.data
})
export const BlogApi = createAsyncThunk('Api/blog', async () => {
    const res = await AxiosHome.get('blog')
    return res?.data
})
export const HomeApi = createSlice({
    name: 'homedata',
    initialState: {
        loader: false,
        banner: [],
        customer: [],
        menu: [],
        singleMenu: [],
        blog: []
    },
    reducers: {

    },
    extraReducers: {
        //bannerApi
        [BannerApi.pending]: (state, { payload }) => {
            state.loader = true
        },
        [BannerApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.banner = payload
        }, [BannerApi.rejected]: (state, { payload }) => {
            state.loader = false
            toast.error("bannerApi failed")
        },
        //customerApi
        [CustomerApi.pending]: (state, { payload }) => {
            state.loader = true
        },
        [CustomerApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.customer = payload
        },
        [CustomerApi.rejected]: (state, { payload }) => {
            state.loader = false
            toast.error("CustomerApi failed")
        },
        //MenuApi api
        [MenuApi.pending]: (state, { payload }) => {
            state.loader = true
        },
        [MenuApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.menu = payload
        },
        [MenuApi.rejected]: (state, { payload }) => {
            state.loader = false
            toast.error("menuapi failed")
        },
        //SingleMenuApi api
        [SingleMenuApi.pending]: (state, { payload }) => {
            state.loader = true
        },
        [SingleMenuApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.singleMenu = payload
        },
        [SingleMenuApi.rejected]: (state, { payload }) => {
            state.loader = false
            toast.error("menuapi failed")
        },
        //Blogapi api
        [BlogApi.pending]: (state, { payload }) => {
            state.loader = true
        },
        [BlogApi.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.blog = payload
        },
        [BlogApi.rejected]: (state, { payload }) => {
            state.loader = false
            toast.error("Blogapi failed")
        }
    }
})
