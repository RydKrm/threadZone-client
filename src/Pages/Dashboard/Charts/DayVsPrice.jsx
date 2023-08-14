import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label} from 'recharts';


const DayVsPrice = (params)=>{
   const chartData = params.data;
    return (
        <div className=' h-60 w-full'>
           <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 8" />
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
          <Legend />
           <Line type="monotone" dataKey="totalPrice" stroke="#8884d8" activeDot={{ r: 8 }} /> 
          <Line type="monotone" dataKey="totalProducts" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
     
    );
  
}

export default DayVsPrice;
