import React from 'react';
import TemplateListSingle from './TemplateListSingle';

const TemplateListView = ({productList}) => {
  return (
    <div className='grid grid-cols-1'> 
         {
            productList.map((item,index)=> <TemplateListSingle key={index} item={item} >
                
            </TemplateListSingle>)
         }           
        </div>
  );   
};

export default TemplateListView;