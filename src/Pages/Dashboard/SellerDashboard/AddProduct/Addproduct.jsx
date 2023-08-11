import axios, { Axios } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddProduct = () => {

  const {userInfo} = useContext(AuthContext);
  const initialValue = {
     rating:0,
    shopName : 'Apple',
    shopId: '64ca47a407cebd919c20e4f2',
    updateDate : new Date().toISOString(),
    userId:userInfo._id,
    rating:0,
    addToCart:0,
    totalVisit:0,
    totalSell:0,              
    totalReview:0,
    status:'pending'
  }
  const [productInfo,setProductInfo] = useState(initialValue)
  
  const [categoryList,setCategoryList] = useState([]);

  useEffect(()=>{
   axios.get('http://localhost:5000/getAllCategory')
   .then(res=>{
    setCategoryList(res.data);
   })
   .then(err=>{
    console.log(err);
   })
  },[])
  
  const addInfo = (e)=>{
        setProductInfo(value=>({...value,[e.target.name]:e.target.value}));
  }

  const handleProduct = (e)=>{
    e.preventDefault();
   console.log("Product Information ",productInfo)
  axios.post('http://localhost:5000/addProduct',productInfo)
  .then(res=>{
    console.log('Add Product ',res.data);
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'A request goes to admin ',
    showConfirmButton: false,
    timer: 1500
})
   setProductInfo(initialValue)
  })
  .then(err=>{
    console.log(err);
  })

  }
 

    return (
        <div>
                <h2 className="text-xl font-poppins text-center">Seller Add Product</h2>
             <form method="post" className='flex flex-col mb-6'>
               <div className="flex flex-col md:flex-row my-3">
                <input type="text" onBlur={addInfo} placeholder="Product Name" name='productName' className="input input-bordered w-full max-w-xs mx-5 my-3 border  " required />
                
                <input type="number" onBlur={addInfo} placeholder="Price" name='price' className="input input-bordered w-full max-w-xs mx-5 my-3 border  " required />
                <input type="number" onBlur={addInfo} placeholder="Discount Price" name='discount' className="input input-bordered w-full max-w-xs mx-5 my-3 border  " required />
               </div>
               <div className="flex flex-col md:flex-row my-3">
                <input type="number" onBlur={addInfo} placeholder="Product quantity" name='quantity' className="input input-bordered w-full max-w-xs mx-5 my-3 border  " required />
                <input type="text" onBlur={addInfo} placeholder="Product color" name='color' className="input input-bordered w-full max-w-xs mx-5 my-3 border  " required />
                <input type="text" onBlur={addInfo} placeholder="Product Size" name='size' className="input input-bordered w-full max-w-xs mx-5 my-3 border  " required />
               </div>

               <div className="flex flex-col md:flex-row my-3">
                <input type="text" onBlur={addInfo} placeholder="Image" name='image' className="input input-bordered w-[280px] max-w-xs mx-5 my-3 border  " required />
                <div className="dropdown w-full max-w-xs">
                  <select onChange={addInfo} name='category' placeholder='Select Category' className=" p-2 shadow bg-base-100 rounded-box w-52 my-3 max-w-xs input mx-5 text-gray-400 font-medium input-bordered">
                   <option >Select Category </option>
                    {
                      categoryList.map((cat,index)=>
                       <option key={index} value={cat.category}>{cat.category}</option>
                        )
                    }
                  </select>
                </div>

                </div>
                <div className='my-3 mx-5'>
                  <textarea onBlur={addInfo} name='discription' className="textarea textarea-bordered w-full" rows={10} placeholder="Description"></textarea>
                </div>
                
                <button type="submit" className='btn btn-active btn-neutral mx-5' onClick={handleProduct}>Add Product</button>
             </form>   
        </div>
    );
};

export default AddProduct;