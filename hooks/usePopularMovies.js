import { useDispatch, useSelector } from "react-redux";
import { addUpPopularMovie } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies=()=>{
    const dispatch=useDispatch();

    const popularMovie=useSelector((noor)=>noor.movies.popularMovie);

    const getPopularMoviesApi =async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json= await data.json();
     console.log(json.results);
      dispatch(addUpPopularMovie(json.results))
      
    }
  
    useEffect(()=>{
      !popularMovie && getPopularMoviesApi();
    },[])
  
}
export default usePopularMovies;