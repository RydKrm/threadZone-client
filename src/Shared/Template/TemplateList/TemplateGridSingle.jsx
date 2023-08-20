import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faHeart,faNotEqual} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const TemplateGridSingle = (params) => {
      const { userInfo} = useContext(AuthContext);
     const {_id,name,email} = userInfo
    const {id,image,category,productName,price,discount,totalReview,rating,totalSell,shopId,shopName,quantity,size} = params.item;
     const currentDate = new Date();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();
    const year = currentDate.getFullYear().toString().substr(-2); 
    const formattedDate = `${day}-${month}-${year}`;
    const productInfo = {
     productId:params.item._id,
       productName,
        image,
       quantity:1, 
       available:quantity,
       userId:_id,
       userName:name,
       shopId,
       shopName,
       status:'approved',
       addReview:'',
       isReturn:false,
       date: formattedDate,
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
            title: 'Approve',
            text: 'Product now add to Product List',
           })
     })
     .catch(err=>{
          console.log(err);
     })
    }
    return (
      <div className="group rounded bg-white shadow-xl overflow-hidden ">
     <div className="relative ">
    <img src={image} className="w-full h-80 shadow-md" /> 
 
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition ">
     <Link  to={`productDetails/${id}`} className="text-white text-lg w-9 h-9 rounded-full bg-cDarkBlue hover:bg-gray-800 transition flex  items-center justify-center " >
          <FontAwesomeIcon icon={faNotEqual} />

     </Link>
     <a href="#" className="text-white text-lg w-9 h-9 rounded-full bg-cDarkBlue hover:bg-gray-800 transition flex items-center justify-center "  >
          <FontAwesomeIcon icon={faHeart} />
     </a> 
    </div>  
     </div>

    <div className="pt-4 pb-3 px-4 ">
         <Link  to={`../product/productDetails/${id}`}>
              <h4 className="uppercase font-medium text-xl mb-2 h-18 text-gray-800 hover:text-primary transition ">{productName} </h4> 
         </Link>

        <div className="flex items-baseline mb-1 space-x-2 " >
         <p className="text-xl text-primary font-roboto font-semibold "> {price} </p>
         <p className="text-sm text-gray-400 font-roboto  line-through "> {discount}%</p>
        </div> 
        <div className="flex items-center ">
             <div className="flex gap-1 text-sm text-yellow-400 ">
               {Array.from({ length: rating }).map((item,index)=> <FontAwesomeIcon key={index} icon={faStar} />)} 
              
             </div>
             <div className="text-xs text-gray-500 ml-3 mt-1">Review : {totalReview}</div>
             <div className="text-xs text-gray-500 ml-3 mt-1">Sells : {totalSell}</div>

        </div>
    </div>

    <button onClick={handleAddProduct} className="block w-full py-1 text-center text-white bg-cDarkBlue border border-cLightBlue rounded-b font-medium hover:bg-transparent hover:text-primary transition " >
         Add To Cart 
    </button>  
</div>
    );
};

export default TemplateGridSingle;