import { faBars, faHeart, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useState } from 'react'
import { Cart } from '../components/Cart'

export const Header = () => {
    const [ openNav, setOpenNav ] = useState(false)

    const handleNav = () => {
        setOpenNav(!openNav)
    }
  return (
    <div className='fixed h-[70px] w-full top-0 z-50 shadow-md bg-slate-50/80 backdrop-blur-sm'>
        <div className='flex items-center justify-between px-3 py-3'>
            <div className='flex items-center cursor-pointer text-[27px]'>
                <FontAwesomeIcon 
                    onClick={handleNav}
                    icon={faBars} 
                    className='sm:hidden'
                />
                <h1 className='font-semibold font-[italic]'>
                    <span>LAZY</span>
                    <span className='text-red-500'>D</span>
                    &nbsp;
                    <span className='text-red-500'>STORE</span>
                </h1>
            </div>
            <ul className='hidden font-semibold sm:flex items-center gap-5'>
                <li className='cursor-pointer hover:text-red-600'>Home</li>
                <li className='cursor-pointer hover:text-red-600'>Features</li>
                <li className='cursor-pointer hover:text-red-600'>Shop</li>
                <li className='cursor-pointer hover:text-red-600'>Pages</li>
                <li className='cursor-pointer hover:text-red-600'>Blog</li>
                <li className='cursor-pointer hover:text-red-600'>Contact</li>
            </ul>
            {/* <div 
                className={`${openNav ? 'fixed inset-0' : 'hidden'} duration-300  bg-slate-950 bg-opacity-10 sm:hidden`}
                style={{zIndex: '9999'}}
                onClick={handleNav}
            ></div> */}
            <ul className={`${openNav ? 'transform translate-x-0' : 'transform -translate-x-full'} fixed h-screen left-0 top-[60px] w-full flex flex-col gap-3 items-center transition-transform duration-500 bg-white p-9 -z-50 sm:hidden`}
            style={{ zIndex: '11111'}}
            >
                <FontAwesomeIcon 
                    className='absolute top-0 right-0 cursor-pointer duration-300 font-semibold hover:text-black transition-all ease-in-out text-[20px]'
                    icon={faTimes} 
                    onClick={handleNav}
                />
                <li className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Home</li>
                <li className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Features</li>
                <li className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Shop</li>
                <li className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Pages</li>
                <li className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Blog</li>
                <li className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Contact</li>
            </ul>
            <div className='flex gap-2'>
                <FontAwesomeIcon 
                    icon={faHeart} 
                    className='hover:text-red-800 cursor-pointer ease-out duration-300 text-[27px]'
                />
                <Cart />
            </div>
            
        </div>
    </div>
  )
}
