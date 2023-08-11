import React from 'react';
import TemplateListSingle from './TemplateListSingle';

const ShopListView = ({List}) => {
  return (
    <div className='grid grid-cols-1'> 
         {
            List.map((item,index)=> <TemplateListSingle key={index} item={item} >
                
            </TemplateListSingle>)
         }           
        </div>
  ); 
};

export default ShopListView;