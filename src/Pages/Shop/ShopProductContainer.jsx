import React from 'react';
import { AllProvider } from '../../Contexts/AllContext';
import ShopProduct from './ShopProduct';
import { useParams } from 'react-router-dom';

const ShopProductContainer = () => {
    const params = useParams();
    return (
        <div>
            <AllProvider >
                <ShopProduct id={params.id} />
            </AllProvider>
        </div>
    );
};

export default ShopProductContainer;