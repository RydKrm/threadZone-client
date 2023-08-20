import React, { useEffect, useState } from 'react';

const GallerySection = () => {
    const [galleries, setGallery] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setGallery(data));
    }, []);
    return (
        <div className='max-w-screen-xl mx-auto my-5'>
            <h1 className='text-4xl uppercase my-10'>Gallery Area</h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {galleries.map(item => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={`Image ${item.id}`}
                        className='w-full h-56 object-cover rounded-md'
                    />
                ))}
            </div>
        </div>
    );
};

export default GallerySection;
