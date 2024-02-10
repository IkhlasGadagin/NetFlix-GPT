import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  
  if(!posterPath)return null;
  return (
    <div className='w-32 md:w-48 p-2 hover:border border-gray-600  cursor-pointer' >
        <img alt='movie_card' className='rounded-2xl' src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard