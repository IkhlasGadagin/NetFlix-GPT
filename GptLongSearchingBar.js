import React, { useRef } from 'react'
import { lang } from '../utils/languageAlter'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAIHelper';
import { API_OPTIONS } from '../utils/constants';
import { insertGptPromiseMovie } from '../utils/gptSlice';

const GptLongSearchingBar = () => {
  const words=useRef(null);
  const dispatch=useDispatch();

  const movieDataFromTMDB=async(movie)=>{
  const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
  const json=await data.json();
  return json.results;
  }

  const handleAiGptSearch=async()=> {
    //write the logic to fetch the data
    console.log(words.current.value);

   const querryToTellGptToSearch="Act as a movie Recommendation system on suggest some movies for the querry:"+words.current.value+
   "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result:Shooter,Gadar,Dunki,Avatar,Don"
    
    const gptResults=await openai.chat.completions.create({
    messages: [{ role: 'user', content: querryToTellGptToSearch }],
    model: 'gpt-3.5-turbo',
  });
  if(!gptResults.choices){
    //To Do Write error handling proper page if the page SHow
  }
  console.log(gptResults.choices?.[0]?.message?.content);
  const gotAllMoviesInStringArray=gptResults.choices?.[0]?.message?.content.split(",");
  ///the above line represents the the Array of the strings seperated by the "," that
  // gives the Array of the String gotAllMoviesInStringArray=["movie1","movie2","m3","m4","movie5"]
  console.log(gotAllMoviesInStringArray);

  //now you can alter the movie the task is that for each element takke it and send as parameter
  //to the method that have TMBD api which gives the data of the each element present inside the
  // this can be only done by the MAP for each element call the function and the function is Aync thats 
  // y gives the 
  const allFiveMovieDataInJson=gotAllMoviesInStringArray.map((movie)=>movieDataFromTMDB(movie));
  // By the carefull observation the above variable has Promises in it because we are call api for the every
  //element and v knoe that js is wait for nothing async now Handle the Promises
  const allPromise=await Promise.all(allFiveMovieDataInJson);
  console.log(allPromise);
  //now time for the dispatch the action to {} in Redux existing Store "gpt"
  dispatch(insertGptPromiseMovie({gptResult:gotAllMoviesInStringArray,moviePromise:allPromise}))
  }


  const bhasha=useSelector((noor)=>
    noor.language.defaultValue
  )
  console.log(bhasha);
  return (
    
    <div className='pt-[50%] md:pt-[9%] flex justify-center'>
        
    <form onSubmit={(e)=>e.preventDefault()} className='  bg-green-300  rounded-2xl shadow-2xl w-[90%] md:w-1/2 grid grid-cols-12'>
     <input ref={words} type='text' className='text-2xl rounded-xl p-4 m-4 col-span-9 '
      placeholder={lang[bhasha].gptSearchPlaceHolder}/> 
     <button onClick={handleAiGptSearch} className='py-2 px- p-4   md:m-4 col-span-3 rounded-md bg-green-800 font-bold text-lg md:text-2xl hover:opacity-80 text-white'>
       {lang[bhasha].search}</button>
    </form>
    </div>
  )
}

export default GptLongSearchingBar