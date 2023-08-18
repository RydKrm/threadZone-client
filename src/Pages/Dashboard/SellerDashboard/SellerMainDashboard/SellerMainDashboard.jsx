    import React, { useContext } from 'react';
import {useEffect, useState} from 'react';
import DayVsPrice from '../../Charts/DayVsPrice';
import axios from 'axios';
import SellsVsPrice from '../../Charts/SellsVsPrice';
import { AuthContext } from '../../../../Providers/AuthProvider';
import VisitVsSells from '../../Charts/VisitVsSells';
import SellerDashboardTop from './SellerDashboardTop';
    
    const SellerMainDashboard = () => {
    const [dayVsPrice,setDayVsPrice] = useState([]);
    const [sellsVsPrice,setSellsVsPrice] = useState([]);
    const [visitVsSold,setVisitVsSold] = useState({});
    const {userInfo} = useContext(AuthContext);
    const [visible,setVisible] = useState(false);

    const dataCollecting = async()=>{
      await  axios.post('http://localhost:5000/dayVsOrder',{role:'seller',shopId:userInfo.shopId})
        .then(res=>{
           setDayVsPrice(res.data);
        })
        .then(err=>console.log(err));
       await  axios.post('http://localhost:5000/sellsVsPrice',{role:'seller',shopId:userInfo.shopId})
        .then(res=>{
           setSellsVsPrice(res.data);
        })
        .then(err=>{console.log(err)});
        await axios.post('http://localhost:5000/visitVsSold',{role:'seller',shopId:userInfo.shopId})
        .then(res=>{
           setVisitVsSold(res.data);
           console.log("visit vs sold ",res.data);
        })
        .then(err=>{console.log(err)});
    }

    useEffect(()=>{
        dataCollecting();
        setTimeout(()=>{
            setVisible(true)
        },2000)
    },[])
    return (
        <div>
            <h2 className='text-center text-2xl font-poppins'>Shop Dashboard </h2>
            <SellerDashboardTop/>
            <div className="grid grid-cols-2 mt-5">
                    <DayVsPrice data={dayVsPrice} />
                    <SellsVsPrice data={sellsVsPrice} />
                   {/* {visible && <VisitVsSells data={visitVsSold} /> }  */}
                   
            </div>
        </div>
    );
    };
    
    export default SellerMainDashboard;