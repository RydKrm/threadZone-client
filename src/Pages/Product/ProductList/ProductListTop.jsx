import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import { faList, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from '../../../Contexts/ProductContext';

const ProductListTop = ({view,setView}) => {
   const {dispatch} = useContext(ProductContext);

 

   const setProduct = (e) =>{
     // console.log("function value",e.target.value)
      dispatch({type:"SORT_BY",payload:e.target.value})
   }

   const setGrid = () =>{
     // console.log("check grid  button", );
      setView('grid')
   }
const setList = () =>{
     // console.log("check list  button", );
      setView('list')
   }
    return (
         <div className='mb-4 flex items-center'> 
        <select name="sorting" onChange={setProduct} id="sorting"  className='w-44 text-sm text-gray-600 border border-gray-300 p-3 shadow-sm rounded focus:ring-cDrkBlue focus:border-cDarkBlue' >
            <option >Default Value</option>
            <option  value="HighToLow"> High To Low</option>
            <option  value="lowToHigh"> Low To High</option>
            <option value="mostSelling"> Most Selling </option>
            <option value="mostReview"> Most Review </option>
        </select> 
     

      <div className="flex gap-2 ml-auto">
        <button type='button' disabled={view==='grid'} onClick={setGrid}  className={`border ${view==='grid'&&'cursor-not-allowed'} border-cDarkBlue w-10 h-9 flex items-center justify-center rounded cursor-pointer text-cDarkLight ${view==='grid' && 'bg-cDarkBlue text-white'}`}>
           <FontAwesomeIcon type='button'  icon={faBorderAll} /> 
           {/* <FontAwesomeIcon icon={faPenNib} /> */}
        </button>

         <button type="button" disabled={view==='list'} onClick={setList}  className={`border ${view==='list'&&'cursor-not-allowed'}  border-cDarkBlue w-10 h-9 flex items-center justify-center rounded cursor-pointer text-cDarkLight ${view==='list' && 'bg-cDarkBlue text-white'}`} >
           <FontAwesomeIcon icon={faList} />
         </button>
        </div>
      </div>

    
     

    );
};

export default ProductListTop;