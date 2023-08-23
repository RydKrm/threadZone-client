import React from 'react';
import { AllProvider } from '../../Contexts/AllContext';
import ShopProduct from './ShopProduct';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import ProductContainer from '../Product/ProductContainer';

const ShopProductContainer = () => {
    const params = useParams();
    return (
        <div>
            {/* <AllProvider >
                <ShopProduct id={params.id} />
            </AllProvider> */}
            <ProductContainer/>
        </div>
    );
};

export default ShopProductContainer;