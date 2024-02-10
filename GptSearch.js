import React from 'react'
import GptLongSearchingBar from './GptLongSearchingBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { GPT_WALLPAPER } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
     <div className='absolute -z-10'>
      <img className='fixed h-screen md:h-auto ' alt='net-logo' src={GPT_WALLPAPER}/>
  
      </div>
      <div className='' >
       
       <GptLongSearchingBar/>
       <GptMovieSuggestion/>
   </div>
    </>
   
  )
}

export default GptSearch