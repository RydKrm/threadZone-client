import React, { useEffect, useState } from 'react';
import DayVsPrice from '../../Charts/DayVsPrice';
import axios from 'axios';
import SellsVsPrice from '../../Charts/SellsVsPrice';

const AdminMainDashboard = () => {
    const [dayVsPrice,setDayVsPrice] = useState([]);
    const [sellsVsPrice,setSellsVsPrice] = useState([]);
    useEffect(()=>{
        axios.post('http://localhost:5000/dayVsOrder',{role:'admin'})
        .then(res=>{
           setDayVsPrice(res.data);
        })
        .then(err=>console.log(err));
        axios.post('http://localhost:5000/sellsVsPrice',{role:'admin'})
        .then(res=>{
           setSellsVsPrice(res.data);
        })
        .then(err=>console.log(err));
    },[])
    return (
        <div>
            <h2 className='text-center text-2xl font-poppins'>Admin Main dashboard </h2>
            <div className="grid grid-cols-2 mt-5">
                    <DayVsPrice data={dayVsPrice} />
                    <SellsVsPrice data={sellsVsPrice} />
            </div>
        </div>
    );
};

export default AdminMainDashboard;