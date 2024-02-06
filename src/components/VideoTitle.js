import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='font-bold text-6xl'>{title}</h1>
    <p className='py-6 w-1/4 '>{overview}</p>
    <div>
    <button className='hover:opacity-100 p-4 m-3 bg-orange-500 px-10 text-black font-bold opacity-70 rounded-md'>▷ Play</button>
        <button className='hover:opacity-100 p-4 bg-blue-600 px-10 text-black font-bold opacity-70 rounded-md'>ⓘ More Info</button> 
    </div>
    </div>
  )
}

export default VideoTitle