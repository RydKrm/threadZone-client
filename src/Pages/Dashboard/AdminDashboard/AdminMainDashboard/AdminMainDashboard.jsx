import React, { useEffect, useState } from 'react';
import DayVsPrice from '../../Charts/DayVsPrice';
import axios from 'axios';
import SellsVsPrice from '../../Charts/SellsVsPrice';
import SellerDashboardTop from '../../SellerDashboard/SellerMainDashboard/SellerDashboardTop';

const AdminMainDashboard = () => {
    const [dayVsPrice, setDayVsPrice] = useState([]);
    const [sellsVsPrice, setSellsVsPrice] = useState([]);
    useEffect(() => {
        axios.post('https://thread-zone-server.vercel.app/dayVsOrder', { role: 'admin' })
            .then(res => {
                setDayVsPrice(res.data);
            })
            .then(err => console.log(err));
        axios.post('https://thread-zone-server.vercel.app/sellsVsPrice', { role: 'admin' })
            .then(res => {
                setSellsVsPrice(res.data);
            })
            .then(err => console.log(err));
    }, [])
    return (
        <div>
            {/* <h2 className='text-center text-2xl font-poppins'>Admin Dashboard </h2> */}
            <SellerDashboardTop />
            <div className="grid grid-cols-2 mt-5">
                <DayVsPrice data={dayVsPrice} />
                <SellsVsPrice data={sellsVsPrice} />
            </div>
        </div>
    );
};

export default AdminMainDashboard;