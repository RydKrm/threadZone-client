import React, { useContext } from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../Providers/AuthProvider';

const SellerOrderComplete = () => {
  const [products,setProducts] = useState([]);
  const {userInfo} = useContext(AuthContext);
  useEffect(()=>{
     axios.post('http://localhost:5000/sellerOrderComplete',{shopId:userInfo.shopId})
     .then(res=>{
        setProducts(res.data);
     })
     .then(err=>
        console.log(err));
  },[]);

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
        <th>Price</th>
        <th>Delivery Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        products.map((product)=>
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
        <td>$ {parseInt(product.quantity)* parseInt(product.userId)}</td>
        <td>{product.date}</td>
        <th>
          <button  className={`btn btn-ghost  hover:text-black bg-green-500  text-white btn-xs` }> Delivered
            </button>
        </th>
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
    );
};

export default SellerOrderComplete;