import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import {deleteFromCart, increaseFromCart, reduceFromCart, totalItemsCart} from '../Redux/CartSlice'

type Items={
  id: number,
  img: string,
  name: string,
  price: string,
  quantity: number,
  totalAmount: number,
}

export const Cart = () => {
  const cartItems  = useSelector((state :any) => state.data)
  const stateItems  = useSelector((state :any) => state.totalItems)
 
  const dispatch = useDispatch()

  const reduceCart = (items: Items) => {
    console.log(items)
    dispatch(reduceFromCart(items))
    dispatch(totalItemsCart())
  }

  const increaseCart = (items: Items) => {
    console.log(cartItems)
    dispatch(increaseFromCart(items))
    dispatch(totalItemsCart())
  }

  const handleDelete = (items: Items) => {
    console.log('clicked')
    dispatch(deleteFromCart(items))
    dispatch(totalItemsCart())
  }
  return (
    <div>
      <div className= 'bg-white top-[70px] px-3 mt-[70px]'>
        <h1 className='text-center justify-between py-3 border-b-2 text-2xl font-bold'>Shopping Cart</h1>
        
        <div className='my-3 flex flex-col gap-6 md:justify-center md:items-center'>
          {
            stateItems === 0 ?
            <h1 className='text-xl font-bold'>Your Cart is Empty. Add To Your Cart</h1>
              :
            cartItems.map((items: Items) => {
              return (
                <div className='flex flex-col gap-4 md:gap-5 p-3 md:w-[30%]' key={items.id}>
                  <div className='flex flex-col justify-center items-center gap-1'>
                    <img src={items.img}/>
                    <div className='text-center'>
                      <h1>{items.name}</h1>
                      <p>${items.price}</p>
                    </div>
                  </div>
                  <div className='flex items-start justify-center gap-3 w-[60%] mx-auto md:w-[50%]'>
                    <button 
                      className='text-zinc-50 bg-[#2F2F2F] p-2 h-[60px] text-center'
                      onClick={() => handleDelete(items)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <div className='flex flex-col gap-3 items-center'>
                      <div className='flex gap-5 items-center'>
                        <button 
                          onClick={() => reduceCart(items)} 
                          className='bg-[#2F2F2F] text-zinc-50 cursor-pointer w-full' disabled={items.quantity === 1}>
                          <FontAwesomeIcon 
                            icon={faMinus} 
                            className='px-5'
                          />
                        </button>
                        <p>{items.quantity}</p>
                        <button 
                          onClick={() => increaseCart(items)} 
                          className='bg-[#2F2F2F] text-zinc-50 cursor-pointer w-full'>
                          <FontAwesomeIcon 
                            icon={faPlus} 
                            className='px-5'
                          />
                        </button>
                      </div>
                      <h1 className='text-center bg-[#2F2F2F] text-zinc-50 w-full'>${items.totalAmount}</h1>
                    </div>
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
