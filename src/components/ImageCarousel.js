import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({images}) => {
  return (
    <Carousel
    showThumbs={false}
      showStatus={true}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={false}
      interval={1000} // Slide duration in milliseconds
      stopOnHover={false}
    >
      {
        images.map((image, index)=>(
            <div>
            <img src={image} key={index} alt='image' className='w-full h-64 mx-auto rounded-2xl flex ' />
            </div>
            
        ))
    }
      
    </Carousel>
  );
};

export default ImageCarousel;
