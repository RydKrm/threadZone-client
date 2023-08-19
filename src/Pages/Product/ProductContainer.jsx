import React from 'react';
import { ProductProvider } from '../../Contexts/ProductContext';
import Product from './Product';

const ProductContainer = () => {
    return (
        <ProductProvider>
            <Product />
        </ProductProvider>
    );
};

export default ProductContainer;  