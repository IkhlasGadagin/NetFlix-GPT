import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {

  const {gptResult,moviePromise}=useSelector((noor)=>noor.gpt);
  if(!moviePromise) return null;

  return (
    <div >

      <div className='p-4 m-4 bg-transparent '>
      <div>
      {/* <MovieList title={gptResult[0]} movies={moviePromise[0]}/> */}
      {gptResult.map((noor,index)=><MovieList title={noor} movies={moviePromise[index]}/>)}
      </div>
      </div>
     
        
    </div>
  )
}

export default GptMovieSuggestion