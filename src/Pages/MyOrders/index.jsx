import Layout from "../../Components/Layout"
import OrderCards from "../../Components/OrderCards"
import { ShoppingContext } from "../../Context"
import React from "react"
import { Link } from "react-router-dom"

function MyOrders() {
  const {orders, setOrders} = React.useContext(ShoppingContext)

    return (
        <Layout>
          <div className="mb-4">
            <h1 className="font-medium text-xl">My Orders</h1>
          </div>
          {orders.map((order, index)=>(
          <Link key={index} to={`/my-orders/${index}`}>
            <OrderCards
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            date={order.date}/>
          </Link>
          )
          )}
        </Layout>
    )
  }
  
  export default MyOrders