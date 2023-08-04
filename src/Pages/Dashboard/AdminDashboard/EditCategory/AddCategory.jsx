import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import Swal from 'sweetalert2';
const AddCategory = ({categoryList}) => {
    const [categoryName,setCategoryName] = useState('');

    const handleCategory  = (e)=>{
        e.preventDefault();
        for(var i=0;i<categoryList.length;i++){
               if(categoryList[i].category===categoryName){
                Swal.fire({
                title:  ` "${categoryName}" is already Exist !!`,
                icon: 'error',
                })
             console.log("Category Looping test ");
                return ;
               }
        }
        
    

        if(categoryName.length<3){
            Swal.fire({
            title: 'Name must have 3 latter !!',
            icon: 'question',
        })
        } else {
            const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })

            Toast.fire({
            icon: 'success',
            title: 'Category add successfully'
            })
        
        axios.post('http://localhost:5000/addCategory',{category:categoryName})
        .then((res)=>{
            console.log('category Answer ',res.data);
        })
        .then((err)=>{
            console.log(err);
        }) 
        }

       

    }
    return (
      
            <div className='ms-14 mt-10'>
                <form method="post" className='flex flex-col'>
                    <input type="text" name="Category" id="category" onBlur={(e)=>{setCategoryName(e.target.value)}} placeholder='Add Category' className='input input-bordered  w-2/3 mt-2' />
                    <button type="submit" onClick={handleCategory} className='btn btn-info text-white mt-5 w-36 font-medium font-poppins'>Add Category</button>
                </form>
            </div>
            
    );
};

export default AddCategory;