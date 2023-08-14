import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const CustomerMainDashboard = () => {
    const [priceData,setPriceData] = useState([]);
    const {userInfo} = useContext(AuthContext);
    console.log("user id ",userInfo._id)

    useEffect(()=>{
        axios.post('http://localhost:5000/orderVsPrice',{userId:userInfo._id})
        .then(res=>{
            setPriceData(res.data);
            console.log("price data ", res.data);
        })
        .then(err=>console.log(err));
    },[])

    return (
        <div>
            <h2>Customer Main dashboard </h2>
        </div>
    );
};

export default CustomerMainDashboard;