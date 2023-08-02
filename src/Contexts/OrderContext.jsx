import axios from "axios";
import { createContext, useEffect, useState } from "react";

const OrderContext = createContext();

const OrderProvider = ({children}) =>{
    const [allOrder,setAllOrder] = useState([]);
   
    useEffect(()=>{
     axios.post('http://localhost:5000/getAllProduct',{userId:120})
     .then((res)=>{
       // console.log("order data => ",res.data);
        setAllOrder(res.data);
     }) 
     .catch(err=>{
        console.log(err);
     })
    },[])

    return(
        <OrderContext.Provider value={{allOrder,setAllOrder}}>
            {children}
        </OrderContext.Provider>
    )

}

export {OrderProvider,OrderContext};