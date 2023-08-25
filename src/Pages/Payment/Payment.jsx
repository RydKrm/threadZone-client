import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Payment = () => {

  const [addressList, setAddressList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const location = useLocation();
  const { cartItems } = location.state;
  const [isSelect, setIsSelect] = useState(true);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  useEffect(() => {
    axios.post('https://thread-zone-server.vercel.app/getAddress', { id: userInfo._id })
      .then(res => {
        setAddressList(res.data);
      })
      .then(err => {
        console.log(err);
      })
  }, [])

  const selectAddress = (index) => {
    const updatedArray = cartItems.map((item) => ({
      ...item,
      addressId: addressList[index]._id,
    }));
    const newArray = updatedArray.map(({ _id, ...rest }) => rest);
    console.log("delete item", newArray)
    setOrderList(newArray);
    setIsSelect(false)
  }

  const handleOrder = () => {
    axios.post('https://thread-zone-server.vercel.app/submitOrder', orderList)
      .then(res => {
        if (res.data.success === true) {
          Swal.fire({
            icon: 'success',
            title: 'Order Place successfully',
            text: 'product will delivery in 3 days'
          })
        }
      })
  }


  return (
    <div>
      <h2 className="text-center text-2xl font-poppins my-5"> Order List </h2>

      <div className="overflow-x-auto md:mx-40 md:my-10">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price </th>
              <th>Quantity</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map((item, index) =>
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.productName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              )
            }

          </tbody>
        </table>
        <h2 className="text-center text-2xl mx-auto font-poppins my-5">Total {totalPrice}</h2>
        <div className='flex flex-col justify-center'>
          <h2 className="text-center text-2xl font-poppins my-5"> Select Your Address </h2>
          <div className='grid grid-cols-3'>
            {
              addressList.map((add, index) =>
                <div key={index} className="form-control">
                  <label className="label cursor-pointer">
                    <input type="radio" name="radio-10" onClick={() => { selectAddress(index) }} className="radio checked:bg-red-500" />
                    <span className="label-text mr-auto ms-10">
                      Name :{add.fullName},<br />
                      Phone Number : {add.phoneNumber}, <br />
                      City: {add.city}<br />
                      Region : {add.region},<br />
                      Area : {add.area},<br />
                      City : {add.city},<br />
                      Address: {add.address}<br />
                    </span>
                  </label>
                </div>
              )
            }


          </div>
          <button type="button" disabled={isSelect} onClick={handleOrder} className='mx-auto btn btn-error text-center text-white my-5 '>Place Order</button>
        </div>

      </div>

    </div>
  );
};

export default Payment;