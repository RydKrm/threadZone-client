import React, { useContext, useEffect, useState } from 'react';
import DashboardIconComponent from './DashboardIconComponent';
import axios from 'axios';
import { AuthContext } from '../../../../Providers/AuthProvider';
import {faBoxOpen,faMagnifyingGlass,faHandHoldingDollar,faPersonChalkboard}   from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const SellerDashboardTop = () => {

    const [info,setInfo] = useState({});
    const {userInfo} = useContext(AuthContext);

    useEffect(()=>{
       axios.post('http://localhost:5000/findDashboardInformation',{shopId:userInfo.shopId,role:"seller"})
      .then(res=>{
        setInfo(res.data[0]);
        console.log("dashboard info ",res.data[0]);
      })
      .then(err=>{console.log(err)});
    //   setTimeout(()=>{},1000)
    
    },[])
      
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-6 my-6'>
            <div className="h-28 w-52 border border-blue-200 rounded-lg shadow-lg flex flex-row">
              <FontAwesomeIcon className='text-blue-500 bg-blue-100 w-7 h-7 mt-5 ms-5 p-5 rounded-full' icon={faBoxOpen} />
              <div className="flex flex-col mt-7 ms-4">
                <h2 className="text-xl font-black font-poppins mb-1">{info.totalProduct}</h2>
                <p className="text-sm font-light font-poppins"> Total Product</p>
              </div>
            </div>
            {/* 2 */}
            <div className="h-28 w-52 border border-blue-200 rounded-lg shadow-lg flex flex-row">
              <FontAwesomeIcon className='text-blue-500 bg-blue-100 w-7 h-7 mt-5 ms-5 p-5 rounded-full' icon={faHandHoldingDollar} />
              <div className="flex flex-col mt-7 ms-4">
                <h2 className="text-xl font-black font-poppins mb-1">{info.totalReview}</h2>
                <p className="text-sm font-light font-poppins"> Total Review</p>
              </div>
            </div>
            {/* 3 */}
            <div className="h-28 w-52 border border-blue-200 rounded-lg shadow-lg flex flex-row">
              <FontAwesomeIcon className='text-blue-500 bg-blue-100 w-7 h-7 mt-5 ms-5 p-5 rounded-full' icon={faMagnifyingGlass} />
              <div className="flex flex-col mt-7 ms-4">
                <h2 className="text-xl font-black font-poppins mb-1">{info.totalSell}</h2>
                <p className="text-sm font-light font-poppins"> Total Sells</p>
              </div>
            </div>
            {/* 4 */}
            <div className="h-28 w-52 border border-blue-200 rounded-lg shadow-lg flex flex-row">
              <FontAwesomeIcon className='text-blue-500 bg-blue-100 w-7 h-7 mt-5 ms-5 p-5 rounded-full' icon={faPersonChalkboard} />
              <div className="flex flex-col mt-7 ms-4">
                <h2 className="text-xl font-black font-poppins mb-1">{info.totalVisit}</h2>
                <p className="text-sm font-light font-poppins"> Total Visit</p>
              </div>
            </div>
            
        </div>
    );
};

export default SellerDashboardTop;