import { XMarkIcon } from '@heroicons/react/24/solid'
import './detailstyle.css'
import { ShoppingContext } from '../../Context'
import React from 'react'

const ProductDetail =() =>{
    const {productDetailOnOff, openCloseDetail, detailToShow} = React.useContext(ShoppingContext)
 return (
    <aside className={`${productDetailOnOff? 'flex' : 'hidden'} productdetail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 
            className='font-medium text-xl'>Detail:
            </h2>
            <div>
                <XMarkIcon 
                onClick={openCloseDetail}
                className="h-6 w-6 text-black cursor-pointer" />
            </div>
        </div>

        <figure className='px-6'>
            <img        className='w-full h-full rounded-lg' 
                        src={detailToShow.images} 
                        alt={detailToShow.title}>
            </img>
        </figure>

        <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl mb-2'>${detailToShow.price}</span>
            <span className='font-medium text-md'>{detailToShow.title}</span>
            <span className='font-light text-sm'>{detailToShow.description}</span>
        </p>
    </aside>
 )
}

export default ProductDetail