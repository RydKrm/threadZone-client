import React from 'react';
import { PieChart, Pie,  Tooltip, ResponsiveContainer } from 'recharts';


const VisitVsSells = (props) => {
    const data = props.data[0];
    const data01 = [
  { name: "Add To Cart", value: data.AddToCart},
  { name: "Total Visit", value: data.TotalVisit },
  { name: "Total Sells", value: data.TotalSells },
  { name: "Total Review",value: data.TotalReview}
  
];
    return (
        <div className='h-64 w-72 ms-20'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={30}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <h2 className="text-center text-md font-poppins text-violet-700">Sells Vs Price Vs Add To Cart Vs Review </h2>
        </div>
      
    );
};

export default VisitVsSells;