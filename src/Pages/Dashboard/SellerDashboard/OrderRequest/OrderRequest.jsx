import React, { useContext } from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Providers/AuthProvider';

const OrderRequest = () => {
  const [products,setProducts] = useState([]);
  const {userInfo} = useContext(AuthContext);

  useEffect(()=>{
     axios.post('http://localhost:5000/sellerOrderRequest',{shopId:userInfo.shopId})
     .then(res=>{
        setProducts(res.data);
     })
     .then(err=>
        console.log(err));
  },[]);

  const SentToWarehouse = (id)=>{
     axios.post('http://localhost:5000/sentToWareHouse',{id})
       .then(res=>{
        if(res.status){
         setProducts(preArray=> 
          preArray.map(obj=>
            obj._id===id ? {...obj,status:'warehouse'} :obj 
            )
        )
        Swal.fire({
            icon:'success',
            title: 'product Sent to warehouse'
        })
        }
       })
       .then(err=>
        console.log(err)); 
  }

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
          <button onClick={()=>SentToWarehouse(product._id)} className={`btn btn-ghost  hover:text-black ${product.status==='approved'? 'bg-blue-400' : 'bg-green-500'}  text-white btn-xs` }>
          {product.status==='approved'? 'Sent to Warehouse' : 'Product Sent'}
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

export default OrderRequest;