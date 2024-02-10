import { configureStore } from "@reduxjs/toolkit";
import userStore from "./userSlice";
import movieReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import langReducer from "./languageSlice"

const appStore=configureStore({
    reducer:{
    user: userStore,
    movies:movieReducer,
    gpt:gptReducer,
    language:langReducer
   
    }
})
export default appStore;