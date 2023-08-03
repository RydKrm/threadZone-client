import React, { useState } from 'react';

function EditCategory() {
const [categoryName,setCategoryName] = useState('');


    return (
        <div className='mt-3'>
          <h2 className='text-center text-2xl font-poppins'>Edit Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
            <div className='ms-14'>
                <h1 className="text-xl font-poppins">Add Category</h1>
                <form method="post" className='flex flex-col'>
                    <input type="text" name="Category" id="category" onBlur={()=>{setCategoryName(e.target.value)}} className='input input-bordered  w-2/3 mt-2' />
                    <button type="submit" className='btn btn-info text-white mt-5 w-40 font-medium font-poppins'>Add Category</button>
                </form>
            </div>
            <div>
                <h1 className="text-xl text-center font-poppins">Delete Category </h1>
            </div>
          </div>
        </div>
    );
}

export default EditCategory;