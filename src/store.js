import {configureStore} from "@reduxjs/toolkit"
import {logger} from "redux-logger"
import { cineDataReducers } from "./slices/slice"


export const store = configureStore({
    reducer :{
       cinedata : cineDataReducers
    },
    middleware : (getDefaultMiddleWare) => ([...getDefaultMiddleWare(), logger] )
    // middleware : (getDefaultMiddleware)=> ([...getDefaultMiddleware() , logger])
})