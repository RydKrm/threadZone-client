import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Product from "../Pages/Product/Product";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import ShoppingCart from "../Pages/Home/ShoppingCart/ShoppingCart";
import Dashboard from "../Layout/Dashboard";
import Address from "../Pages/Dashboard/Address/Address";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: 'shopCart',
        element: <ShoppingCart />

      },

    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'address',
        element: <Address></Address>
      },
    ]
  }
])