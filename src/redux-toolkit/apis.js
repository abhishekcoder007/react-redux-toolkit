import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const handlegetData=createAsyncThunk("user/get",async()=>{
const data= await fetch("url")
return data.json();
})




export const handleApiSlice=createSlice({
    name:"auth",
    initialState:{
        data:[]
    },
    reducers:{
         addData:(state,action)=>{
            return state+action.payload
         }
    },
    extraReducers:(builder)=>{
        builder.addCase(handlegetData.pending,()=>{

        })
    }
})

export default handleApiSlice.reducer