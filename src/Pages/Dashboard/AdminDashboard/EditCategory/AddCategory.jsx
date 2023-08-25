import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { getDownloadURL, ref, uploadBytes, getStorage } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { app } from '../../../../firebase/firebase.config';
const AddCategory = ({ categoryList }) => {
    const [categoryName, setCategoryName] = useState('');

    //for image upload 
    const Storage = getStorage(app)
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (event) => {
        const files = event.target.files;
        setSelectedImages([...files]);
    };

    const uniqueId = uuidv4();

    const uploadImages = async () => {
        const imageName = `${uniqueId}_${selectedImages[0].name}`;
        const imageRef = ref(Storage, `threadZone/image/${imageName}`);

        try {
            const snapshot = await uploadBytes(imageRef, selectedImages[0]);
            const imageUrl = await getDownloadURL(snapshot.ref);
            return imageUrl;
        } catch (error) {
            console.error("Error uploading image:", error);
            return null;
        }
    };


    const handleCategory = async (e) => {
        e.preventDefault();
        for (var i = 0; i < categoryList.length; i++) {
            if (categoryList[i].category === categoryName) {
                Swal.fire({
                    title: ` "${categoryName}" is already Exist !!`,
                    icon: 'error',
                })
                // console.log("Category Looping test ");
                return;
            }
        }



        if (categoryName.length < 3) {
            Swal.fire({
                title: 'Name must have 3 latter !!',
                icon: 'question',
            })
        } else {
            const imageURL = await uploadImages();
            console.log("Image url => ", imageURL);
            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'info',
                title: 'Wait for image upload'
            })

            //set Time out 

            setTimeout(() => {
                const categoryObject = {
                    category: categoryName,
                    image: imageURL
                }
                axios.post('https://thread-zone-server.vercel.app/addCategory', categoryObject)
                    .then((res) => {
                        if (res.data.status) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Category Add successfully'

                            })
                        }
                    })
                    .then((err) => {
                        console.log(err);
                    })

            }, 5000)


        }
    }
    return (

        <div className='ms-14 mt-10'>
            <form method="post" className='flex flex-col'>
                <input type="file" multiple onChange={handleImageChange} placeholder="Category Image" name='image' className="input input-bordered w-[280px] max-w-xs mx-5 my-3 border  " required />
                <input type="text" name="Category" id="category" onBlur={(e) => { setCategoryName(e.target.value) }} placeholder='Add Category' className='input input-bordered  w-2/3 mt-2' />
                <button type="submit" onClick={handleCategory} className='btn btn-info text-white mt-5 w-36 font-medium font-poppins'>Add Category</button>
            </form>
        </div>

    );
};

export default AddCategory;