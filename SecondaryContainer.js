import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((noor)=>noor.movies);
  const upComing=useSelector((noor)=>noor.movies);
  const popularMovies=useSelector((noor)=>noor.movies);

  //20 items the redux fetched
 return(
   movies.nowPlayingMovies && (
   <div className='bg-black '>
    <div className='mt-0 md:-mt-56 relative z-20'>
      
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Popular Movies"} movies={popularMovies.popularMovies}/>
    <MovieList title={"Trending"} movies={upComing.upCommingMovies}/>
    <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies}/>
    </div>
    
    </div>)
  )
}

export default SecondaryContainer