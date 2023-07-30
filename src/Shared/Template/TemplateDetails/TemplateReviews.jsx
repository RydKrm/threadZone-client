import React, { useEffect, useState } from 'react';
import reviewData from '../../../../public/data/reviewData.json';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const TemplateReviews = () => {
    const reviewData2 = reviewData.slice(0,10)
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        setReviews(reviewData2);
    },[]);

   // console.log("first",reviews);
    return (
        <>
            <h1 className="text-3xl mb-5 font-poppins text-center">Reviews :  </h1> 
            <div className="divide-y my-10">

           
            {
                reviews.map((review,index)=> 
              <div className="flex flex-col mt-5 md:flex-row">
                <div className="h-20 w-44 ms-20 mt-10">
                    <img src={review.image} className='w-36 h-20 shadow-md p-1' alt="" />
                </div>
                <div className="flex flex-col text-left ms-5">
                      <div className=" pl-4 italic my-4">
                        <p className="text-gray-600">" {review.description} "  </p>
                        </div>
                        <div className="flex flex-row gap-1 ms-10 my-3">
                             {
                            Array.from({ length: review.rating }).map((_, index) => (
                         <FontAwesomeIcon key={index} 
                        className={`text-xl text-yellow-400`}
                        onClick={()=>{addStar(index+1)}} icon={faStar} />
                          ))
                         }
                          
                        </div>
                           
                        
                        <div className='flex flex-row ms-5'>
                            <img src={review.image} className='w-10 h-10 mx-5 rounded-full' alt="" />
                            <p  className='mt-2 font-bold'>{review.userName}</p>
                        </div>
                 </div>
              </div>
                )
            }
             </div>
        </>
    );
};

export default TemplateReviews;