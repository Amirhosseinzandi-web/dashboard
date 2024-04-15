"use client"
import { createSlice } from "@reduxjs/toolkit";



type initialStateType = {
    flag: boolean
}

const initialState: initialStateType = {
    flag: false
}


const SliceHandler = createSlice({
    name: "SliceHandler",
    initialState,
    reducers: {
        DarkmodeHandler: (state) => {
            state.flag = !state.flag
        }
    }
})


export const { DarkmodeHandler } = SliceHandler.actions
export default SliceHandler.reducer