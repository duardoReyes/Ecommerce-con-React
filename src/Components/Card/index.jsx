import { ShoppingContext } from "../../Context"
import React from "react"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card= (data)=>{
    const{count, setCount, openCloseDetail, detailToShow, setDetailToShow, itemsInCart, setItemsInCart} =React.useContext(ShoppingContext)
    
    const showProduct = (data)=>{
        openCloseDetail();
        setDetailToShow(data);
       
    }

    const addCartLogic = (data)=>{
        const newData = {...data, howmany:1}
        setItemsInCart([...itemsInCart, newData])
    }

    const plusCheckLogic = (idProducto)=>{
        const alreadyClicked = itemsInCart.filter((item)=>item.id === idProducto)
        if(alreadyClicked.length >0){ 

            return (
                    <div 
                    
                    className="absolute top-0 right-0 flex justify-center items-center bg-green-300 w-6 h-6 rounded-full m-2 p-1">
                        <CheckIcon className=" text-white"></CheckIcon>
                       
                    </div>
            )}
        else{
            return(
                    <div 
                    onClick={()=>addCartLogic(data.data)}
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"><PlusIcon/>
                    </div>
        )}

    }

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg  bg-black/10">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute  bg-white/60 rounded-lg bottom-0 left-0 text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
                <img  onClick={()=>showProduct(data.data)} className="w-full h-full object-cover rounded-t-lg" src={data.data.images[0]} alt=""></img>
                {plusCheckLogic(data.data.id)}
            </figure>
            <p className="flex justify-between pl-2 pr-2">
                <span className="text-sm font-light mt-1 ">{data.data.title}</span>
                <span className="text-lg font-medium ">{"$"+data.data.price}</span>
            </p>
        </div>
    )
}
export default Card