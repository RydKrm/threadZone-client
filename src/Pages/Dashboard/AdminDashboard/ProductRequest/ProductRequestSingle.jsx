import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const ProductRequestSingle = ({product}) => {

    const handleApprove =(status)=>{
        const newProduct= {...product,status};
       // console.log("new Product ",newProduct);

        if(status==='approve'){
         Swal.fire({
            icon: 'success',
            title: 'Approve',
            text: 'Product now add to Product List',
           })
        } else if(status==='denied'){
         Swal.fire({
            icon: 'error',
            title: 'Delete',
            text: 'Product is Deleted',
           })
        }

        axios.post('http://localhost:5000/adminProductApprove',newProduct)
        .then(res=>{
            console.log('product status ',res.data);
        })
        .then(err=>{
            console.log(err);
        })

    }
  

    return (
        <div className='m-4 cart font-poppins shadow-lg py-4'>
           <img src={product.image} alt="product image" />
           <h2 className='text-xl'>{product.productName}</h2>
           <h3 className='text-md text-gray-600'>{product.category}</h3>
           <p>Shop : {product.shopName}</p>
           <div className="flex flex-row">
            <p className='me-3'>Price : {product.price}</p>
           <p>Previous Price  : {product.discount}</p>
           </div>
           <div className='flex divide-x-8 divide-cLightWhite'> 
           <p>Quantity: {product.quantity}</p>
           <p>Color : {product.color}</p>
           <p>Size : {product.size}</p>
           </div>
           <div className="flex flex-row justify-evenly mt-3">
             <button type="button" onClick={()=>{handleApprove('approve')}} className='btn btn-success text-white'>Approve</button>
             <button type="button" onClick={()=>{handleApprove('denied')}}  className='btn btn-error text-white'>Denied</button>

           </div>
        </div>
    );
};

export default ProductRequestSingle;