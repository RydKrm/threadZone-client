import React, { useContext } from 'react';
import { ProductContext } from '../../../Contexts/ProductContext';

const SidebarColor = ({allColor}) => {
  const {dispatch} = useContext(ProductContext);
  const setColor = (e)=>{
    dispatch({type:"FILTER_BY_COLOR",payload:e.target.value})
  }

    return (
        <div className='mt-5'>
          <h3 className='text-xl mt-5 text-gray-800 mb-3 uppercase font-medium'>Color</h3>
          <div className="flex flex-wrap items-center gap-2 ">
            {/* single item */}
            {
            allColor.map((color,index) => 
            <div key={index} className="color-selector">
              <input type="radio" value={color} onClick={setColor} className='hidden' name='size' id={color}/>
              <label htmlFor={color} style={{backgroundColor:color}} className="text-sm  p-3 border  border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600" ></label>     
            </div> 
            )
           }  
          </div>  
        
        </div>
    );
};

export default SidebarColor;