import {useContext, useEffect, useState} from 'react';
import { AllContext } from '../../Contexts/AllContext';
import shopData from '../../../public/data/shopData.json'
import TemplateStar from '../../Shared/Template/TemplateSidebar/TemplateStar';
import ShopGridView from './ShopSingle/ShopGridView';
import ShopListView from './ShopSingle/ShopListView';
import ShopListTop from './ShopListTop';

const Shop = () => {
     const {state, dispatch} = useContext(AllContext);
     const {data,rating,sortBy} = state;
     const [shopList,setShopList] = useState([]);
     const [view,setView] = useState('grid');

       useEffect(() => {
  let sortedAndFilteredProducts = [...data];
   // console.log("check for changes",sortBy);
    if (sortBy === 'totalReview') {
      sortedAndFilteredProducts.sort((a, b) => b.totalReview - a.totalReview);
    }  else if (sortBy === 'totalSell') {
        sortedAndFilteredProducts.sort((a, b) => b.totalSell - a.totalSell);
    } else if (sortBy === 'mostReview') {
        sortedAndFilteredProducts.sort((a, b) => b.totalReview - a.totalReview);
    }

    // Ratting filter
    if (rating) {
       // const ratingToFilter = parseInt(rating);
      sortedAndFilteredProducts = sortedAndFilteredProducts.filter(
        (product) => product.ratting === rating
      );
    } 
   setShopList(sortedAndFilteredProducts);
  // console.log("After -> ",sortedAndFilteredProducts);
  }, [rating,sortBy]);

  useEffect(()=>{
 dispatch({type:'SET_DATA',payload:shopData});
 setShopList(shopData);
  },[]);

  console.log("Check shop Data ",data)

    // find total product by a number of star
 let starType = Array(6).fill(0);
 for(var i=0;i<data.length;i++){
    starType[data[i].ratting]++;
 }

 console.log('Star Type ',starType)

    return (
        <div className="w-full mx-auto px-4 grid lg:grid-cols-4 gap-4 pt-4 items-start relative pb-4"> 
         {/* SideBar Start here  */}
            <div className="col-span-1 font-poppins pb-6 shadow-lg rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block px-5 py-5 ">
             <div className=" divide-y space-y-5 relative">

              <TemplateStar starType={starType}/> 
             </div>
            </div>
            {/* //  Product List Start here */}
            <div className="col-span-3">
                <ShopListTop view={view} setView={setView}/>
               {view==='grid' &&  <ShopGridView List={shopList}/> }
               { view ==='list' && <ShopListView List={shopList} /> }
            </div>
        </div>
    );
};

export default Shop;