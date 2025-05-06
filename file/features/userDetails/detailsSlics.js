import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialValue={
    data:[],
    loading:false,
    error:null
}

export const fetchDetails =  createAsyncThunk(
    'details/fetchDetails',
    async()=>{
        const response = await axios.get("http://localhost:3000/users");
        return response.data;
    }
) 

const detailsSlice = createSlice({
    name:'details',
    initialState:initialValue,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchDetails.pending, (state)=>{
                state.loading = true;
            })
            .addCase(fetchDetails.fulfilled, (state,action)=>{
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDetails.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default detailsSlice.reducer;