import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import SidebarCategory from './ProductSidebar/SidebarCategory';
import SidebarStar from "./ProductSidebar/SidebarStar"
import SidebarPrice from './ProductSidebar/SidebarPrice';
import SideBarSize from './ProductSidebar/SideBarSize';
import SidebarColor from './ProductSidebar/SidebarColor';
import ProductListTop from './ProductList/ProductListTop';
import ProductGridView from './ProductList/ProductGridView';
import { ProductContext} from '../../Contexts/ProductContext';
import ProductListView from './ProductList/ProductListView';

const Product = () => {       
   const [allProductData,setAllProductData] = useState([]); 
   const [view,setView] = useState('grid'); 
  const { state, dispatch } = useContext(ProductContext);
  const { products, sortBy, filterByRating,minPrice,maxPrice,size,color,category } = state; 

  // find total product by a number of star
  let starType = Array(6).fill(0);
  const allColor = [];
  const allCategory = [];
 for(var i=0;i<products.length;i++){
   //finding rating
    starType[products[i].rating]++;
    //collecting all color
    if(!allColor.includes(products[i].color)){
        allColor.push(products[i].color);
    }
    // collecting all category
    if(!allCategory.includes(products[i].category)){
        allCategory.push(products[i].category);
    }
 }

  useEffect(() => {
    
    let sortedAndFilteredProducts = [...products];
   // console.log("check for changes",sortBy);
    if (sortBy === 'HighToLow') {
      sortedAndFilteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'LowToHigh') {
      sortedAndFilteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'mostSelling') {
        //console.log("check  most Selling ")
        sortedAndFilteredProducts.sort((a, b) => b.totalSell - a.totalSell);
    } else if (sortBy === 'mostReview') {
        sortedAndFilteredProducts.sort((a, b) => b.totalReview - a.totalReview);
    }
   
    // Star filter
    if (filterByRating) {
        const ratingToFilter = parseInt(filterByRating);
      sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
        (product) => product.rating === ratingToFilter
      );
    }
   //price min to max filter
    if(minPrice && maxPrice ){
       sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
  (product) => product.price >= minPrice && product.price <= maxPrice
     );
    }

   // size filter 
    if(size ){
       sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
  (product) => product.size === size 
     );
    }

    // color filter
     if(color ){
       sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
    (product) => product.color === color 
     );
    }

    //category filter
     if(category ){
       sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
    (product) => product.category === category 
     );
    } 

   setAllProductData(sortedAndFilteredProducts);
   console.log("After -> ",sortedAndFilteredProducts);
  }, [products, sortBy, filterByRating,minPrice,maxPrice,size,color,category]);

    return ( 
 
        <div className="w-full mx-auto px-4 grid lg:grid-cols-4 gap-4 pt-4 items-start relative pb-4"> 
         {/* SideBar Start here  */}
            <div className="col-span-1 font-poppins pb-6 shadow-lg rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block px-5 py-5 ">
             <div className=" divide-y space-y-5 relative">
              
              <SidebarStar starType={starType}/> 
              <SidebarPrice /> 
              <SideBarSize />
              <SidebarColor allColor={allColor}/>
              <SidebarCategory allCategory={allCategory}/>
             </div>
            </div>
            {/* //  Product List Start here */}
            <div className="col-span-3">
                <ProductListTop view={view} setView={setView}/>
                {view=='grid' &&<ProductGridView productList={allProductData}/> }
                {view=='list' &&<ProductListView productList={allProductData}/> }
            </div>
        </div>
    );
};

export default Product;