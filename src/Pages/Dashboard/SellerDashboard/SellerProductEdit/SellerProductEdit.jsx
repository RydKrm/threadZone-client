import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellerProductEditFrom from '../SellerProductEditForm/SellerProductEditFrom';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SellerProductEdit = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        fetchProductsData();
    }, []);

    const fetchProductsData = async () => {
        try {
            const response = await axios.get('https://thread-zone-server.vercel.app/products');
            setProducts(response.data);
            setError('');
        } catch (error) {
            console.error(error);
            setError('Failed to fetch shop data.');
        }
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Shop Name</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} alt="Product Avatar" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{product.productName}</td>
                                <td>{product.shopName}</td>
                                <td>{product.price}</td>
                                <td>{product.discount}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <Link
                                        to={`/dashboard/sellerProductEditForm/${product._id}`}
                                        className='btn btn-secondary btn-sm'
                                    >
                                        Edit
                                    </Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SellerProductEdit;
