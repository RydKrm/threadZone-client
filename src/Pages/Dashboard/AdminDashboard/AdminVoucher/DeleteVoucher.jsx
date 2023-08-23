import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const DeleteVoucher = () => {
    const [allVoucher, setAllVoucher] = useState([]);
    useEffect(() => {
        axios.get("https://thread-zone-server.vercel.app/getAllVoucher")
            .then((res) => {
                setAllVoucher(res.data);
            })
            .then((err) => {
                console.log(err);
            })
    }, [])
    const deleteCategory = async (id, voucherName) => {
        const { value } = await Swal.fire({
            title: 'Enter Voucher Name',
            input: 'text',
            inputLabel: 'Enter value must be same as voucher name !!',
            inputPlaceholder: ''
        })

        if (value === voucherName) {
            axios.post("https://thread-zone-server.vercel.app/deleteVoucher", { id })
                .then(res => {
                    if (res.data.status) {
                        const afterDelete = allVoucher.filter(cat => cat._id !== id);
                        setAllVoucher(afterDelete);
                    }
                })
                .then(err => {
                    console.log(err);
                })
            Swal.fire(`"${value}" voucher is Deleted`);
        } else {
            Swal.fire(` "${value}" is not same as "${voucherName}"`)
        }
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-xl text-center font-poppins">Voucher List</h2>
            <ul className='text-center font-poppins mt-3'>
                <li className='p-2 border-2 flex flex-row justify-between px-10 border-x-cDarkBlue'><p>Voucher Name </p> <p>Quantity</p> <p>Discount </p> <p className='text-gray-800'>Delete</p> </li>
                {
                    allVoucher.map((cat) =>
                        <li key={cat._id} className='p-2 border-2 flex flex-row justify-between px-10 border-x-cDarkBlue'><p>{cat.voucherName} </p> <p>{cat.quantity}</p> <p>{cat.discount}</p> <button type="button" onClick={() => { deleteCategory(cat._id, cat.voucherName) }}>
                            <FontAwesomeIcon icon={faDeleteLeft} /> </button></li>
                    )
                }
            </ul>
        </div>
    );
};

export default DeleteVoucher;