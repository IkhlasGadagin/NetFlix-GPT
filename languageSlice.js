import { createSlice } from "@reduxjs/toolkit";

const languageSlice= createSlice({
    name:"lang",
    initialState:{
        defaultValue:"eng",
        
    },
    reducers:{
        addLanguage:(state,action)=>{
            state.defaultValue=action.payload
        }
    }
})
export default languageSlice.reducer;
export const {addLanguage}=languageSlice.actions;