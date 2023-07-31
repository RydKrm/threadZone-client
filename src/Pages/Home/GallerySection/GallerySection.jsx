import React, { useEffect, useState } from 'react';

const GallerySection = () => {
    const [galleries, setGallery] = useState([]);

    useEffect(() => {
        fetch('./data/gallery.json')
            .then(res => res.json())
            .then(data => setGallery(gallery));
    }, []);
  console.log(galleries)
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <h1 className='text-4xl font-bold text-center my-10'>Gallery Area</h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {galleries.map(item => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={`Image ${item.id}`}
                        className='w-full h-56 object-cover'
                    />
                ))}
            </div>
        </div>
    );
};

export default GallerySection;
