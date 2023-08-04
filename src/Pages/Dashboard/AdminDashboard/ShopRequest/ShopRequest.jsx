import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ShopRequest = () => {
    const [shops, setShops] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchShopData();
    }, []);

    const fetchShopData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/shopStatus');
            setShops(response.data);
            setError('');
        } catch (error) {
            console.error(error);
            setError('Failed to fetch shop data.');
        }
    };

    const updateStatus = async (id, status) => {
        try {
            if (status === 'approve') {
                // Show success message when shop is approved
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Shop has been approved',
                    showConfirmButton: false,
                    timer: 1500
                });
    
                // Send the approval status to the server without any reason
                await axios.put(`http://localhost:5000/updateStatus/${id}`, {
                    status: 'approve',
                });
            } else if (status === 'deny') {
                // Show input prompt for admin to enter deny reason
                const { value: reason } = await Swal.fire({
                    title: 'Enter reason for denying',
                    input: 'text',
                    inputLabel: 'Reason',
                    inputPlaceholder: 'Enter your reason here...',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                            return 'You need to enter a reason!';
                        }
                    }
                });
    
                if (!reason) {
                    // If the admin canceled the input, return early
                    return;
                }
    
                // Send the deny reason to the server along with the status update
                await axios.put(`http://localhost:5000/updateStatus/${id}`, {
                    status: 'deny',
                    reason: reason
                });
            }
    
            // Refresh shop data after updating status
            fetchShopData();
            setError('');
        } catch (error) {
            console.error(error);
            setError('Failed to update shop status.');
        }
    };
    

    return (
        <div>
            <h1 className="text-3xl mb-4">Seller Shop Request Approval</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {shops.map((shop) => (
                    <div key={shop._id} className="p-2 border mb-2">
                        <h3 className="text-xl font-semibold">{shop.shopName}</h3>
                        <img src={shop.image} alt={shop.shopName} className="my-2 max-w-md" />
                        {shop.status === 'pending' && (
                            <>
                                <button className='btn btn-active btn-accent me-5 btn-sm' onClick={() => updateStatus(shop._id, 'approve')}>Approve</button>
                                <button className='btn btn-active btn-secondary btn-sm' onClick={() => updateStatus(shop._id, 'deny')}>Deny</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopRequest;