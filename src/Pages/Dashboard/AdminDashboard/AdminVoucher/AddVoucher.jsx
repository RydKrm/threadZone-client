import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AddVoucher = ({ voucherList }) => {
    const [voucher, setVoucher] = useState({});

    const addField = (e) => {
        setVoucher(value => ({ ...value, [e.target.name]: e.target.value }))
    }

    const handleVoucher = async (e) => {
        e.preventDefault();
        for (var i = 0; i < voucherList.length; i++) {
            if (voucherList[i].voucherName === voucher.voucherName) {
                Swal.fire({
                    title: ` "${voucher.voucherName}" is already Exist !!`,
                    icon: 'error',
                })
                return;
            }
        }
        if (voucher.voucherName.length < 3) {
            Swal.fire({
                title: 'Name must have 3 latter !!',
                icon: 'question',
            })
        } else {

            axios.post('https://thread-zone-server.vercel.app/addVoucher', voucher)
                .then((res) => {
                    if (res.data.status) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Voucher Add successfully'

                        })
                    }
                })
                .then((err) => {
                    console.log(err);
                })
        }
    }
    return (

        <div className='ms-14 mt-10'>
            <form method="post" className='flex flex-col'>
                <input type="text" name="voucherName" onBlur={addField} placeholder='ADD VOUCHER CODE ' className='input input-bordered  w-[280px] max-w-xs mx-5 my-3 border' />
                <input type="number" onBlur={addField} placeholder="Quantity" name='quantity' className="input input-bordered w-[280px] max-w-xs mx-5 my-3 border  " required />
                <input type="number" onBlur={addField} placeholder="Enter Discount Amount " name='discount' className="input input-bordered w-[280px] max-w-xs mx-5 my-3 border  " required />
                <button type="submit" onClick={handleVoucher} className='btn btn-info text-white mt-5 ms-5 w-36 font-medium font-poppins'>Add Voucher </button>
            </form>
        </div>

    );
};

export default AddVoucher;