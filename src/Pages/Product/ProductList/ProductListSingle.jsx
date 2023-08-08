import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faHeart,faNotEqual} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductSingle = (params) => {
     const { userInfo} = useContext(AuthContext);
     const {_id,name,email} = userInfo
    const {id,image,category,productName,price,discount,totalReview,rating,totalSell,shopId,shopName,discription,quantity,color,size,totalVisit,} = params.item;
    const productInfo = {
     productId:id,
       productName,
        image,
       quantity:1,
       available:quantity,
       userId:_id,
       userName:name,
       shopId,
       shopName,
       status:'processing',
       addReview:'',
       isReturn:false,
       date: new Date().toISOString(),
       category,
       price,
       size
    }

    const handleAddProduct=()=>{
     console.log("product is submitted ");
     axios.post('http://localhost:5000/orderSubmit',productInfo)
     .then(res=>{
          console.log("product is added",res.data);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Product now add to Cart',
           })
     })
     .then(err=>{
          console.log(err);
     })
    }
  //console.log("Id =>",id)
  const wordsArray = discription.split(/\s+/);
  const first20WordsArray = wordsArray.slice(0, 20);
  const description = first20WordsArray.join(' ');
 
    return (
      <div className="group rounded bg-white shadow-xl overflow-hidden flex flex-col md:flex-row">
     <div className="relative w-3/5 ms-10 my-5">
        <img src={image} className="w-full h-80 shadow-md" /> 

    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition ">
     <a href="view.html" className="text-white text-lg w-9 h-9 rounded-full bg-cDarkBlue hover:bg-gray-800 transition flex  items-center justify-center " >
          <FontAwesomeIcon icon={faNotEqual} />

     </a>
     <a href="#" className="text-white text-lg w-9 h-9 rounded-full bg-cDarkBlue hover:bg-gray-800 transition flex items-center justify-center "  >
          <FontAwesomeIcon icon={faHeart} />
     </a> 
    </div>  
     </div>

    <div className="pt-8 pb-3 items-center">
         <Link  to={`productDetails/${id}`} className='flex w-full items-center' >
              <h4 className="uppercase font-medium text-xl mb-2 h-18 text-gray-800 hover:text-primary transition mx-auto">{productName} </h4> 
         </Link>

        <div className="  flex justify-center mb-1 space-x-2 " >
         <p className="text-xl text-primary font-roboto  font-semibold "> {price} </p>
         <p className="text-sm text-gray-400 font-roboto line-through "> {discount}%</p>
        </div>  
        <p className='font-xl font-poppins text-gray-600 text-center'>Stock Available : {quantity}</p>
        <div className="flex flex-col  w-88 items-center gap-4">
            <div className='flex flex-row justify-start'>
            <div className="flex gap-1 text-sm text-yellow-400 ">
               {Array.from({ length: rating }).map((item,index)=> <FontAwesomeIcon key={index} icon={faStar} />)} 
              
             </div>
             <div className="text-xs text-gray-500 ml-3 mt-1">Review : {totalReview}</div>
             <div className="text-xs text-gray-500 ml-3 mt-1">Sells : {totalSell}</div>
            </div>
             
             <div className='flex flex-row'>
              <div className="text-xs text-gray-500 ml-3 mt-1">Category : {category}</div>
             <div className="text-xs text-gray-500 ml-3 mt-1">Color : {color}</div>
             <div className="text-xs text-gray-500 ml-3 mt-1">Shop Name : {shopName}</div>
             </div>
             <div className='flex flex-row'>
             <div className="text-xs text-gray-500 ml-3 mt-1">Size : {size}</div>
             <div className="text-xs text-gray-500 ml-3 mt-1">totalVisit : {totalVisit}</div>         
             </div>
             <div className='font-poppins text-center px-5 py-3'><span className='font-bold'>Description : </span>{discription}</div>
        </div>
        <button onClick={handleAddProduct} className="block mx-auto w-32 py-1 text-center text-white bg-cDarkBlue border border-cLightBlue rounded-b font-medium hover:bg-transparent hover:text-primary transition " >
         Add To Cart 
    </button> 
    </div>

     
</div>
    );
};

export default ProductSingle;