import React, { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../Contexts/AllContext';
import TemplateStar from '../../Shared/Template/TemplateSidebar/TemplateStar';
import TemplateSize from '../../Shared/Template/TemplateSidebar/TemplateSize';
import TemplateColor from '../../Shared/Template/TemplateSidebar/TemplateColor';
import TemplateCategory from '../../Shared/Template/TemplateSidebar/TemplateCategory';
import TemplatePrice from '../../Shared/Template/TemplateSidebar/TemplatePrice';
import TemplateListTop from '../../Shared/Template/TemplateList/TemplateListTop';
import TemplateGridView from '../../Shared/Template/TemplateList/TemplateGridView';
import TemplateListView from '../../Shared/Template/TemplateList/TemplateListView';
import productData from '../../../public/data/productData.json';

const ShopProduct = ({id}) => {
  const { state, dispatch } = useContext(AllContext);
  const { data, sortBy, rating,minPrice,maxPrice,size,color,category } = state; 
  const [allProductData,setAllProductData] = useState([]);  
  const [view,setView] = useState('grid');

  // Load all Data 
  useEffect(()=>{
    dispatch({type:"SET_DATA",payload:productData});
  },[])

  // finding start,color, category

 let starType = Array(6).fill(0);
 const allColor = [];
 const allCategory = [];
 for(var i=0;i<data.length;i++){
    starType[data[i].rating]++;
     if(!allColor.includes(data[i].color)){
        allColor.push(data[i].color);
    }
     if(!allCategory.includes(data[i].category)){
        allCategory.push(data[i].category);
    }
 }




  useEffect(() => {
    let sortedAndFilteredProducts = [...data];
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
    if (rating) {
        const ratingToFilter = parseInt(rating);
      sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
        (data) => data.rating === ratingToFilter
      );
    }
   //price min to max filter
    if(minPrice && maxPrice ){
       sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
  (data) => data.price >= minPrice && data.price <= maxPrice
     );
    }

   // size filter 
    if(size ){
       sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
  (data) => data.size === size 
     );
    }

    // color filter
     if(color ){
       sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
    (data) => data.color === color 
     );
    }

    //category filter
     if(category ){
       sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
    (data) => data.category === category 
     );
    } 

   setAllProductData(sortedAndFilteredProducts);
  // console.log("After -> ",sortedAndFilteredProducts);
  }, [data, sortBy, rating,minPrice,maxPrice,size,color,category]);

    return ( 

        <div className="w-full mx-auto px-4 grid lg:grid-cols-4 gap-4 pt-4 items-start relative pb-4"> 
         {/* SideBar Start here  */}
            <div className="col-span-1 font-poppins pb-6 shadow-lg rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block px-5 py-5 ">
             <div className=" divide-y space-y-5 relative">

              <TemplateStar starType={starType}/> 
              <TemplatePrice /> 
              <TemplateSize />
              <TemplateColor allColor={allColor}/>
              <TemplateCategory allCategory ={allCategory} />
             </div>
            </div>
            {/* //  Product List Start here */}
            <div className="col-span-3">
                <TemplateListTop view={view} setView={setView}/>
               {view==='grid' &&  <TemplateGridView List={allProductData}/> }
               { view ==='list' && <TemplateListView List={allProductData} /> }
            </div>
        </div>
    );
};

export default ShopProduct;