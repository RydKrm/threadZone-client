import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import ShoppingCart from "../Pages/Home/ShoppingCart/ShoppingCart";
import Dashboard from "../Layout/Dashboard";
import Address from "../Pages/Dashboard/Address/Address";
import ProductContainer from "../Pages/Product/ProductContainer";
import ProductDetails from "../Pages/Product/ProductDetails/ProductDetails";
import ShopContainer from "../Pages/Shop/ShopContainer";
import ShopProductContainer from "../Pages/Shop/ShopProductContainer";

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
        element: <ProductContainer />
      },
      {
        path: 'shopCart',
        element: <ShoppingCart />
      },
      {
        path: 'product/productDetails/:id',
        element: <ProductDetails />
      },
      {
        path: 'shopList',
        element: <ShopContainer />
      },
      {
        path: 'shopSingle/:id',
        element: <ShopProductContainer />
      }

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
