import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../../../public/data/productData.json'
import ProductDetailsImage from './TemplateDetailsImage';
import ProductDetailsInformation from './TemplatetDetailsInformation';
import TemplateReviews from './TemplateReviews';
import TemplateAddReview from './TemplateAddReview';
const TemplateDetails = () => {
    const params = useParams();
    const product = productData[params.id-1];
 return (
  
   <>
   <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6 ">
      <ProductDetailsImage image={product.image} />
        {/* <!-- ---- Product Content  --->  */}
     <ProductDetailsInformation productData={product}/>  
         {/* <!-- ---- End Product Content  ---> */  }
   </div> 
   <TemplateAddReview product={product}/>
   <TemplateReviews />
   </>
    
 );
};

export default TemplateDetails;