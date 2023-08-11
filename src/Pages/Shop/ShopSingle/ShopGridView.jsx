import React from 'react';
import ShopGridSingle from './ShopGridSingle';


const ShopGridView = ({List}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
         {
            List.map((item,index)=> <ShopGridSingle key={index} item={item} >
                
            </ShopGridSingle>)
         }           
        </div>
    );
};  

export default ShopGridView;