import { useDispatch, useSelector } from "react-redux";
import { addUpCommingVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpCommingMovieApi=()=>{
    const dispatch=useDispatch();

    const upCommingMovie = useSelector(
      (store) => store.movies.addUpCommingVideo
    );
 

    const getUpCommingMoviesApi=async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
      const json= await data.json();
     console.log(json.results);
      dispatch(addUpCommingVideo(json.results))
      
    }
  
    useEffect(()=>{
     !upCommingMovie && getUpCommingMoviesApi();
    },[])
  
}
export default useUpCommingMovieApi;