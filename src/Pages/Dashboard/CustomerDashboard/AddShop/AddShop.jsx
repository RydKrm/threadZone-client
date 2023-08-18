import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddShop = () => {
    const {userInfo} = useContext(AuthContext);
     const [shop,setShop] = useState({status:'pending',userId:userInfo._id});
  //  console.log("User information",user?.email)

    const addShop = (e)=>{
       setShop(value=>({...value,[e.target.name]:e.target.value}));
    }

    const handleShop = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/addShop',shop)
        .then(res=>{
            console.log("addProduct",res.data);
            Swal.fire({
                icon:"success",
                title:"Shop Created successfully",
                text:"request goes to Admin Wait for confirm!!",
                timer:2000,
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
    <div>
       <h2 className="text-3xl font-poppins text-center">Create Shop </h2>
       <form method="post" className='flex flex-col  gap-5 mx-10 mt-5'>
        <div className="flex flex-row gap-x-4 w-full">
            <input type="text" onBlur={addShop} placeholder="Shop Name" className="input input-bordered input-info w-1/2 " name="shopName" />
            <input type="text" onBlur={addShop}  placeholder="Banner Image" className="input input-bordered input-info w-1/2" name="image" />
        </div>
        <div>
            <textarea className="textarea textarea-info w-full" onBlur={addShop}  name="description" rows={6}  placeholder="Description"></textarea>
        </div>
        <button type="submit" className='btn btn-neutral' onClick={handleShop}>Create Shop </button>
       </form>
    </div>
    );
};

export default AddShop;