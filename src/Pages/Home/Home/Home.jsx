import { useState } from "react";
import Banner from "../Banner/Banner";
const Home = () => {
    const [data,setData] = useState();
    //const find = 'logging';
    return (
      <div>
        <Banner></Banner>
      </div> 
    );
};

export default Home;
