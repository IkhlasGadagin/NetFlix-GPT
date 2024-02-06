import { useDispatch, useSelector } from "react-redux";
import { nowPlayingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();

    const nowPlayingMovies = useSelector(
      (store) => store.movies.nowPlayingMovies
    );
 

    const getMoviesApi=async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json= await data.json();
     console.log(json.results);
      dispatch(nowPlayingMovie(json.results))
      
    }
  
    useEffect(()=>{
      getMoviesApi();
    },[])
  
}
export default useNowPlayingMovies;