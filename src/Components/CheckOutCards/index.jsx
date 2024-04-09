import { XMarkIcon } from '@heroicons/react/24/solid'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { MinusCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '../../Context'
import React from 'react'



const CheckOutCards =({image, title, price, id, eraseItem, howmany})=>{
    const {itemsInCart, setItemsInCart} = React.useContext(ShoppingContext)
    const [quantity, setQuantity] = React.useState(1)

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity)
        const updatedItems = itemsInCart.map(item => {
            if (item.id===id){
                return { ...item, howmany: newQuantity};
            }
            return item}
            );
        setItemsInCart(updatedItems);
    };
    let renderXMarkIcon 
    let renderPlusMinusIcons
    if(eraseItem){
        renderXMarkIcon=(
        <XMarkIcon onClick={()=>eraseItem(id)}className="h-6 w-6 text-black cursor-pointer" />
    )}
    if (eraseItem){
        renderPlusMinusIcons=(
            <div className='flex flex-row'>
                <MinusCircleIcon 
                onClick={()=>quantity>1?handleQuantityChange(quantity-1):undefined}
                className='h-5 w-5 mt-1 mr-1'/>
                <div>{quantity}</div>
                <PlusCircleIcon 
                onClick={()=>handleQuantityChange(quantity+1)}
                className='h-5 w-5 mt-1 ml-1'/>
            </div>
        )
    }else{
        renderPlusMinusIcons=(
        <div className='flex flex-row'>
                <div>x</div>
                <div>{howmany}</div>
            </div>)
    }
    
    
    return (
        <div className="flex justify-between items-center mb-3 ">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={image} alt={title}>
                    </img>
                </figure>
                <p className='text-sm font-light ' alt={title}>
                </p>
            </div>
            <div className='mr-2'> {/*This section handles quantity change */}
                <p className='text-xs'>{title}</p>
                <div className='flex flex-row'> {/*This section handles quantity change */}
                    {renderPlusMinusIcons}
                    
                    
                </div>
            </div>
            <div className='flex items-center gap-2'> {/*Esta es la parte de la X */}
                <p className='text-lg font-medium '>{price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}
export default CheckOutCards