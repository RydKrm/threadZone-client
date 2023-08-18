import React from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const TemplateReviewList = ({reviewList}) => {
    const zero = 0;
    return (
        <div className='md:ms-24'>
            <div>
              {reviewList.map((element, index) => (
           index !== 0 && <div className='flex flex-row my-3' key={index}>
            {
                Array.from({length:index})
                  .map((star,ind)=>
                    <FontAwesomeIcon key={ind} className='mx-1 text-yellow-500' icon={faStar} />
                    ) 
             }
             <span className='ms-7 me-5'> { 
                Array.from({length:10-index})
                .map((sp,inx)=><span key={inx} className=' text-gray-700'>........</span>)
             }
             </span> 
             {
                element
             }
             
            </div>
        ))}
        </div>
      </div>
    );
};


export default TemplateReviewList;