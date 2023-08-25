import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './ShoppingCart.css';
import axios from 'axios';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const { userInfo } = useContext(AuthContext)
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.post('https://thread-zone-server.vercel.app/getCartList', { id: userInfo._id })
            .then(res => {
                setCartItems(res.data);
            })
            .then(err => {
                console.log(err);
            })

    }, [userInfo])


    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleDelete = (itemId) => {
        console.log(itemId);
        axios.post('https://thread-zone-server.vercel.app/deleteCartItem', { id: itemId })
            .then(res => {
                console.log("item id ", res.data);
                const newData = cartItems.filter(product => product._id !== itemId);
                setCartItems(newData);
            })
            .then(err => {
                console.log(err);
            })
    };

    const incrementProduct = (_id) => {
        const newData = cartItems.map((item) =>
            item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
        );

        const updatedItem = newData.find((item) => item._id === _id);

        if (updatedItem.quantity > updatedItem.available) {
            Swal.fire({
                icon: 'error',
                title: 'Product not Add',
                text: `Total ${updatedItem.available} available. You can't add anymore !!`,
            });
            return;
        }

        setCartItems(newData);
    };

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/paymentPage', { state: { cartItems } });
    };


    return (
        <div className="gap-5 mb-10 all-site max-w-screen-xl mx-auto font-poppins">
            <div className='left-side'>
                <div className='flex mb-5'>
                    <div className='text-xl flex  font-medium font-poppins w-full bg-gray-100 ps-2 pt-2 pb-2'>
                        <h2 className='ml-40'>Product</h2>

                        <h2 className='text-xl ml-36 font-medium'>Quantity</h2>
                        <h2 className='text-xl ml-36 font-medium'>Total</h2>
                    </div>
                </div>

                {cartItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 mb-4 bg-gray-100 pt-5 pb-5">
                        <img src={item.image} alt={item.name} className="w-20 h-20 ms-10" />
                        <div className="flex flex-col ms-10 me-10">
                            <h3 className="text-xl mb-2 md:w-36">{item.productName}</h3>
                            <p className='text-red-500 mb-2'>Price: ${item.price}</p>
                            <p>Size: {item.size}</p>
                        </div>
                        <div className="flex flex-row mt-5 items-baseline justify-evenly">
                            <div className="flex items-center gap-2 me-10 ms-10">
                                <button
                                    onClick={() =>
                                        setCartItems((prevItems) =>
                                            prevItems.map((prevItem) =>
                                                prevItem._id === item._id ? { ...prevItem, quantity: prevItem.quantity !== 1 ? prevItem.quantity - 1 : prevItem.quantity } : prevItem
                                            )
                                        )
                                    }
                                    className="px-2 py-1 text-xl font-bold bg-gray-100 rounded"
                                >
                                    -
                                </button>
                                <span className='text-xl font-bold'>{item.quantity}</span>
                                <button
                                    onClick={() => incrementProduct(item._id)

                                    }
                                    className="px-2 py-1 text-xl font-bold bg-gray-100 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <p className='md:ms-20 lg:ms-20 lg:me-20 md:me-20 text-xl font-bold'> ${item.price * item.quantity}</p>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="mt-2 px-2 py-1 ms-20 bg-red-500 text-white rounded"
                            >
                                <MdDelete></MdDelete>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='right-side bg-gray-100 '>
                <h2 className="text-2xl font-semibold mb-4 ps-5 py-5">Order Summary</h2>
                <div className="p-4 rounded">
                    <div className='flex justify-between mt-2 mb-2'>
                        <p className=' text-xl'>Subtotal</p>
                        <p className=' text-xl'>${calculateTotalPrice()}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className=' text-xl'>Delivery</p>
                        <p className=' text-xl'>Free</p>
                    </div>
                    <div className='flex justify-between mt-2 mb-2'>
                        <p className=' text-xl'>Tax</p>
                        <p className=' text-xl'>Free</p>
                    </div>
                    <hr className='bg-gray-600' />
                    <div className='flex justify-between'>
                        <p className=' text-xl font-bold'>Total</p>
                        <p className=' text-xl font-bold'> ${calculateTotalPrice()}</p>
                    </div>

                    <button onClick={handleClick} className=" w-full mt-4 px-4 py-2 bg-red-800 text-white rounded">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;