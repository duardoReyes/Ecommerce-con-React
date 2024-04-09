import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import './styles.css'
import { ShoppingContext } from '../../Context'
import React from 'react'
import {totalPrice} from '../../utils'
import CheckOutCards from '../CheckOutCards'

const CheckoutMenu =() =>{
    
 const {itemsInCart, isCheckOutMenuOnOff, openCloseCheckOutMenu, detailToShow, setItemsInCart, orders, setOrders, setSearchByTitle} = React.useContext(ShoppingContext)


 const eraseItem = (id)=>{
    setItemsInCart (itemsInCart.filter(item=>item.id !== id))} 

const handleCheckOut=()=>{
    const date =new Date();

    const orderToAdd={
        date: date.toLocaleDateString(),
        products: itemsInCart,
        totalProducts: itemsInCart.length,
        totalPrice: totalPrice(itemsInCart) 
    }
    setOrders([...orders, orderToAdd])
    setItemsInCart([])
    setSearchByTitle(null)
}

 
 return (
    <aside className={`${isCheckOutMenuOnOff? 'flex' : 'hidden'} CheckOutMenu overflow-y-scroll flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 
            className='font-medium text-xl'>My order:
            </h2>
            <div>
                <XMarkIcon 
                onClick={openCloseCheckOutMenu}
                className="h-6 w-6 text-black cursor-pointer" />
            </div>
        </div>
        <div className='px-6 flex-1'>
        {itemsInCart.map((product)=>(
            <CheckOutCards
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.images}
            price={product.price}
            eraseItem = {eraseItem}
            />
        ))}
        </div>
        <div className='px-6 mb-6'>
            <p className='flex justify-between items-center mb-2'>
                <span className='font-light'>Total</span>
                <span className='font-medium text-2xl'>${totalPrice(itemsInCart)}</span>
            </p>
            <Link to="/my-orders/last">
                <button className='bg-black py-3 text-white w-full' onClick={()=>handleCheckOut()} >Checkout</button>
            </Link>
        </div>
    </aside>
 )
}

export default CheckoutMenu