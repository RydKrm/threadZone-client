import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Product from "../Pages/Product/Product";

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
            element:<Product/>
        },
       
      ]  
    }
  ])