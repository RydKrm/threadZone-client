import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../../../public/data/productData.json'
import ProductDetailsImage from './ProductDetailsImage';
import ProductDetailsInformation from './ProductDetailsInformation';
const ProductDetails = () => {
    const params = useParams();
    const {image} = productData[params.id-1];
 return (

    <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6 ">
      <ProductDetailsImage image={image} />
        {/* <!-- ---- Product Content  --->  */}
     <ProductDetailsInformation productData={productData[params.id-1]}/>  
         {/* <!-- ---- End Product Content  ---> */  }

  </div> 
 
 );
};

export default ProductDetails;