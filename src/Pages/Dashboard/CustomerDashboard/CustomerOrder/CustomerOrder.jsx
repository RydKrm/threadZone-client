import React, { useEffect, useState } from 'react';
import productData from '../../../../../public/data/productData.json';
const CustomerOrder = () => {
  const [products,setProducts] = useState([]);
  const productSlice = productData.slice(0,10);
  useEffect(()=>{
    setProducts(productSlice);
  },[])

  console.log("review data ",products)
    return (
  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
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
              <div className="text-sm opacity-50">{product.category}</div>
            </div>
          </div>
        </td>
        <td>
          
          <span className="badge badge-ghost badge-sm">{product.shopName}</span>
        </td>
        <td>$ {product.price}</td>
        <td>{product.updateDate}</td>
        <th>
          <button className={`btn btn-ghost text-white btn-xs ${product.id%3===0 ? 'bg-green-500' : 'bg-yellow-500'}`}>{product.id%3===0 ? 'Approve' : 'Waiting' }</button>
        </th>
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
    );
};

export default CustomerOrder;