import React from 'react';

const ProductDetailsImage = ({image}) => {
    return (
         <div>
          <div className='w-[650px]'>
               <img id="main-img" src={image} className="w-full" />
          </div>

     <div className="grid grid-cols-5 gap-4 mt-4 ">

          <div>
               <img src="../../../../public/images/products/product12.jpg" className="single-img w-full cursor-pointer border border-primary " />
          </div>

          <div>
               <img src="../../../../public/images/products/product2.jpg" className="single-img file:w-full cursor-pointer border   " />
          </div>

          <div>
               <img src="../../../../public/images/products/product3.jpg" className="single-img w-full cursor-pointer border   " />
          </div>

          <div>
               <img src="../../../../public/images/products/product4.jpg" className="single-img w-full cursor-pointer border " />
          </div>

          <div>
               <img src="../../../../public/images/products/product5.jpg" className="single-img w-full cursor-pointer border  " />
          </div> 
     </div> 
     </div> 
    );
};

export default ProductDetailsImage;