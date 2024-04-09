/**
 * This function claculates the total price of orders, multipliying the quantity property times the price property of elements in Cart
 * @param {Array} products productsInCart:Array of objects
 * @returns {number} totalsum
 */

export const totalPrice =(products)=>{
    let totalsum = 0
    products.forEach(element => totalsum+= (element.price * element.howmany))
    
    return(totalsum)
}