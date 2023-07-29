import React from 'react';
import ShopListSingle from './ShopListSingle';

const ShopListView = ({List}) => {
  return (
    <div className='grid grid-cols-1'> 
         {
            List.map((item,index)=> <ShopListSingle key={index} item={item} >
                
            </ShopListSingle>)
         }           
        </div>
  ); 
};

export default ShopListView;