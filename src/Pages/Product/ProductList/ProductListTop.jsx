import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { faList, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from '../../../Contexts/ProductContext';

const ProductListTop = ({view,setView}) => {
   const {dispatch} = useContext(ProductContext);

   const setProduct = (e) =>{
     // console.log("function value",e.target.value)
     if(e.target.value === 'default'){
      dispatch({type:"DEFAULT"});
     }
      dispatch({type:"SORT_BY",payload:e.target.value})
   } 

    return (
         <div className='mb-4 flex items-center'> 
        <select name="sorting" onChange={setProduct} id="sorting"  className='w-44 text-sm text-gray-600 border border-gray-300 p-3 shadow-sm rounded focus:ring-cDrkBlue focus:border-cDarkBlue' >
            <option value="default">Default Value</option>
            <option  value="HighToLow"> High To Low</option>
            <option  value="lowToHigh"> Low To High</option>
            <option value="mostSelling"> Most Selling </option>
            <option value="mostReview"> Most Review </option>
        </select> 


      <div className="flex gap-2 ml-auto">
        <button onClick={()=>{setView('grid')}} className={` ${view==='grid' && 'bg-cDarkBlue text-white cursor-not-allowed'} border border-cDarkBlue w-10 h-9 flex items-center justify-center rounded cursor-pointer text-cDarkLight`}>
           <FontAwesomeIcon icon={faBorderAll} /> 
        </button>

        <div onClick={()=>{setView('list')}} className={` ${view==='list' && 'bg-cDarkBlue text-white cursor-not-allowed'}  border border-cDarkBlue w-10 h-9 flex items-center justify-center rounded cursor-pointer flex-gray-600`}>
           <FontAwesomeIcon icon={faList} />
        </div>
      </div>
       </div>



    );
};

export default ProductListTop;