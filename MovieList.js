import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({title, movies}) => {
 
  return (
    <div className='px-6 '>
         <h1 className='text-lg md:text-3xl py-4 font-bold md:font-bold  md:text-black' >{title}</h1>
         
        <div className='flex overflow-x-scroll no-scrollbar '>
            <div  className='flex'>
            {
        movies?.map((noor)=>
        <MovieCard key={noor.id} posterPath={noor.poster_path}/>
        )
       }  
            </div>
        </div>
    </div>
  )
}

export default MovieList