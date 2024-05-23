import {category} from '../Data/data.ts'

export const Arrival = () => {
  return (
    <div className='grid grid-cols-2 gap-3 mt-4 md:grid-cols-4 w-[90%] mx-auto'>
        {
            category.map((item, index) => {
                return(
                    <div 
                        key={index}
                        className='relative bg-gray-100 group md:hover:bg-white cursor-pointer md:hover:scale-105 md:hover:shadow-xl transition-all ease-in-out duration-300 p-12 md:hover:z-10 text-center uppercase'>
                        <img src={item.img} className='mx-auto'/>
                        <h1 className=' font-semibold text-[16px] bottom-0 w-full mx-auto group-md:hover:text-red-800'>{item.category}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}
