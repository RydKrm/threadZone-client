import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminDeliveryRequest = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
     axios.get('http://localhost:5000/adminDeliveryList')
     .then(res=>{
        setProducts(res.data);
     })
     .then(err=>
        console.log(err));
  },[]);

  const productDelivery = (id)=>{
     axios.post('http://localhost:5000/singleProductDelivery',{id})
       .then(res=>{
        if(res.status){
         const newArray = products.filter(item=>item._id !== id);
         setProducts(newArray);
        Swal.fire({
            icon:'success',
            title: 'product  is Delivered '
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
          <button onClick={()=>productDelivery(product._id)} className={`btn btn-ghost  hover:text-black ${product.status==='warehouse'? 'bg-blue-400' : 'bg-green-500'}  text-white btn-xs` }>
          {product.status==='warehouse'? 'At Warehouse' : 'Delivered'}
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

export default AdminDeliveryRequest;