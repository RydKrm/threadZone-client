import React, { useContext } from 'react';
import { AllContext } from '../../../Contexts/AllContext';
import { ProductContext } from '../../../Contexts/ProductContext';
//import { AllContext } from '../../../Contexts/AllContext';

const TemplateStar = ({starType}) => {
  const {state,dispatch} = useContext(ProductContext);
  // console.log("Value -> ",starType);
 const getStar = (e)=>{
 
 const value = parseInt(e.target.value);
     dispatch({type:"FILTER_BY_RATING",payload:value});
 }
  
    return (  
       <div className="relative pt-5">
            {/* Category start  */}
          <div className="text-lg right-0 top-0 cursor-pointer ">
            <h3 className="text-xl text-cDark mb-3 uppercase font-medium">Star</h3>
            {/* Category Item Start here  */}
            <form>
             {starType.map(star=>   
           <div key={star._id} className="space-y-2 px-5 hover:text-cDarkBlue flex items-center">
                  <input onClick={getStar} id={star._id}  value={star._id} type="checkbox" className='text-primary focus:right-0 rounded-sm cursor-pointer'/>
                  <label htmlFor="star"  className='text-gray-600 ml-3 cursor-pointer '>{star._id} Star</label>
                  <div className="ml-auto text-gray-600 text-sm">({star.totalProduct})</div>
            </div>
             )}  
            {/* Category Item Start here  */}
            {/* <div className="space-y-2 px-5 hover:text-cDarkBlue flex items-center">
                  <input onClick={getStar} id='star' value={4} type="checkbox" className='text-primary focus:right-0 rounded-sm cursor-pointer'/>
                  <label htmlFor="star"  className='text-gray-600 ml-3 cursor-pointer '>4 Star</label>
                  <div className="ml-auto text-gray-600 text-sm">({starType[4]})</div>
            </div>
            {/* Category Item Start here  */}
            {/* <div className="space-y-2 px-5 hover:text-cDarkBlue flex items-center">
                  <input onClick={getStar} value={3} id='star' type="checkbox" className='text-primary focus:right-0 rounded-sm cursor-pointer'/>
                  <label htmlFor="star"  className='text-gray-600 ml-3 cursor-pointer '> 3 Star</label>
                  <div className="ml-auto text-gray-600 text-sm">({starType[3]})</div>
            </div> */}
            {/* Category Item Start here  */}
            {/* <div className="space-y-2 px-5 hover:text-cDarkBlue flex items-center">
                  <input onClick={getStar} id='star' value={2} type="checkbox" className='text-primary focus:right-0 rounded-sm cursor-pointer'/>
                  <label htmlFor="star"  className='text-gray-600 ml-3 cursor-pointer '>2 Star</label>
                  <div className="ml-auto text-gray-600 text-sm">({starType[2]})</div>
            </div> */}
            {/* Category Item Start here  */}
            {/* <div className="space-y-2 px-5 hover:text-cDarkBlue flex items-center">
                  <input onClick={getStar} id='star' value={1} type="checkbox" className='text-primary focus:right-0 rounded-sm cursor-pointer'/>
                  <label htmlFor="star"  className='text-gray-600 ml-3 cursor-pointer '>1 Star</label>
                  <div className="ml-auto text-gray-600 text-sm">({starType[1]})</div>
            </div>  */}
            </form>
          </div>
        </div>
    );
};

export default TemplateStar;   