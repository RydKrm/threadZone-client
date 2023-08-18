import React, { useState, useEffect } from 'react';
import SingleRecommendedProduct from '../singleRecommendedProduct/singleRecommendedProduct';
import axios from 'axios';


const RecommendedProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                const data = response.data;
                const topRatedProducts = data.filter(product => product.rating >= 4.5);
                setProducts(topRatedProducts.slice(0, 6));
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <section>
            <h1 className='text-4xl uppercase my-5'>Recommended For You</h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
