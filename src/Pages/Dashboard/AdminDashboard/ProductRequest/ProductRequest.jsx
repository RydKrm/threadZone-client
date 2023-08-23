import React, { useEffect, useState } from 'react';
import ProductRequestSingle from './ProductRequestSingle';
import axios from 'axios';

const ProductRequest = () => {

    const [allProduct, setAllProduct] = useState([]);


    useEffect(() => {
        axios.get('https://thread-zone-server.vercel.app/getApproveProduct')
            .then(res => {
                setAllProduct(res.data);
            })
            .then(err => {
                console.log(err);
            })
    }, [])


    return (
        <div>
            <h1 className="text-xl text-center font-poppins">Admin Product Request </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    allProduct.map((product) =>
                        <ProductRequestSingle key={product._id} product={product} />
                    )
                }

            </div>
        </div>
    );
};

export default ProductRequest;