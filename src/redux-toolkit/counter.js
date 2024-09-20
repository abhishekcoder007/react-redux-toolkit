import {createSlice} from "@reduxjs/toolkit";

 export const counterSlice=createSlice({
    name:'counter',
    initialState:1,
    reducers:{
      addCount:(state,action)=>{
           return  state=state+action.payload.count;
            
      },
      subtractCount:(state,action)=>{
       return state=state-action.payload.count
      }
    }
})

export  const {addCount,subtractCount} = counterSlice.actions;
export default counterSlice.reducer; 