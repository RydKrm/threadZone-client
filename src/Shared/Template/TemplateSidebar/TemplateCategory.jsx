import React, { useContext } from 'react';
import { AllContext } from '../../../Contexts/AllContext';
import { ProductContext } from '../../../Contexts/ProductContext';

const TemplateCategory = ({allCategory}) => {

  // console.log("all ",allCategory.length);
  const {dispatch} = useContext(ProductContext);

  const setCategory = (e)=>{
    dispatch({type:"FILTER_BY_CATEGORY",payload:e.target.value})
  }

    return ( 
    <div className="relative">

        <div className="text-gray-300 text-lg right-0 top-0 cursor-pointer ">
        <h3 className="text-xl text-cDark mb-3 uppercase font-medium">Category</h3>
        {/* Category Item Start here  */}
        {
         allCategory.map((category,index)=>
           <div key={index} className="space-y-2 px-5 hover:text-cDarkBlue">
            <div className="">
                <input type="radio" onClick={setCategory} value={category._id} id={category._id} className='hidden text-primary focus:right-0 rounded-sm cursor-pointer'/>
                <label htmlFor={category._id} className='text-gray-600 ml-3 cursor-pointer me-0 flex justify-between'>
                    <p> {category._id}</p>
                <p> {category.totalProduct}</p>
                </label>
                {/* <div className="ml-auto text-gray-600 text-sm">(15)</div> */}
            </div>  
          </div>
            )
        }

        </div> 
        </div>


    );
};

export default TemplateCategory;