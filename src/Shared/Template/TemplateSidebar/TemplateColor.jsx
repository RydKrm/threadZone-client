import React, { useContext,} from 'react';
import { AllContext } from '../../../Contexts/AllContext';
import { ProductContext } from '../../../Contexts/ProductContext';

const TemplateColor = ({allColor}) => {
  const {dispatch} = useContext(ProductContext);
  const setColor = (e)=>{
  //  console.log("color ",e.target.value);
    dispatch({type:"FILTER_BY_COLOR",payload:e.target.value})
  }

    return (
        <div className='mt-5'>
          <h3 className='text-xl mt-5 text-gray-800 mb-3 uppercase font-medium'>Color</h3>
          <div className="flex flex-wrap items-center gap-2  ">
            {/* single item */} 
            { 
            allColor.map((color) => 
            <div key={color._id} className="color-selector">
              <input type="radio" value={color._id} onClick={setColor} className='hidden' name="color" id={color._id}/>
              <label htmlFor={color._id} style={{backgroundColor:color._id}} className="text-sm  p-3 border  border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white" >{color.totalProduct}</label>     
            </div> 
            )
           }  
          </div>  
        
        </div>
    );
};

export default TemplateColor;