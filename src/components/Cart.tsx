import { faMinus, faPlus, faShoppingCart, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteFromCart, increaseFromCart, reduceFromCart} from '../Redux/CartSlice'

type Items={
  id: number,
  img: string,
  name: string,
  price: string,
  quantity: number,
  totalAmount: number,
}

export const Cart = () => {
  const cartItems = useSelector((state :any) => state.data)
  console.log(cartItems.length)
  const dispatch = useDispatch()
  const [ showCart, setShowCart ] = useState(false)

  const handleCart = () => {
    setShowCart(!showCart)
  }

  const reduceCart = (items: Items) => {
    console.log(items)
    dispatch(reduceFromCart(items))
  }

  const increaseCart = (items: Items) => {
    dispatch(increaseFromCart(items))
  }

  const handleDelete = (items: Items) => {
    console.log('clicked')
    dispatch(deleteFromCart(items))
  }
  return (
    <div>
      <div className='relative'>
        <FontAwesomeIcon 
          icon={faShoppingCart} 
          className='hover:text-red-800 cursor-pointer ease-out duration-300 text-[27px]'
          onClick={handleCart}
        />
        <p className='absolute -top-4 -right-2 bg-red-800 text-slate-100 rounded-full w-[18px] text-center font-mono font-extrabold'>{cartItems.length}</p>
      </div>
      <div className={`${showCart ? 'visible' : 'hidden'} absolute overflow-y-scroll bg-white top-[70px] h-[550px] px-3 right-0 w-[50%] md:w-[30%] `}>
        <div className='flex items-center justify-between py-3 border-b-2'>
          <h1>Shopping Cart</h1>
          <p>
            <FontAwesomeIcon 
              icon={faTimes}
              onClick={handleCart}
            />
          </p>
        </div>
        <div className='my-3 flex flex-col gap-6'>
          {
            cartItems.map((items: Items) => {
              return (
                <div className='flex flex-col gap-4 md:gap-5 px-6' key={items.id}>
                  <div className='flex gap-1 border-red-500 w-[25%]'>
                    <img src={items.img}/>
                    <div className='mx-5'>
                      <h1>{items.name}</h1>
                      <p>${items.price}</p>
                    </div>
                    <button 
                      className='text-[#2F2F2F]'
                      onClick={() => handleDelete(items)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                  <div className='flex flex-col justify-center gap-3 w-[50%]'>
                    <div className='flex gap-5 items-center'>
                      <button className='bg-[#2F2F2F] text-zinc-50 cursor-pointer' disabled={items.quantity === 1}>
                        <FontAwesomeIcon 
                          icon={faMinus} 
                          onClick={() => reduceCart(items)}
                          className='px-5'
                        />
                      </button>
                      <p>{items.quantity}</p>
                      <button className='bg-[#2F2F2F] text-zinc-50 cursor-pointer'>
                        <FontAwesomeIcon 
                          icon={faPlus} 
                          onClick={() => increaseCart(items)}
                          className='px-5'
                        />
                      </button>
                    </div>
                    <h1 className='text-center bg-[#2F2F2F] text-zinc-50'>${items.totalAmount}</h1>
                  </div>
                </div>
              )
            })
          }
          <button className='bg-[#2F2F2F] text-zinc-50 px-3 py-3'>Your Total Order</button>
        </div>
      </div>  
    </div>
  )
}
