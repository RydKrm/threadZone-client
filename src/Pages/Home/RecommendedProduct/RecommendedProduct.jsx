import React, { useState, useEffect } from 'react';
import SingleRecommendedProduct from '../singleRecommendedProduct/singleRecommendedProduct';
import axios from 'axios';


const RecommendedProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://thread-zone-server.vercel.app/recomended')
            .then(response => {
                const data = response.data;

                setProducts(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <section>
            <h1 className='text-4xl uppercase my-5'>Recommended For You</h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[400px]">
                    {products.map(singleProduct =>
                        <SingleRecommendedProduct
                            key={singleProduct._id}
                            singleProduct={singleProduct}
                        ></SingleRecommendedProduct>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RecommendedProduct;
