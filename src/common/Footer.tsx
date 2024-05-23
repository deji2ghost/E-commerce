import { useState } from 'react'
import { footer } from '../Data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    const [ email, setEmail ] = useState('')
    console.log(footer)
  return (
    <div className='py-4 md:py-8 flex flex-col-reverse md:flex-row justify-between px-3 bg-gray-400'>
        <div className='flex justify-center gap-10 uppercase w-full'>
            {
                footer.map(item => {
                    return(
                        <div key={item.id}>
                            <h1 className='font-bold text-[24px]'>{item.header}</h1>
                            {
                                item.title.map((itemTitle, subIndex) => {
                                    return(
                                        <p key={subIndex} className='font-normal font-mono'>{itemTitle.subtitle}</p>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
        <div className='bg-gray-100 p-3 md:p-6 rounded-md shadow-lg flex flex-col gap-5'>
            <h1 className='font-bold text-[24px] uppercase'>Sign Up For NewsLetter</h1>
            <div>
                <p>Don't miss out on exciting promotions and latest shopping news</p>
                <div className='flex gap-2'>
                    <input 
                        type='text' 
                        placeholder='enter your email here...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='outline-none p-2 rounded-sm'
                    />
                    <button className='bg-[#2F2F2F] text-white uppercase p-2 rounded-sm'>Subscribe</button>  
                </div>
            </div>
            <div className='bg-white w-[55%] md:w-[50%] flex items-center justify-evenly'>
                <FontAwesomeIcon icon={faFacebook} className='md:hover:bg-red-600 md:hover:text-white text-[30px] ease-in-out duration-300 cursor-pointer p-3'/>
                <FontAwesomeIcon icon={faInstagram} className='md:hover:bg-red-600 md:hover:text-white text-[30px] ease-in-out duration-300 cursor-pointer p-3'/>
                <FontAwesomeIcon icon={faYoutube} className='md:hover:bg-red-600 md:hover:text-white text-[30px] ease-in-out duration-300 cursor-pointer p-3'/>
                <FontAwesomeIcon icon={faTwitter} className='md:hover:bg-red-600 md:hover:text-white text-[30px] ease-in-out duration-300 cursor-pointer p-3'/>
            </div>
        </div>
        
    </div>
  )
}
