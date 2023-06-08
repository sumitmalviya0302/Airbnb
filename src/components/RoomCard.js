


import React from 'react'
import ImageCarousel from './ImageCarousel'

const RoomCard = ({address,name,bedrooms,price,images }) => {


  return (
    <>
        <div className='w-72 h-90 justify-center mx-4 my-4'>
                    <ImageCarousel images={images}/>
            
            {/**
        
        
        <img src='https://a0.muscache.com/im/pictures/7ed4df69-0c79-40da-91fc-890788a5736b.jpg?im_w=720' className='w-full h-64 mx-auto ' />
        */}  
        <div className='mt-3'>
        <p className='font-bold text-sm w-[70%] mt-2'>{name}</p>
        <p className='text-sm mt-2 text-gray-500'>{address}</p>
        <p className='text-sm mt-2 text-gray-500'> bedrooms: {bedrooms}</p>
        <p className='text-sm mt-2 underline'><span className='font-bold'>${price.rate} </span>before taxes</p>
        </div>
            
        </div>
    </>
  )
}

export default RoomCard