import React, { useRef } from 'react'
import { products } from '../Data/data'
import Slider from 'react-slick'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Popular = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className='bg-gray-400 grid grid-cols-2'>
      <div className='w-[50%]'>
        <Slider ref={sliderRef} {...settings}>
          {
            products.map((product, index) => {
              return(
                <div key={index} className='text-center'>
                  <img src={product.img} className='mx-auto w-full'/>
                  <div>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <button className='bg-[#2F2F2F] hover:bg-red-600'>Add To Cart</button>
                  </div>
                  
                </div>
              )
            })
          }
        </Slider>
      </div>
      <div className='w-[50%]'>
        <img src='../image/banners/id1-img1.jpg'/>
      </div>
    </div>
  )
}
