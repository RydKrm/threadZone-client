import {useContext, useEffect, useState} from 'react';
import { AllContext } from '../../Contexts/AllContext';
import shopData from '../../../public/data/shopData.json'
import TemplateStar from '../../Shared/Template/TemplateSidebar/TemplateStar';
import ShopGridView from './ShopSingle/ShopGridView';
import ShopListView from './ShopSingle/ShopListView';
import ShopListTop from './ShopListTop';
import axios from 'axios';

const Shop = () => {
     const [shopList,setShopList] = useState([]);
     const [view,setView] = useState('grid');

 useEffect(()=>{
  axios.get('http://localhost:5000/getAllShop')
  .then(res=>{
    setShopList(res.data);
  })
  .catch(err=>console.log(err));
 },[])

    return (
        <div className="w-full mx-auto px-4 grid lg:grid-cols-4 gap-4 pt-4 items-start relative pb-4"> 
            <div className="col-span-4">
                {/* <ShopListTop view={view} setView={setView}/> */}
               {view==='grid' &&  <ShopGridView List={shopList}/> }
               { view ==='list' && <ShopListView List={shopList} /> }
            </div>
        </div>
    );
};

export default Shop;