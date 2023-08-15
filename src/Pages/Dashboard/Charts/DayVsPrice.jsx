import React from 'react';
import { AreaChart,Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,} from 'recharts';


const DayVsPrice = (params)=>{
   const chartData = params.data;
    return (
        <div className=' h-60 w-full'>
           <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="totalPrice" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="totalProducts" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
     
    );
  
}

export default DayVsPrice;
