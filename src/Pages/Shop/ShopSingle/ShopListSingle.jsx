import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faHeart,faNotEqual} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ShopListSingle = (params) => {
  const {id,image,totalReview,ratting,totalSell,description,shopName,totalProduct} = params.item;

  const wordsArray = description.split(/\s+/);
  const first20WordsArray = wordsArray.slice(0, 20);
  const sortDescription = first20WordsArray.join(' ');  
 
    return (
      <div className="group rounded bg-white shadow-xl overflow-hidden flex flex-col md:flex-row">
  <Link to='/' className='relative w-4/5 ms-10 my-5'>
        <img src={image} className="w-full h-80 shadow-md" /> 
  </Link>
    <div className="pt-8 pb-3 items-center">
         <Link  to={`productDetails/${id}`} className='flex w-full items-center' >
              <h4 className="uppercase font-medium text-xl mb-2 h-18 text-gray-800 hover:text-primary transition mx-auto">{shopName} </h4> 
         </Link> 
        <p className='font-xl font-poppins text-gray-600 text-center'>Total Product : {totalProduct}</p>
        
        <div className="flex flex-col  w-88 items-center gap-4">
          <div className="flex mt-3 ">
               <p className="text-medium font-poppins">Rating : </p>
               {Array.from({ length: ratting }).map((item,index)=> <FontAwesomeIcon className='text-sm text-yellow-400 mt-1' key={index} icon={faStar} />)} 
        </div>
            <div className='flex flex-row justify-start'>

            
             <div className="text-xs text-gray-500 ml-3">Review : {totalReview}</div>
             <div className="text-xs text-gray-500 ml-3">Sells : {totalSell}</div>
            </div>
             
             <div className='font-poppins text-center px-20 py-3'>
               <span className='font-bold '>Description : </span>{sortDescription}
             </div>

        </div>
 
    </div>

     
</div>
    );
};

export default ShopListSingle;