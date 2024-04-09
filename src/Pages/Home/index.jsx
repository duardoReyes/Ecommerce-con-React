import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { useContext } from "react"
import ProductDetail from "../../Components/ProductDetails"
import React from "react"
import { ShoppingContext } from "../../Context"

function Home() {

  const{item, setSearchByTitle, searchByTitle, filteredItem} =React.useContext(ShoppingContext)
  
  const whatToRender=()=>{
    if(filteredItem?.length>0){
      return(filteredItem?.map((item)=>(<Card data={item} key={item.id}/>)))
    }
   } 

  return (
    <Layout >
      <div className="mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      <input 
      onChange={(event)=>(setSearchByTitle(event.target.value))}
      className="rounded-lg border border-black w-80 p-4 mb-4"
      type="text" 
      placeholder="Search..."></input>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {whatToRender()}
      </div>
      <ProductDetail/>
    </Layout>

  )
}

export default Home
