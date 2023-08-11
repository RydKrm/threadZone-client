import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const useSeller = () => {
    const { user } = useContext(AuthContext);

    const { data: isSeller, isLoading: isSellerLoading } = useQuery({
        queryKey: ['isSeller', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/seller/${user?.email}`);
            return res.json();
        }
    });


    return [isSeller?.seller, isSellerLoading];
}

export default useSeller