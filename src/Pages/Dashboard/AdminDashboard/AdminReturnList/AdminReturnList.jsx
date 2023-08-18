import React, { useContext } from 'react';
import {useEffect, useState} from 'react';
import { OrderContext } from '../../../../Contexts/OrderContext';
import axios from 'axios';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const AdminReturnList = () => {
  const {userInfo} = useContext(AuthContext);
  const [returnList,setReturnList] = useState([]);
  
  useEffect(()=>{
    const info = {
      role:'admin',
      userId:userInfo._id,
    }
    axios.post("http://localhost:5000/getReturnList",info) 
    .then(res=>{
      setReturnList(res.data);
    })
    .then(err=>{
      console.log(err);
    })
  },[])

    return (
  <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Product Name</th>
        <th>Shop Name</th>
        {/* <th>Price</th> */}
        <th>Delivery Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        returnList.map((product)=>
          <tr key={product._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" value={product.id}/>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.productName}</div>
              <div className="text-sm opacity-50">{product.userName}</div>
            </div>
          </div>
        </td>
        <td>
          
          <span className="badge badge-ghost badge-sm">{product.shopName}</span>
        </td>
        {/* <td>$ { parseInt(product.quantity)*parseInt(product.price)}</td> */}
        <td>{product.postDate}</td>
        <th>
          <Link to={`/dashboard/returnDetails/${product._id}`} className={`btn btn-ghost hover:text-black text-white btn-xs  bg-red-500`}>
             Returned </Link>
        </th>
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
    );
    
};

export default AdminReturnList;