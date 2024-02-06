import { configureStore } from "@reduxjs/toolkit";
import userStore from "./userSlice";
import movieReducer from "./moviesSlice"

const appStore=configureStore({
    reducer:{
    user: userStore,
    movies:movieReducer,
   
    }
})
export default appStore;