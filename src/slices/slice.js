import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const initData = {
    userDetails : {}
}

export const slice = createSlice({
    name : "CINEDATA",
    initialState : initData,
    reducers : {
       addUserDetails(state ,action){
           state.userDetails = action.payload;
       }
    }
})

export const cineDataReducers = slice.reducer;
export const {addUserDetails}= slice.actions;