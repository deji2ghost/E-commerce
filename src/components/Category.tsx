import { useState } from 'react'
import { products } from '../Data/data'
import { FilterHeader } from './FilterHeader'

export const Category = () => {

    const [ productsFiltered, setProductsFiltered ] = useState(products) 

    const filteredProduct = (name: any) => {
        const filtered = products.filter(product => product.name === name)
        setProductsFiltered(filtered)
        if(name === 'ALL'){
            setProductsFiltered(products)
        }
        // return filtered
    }

    console.log(productsFiltered)

  return (
    <div className='mt-12 flex flex-col gap-16'>
        <FilterHeader filteredProduct={filteredProduct}/>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-3'>
            {
                productsFiltered.map(product => {
                    return(
                        <div key={product.id} className='rounded-lg cursor-pointer drop-shadow-md transition-transform ease-out duration-200 md:hover:z-10 hover:scale-105'>
                            <img src={product.img} className='rounded-t-lg'/>
                            <div className='bg-rose-200 rounded-b-lg p-3'>
                                <h1>{product.name}</h1>
                                <h1>${product.price}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
