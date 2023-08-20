import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const SellerProductEditForm = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [updatedProduct, setUpdatedProduct] = useState({});
    const navigate=useNavigate()

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/products/${productId}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(`http://localhost:5000/product/${productId}`, updatedProduct);
            Swal.fire({
                icon: 'success',
                title: 'Product Updated',
                text: 'Product information has been successfully updated.',
            });

            // Navigate back to the product list page
            navigate('/dashboard/sellerProductEdit')
           
        } catch (error) {
            console.error('API Error:', error);

            // Display error alert
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while updating the product. Please try again later.',
            });
        }
    };

    return (
        <div>
            <h2 className=" font-poppins text-center text-2xl text-fuchsia-400 ">Seller Product Edit Page</h2>
            <form onSubmit={handleFormSubmit} className='flex flex-col mb-6'>
                <div className="flex flex-col md:flex-row my-3">
                    <input
                        type="text"
                        name="productName"
                        value={updatedProduct.productName || product.productName || ''}
                        onChange={handleInputChange}
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs mx-5 my-3 border  "
                        required
                    />
                    <input
                        type="number"
                        onChange={handleInputChange}
                        placeholder="Price"
                        name='price'
                        value={updatedProduct.price || product.price || ''}
                        className="input input-bordered w-full max-w-xs mx-5 my-3 border  "
                        required />
                    <input
                        type="number"
                        onChange={handleInputChange}
                        placeholder="Discount Price"
                        name='discount'
                        value={updatedProduct.discount || product.discount || ''}
                        className="input input-bordered w-full max-w-xs mx-5 my-3 border  "
                        required />
                </div>
                <div className="flex flex-col md:flex-row my-3">

                    <input
                        type="number"
                        onChange={handleInputChange}
                        placeholder="Product quantity"
                        name='quantity'
                        value={updatedProduct.quantity || product.quantity || ''}
                        className="input input-bordered w-full max-w-xs mx-5 my-3 border  "
                        required />
                    <input
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Image"
                        name='image'
                        value={updatedProduct.image || product.image || ''}
                        className="input input-bordered w-[280px] max-w-xs mx-5 my-3 border  "
                        required />
                </div>

                <button type="submit" className='btn btn-active btn-neutral mx-5'>Update Product</button>
            </form>
        </div>
    );
};

export default SellerProductEditForm;
