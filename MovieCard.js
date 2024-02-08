import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 p-2 hover:w-52 cursor-pointer' >
        <img alt='movie_card' className='rounded-2xl' src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard