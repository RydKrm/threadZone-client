import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../Contexts/ProductContext';

const SidebarPrice = () => {
    const {dispatch} = useContext(ProductContext);
  const [max,setMax] = useState(null);
  const [min,setMin] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("first");
    dispatch({type:"FILTER_BY_PRICE",payload:{min:min,max:max}})

  }

    return (    
        <>
  <div className="pt-4">
     <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">Price </h3>

     <div className="mt-4 flex items-center ">
          <input type="text" onBlur={(e)=>{setMin(parseInt(e.target.value))}} className="w-full border-gray-500 focus:ring-2 border-2 focus:border-cyan-600  px-3 py-1 text-gray-800 text-sm shadow-sm rounded " placeholder="Min" />
          <span className="mx-3 text-gray-500"> - </span>
          <input type="text" onBlur={(e)=>{setMax( parseInt(e.target.value))}} className="w-full border-gray-500 focus:ring-2 border-2 focus:border-cyan-600  px-3 py-1 text-gray-800 text-sm shadow-sm rounded " placeholder="Mix" />
          <button type="button" onClick={handleSubmit} className='bg-cLightBlue px-4 py-1 text-white hover:bg-cDarkBlue mx-4'>Set</button>
     </div> 
 </div>  
        </>
    );
};

export default SidebarPrice;