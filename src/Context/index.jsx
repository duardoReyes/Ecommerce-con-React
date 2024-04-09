import React, { createContext, useState, useEffect } from "react"

const ShoppingContext = createContext()

function ShoppingProvider({children}){
    
    const [item, setItem] = useState(null);

    //para filtrar items en Home
    const [filteredItem, setFilteredItem] = React.useState([])
    const [searchByTitle, setSearchByTitle] = React.useState("")
    
    useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response)=>response.json())
    
      .then((data)=>setItem(data))
    }, [])

    const filteredItemByTitle = (item, searchByTitle)=>{
            return item?.filter((item) => item.title?.toLowerCase().includes(searchByTitle?.toLowerCase()))
    }

    const [searchByCategory, setSearchByCategory] = React.useState("")
    const filteredItemByCategory = (item, searchByCategory)=>{
        return item?.filter((item) => item.category.name?.toLowerCase().includes(searchByCategory?.toLowerCase()))
}

    const filterBy = (searchType, item, searchByTitle, searchByCategory) =>{
        if (searchType === 'BY_TITLE'){
            return filteredItemByTitle(item, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY'){
            return filteredItemByCategory(item, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemByCategory(item, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
        }
        if (!searchType){
            return item
        }
    }

    useEffect(()=>{
        if(searchByTitle&&searchByCategory){setFilteredItem(filterBy('BY_TITLE_AND_CATEGORY', item, searchByTitle, searchByCategory))}
        if(searchByTitle&&!searchByCategory){setFilteredItem(filterBy('BY_TITLE', item, searchByTitle, searchByCategory))}
        if(!searchByTitle&&searchByCategory){setFilteredItem(filterBy('BY_CATEGORY', item, searchByTitle, searchByCategory))}
        if(!searchByTitle&&!searchByCategory){setFilteredItem(filterBy(null, item, searchByTitle, searchByCategory))}

    },[item, searchByTitle,searchByCategory])
    console.log('filtered items: ', filteredItem)


    //
    


    const [count, setCount] = useState(0);
    const [orders, setOrders] = useState([])
    

    //Open and close the check out menu when clicked
    const [isCheckOutMenuOnOff, setIsCheckOutMenuOnOff] = useState(false)
    function openCloseCheckOutMenu() {
        return(
            setIsCheckOutMenuOnOff(!isCheckOutMenuOnOff)
            )
        }
        
    //Open and close the details section of a product when clicked
    const [productDetailOnOff, setProductDetailOnOff] = useState(false)
    function openCloseDetail() {
        return(
            setProductDetailOnOff(!productDetailOnOff)
        )
    }
    
    //Set what details are being shown for each card
    const [detailToShow, setDetailToShow] = useState({})

    //Add items to the shopping cart
    const [itemsInCart, setItemsInCart] = React.useState([])
    
    


    return(
    <ShoppingContext.Provider value={{
        searchByCategory,
        setSearchByCategory,
        filteredItem,
        searchByTitle,
        setSearchByTitle,
        count, 
        setCount,
        openCloseDetail,
        productDetailOnOff,
        detailToShow,
        setDetailToShow,
        itemsInCart,
        setItemsInCart,
        openCloseCheckOutMenu,
        isCheckOutMenuOnOff,
        item,
        setItem,
        orders,
        setOrders,
        }}>
    {children}
    </ShoppingContext.Provider>
    )
}


    
export {ShoppingContext, ShoppingProvider};
