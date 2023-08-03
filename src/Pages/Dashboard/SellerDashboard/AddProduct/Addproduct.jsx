import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Addproduct = () => {
  const {userInfo} = useContext(AuthContext);

  console.log("user information ",userInfo._id);
 

    return (
        <div>
                <h2 className="text-xl text-center">Seller Add Product</h2>
        </div>
    );
};

export default Addproduct;