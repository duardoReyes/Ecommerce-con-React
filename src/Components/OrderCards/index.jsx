import { ShoppingContext } from '../../Context'
import React from 'react'
import { CalendarDaysIcon } from "@heroicons/react/24/solid"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

const OrderCards =({totalPrice, totalProducts, date})=>{
    const {itemsInCart, setItemsInCart} = React.useContext(ShoppingContext)
    const [quantity, setQuantity] = React.useState(1)
    
    return (
        <div className="flex justify-between items-center mb-3 border border-black rounded-lg  p-4 w-80">
            <div className='flex flex-col font-light'>
                <span className='flex flex-row'>
                    <CalendarDaysIcon className="h-6 w-6 text-black cursor-pointer"/>
                    {date}</span>
                <span className="flex flex-row">
                    <ShoppingBagIcon className='h-6 w-6 text-black cursor-pointer'/>
                    {totalProducts}</span>
            </div>
            <p>
                <span className='font-medium text-2xl'>${totalPrice}</span>
            </p>
        </div>
    )
}
export default OrderCards