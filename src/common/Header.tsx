import { faBars, faHeart, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Header = () => {
    const [ openNav, setOpenNav ] = useState(false)
    const cartItems = useSelector((state :any) => state.totalItems)

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
                <Link to='/' className='cursor-pointer hover:text-red-600'>Home</Link>
                <Link to='' className='cursor-pointer hover:text-red-600'>Features</Link>
                <Link to='' className='cursor-pointer hover:text-red-600'>Shop</Link>
                <Link to='' className='cursor-pointer hover:text-red-600'>Pages</Link>
                <Link to='' className='cursor-pointer hover:text-red-600'>Blog</Link>
                <Link to='' className='cursor-pointer hover:text-red-600'>Contact</Link>
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
                <Link to='/' className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Home</Link>
                <Link to='' className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Features</Link>
                <Link to='' className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Shop</Link>
                <Link to='' className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Pages</Link>
                <Link to='' className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Blog</Link>
                <Link to='' className='cursor-pointer hover:bg-red-800 w-full text-center py-2 transition-all ease-in-out duration-300 font-semibold hover:text-black'>Contact</Link>
            </ul>
            <div className='flex gap-2'>
                <FontAwesomeIcon 
                    icon={faHeart} 
                    className='hover:text-red-800 cursor-pointer ease-out duration-300 text-[27px]'
                />
                <Link to='/cart' className='relative'>
                    <FontAwesomeIcon 
                    icon={faShoppingCart} 
                    className='hover:text-red-800 cursor-pointer ease-out duration-300 text-[27px]'
                    />
                    <p className='absolute -top-4 -right-2 bg-red-800 text-slate-100 rounded-full w-[18px] text-center font-mono font-extrabold'>{cartItems}</p>
                </Link>
            </div>
            
        </div>
    </div>
  )
}
