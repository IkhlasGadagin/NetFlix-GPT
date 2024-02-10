import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptResult:null,
        moviePromise:null
        
    },
    reducers:{
        toggleGptSearchAction:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        insertGptPromiseMovie:(state,action)=>{
            const {gptResult,moviePromise}=action.payload
            state.gptResult=gptResult
            state.moviePromise=moviePromise
        }
    }
})
export default gptSlice.reducer;
export const {toggleGptSearchAction,insertGptPromiseMovie}=gptSlice.actions;