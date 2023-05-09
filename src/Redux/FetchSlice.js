import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData=createAsyncThunk(
    'FetchData',
    async(PageName)=>{
        const response= await axios.get('https://dummyjson.com/products');
        return response.data
        
    }
)
export const FetchSlice=createSlice({
    name:'FetchData',
    initialState:{
        data:[],
        status:null,
        
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state,{payload})=>{
            state.data=payload;
            state.status='success'

        })
        builder.addCase(fetchData.pending,(state)=>{
            state.status='loading'

        })
        builder.addCase(fetchData.rejected,(state)=>{
            state.status='failed'

        })
    },
})


export default FetchSlice.reducer