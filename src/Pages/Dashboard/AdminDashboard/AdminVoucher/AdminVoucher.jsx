import React, { useEffect, useState } from 'react';
import AddVoucher from './AddVoucher';
import DeleteVoucher from './DeleteVoucher';
import axios from 'axios';

function AdminVoucher() {
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



  return (
    <div className='mt-3'>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
        <AddVoucher voucherList={allVoucher} />
        <DeleteVoucher voucherList={allVoucher} />

      </div>
    </div>
  );
}

export default AdminVoucher;