import React, { useEffect, useState } from 'react';
import ProductGridSingle from './ProductGridSingle';

const ProductGridView = ({productList}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
         {
            productList.map((item,index)=> <ProductGridSingle key={index} item={item} >
                
            </ProductGridSingle>)
         }           
        </div>
    );
};  

export default ProductGridView;