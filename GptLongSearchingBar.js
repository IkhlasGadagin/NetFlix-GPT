import React from 'react'
import { lang } from '../utils/languageAlter'
import { useSelector } from 'react-redux'

const GptLongSearchingBar = () => {

  const bhasha=useSelector((noor)=>
    noor.language.defaultValue
  )
  console.log(bhasha);
  return (
    
    <div className='pt-[12%] flex justify-center'>
        
    <form className='  bg-green-300  rounded-2xl shadow-2xl w-1/2 grid grid-cols-12'>
     <input type='text' className='text-2xl rounded-xl p-4 m-4 col-span-9 '
      placeholder={lang[bhasha].gptSearchPlaceHolder}/> 
     <button className='py-2 px- p-4 m-4 col-span-3 rounded-md bg-green-800 font-bold text-2xl hover:opacity-80 text-white'>
       {lang[bhasha].search}</button>
    </form>
    </div>
  )
}

export default GptLongSearchingBar