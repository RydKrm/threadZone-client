import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faHeart,faNotEqual} from '@fortawesome/free-solid-svg-icons'

const ProductSingle = (params) => {
    const {image,productName,price,discount,totalReview,rating,totalSell,} = params.item;
    return (
      <div className="group rounded bg-white shadow-xl overflow-hidden ">
     <div className="relative ">
    <img src={image} className="w-full h-80 shadow-md" /> 
  
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition ">
     <a href="view.html" className="text-white text-lg w-9 h-9 rounded-full bg-cDarkBlue hover:bg-gray-800 transition flex  items-center justify-center " >
          <FontAwesomeIcon icon={faNotEqual} />

     </a>
     <a href="#" className="text-white text-lg w-9 h-9 rounded-full bg-cDarkBlue hover:bg-gray-800 transition flex items-center justify-center "  >
          <FontAwesomeIcon icon={faHeart} />
     </a> 
    </div>  
     </div>

    <div className="pt-4 pb-3 px-4 ">
         <a href="view.html" >
              <h4 className="uppercase font-medium text-xl mb-2 h-18 text-gray-800 hover:text-primary transition ">{productName} </h4> 
         </a>

        <div className="flex items-baseline mb-1 space-x-2 " >
         <p className="text-xl text-primary font-roboto font-semibold "> {price} </p>
         <p className="text-sm text-gray-400 font-roboto  line-through "> {discount}%</p>
        </div> 
        <div className="flex items-center ">
             <div className="flex gap-1 text-sm text-yellow-400 ">
               {Array.from({ length: rating }).map((item,index)=> <FontAwesomeIcon key={index} icon={faStar} />)} 
              
             </div>
             <div className="text-xs text-gray-500 ml-3 mt-1">Review : {totalReview}</div>
             <div className="text-xs text-gray-500 ml-3 mt-1">Sells : {totalSell}</div>

        </div>
    </div>

    <a href="#" className="block w-full py-1 text-center text-white bg-cDarkBlue border border-cLightBlue rounded-b font-medium hover:bg-transparent hover:text-primary transition " >
         Add To Cart 
    </a>  
</div>
    );
};

export default ProductSingle;