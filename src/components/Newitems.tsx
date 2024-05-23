import { products } from '../Data/data.ts'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faChevronLeft, faChevronRight, faEye, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/CartSlice.ts';
import { useEffect } from 'react';

const NextArrow = (props: any) => (
  <div {...props} className="absolute top-1/2 -translate-y-1/2 right-2">
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const PrevArrow = (props: any) => (
  <div {...props} className="absolute top-1/2 -translate-y-1/2 left-2">
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

type Product = {
  id: number
  img: string 
  name: string
  price: string
}

export const Newitems = () => {
  const cartItems = useSelector(state => state.data)
  const State = useSelector(state => state)
  const dispatch = useDispatch()
  const qty = 1

  // console.log(products, cartItems)

  const handleCart = (product: Product) => {
    const totalAmount = qty * product.price
    const productItems = {...product, totalAmount, quantity: qty}
    dispatch(addToCart(productItems))
  }

  useEffect(() => {
    console.log(State)
  }, [handleCart])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='mt-4'>
        <Slider {...settings}>
            {
              products.map((product) => {
                return(
                  <div key={product.id}>
                    <div className='relative cursor-pointer md:hover: group'>
                      <div className=''>
                        <img 
                          src={product.img}
                          alt={product.name}
                          className='mx-auto md:hover:border md:hover:shadow-lg ease-in-out duration-300'
                        />
                        <div className='flex flex-col gap-1 justify-center items-center'>
                          <h1>{product.name}</h1>
                          <p>{product.price}</p>
                        </div>
                      </div>
                      <div className='absolute top-2 right-2 flex flex-col bg-white gap-2 md:opacity-0 md:group-hover:opacity-100 ease-in-out duration-300 transition-all'>
                        <FontAwesomeIcon 
                          icon={faShoppingCart}
                          className='cursor-pointer md:hover:bg-red-800 md:hover:text-white p-2 ease-in-out duration-300'
                          onClick={() => handleCart(product)}
                        />
                        <FontAwesomeIcon 
                          icon={faHeart}
                          className='cursor-pointer md:hover:bg-red-800 md:hover:text-white p-2 ease-in-out duration-300'
                        />
                        <FontAwesomeIcon 
                          icon={faBalanceScale}
                          className='cursor-pointer md:hover:bg-red-800 md:hover:text-white p-2 ease-in-out duration-300'
                        />
                        <FontAwesomeIcon 
                          icon={faEye}
                          className='cursor-pointer md:hover:bg-red-800 md:hover:text-white p-2 ease-in-out duration-300'
                        />
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </Slider>
    </div>
  )
}
