import React, { useContext } from 'react';
import {useEffect, useState} from 'react';
import { OrderContext } from '../../../../Contexts/OrderContext';

const CustomerReturn = () => {
   const {allOrder} = useContext(OrderContext);

  

  const [products,setProducts] = useState([]);
  useEffect(()=>{

     const newArray = allOrder.filter((item)=>item.status==='return')
    setProducts(newArray);
    console.log("Dashboard check ",newArray)
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
        <th>Price</th>
        <th>Delivery Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        products.map((product,index)=>
          <tr key={index}>
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
        <td>$ {product.quantity*product.userId}</td>
        <td>{product.date}</td>
        <th>
          <button className={`btn btn-ghost hover:text-black text-white btn-xs  bg-red-500`}>
             Returned </button>
        </th>
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
    );
    
};

export default CustomerReturn;