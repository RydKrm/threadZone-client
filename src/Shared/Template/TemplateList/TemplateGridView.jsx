import React, { useEffect, useState } from 'react';
import TemplateGridSingle from './TemplateGridSingle';

const TemplateGridView = ({List}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
         {
            List.map((item,index)=> <TemplateGridSingle key={index} item={item} />)
         }   
         </div>        
    );
};  

export default TemplateGridView;