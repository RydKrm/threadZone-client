import React from 'react';
import { OrderContext, OrderProvider } from '../Contexts/OrderContext';
import Dashboard from './Dashboard';

const DashboardContainer = () => {
    return (
        <div>
            <OrderProvider  >
                <Dashboard />
            </OrderProvider>
        </div>
    );
};

export default DashboardContainer;