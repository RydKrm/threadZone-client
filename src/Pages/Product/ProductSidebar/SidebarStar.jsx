import React, { useContext } from 'react';
import { ProductContext } from '../../../Contexts/ProductContext';

const SidebarStar = ({starType}) => {
  const {dispatch} = useContext(ProductContext);

 const getStar = (e)=>{
 // console.log("Value -> ",typeof e.target.value);
     dispatch({type:"FILTER_BY_RATING",payload:e.target.value});
 }
  
    return ( 
       <div className="relative pt-5">
            {/* Category start  */}
          <div className="text-lg right-0 top-0 cursor-pointer ">
            <h3 className="text-xl text-cDark mb-3 uppercase font-medium">Star</h3>
            {/* Category Item Start here  */}
            <div className="space-y-2 px-5 hover:text-cDarkBlue">
                <div className="flex items-center">
                  <input onClick={getStar} value={5} type="checkbox" className='text-primary focus:right-0 rounded-sm cursor-pointer'/>
                  <label htmlFor="Bed Room" className='text-gray-600 ml-3 cursor-pointer '>5 Star</label>
                  <div className="ml-auto text-gray-600 text-sm">({starType[5]})</div>
                </div> 
            </div>
            {/* Category Item Start here  */}
            <div className="space-y-2 px-5 hover:text-cDarkBlue">
                <div className="flex items-center">
                  <input onClick={getStar} value={4} type="checkbox" className='text-primary focus:right-0 rounded-sm cursor-pointer'/>
                  <label htmlFor="Bed Room" className='text-gray-600 ml-3 cursor-pointer '>4 Star</label>
                  <div className="ml-auto text-gray-600 text-sm">({starType[4]})</div>
                </div> 
            </div>
            {/* Category Item Start here  */}
            <div className="space-y-2 px-5 hover:text-cDarkBlue">
                <div className="flex items-center">
                  <input onClick={getStar} value={3} type="checkbox" className='text-primary focus:right-0 rounded-sm cursor-pointer'/>
                  <label htmlFor="Bed Room" className='text-gray-600 ml-3 cursor-pointer '> 3 Star</label>
                  <div className="ml-auto text-gray-600 text-sm">({starType[3]})</div>
                </div> 
            </div>
            {/* Category Item Start here  */}
            <div className="space-y-2 px-5 hover:text-cDarkBlue">
                <div className="flex items-center">
                  <input onClick={getStar} value={2} type="checkbox" className='text-primary focus:right-0 rounded-sm cursor-pointer'/>
                  <label htmlFor="Bed Room" className='text-gray-600 ml-3 cursor-pointer '>2 Star</label>
                  <div className="ml-auto text-gray-600 text-sm">({starType[2]})</div>
                </div> 
            </div>
            {/* Category Item Start here  */}
            <div className="space-y-2 px-5 hover:text-cDarkBlue">
                <div className="flex items-center">
                  <input onClick={getStar} value={1} type="checkbox" className='text-primary focus:right-0 rounded-sm cursor-pointer'/>
                  <label htmlFor="Bed Room" className='text-gray-600 ml-3 cursor-pointer '>1 Star</label>
                  <div className="ml-auto text-gray-600 text-sm">({starType[1]})</div>
                </div> 
            </div>
            
          </div>
        </div>
    );
};

export default SidebarStar;