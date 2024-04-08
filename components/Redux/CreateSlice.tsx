"use client"
import { createSlice } from "@reduxjs/toolkit";



type initialStateType = {
    flag: boolean
}

const initialState:initialStateType = {
    flag: false
}


const SliceHandler = createSlice({
    name: "SliceHandler",
    initialState ,
    reducers:{
        // 
    }
})


export default SliceHandler.reducer