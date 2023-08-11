import axios from 'axios';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';

const Address = () => {
   const {userInfo} = useContext(AuthContext)
    const [address,setAddress] = useState({userId:userInfo._id});

    const addAddress = (e)=>{
        setAddress(value=>({...value,[e.target.name]:e.target.value}));
    }

    const handleAddress = (e)=>{
        e.preventDefault();
        console.log("full address ",address);

        axios.post('http://localhost:5000/addAddress',address)
        .then(res=>{
            if(res.data.status===true){
              Swal.fire({
               icon: 'success',
               title: 'Address is added',
               text: `Now you can get delivery in this address `,
        });
            }
        })
        .then(err=>{
            console.log(err);
        })

    }

    return (
        <div className=' lg:mt-5 lg:me-24 rounded-lg'>
            <div className="container mx-auto p-10 bg-gray-100 ">
                <form >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div>
                            <label htmlFor="fullName" className="block text-gray-600 font-poppins">Full Name</label>
                            <input type="text" id="fullName" onBlur={addAddress} name="fullName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-gray-600">Phone Number</label>
                            <input type="tel" id="phoneNumber" onBlur={addAddress} name="phoneNumber" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div>
                            <label htmlFor="country" className="block text-gray-600">Country</label>
                            <input type="text" id="country" name="country" onBlur={addAddress} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required />
                        </div>
                        <div>
                            <label htmlFor="region" className="block text-gray-600">Region</label>
                            <input type="text" id="region" name="region" onBlur={addAddress} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div>
                            <label htmlFor="city" className="block text-gray-600">City</label>
                            <input type="text" id="city" name="city" onBlur={addAddress} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required />
                        </div>
                        <div>
                            <label htmlFor="area" className="block text-gray-600">Area</label>
                            <input type="text" id="area" name="area" onBlur={addAddress} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div className="col-span-2">
                            <label htmlFor="address" className="block text-gray-600">Address</label>
                            <textarea id="address" name="address" onBlur={addAddress} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" rows="4" required></textarea>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2 flex justify-end">
                            <button type="submit" onClick={handleAddress} className=" w-full px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">Save Changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Address;