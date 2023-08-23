import React, {useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './GallerySection.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const GallerySection = () => {
    const [galleries, setGallery] = useState([]);

    useEffect(() => {
        fetch('https://thread-zone-server.vercel.app/gallery')
            .then(res => res.json())
            .then(data => setGallery(data));
    }, []);
    return (
        <div className='max-w-screen-xl mx-auto my-5'>
            <h1 className='text-4xl uppercase my-10'>Gallery Area</h1>
            {/* <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'> */}
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper">
                {galleries.map(item => (
                     <SwiperSlide>
                        <div className='w-[400px] h-48'>
                    <img
                        key={item.id}
                        src={item.image}
                        alt={`Image ${item.id}`}
                        className='rounded-md'
                    />
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>

             
       
      
        // </div>
    );
};

export default GallerySection;
