import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const TemplateDetailsInformation = ({ productData }) => {
     const [changedQuantity, setChangeQuantity] = useState(1);

     const { userInfo } = useContext(AuthContext);
     const { _id, name, email } = userInfo
     const { id, image, category, productName, price, discount, totalReview, rating, totalSell, shopId, shopName, quantity, size, color } = productData;
     const currentDate = new Date();
     const month = currentDate.getMonth() + 1;
     const day = currentDate.getDate();
     const year = currentDate.getFullYear().toString().substr(-2);
     const formattedDate = `${day}-${month}-${year}`;

     const [productInfo, setProductInfo] = useState({});

     useEffect(() => {
          setProductInfo({
               productId: productData._id,
               productName,
               image,
               quantity: 1,
               available: quantity,
               userId: _id,
               userName: name,
               shopId,
               shopName,
               status: 'approved',
               addReview: '',
               isReturn: false,
               date: formattedDate,
               category,
               price,
               size
          });
     }, [productData, _id, name, quantity, formattedDate, category, price, size])

     const handleQuantity = (change) => {
          if (change && changedQuantity === quantity) {
               Swal.fire({
                    icon: 'error',
                    title: 'Not Available',
                    text: `Only ${quantity} product is available in shop`,
                    timer: 2000
               })
               return;
          } else if (!change && changedQuantity === 1) {
               Swal.fire({
                    icon: 'error',
                    title: 'Not Decrease ',
                    text: 'You can not add zero product to cart',
                    timer: 2000,
               })
               return;
          }
          setChangeQuantity((prevQuantity) => prevQuantity + (change ? 1 : -1));
          setProductInfo((prevProductInfo) => ({
               ...prevProductInfo,
               quantity: prevProductInfo.quantity + (change ? 1 : -1),
          }));
     }

     const handleAddProduct = () => {
          console.log("product Information ", productInfo)
          axios.post('https://thread-zone-server.vercel.app/orderSubmit', productInfo)
               .then(res => {
                    if (res.data.status) {
                         Swal.fire({
                              icon: 'success',
                              title: 'Approve',
                              text: 'Product now add to Product List',
                              timer: 2000
                         })
                    } else {
                         Swal.fire({
                              icon: 'warning',
                              title: 'Found One',
                              text: 'This product is already found in your cart',
                              timer: 2000
                         })
                    }

               })
               .catch(err => {
                    console.log(err);
               })
     }
     return (
          <div className='ms-5'>
               <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2" >{productName}</h2>
               <div className="flex items-center mb-4">
                    <div className="flex gap-1 text-sm text-yellow-400 ">
                         {Array.from({ length: rating }).map((item, index) => <FontAwesomeIcon key={index} icon={faStar} />)}
                    </div>
                    <div className="text-xs text-gray-500 ml-3">({totalReview} Reviews)</div>
               </div>

               <div className="space-y-2">
                    <p className="text-gray-800 font-semibold space-x-2 ">
                         <span>Availability : </span>
                         <span className="text-green-600" >{quantity} In Stock </span>
                    </p>

                    <p className="text-gray-800 font-semibold space-x-2 ">
                         <span>Shop Name : </span>
                         <span className="text-gray-600" >{shopName}</span>
                    </p>

                    <p className="text-gray-800 font-semibold space-x-2 ">
                         <span>Category : </span>
                         <span className="text-gray-600" > {category} </span>
                    </p>
               </div>

               <div className="mt-4 flex items-baseline gap-3 ">
                    <span className="text-primary font-semibold text-xl ">${price}</span>
                    <span className="text-gray-500 text-base line-through">${parseInt(price) + parseInt(discount)}</span>
               </div>



               {/* <!-- ---- Size filter ---> */}
               <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">Size </h3>
                    <div className="flex items-center gap-2">
                         {/* <!-- ---- Single Size ---> */}
                         <div className="size-selector">
                              <input type="radio" name="size" className="hidden" id={size} />
                              <label htmlFor={size} className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 " >{size}</label>
                         </div>
                         {/* <!-- ---- End Single Size ---> */}
                    </div>
               </div>
               {/* <!-- ---- End Size filter --->

<!-- ----  Color filter ---> */}
               <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">Color </h3>

                    <div className="flex items-center gap-2">
                         {/* <!-- ---- Single Color ---> */}
                         <div className="color-selector">
                              <input type="radio" name="color" className="hidden" id={color} />
                              <label htmlFor={color} style={{ backgroundColor: color }} className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm" ></label>

                         </div>
                    </div>
               </div>

               {/* <!-- ---- End Color filter --->  */}

               {/* <!-- ---- Quantity --->  */}
               <div className="mt-4">
                    <h3 className="text-base text-gray-800 mb-1" >Quantity</h3>
                    <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max ">
                         <button onClick={() => { handleQuantity(false) }} className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"> -  </button>
                         <div className="h-8 w-10 flex items-center justify-center"> {changedQuantity} </div>
                         <button onClick={() => { handleQuantity(true) }} className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"> +  </button>

                    </div>
               </div>
               {/* <!-- ---- End Quantity --->  */}


               {/* <!-- ---- ADD TO CART BUTTON --->  */}

               <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6 ">
                    <button onClick={handleAddProduct} className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm flex items-center " >
                         <span className="mr-2"><i className="fas fa-shopping-bag"></i> </span>
                         Add to Cart
                    </button>

                    <button href="#" className="border border-gray-600 text-gray-600 px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm flex items-center " >
                         <span className="mr-2"><i className="fas fa-heart"></i> </span>
                         Add Compare List
                    </button>

               </div>
          </div>
     );
};

export default TemplateDetailsInformation;