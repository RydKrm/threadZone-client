import React, { useContext, useEffect, useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { getDownloadURL, ref, uploadBytes, getStorage } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { app } from '../../../../firebase/firebase.config';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CustomerAddReview = () => {

  const { userInfo } = useContext(AuthContext);
  const [isImage, setIsImage] = useState(false);

  //firebase config 
  const Storage = getStorage(app)

  const id = useParams()._id;
  const [productData, setProductData] = useState({});
  const [review, setReview] = useState({});
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.post('https://thread-zone-server.vercel.app/getSingleOrder', { id })
      .then((res) => {
        setProductData(res.data[0]);
        const { productName, productId, shopName, shopId, image } = res.data[0];
        setReview({
          productName,
          productId,
          orderId: id,
          shopName,
          shopId,
          image,
          userName: userInfo.name,
          userImage: userInfo.photoURL,
          userId: userInfo._id,
          status: 'reviewed',
          postDate: new Date().toISOString(),
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const [stars, setStars] = useState([0, 0, 0, 0, 0]);

  //Image Upload 
  const [selectedImages, setSelectedImages] = useState([]);
  const handleImageChange = (event) => {
    setIsImage(true)
    const files = event.target.files;
    setSelectedImages([...files]);
  };
  const uniqueId = uuidv4();
  const uploadImages = async () => {
    let imageUrls = [];


    for (const image of selectedImages) {
      const imageName = `${uniqueId}_${image.name}`;
      const imageRef = ref(Storage, `threadZone/image/${imageName}`);
      uploadBytes(imageRef, image)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              console.log("Image url => ", url);
              imageUrls.push(url);
            })
        })
    }
    return imageUrls;
  };
  const addStar = (star) => {

    const newStars = Array(5).fill(0);
    for (var i = 0; i < star; i++) {
      newStars[i] = 1;
    }
    setStars(newStars);
    setReview(value => ({ ...value, 'rating': star }))

  }

  const handleReview = async (e) => {
    e.preventDefault();
    let allImage;
    allImage = await uploadImages();

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
    setTimeout(() => {
      console.log("All Images ", allImage);
      let newArray = { ...review, image: allImage, description: description };
      axios.post('https://thread-zone-server.vercel.app/addReview', newArray)
        .then(res => {
          if (res.data.status) {
            Swal.fire({
              icon: "success",
              title: "Review Add Successfully",
              text: "See your review List",
              timer: 2000
            })
          }
        })
        .then(err =>
          console.log(err)
        )
    }, 8000);


  }



  return (
    <div className='mt-4 mx-10'>
      <h2 className="text-2xl text-center font-poppins">Add Reviews </h2>
      <form method="post" className='my-5 '>
        <div className='flex flex-col'>
          <label htmlFor="Review" className='text-lg font-poppins text-left'></label>
          <ReactQuill theme="snow" value={description} onChange={setDescription} className='h-64 mb-12 ' />
        </div>
        <div className="flex flex-row my-5">
          <h2 className="text-xl font-poppins me-5">Give Star : </h2>
          {
            stars.map((star, index) =>
              <FontAwesomeIcon key={index}
                className={`text-xl text-gray-400 cursor-pointer ${stars[index] === 1 && 'text-yellow-400'}`}
                onClick={() => { addStar(index + 1) }} icon={faStar} />)
          }

        </div>
        <div className='flex flex-row my-3'>
          <h2 className="text-xl font-poppins">Upload Image </h2>
          <input type="file" multiple onChange={handleImageChange} className='mx-5' />
        </div>
        <button className='text-xl w-36 bg-cDarkBlue text-white px-10 py-3 font-poppins  rounded-md my-3' onClick={handleReview}>Sent</button>
      </form>
    </div>
  );
};

export default CustomerAddReview;