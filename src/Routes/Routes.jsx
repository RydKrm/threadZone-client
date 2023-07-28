import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import ProductContainer from "../Pages/Product/ProductContainer";
import ShoppingCart from "../Pages/Home/ShoppingCart/ShoppingCart"
import ProductDetails from "../Pages/Product/ProductDetails/ProductDetails";

  export const router =createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<LogIn></LogIn>
        },
        {
            path:'registration',
            element:<Registration></Registration>
        },
        {
            path:'/product',
            element:<ProductContainer/>
        },
        {
            path:'shopCart',
            element:<ShoppingCart/>
        },
        {
          path:'product/productDetails/:id',
          element:<ProductDetails />
        }
       
      ]  
    }
  ])