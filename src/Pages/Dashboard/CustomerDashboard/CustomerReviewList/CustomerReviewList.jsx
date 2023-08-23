import React from 'react';
import { useEffect, useState, useContext } from 'react';
import productData from '../../../../../public/data/productData.json';
import axios from 'axios';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const CustomerReviewList = () => {
  const { userInfo } = useContext(AuthContext);
  const [returnList, setReturnList] = useState([]);

  useEffect(() => {
    const info = {
      role: 'customer',
      userId: userInfo._id
    }
    axios.post("https://thread-zone-server.vercel.app/getReviewList", info)
      .then(res => {
        setReturnList(res.data);
      })
      .then(err => {
        console.log(err);
      })
  }, [])

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
            returnList.map((product) =>
              <tr key={product._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" value={product.id} />
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
                <td>{product.postDate}</td>
                <th>
                  <Link to={`/dashboard/returnDetails/${product._id}`} className={`btn btn-ghost bg-cLightBlue px-3 hover:text-black text-white btn-xs }`}> View </Link>
                </th>
              </tr>
            )
          }

        </tbody>
      </table>
    </div>
  );
};

export default CustomerReviewList;