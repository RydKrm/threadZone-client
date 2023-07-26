import React from 'react';

const Product = () => {
    return (
        <div className='grid grid-cols-3 gap-2 '>
            <h2 className=' text-xl bg-lightBlue text-dark '> Product Page </h2>
            <h2 className="font-xl text-dark bg-lightBlue"> 1/4 width will be taken from full width </h2>
            <h2 className=' text-2xl text-dark bg-lightBlue'> 1/2 width will be taken from full width </h2>
        </div>
    );
};

export default Product;