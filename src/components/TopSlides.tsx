import Slider from "react-slick";
import { sliders } from '../Data/data.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const TopSlides = () => {

    const sliderRef = useRef<any>(null);

    console.log(sliders)

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500
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
    <div className="relative mt-[70px] mx-auto w-full">
        <Slider ref={sliderRef} {...settings}>
            {
                sliders.map((image, index) => {
                    return(
                        <div key={index}>
                            <img 
                                className='w-full object-cover'
                                src={image.image}
                            />
                        </div>
                    )
                })
            }
        </Slider>
        <FontAwesomeIcon 
            className="absolute cursor-pointer top-1/2 -translate-y-1/2 left-2 p-4 bg-slate-700 text-white hover:text-[#2F2F2F] hover:bg-red-800" 
            icon={faChevronLeft} 
            onClick={next}
        />
        <FontAwesomeIcon 
            className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-2 p-4 bg-slate-700 text-white hover:text-[#2F2F2F] hover:bg-red-800" 
            icon={faChevronRight} 
            onClick={previous}
        />
    </div>
  )
}
