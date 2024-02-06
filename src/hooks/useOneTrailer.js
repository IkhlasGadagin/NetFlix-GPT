import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useOneTrailer = (movieID) => {
    const dispatch=useDispatch();

   // const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    const allMoviesRealateToThisMovieId=async()=>{
        const movieAllData=await fetch("https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US", API_OPTIONS);
        
        const json= await movieAllData.json();
       // console.log(json.results);
        const filterData=json.results.filter((noor)=>noor.type==="Trailer");
       
        //what if the Array does not have a  trailer
         
        const trailer=filterData.length?filterData[0]:json.results[0];
       console.log(trailer);
       dispatch(addTrailerVideo(trailer));
    
    
      }
    
      useEffect(()=>{
        allMoviesRealateToThisMovieId();
      },[])
}

export default useOneTrailer