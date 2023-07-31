import React, { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TemplateAddReview = ({product}) => {
    const {id,productName,shopName,shopId} = product;
   // const [checkStar,setCheckStars] = useState(null)
   const [stars,setStars] = useState([0,0,0,0,0]);
 
    const [review,setReview] = useState({
        productName,
        productId : id,
        shopName,
        shopId,
        userName:"James Dumas",
        userId : '0000000',
        postDate : new Date().toISOString(),
    })

    const addReview =(e)=>{
     // setReview((review)=>{...review,e.target.name : e.target.value})
     setReview (value=>({...value,[e.target.name]:e.target.value}))
    }
    const addStar = (star)=>{
   
     const newStars = Array(5).fill(0);
    for(var i=0;i<star;i++){
      newStars[i] = 1;
     }
      setStars(newStars);
      setReview (value=>({...value,'rating':star}))
   
    }

    const handleReview = (e)=>{
        e.preventDefault();
      console.log("Review Data => ",review);
    }

    

    return (
        <div className='mt-4'>
            <h2 className="text-2xl text-center font-poppins">Add Reviews </h2>
            <form  method="post" className='my-5 '>
                <div className='flex flex-col'>
                  <label htmlFor="Review" className='text-lg font-poppins text-left'></label>
                <textarea onBlur={addReview} className='p-5 border border-cLightBlue rounded' name="description" id="Review" cols="30" rows="7"></textarea>  
                </div>
                <div className="flex flex-row my-5">
                    <h2 className="text-xl font-poppins me-5">Give Star : </h2>
                    {
                        stars.map((star,index)=>
                        <FontAwesomeIcon key={index} 
                        className={`text-xl text-gray-400 cursor-pointer ${stars[index]===1 && 'text-yellow-400'}`}
                        onClick={()=>{addStar(index+1)}} icon={faStar} /> )
                    }
                        
                </div>
                <div className='flex flex-row my-3'>
                    <h2 className="text-xl font-poppins">Upload Image </h2>
                    <input type="file" className='mx-5'/>
                </div>
                <button className='text-xl w-36 bg-cDarkBlue text-white px-10 py-3 font-poppins  rounded-md my-3' onClick={handleReview}>Sent</button>
            </form>
        </div>
    );
};

export default TemplateAddReview;