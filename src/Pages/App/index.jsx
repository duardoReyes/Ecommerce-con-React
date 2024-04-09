import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar from '../../Components/NavBar'
import {ShoppingProvider} from '../../Context'
import CheckoutMenu from '../../Components/CheckOutMenu'
import './App.css'

const AppRoutes = ()=>{
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-orders/last', element: <MyOrder/>},
    {path: '/my-orders/:id', element: <MyOrder/>},
    {path: '/*', element: <NotFound/>},
    {path: '/sign-in', element: <SignIn/>},
    {path: '/clothing', element: <Home/>},
    {path: '/toys', element: <Home/>},
    {path: '/forniture', element: <Home/>},
    {path: '/electronics', element: <Home/>},
    {path: '/other', element: <Home/>},
    {path: '/Ecommerce-con-React/', element: <Home/>}
  ])
  return routes
}

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <div><AppRoutes/></div>
        <NavBar/>
        <CheckoutMenu/>
      </BrowserRouter>
    </ShoppingProvider>
    
  )
}

export default App
