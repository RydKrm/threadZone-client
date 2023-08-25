import React from 'react';
//import { AllProvider } from '../../Contexts/AllContext';
import Category from './Category';
import { useParams } from 'react-router-dom';
import { ProductProvider } from '../../Contexts/ProductContext';

const CategoryContainer = () => {
    const params = useParams();
    return (
        <ProductProvider>
             <Category categoryName={params.categoryName}/>
        </ProductProvider>
    );
};

export default CategoryContainer;