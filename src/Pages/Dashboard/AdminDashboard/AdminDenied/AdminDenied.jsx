import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AdminDenied = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchProductsData();
    }, []);

    const fetchProductsData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products');
            // Set initial isBlocked values based on data from the server
            const updatedProducts = response.data.map(product => ({
                ...product,
                isBlocked: product.isBlock
            }));
            setProducts(updatedProducts);
            setError('');
        } catch (error) {
            console.error(error);
            setError('Failed to fetch shop data.');
        }
    };

    const handleAdminDenied = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/products/${id}`, { isBlock: true });
            if (response.status === 200) {
                // Update the local products list and set the isBlocked property
                setProducts(prevProducts =>
                    prevProducts.map(product =>
                        product._id === id ? { ...product, isBlocked: true } : product
                    )
                );

                // Display SweetAlert notification
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product has been blocked',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Picture</th>
                            <th>Product Name</th>
                            <th>Shop Name</th>
                            <th>Action</th>
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
                                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{product.productName}</td>
                                <td>{product.shopName}</td>
                                <td>
                                    {product.isBlocked ? (
                                        <button
                                            className="btn btn-ghost bg-yellow-500 btn-sm rounded-md"
                                            disabled
                                        >
                                            Blocked
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleAdminDenied(product._id)}
                                            className="btn btn-ghost bg-yellow-500 btn-sm rounded-md"
                                        >
                                            Block
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDenied;
