import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReturnDetails = () => {
    const params = useParams();
    const [data, setData] = useState([]);

    const returnFun = async () => {
        try {
            const res = await axios.post('https://thread-zone-server.vercel.app/getSingleReview', { id: params.id });
            setData(res.data);
            // console.log('review data ', res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        returnFun();
    }, [params.id]);

    return (
        <div className='mx-10'>
            {/* Check if data[0] exists before accessing its properties */}
            {data.length > 0 ? (
                <div className="container flex flex-col font-poppins mt-10">
                    <div className="flex flex-col">
                        <img src={data[0].userImage} className='rounded-full w-20 h-20 ms-3' alt="User Image" />
                        <h2 className="font-poppins text-md">{data[0].userName}</h2>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-xl">Product Name : {data[0].productName}</h2>
                        <h2 className='text-lg text-gray-600' >Shop Name : {data[0].shopName}</h2>
                        <h2 className='text-md'>Status: {data[0].status}</h2>
                    </div>
                    {
                        data[0].status === 'returned' && <div className="text-md">Return Reason : {data[0].description}</div>
                    }
                    {
                        data[0].status === 'reviewed' && <div className="text-md">
                            <h2> Review : {data[0].description} </h2>
                            <h3>Rating : {data[0].rating}</h3>
                        </div>
                    }
                </div>
            ) : (
                <p>Could not find Product </p>
            )}
        </div>
    );
};

export default ReturnDetails;
