


import React from 'react'

const Shimmer = () => {
  return (
    <div className='mx-4 mt-4 flex justify-between flex-wrap'>
    {Array(20).fill('').map((index)=>(
        <div className='w-72 h-90 justify-center mx-4 my-4' key={index}>
        <div className='w-full h-64 mx-auto rounded-2xl flex bg-gray-300'></div>
        <div className='font-bold text-sm w-[70%] mt-2 bg-gray-300 h-4 rounded-xl'></div>
        <div className='text-sm mt-2 text-gray-500 w-1/3 bg-gray-300 h-4 rounded-xl'></div>
        <div className='text-sm mt-2 text-gray-500 w-1/3 bg-gray-300 h-4 rounded-xl'></div>
    </div>
    ))}
    </div>
    
    
  )
}

export default Shimmer