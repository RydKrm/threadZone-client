import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import ShoppingCart from "../Pages/Home/ShoppingCart/ShoppingCart";
import Address from "../Pages/Dashboard/Address/Address";
import ProductContainer from "../Pages/Product/ProductContainer";
import ShopContainer from "../Pages/Shop/ShopContainer";
import ShopProductContainer from "../Pages/Shop/ShopProductContainer";
import TemplateDetails from "../Shared/Template/TemplateDetails/TemplateDetails";
import CustomerReturn from "../Pages/Dashboard/CustomerDashboard/CustomerReturn/CustomerReturn";
import CustomerOrder from "../Pages/Dashboard/CustomerDashboard/CustomerOrder/CustomerOrder";
import CustomerPreviousOrder from "../Pages/Dashboard/CustomerDashboard/CustomerPreviousOrder/CustomerPreviousOrder";
import CustomerReviewList from "../Pages/Dashboard/CustomerDashboard/CustomerReviewList/CustomerReviewList";
import DashboardContainer from "../Layout/DashboardContainer";
import CustomerAddReview from "../Pages/Dashboard/CustomerDashboard/CustomerAddReview/CustomerAddReview"
import CustomerAddReturn from "../Pages/Dashboard/CustomerDashboard/CustomerAddReturn/CustomerAddReturn";
import AddShop from "../Pages/Dashboard/CustomerDashboard/AddShop/AddShop";
import Addproduct from "../Pages/Dashboard/SellerDashboard/AddProduct/Addproduct";

import ManageAllUsers from "../Pages/Dashboard/ManageAllUsers/ManageAllUsers";
import ShopRequest from "../Pages/Dashboard/AdminDashboard/ShopRequest/ShopRequest";


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
        path: 'shopList',
        element: <ShopContainer />
      },
      {
        path: 'shopSingle/:id',
        element: <ShopProductContainer />
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
        element: <TemplateDetails />
      },
      {
        path: 'shopList',
        element: <ShopContainer />
      },
      {
        path: 'shopSingle/:id',
        element: <ShopProductContainer />
      },
      {
        path: 'dashboard',
        element: <DashboardContainer />,
        children: [
          {
            path: 'address',
            element: <Address></Address>
          },
          {
            path: 'returnList',
            element: <CustomerReturn />
          },
          {
            path: 'orderList',
            element: <CustomerOrder />
          },
          {
            path: 'previousOrderList',
            element: <CustomerPreviousOrder />
          },
          {
            path: 'reviewList',
            element: <CustomerReviewList />
          },
          {
            path: 'addReview/:_id',
            element: <CustomerAddReview />
          }, {
            path: 'addReturn/:_id',
            element: <CustomerAddReturn />
          }, {
            path: 'addShop',
            element: <AddShop />
          }, {
            path: 'addProduct',
            element: <Addproduct />
          },
          {
            path: 'manageUsers',
            element: <ManageAllUsers />
          },
          {
            path: 'shopRequest',
            element: <ShopRequest />
          },
        ]
      }


    ]
  }
])