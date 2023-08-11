import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar,faHeart} from '@fortawesome/free-solid-svg-icons';

const TemplateDetailsInformation = ({productData}) => {
    const {category,color,discount,price,productName,quantity,rating,shopName,size,totalReview, totalVisit,updateDate,discription} = productData;
    return (
       <div className='ms-5'>
          <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2" >{productName}</h2>
          <div className="flex items-center mb-4">
               <div className="flex gap-1 text-sm text-yellow-400 ">
                    {Array.from({ length: rating }).map((item,index)=> <FontAwesomeIcon key={index} icon={faStar} />)} 
               </div>
               <div className="text-xs text-gray-500 ml-3">({totalReview} Reviews)</div>
          </div>

          <div className="space-y-2">
               <p className="text-gray-800 font-semibold space-x-2 ">
                    <span>Availability : </span>
                    <span className="text-green-600" >{quantity} In Stock </span>
               </p>

               <p className="text-gray-800 font-semibold space-x-2 ">
                    <span>Brand : </span>
                    <span className="text-gray-600" >{shopName}</span>
               </p>

               <p className="text-gray-800 font-semibold space-x-2 ">
                    <span>Category : </span>
                    <span className="text-gray-600" > {category} </span>
               </p>
          </div>

          <div className="mt-4 flex items-baseline gap-3 ">
           <span className="text-primary font-semibold text-xl ">${price}</span>
          <span className="text-gray-500 text-base line-through">${price+discount}</span>
          </div>
          <p className="mt-4 text-gray-600">{discription} </p>


{/* <!-- ---- Size filter ---> */}
<div className="pt-4">
     <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">Size </h3>
     <div className="flex items-center gap-2">
          {/* <!-- ---- Single Size ---> */}
          <div className="size-selector">
               <input type="radio" name="size" className="hidden" id={size} />
               <label htmlFor={size} className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 " >{size}</label>
          </div>
          {/* <!-- ---- End Single Size ---> */}
     </div>
</div>
{/* <!-- ---- End Size filter --->

<!-- ----  Color filter ---> */}
<div className="pt-4">
     <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">Color </h3>

<div className="flex items-center gap-2">
     {/* <!-- ---- Single Color ---> */}
     <div className="color-selector">
          <input type="radio" name="color" className="hidden" id={color} />
          <label htmlFor={color} style={{backgroundColor: color}} className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm" ></label>

     </div>
</div> 
</div>
 
{/* <!-- ---- End Color filter --->  */}

{/* <!-- ---- Quantity --->  */}
<div className="mt-4">
     <h3 className="text-base text-gray-800 mb-1" >Quantity</h3>
     <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max ">
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"> -  </div>
          <div className="h-8 w-10 flex items-center justify-center"> 1 </div>
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"> +  </div>

     </div> 
</div> 
{/* <!-- ---- End Quantity --->  */}


{/* <!-- ---- ADD TO CART BUTTON --->  */}

<div className="flex gap-3 border-b border-gray-200 pb-5 mt-6 ">
     <a href="#" className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm flex items-center " >
          <span className="mr-2"><i className="fas fa-shopping-bag"></i> </span>
          Add to Cart
     </a>

     <a href="#" className="border border-gray-600 text-gray-600 px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm flex items-center " >
          <span className="mr-2"><i className="fas fa-heart"></i> </span>
         WishList
     </a>

</div> 
{/* <!-- ---- End ADD TO CART BUTTON --->  */}

{/* <!-- ---- Product Share Icon --->  */}

<div className="flex space-x-3 mt-4 ">
     <a href="#" className="text-gray-400 hover:text-gray-600 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center" >
       <FontAwesomeIcon icon={faHeart} />      
      </a>
     <a href="#" className="text-gray-400 hover:text-gray-600 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center" >
          <i className="fab fa-twitter"></i>
     </a>

     <a href="#" className="text-gray-400 hover:text-gray-600 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center" >
          <i className="fab fa-instagram"></i>
     </a>

</div>

{/* <!-- ---- End Product Share Icon --->   */}

     </div>  
    );
};

export default TemplateDetailsInformation;