import React, { useContext } from 'react';
import { AllContext } from '../../../Contexts/AllContext';

const TemplateCategory = ({allCategory}) => {

  // console.log("all ",allCategory.length);
  const {dispatch} = useContext(AllContext);

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
            <div className="flex items-center">
                <input type="radio" onClick={setCategory} value={category} id={category} className='hidden text-primary focus:right-0 rounded-sm cursor-pointer'/>
                <label htmlFor={category} className='text-gray-600 ml-3 cursor-pointer '>{category}
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