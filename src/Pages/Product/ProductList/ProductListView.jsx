import React from 'react';
import ProductListSingle from './ProductListSingle';

const ProductListView = ({productList}) => {
  return (
    <div className='grid grid-cols-1  gap-5'>
         {
            productList.map((item,index)=> <ProductListSingle key={index} item={item} >
                
            </ProductListSingle>)
         }           
        </div>
  );
};

export default ProductListView;