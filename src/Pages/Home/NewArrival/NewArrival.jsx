import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleNewArrival from '../SingleNewArrival/SingleNewArrival';

const NewArrival = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from the API using Axios
        axios.get('https://thread-zone-server.vercel.app/newArrival')
            .then(response => {
                // Sort the data by update date in ascending order

                const data = response.data;

                setProducts(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Display the most recent 4 entries


    return (
        <section className='mt-10'>
            <h1 className='text-4xl uppercase my-5'>New Arrival</h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[400px]">
                    {products.map(singleArrivalProduct =>

                        <SingleNewArrival
                            key={singleArrivalProduct._id}
                            singleArrivalProduct={singleArrivalProduct}
                        ></SingleNewArrival>
                    )}
                </div>
            </div>
        </section>
    );
};

export default NewArrival;
