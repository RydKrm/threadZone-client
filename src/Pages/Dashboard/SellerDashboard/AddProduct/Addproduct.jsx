import axios, { Axios } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from '../../../../firebase/firebase.config';
import { v4 as uuidv4 } from 'uuid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const AddProduct = () => {

  const { userInfo } = useContext(AuthContext);
  const [selectedImages, setSelectedImages] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [description, setDescription] = useState('');

  //firebase config 
  const Storage = getStorage(app)

  //Shop Error Handle
  let shopName = 'Shop Name Here';
  let shopId = 'Shop Id here ';
  if (userInfo.shopName || userInfo.shopId) {
    shopName = userInfo.shopName;
    shopId = userInfo.shopId;
  }

  const initialValue = {
    rating: 0,
    shopName,
    shopId,
    updateDate: new Date().toISOString(),
    userId: userInfo._id,
    addToCart: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
    totalVisit: Math.floor(Math.random() * (800 - 300 + 1)) + 300,
    totalSell: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
    totalReview: Math.floor(Math.random() * (20 - 5 + 1)) + 5,
    status: 'pending'
  }
  const [productInfo, setProductInfo] = useState(initialValue)


  useEffect(() => {
    axios.get('https://thread-zone-server.vercel.app/getAllCategory')
      .then(res => {
        setCategoryList(res.data);
      })
      .then(err => {
        console.log(err);
      })
  }, [])

  const handleImageChange = (event) => {
    const files = event.target.files;
    setSelectedImages([...files]);
  };
  const uniqueId = uuidv4();
  const uploadImages = async () => {
    let imageUrls = [];
    for (const image of selectedImages) {
      const imageName = `${uniqueId}_${image.name}`;
      const imageRef = ref(Storage, `threadZone/image/${imageName}`);
      await uploadBytes(imageRef, image)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              imageUrls.push(url);
            })
        })
    }
    return imageUrls;
  };

  const addInfo = (e) => {
    setProductInfo(value => ({ ...value, [e.target.name]: e.target.value }));
  }

  const handleProduct = async (e) => {
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 8000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'info',
      title: 'Waiting for image being uploaded !! '
    })
    const allImage = await uploadImages();

    console.log("all Images ", allImage);
    // setProductInfo(value=>({...value,image:allImage}));
    const newArray = { ...productInfo, image: allImage, description: description };
    console.log("New Array ", newArray);
    axios.post('https://thread-zone-server.vercel.app/addProduct', newArray)
      .then(res => {
        console.log('Add Product ', res.data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'A request goes to admin ',
          showConfirmButton: false,
          timer: 1500
        })
        setProductInfo(initialValue)
      })
      .then(err => {
        console.log(err);
      })
  }


  return (
    <div>
      <h2 className="text-xl font-poppins text-center">Seller Add Product</h2>
      <form method="post" className='flex flex-col mb-6' >
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
          <input type="file" multiple onChange={handleImageChange} placeholder="Image" name='image' className="input input-bordered w-[280px] max-w-xs mx-5 my-3 border  " required />
          <div className="dropdown w-full max-w-xs">
            <select onChange={addInfo} name='category' placeholder='Select Category' className=" p-2 shadow bg-base-100 rounded-box w-52 my-3 max-w-xs input mx-5 text-gray-400 font-medium input-bordered">
              <option >Select Category </option>
              {
                categoryList.map((cat, index) =>
                  <option key={index} value={cat.category}>{cat.category}</option>
                )
              }
            </select>
          </div>

        </div>
        <div className='my-3 mx-5'>
          <ReactQuill theme="snow" value={description} onChange={setDescription} className='h-64 mb-12 ' />
        </div>

        <button type="submit" className='btn btn-active btn-neutral mx-5' onClick={handleProduct}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;