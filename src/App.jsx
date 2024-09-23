import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout/Layout'
import RecentProducts from './components/RecentProducts/RecentProducts'
import Home from './components/Home/Home'
import Brands from './components/Brands/Brands'
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import CounterContextProvider from './Context/CounterContext' 
import Cart from './components/Cart/Cart'
import ProductDetails from './components/ProductDetails/ProductDetails'




function App() {
  const myRouter = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "home", element: <Home /> },
        { path: "products", element: <RecentProducts /> },
        { path: "brands", element: <Brands /> },
        { path: "register", element: <Register /> },
        { path: "footer", element: <Footer /> },
        { path: "login", element: <Login /> },
        { path: "cart", element: <Cart/> },
        { path: "ProductDetails/:id", element: <ProductDetails/>},
        




      ]
    }



  ])
  return (
    <>

      {/* <UserTokenContextProvider>   */}

    <CounterContextProvider>  
    <RouterProvider router={myRouter} />
      </CounterContextProvider>  
      
     {/* </UserTokenContextProvider>   */}
   

    </>
  )
}

export default App
