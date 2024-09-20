import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./redux-toolkit/counter";
import apiReducer from "./redux-toolkit/apis";


export const store = configureStore({
    reducer:{
     counter:counterReducer,
     api:apiReducer,
    }
})