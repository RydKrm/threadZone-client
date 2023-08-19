import React, { useRef, useState } from 'react';
import {Carousel} from 'react-responsive-carousel';
import img2 from '../../../assets/Slider Image/image-2.png';
import img3 from '../../../assets/Slider Image/image-3.png';
import img4 from '../../../assets/Slider Image/image-4.png';
import img5 from '../../../assets/Slider Image/image-5.png';

export default function TemplateDetailsImage({image}) {  
  return(
     <Carousel className=''>
            <div>
                <img className="single-img  cursor-pointer border border-primary " src={image} />
            </div>
            <div>
                <img className="single-img w-full cursor-pointer border border-primary " src={img2} />
            </div>
            <div>
                <img className="single-img w-full cursor-pointer border border-primary " src={img3} />
            </div>
            <div>
                <img className="single-img w-full cursor-pointer border border-primary " src={img4} />
            </div>
            <div>
                <img className="single-img w-full cursor-pointer border border-primary " src={img5} />
            </div>
        </Carousel>


//     <div>
//           <div className='w-[650px]'>
//                <img id="main-img" src={image} className="w-full" />
//           </div>

//      <div className="grid grid-cols-5 gap-4 mt-4 ">

//           <div>
//                <img src="../../../../public/images/products/product12.jpg" className="single-img w-full cursor-pointer border border-primary " />
//           </div>

//           <div>
//                <img src="../../../../public/images/products/product2.jpg" className="single-img file:w-full cursor-pointer border   " />
//           </div>

//           <div>
//                <img src="../../../../public/images/products/product3.jpg" className="single-img w-full cursor-pointer border   " />
//           </div>

//           <div>
//                <img src="../../../../public/images/products/product4.jpg" className="single-img w-full cursor-pointer border " />
//           </div>

//           <div>
//                <img src="../../../../public/images/products/product5.jpg" className="single-img w-full cursor-pointer border  " />
//           </div> 
//      </div> 
//      </div> 

  );
}



