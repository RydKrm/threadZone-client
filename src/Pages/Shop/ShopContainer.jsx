import React from 'react';
import { AllProvider } from '../../Contexts/AllContext';
import Shop from './Shop';

const ShopContainer = () => {

    return (
        <div>
            <AllProvider>
                <Shop/>
            </AllProvider>
        </div>
    );
};

export default ShopContainer;