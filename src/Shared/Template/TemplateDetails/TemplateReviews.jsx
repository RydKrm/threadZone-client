import React, { useEffect, useState } from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';
import TemplateReviewList from './TemplateReviewList';
const TemplateReviews = (params) => {
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        axios.post('http://localhost:5000/getReviewList',{role:'product',productId:params.productId})
        .then(res=>{
            setReviews(res.data)
        })
        .catch(err=> console.log(err));

    },[]);

    let stars = Array(6).fill(0);
    for(const item of reviews){
        stars[item.rating]++;
    }

    return (
        <>
            <h1 className="text-3xl mb-5 font-poppins text-center">Reviews :  </h1> 
            
            <div className="divide-y my-10">
                <TemplateReviewList reviewList={stars} />
            {
                reviews.map((review,index)=> 
              <div key={index} className="flex flex-col mt-5 md:flex-row">
                <div className="h-20 w-44 ms-20 mt-10">
                    <img src={review.image} className='w-36 h-20 shadow-md p-1' alt="" />
                </div>
                <div className="flex flex-col text-left ms-5">
                      <div className=" pl-4 italic my-4">
                        <span className="text-gray-600"> <div dangerouslySetInnerHTML={{ __html: review.description }} />   </span>
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
                            <img src={review.userImage} className='w-10 h-10 mx-5 rounded-full' alt="" />
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