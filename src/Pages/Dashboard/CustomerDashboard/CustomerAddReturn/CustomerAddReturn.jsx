import {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import {getStorage, getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {app} from '../../../../firebase/firebase.config';
import {v4 as uuidv4} from 'uuid';

const CustomerAddReturn = () => {
    const id = useParams()._id;
   const [productData,setProductData] = useState({});
   const [review,setReview] = useState({});
   const {userInfo} = useContext(AuthContext);

     const [isImage,setIsImage] = useState(false);

    //firebase config 
  const Storage = getStorage(app);

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
    
      
    for(const image of selectedImages) {
     const imageName = `${uniqueId}_${image.name}`; 
  const imageRef = ref(Storage,`threadZone/image/${imageName}`);
   uploadBytes(imageRef,image)
  .then((snapshot)=>{
    getDownloadURL(snapshot.ref)
     .then((url)=>{
     // console.log("Image url => ",url);
      imageUrls.push(url);
     })
  })
    }
  return imageUrls;
};

   useEffect(()=>{
     axios.post('http://localhost:5000/getSingleOrder',{id})
   .then((res)=>{
      console.log("product data ",res.data);
       setProductData(res.data[0]);
        const {productName,productId,shopName,shopId,image} = res.data[0];
   setReview({
        productName,
        productId,
        orderId:id,
        shopName,
        shopId,
        image,
        userName:userInfo.name,
        userImage:userInfo.photoURL,
        userId : userInfo._id,
        status:'returned',
        postDate : new Date().toISOString(),
    })
   })
   .catch((err)=>{
        console.log(err);
   })
   },[])  

    const addReview =(e)=>{
     setReview (value=>({...value,[e.target.name]:e.target.value}))
    }

   const handleReview = async(e)=>{
        e.preventDefault();
      let allImage;
        if(isImage){
           allImage =  await uploadImages();
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


        }
        
          setTimeout(() => {
            let newArray = review;
            if(isImage){
            newArray = {...review,image:allImage};
            } 

         axios.post('http://localhost:5000/addReview',newArray)
          .then(res=>{
            if(res.data.status){
              Swal.fire({
                icon: "success",
                title: "Review Add Successfully",
                text: "See your review List",
                timer : 2000
              })
            }
          })
      .then(err=>
        console.log(err)
        
        )
          }, 4000);
    }

    

    return (
        <div className='mt-4 mx-10'>
            <h2 className="text-2xl text-center font-poppins">Add Return Reason </h2>
            <form  method="post" className='my-5 '>
                <div className='flex flex-col'>
                  <label htmlFor="Review" className='text-lg font-poppins text-left'></label>
                <textarea onBlur={addReview} className='p-5 border border-cLightBlue rounded' name="description" id="Review" cols="30" rows="7"></textarea>  
                </div>
                <div className='flex flex-row my-3'>
                    <h2 className="text-xl font-poppins">Upload Image </h2>
                    <input type="file" multiple onChange={handleImageChange} className='mx-5'/>
                </div>
                <button className='text-xl w-36 bg-cDarkBlue text-white px-10 py-3 font-poppins  rounded-md my-3' onClick={handleReview}>Sent</button>
            </form>
        </div>
    );
};

export default CustomerAddReturn;