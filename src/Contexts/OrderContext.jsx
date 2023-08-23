import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
    const [allOrder, setAllOrder] = useState([]);
    const { userInfo } = useContext(AuthContext);

    useEffect(() => {
        axios.post('https://thread-zone-server.vercel.app/getAllProduct', { userId: userInfo._id })
            .then((res) => {
                // console.log("order data => ",res.data);
                setAllOrder(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <OrderContext.Provider value={{ allOrder, setAllOrder }}>
            {children}
        </OrderContext.Provider>
    )

}

export { OrderProvider, OrderContext };