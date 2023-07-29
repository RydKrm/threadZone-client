import React, { useEffect, useState } from 'react';
import ProductSingle from './ProductSingle';

const TemplateList = ({productList}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
         {
            productList.map((item,index)=> <ProductSingle key={index} item={item} >
                
            </ProductSingle>)
         }           
        </div> 
    );
};

export default TemplateList;