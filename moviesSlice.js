import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
       trailerVideo:null,
       upCommingMovies:null,
       popularMovies:null
    },
    
    reducers:{
        nowPlayingMovie:(state,action)=>{
        state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addUpCommingVideo:(state,action)=>{
            state.upCommingMovies=action.payload;
        },
        addUpPopularMovie:(state,action)=>{
            state.popularMovies=action.payload;
        }
    }
})

export default movieSlice.reducer;
export const {nowPlayingMovie,addTrailerVideo,addUpCommingVideo,addUpPopularMovie}=movieSlice.actions;