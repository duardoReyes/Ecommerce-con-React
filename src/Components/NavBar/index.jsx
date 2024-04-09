import React from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom"
import { ShoppingContext } from "../../Context"

const NavBar=()=> {
    const {isCheckOutMenuOnOff, openCloseCheckOutMenu, setSearchByCategory}= React.useContext(ShoppingContext)
    const activeStyle = 'underline underline-offset-4'
    const {itemsInCart}=React.useContext(ShoppingContext)
    return (

        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-semibold top-0">
            {/*Estructura del lado izquierdo*/}
            <ul className="flex items-center gap-3">
                <li className="font-extrabold text-lg">
                <NavLink 
                onClick={()=>setSearchByCategory(null)}
                to="/">PikachuStore</NavLink>
                </li>
                <li>
                <NavLink 
                onClick={()=>setSearchByCategory(null)}
                to="/" className={({ isActive }) =>isActive ? activeStyle : ""}>All</NavLink>
                </li>
                <li>
                <NavLink 
                onClick={()=>setSearchByCategory('Clothes')}
                to="/clothing" className={({ isActive }) =>isActive ? activeStyle : ""}>Clothing</NavLink>
                </li>
                <li>
                <NavLink 
                onClick={()=>setSearchByCategory('Electronics')}
                to="/electronics" className={({ isActive }) =>isActive ? activeStyle : ""}>Electronics</NavLink>
                </li>
                <li>
                <NavLink 
                onClick={()=>setSearchByCategory('potato Edito')}
                to="/forniture" className={({ isActive }) =>isActive ? activeStyle : ""}>Forniture</NavLink>
                </li>
                <li>
                <NavLink 
                onClick={()=>setSearchByCategory('Miscellaneous')}
                to="/toys" className={({ isActive }) =>isActive ? activeStyle : ""}>Toys</NavLink>
                </li>
                <li>
                <NavLink
                onClick={()=>setSearchByCategory('Other')} 
                to="/other" className={({ isActive }) =>isActive ? activeStyle : ""}>Other</NavLink>
                </li>
            </ul>

            {/*Estructura del lado derecho*/}
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                eduardo@gmail.com
                </li>
                <li>
                <NavLink to="/my-orders" className={({ isActive }) =>isActive ? activeStyle : ""}>My Orders</NavLink>
                </li>
                <li>
                <NavLink to="/my-account" className={({ isActive }) =>isActive ? activeStyle : ""}>My Account</NavLink>
                </li>
                <li>
                <NavLink to="/sign-in" className={({ isActive }) =>isActive ? activeStyle : ""}>Sign In</NavLink>
                </li>
                <li className="flex">
                <ShoppingCartIcon 
                onClick={openCloseCheckOutMenu}
                className="h-6 w-6 text-black cursor-pointer"/>
                <div>{itemsInCart.length}</div>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar