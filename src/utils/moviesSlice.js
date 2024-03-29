import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
       trailerVideo:null
    },
    
    reducers:{
        nowPlayingMovie:(state,action)=>{
        state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})

export default movieSlice.reducer;
export const {nowPlayingMovie,addTrailerVideo}=movieSlice.actions;