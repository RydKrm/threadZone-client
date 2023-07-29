import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faHeart,faNotEqual} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

const ShopGridSingle = (params) => {
    const {id,image,shopName,totalReview,ratting,totalSell,} = params.item;
    return (
      <div className="group rounded bg-white shadow-xl overflow-hidden ">

   <Link to={`/shopSingle/${id}`} className="relative ">
    <img src={image} className="w-full h-80 shadow-md" /> 
   </Link>

    <div className="pt-4 pb-3 px-4 ">
         <Link  to={`/shopSingle/${id}`}>
              <h4 className="uppercase font-medium text-xl mb-2 h-18 text-gray-800 hover:text-primary transition ">{shopName} </h4> 
         </Link>
        
        <div className="flex items-center ">
             <div className="flex gap-1 text-sm text-yellow-400 ">
               <p className="font-poppins text-medium">Rating : </p>
               {Array.from({ length: ratting }).map((item,index)=> <FontAwesomeIcon key={index} icon={faStar} />)} 
             </div>
             <div className="text-xs text-gray-500 ml-3 mt-1">Review : {totalReview}</div>
             <div className="text-xs text-gray-500 ml-3 mt-1">Sells : {totalSell}</div>

        </div>
    </div> 
</div>
    );
};

export default ShopGridSingle;