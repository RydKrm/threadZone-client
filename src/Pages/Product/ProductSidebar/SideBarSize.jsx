import React, { useContext } from 'react';
import { ProductContext } from '../../../Contexts/ProductContext';

const SideBarSize = () => {
  const {dispatch} = useContext(ProductContext);

  const setSize = (e)=>{
     dispatch({type:"SIZE_BY",payload:e.target.value});
    // console.log("size ->",e.target.value);
  }

    return (
        <div className='mt-5'>  
          <h3 className='text-xl mt-5 text-gray-800 mb-3 uppercase font-medium'>Size</h3>
          <div className="flex items-center gap-2">
            {/* single item */}
            <div className="size-selector">
              <input type="radio" onClick={setSize} value={"3XL"} className='hidden' name='size' id='size-3xl'/>
              <label htmlFor='size-3xl' className='text-sm p-3 border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >3XS</label>     
            </div> 
           {/* single item */}
            <div className="size-selector">
              <input type="radio" onClick={setSize} value={"2XL"} className='hidden' name='size' id='size-2xl'/>
              <label htmlFor='size-2xl' className='text-sm p-3 border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >2XL</label>     
            </div> 
            {/* single item */}
            <div className="size-selector">
              <input type="radio" onClick={setSize} value={"XL"} className='hidden' name='size' id='size-xl'/>
              <label htmlFor='size-xl' className='text-sm p-3 border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >XL</label>     
            </div> 
            {/* single item */}
            <div className="size-selector">
              <input type="radio" onClick={setSize} value={"L"} className='hidden' name='size' id='size-l'/>
              <label htmlFor='size-l' className='text-sm p-3 border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >L</label>     
            </div> 
             {/* single item */}
            <div className="size-selector">
              <input type="radio" onClick={setSize} value={"M"} className='hidden' name='size' id='size-m'/>
              <label htmlFor='size-m' className='text-sm p-3 border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >M</label>     
            </div>
             {/* single item */}
            <div className="size-selector">
              <input type="radio" onClick={setSize} value={"S"} className='hidden' name='size' id='size-s'/>
              <label htmlFor='size-s' className='text-sm p-3 border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >S</label>     
            </div>
              {/* single item */}
            <div className="size-selector">
              <input type="radio" onClick={setSize} value={"XS"} className='hidden' name='size' id='size-xs'/>
              <label htmlFor='size-xs' className='text-sm p-3 border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600' >XS</label>     
            </div>
              
          </div>  
        
        </div>
    );
};

export default SideBarSize;