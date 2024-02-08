import React from 'react'
import GptLongSearchingBar from './GptLongSearchingBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { GPT_WALLPAPER } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
      <img alt='net-logo' src={GPT_WALLPAPER}/>

      </div>
        <GptLongSearchingBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch