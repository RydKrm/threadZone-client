import { useState } from "react";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";
const Home = () => {
  const [data, setData] = useState();
  //const find = 'logging';
  return (
    <div>
      <Banner></Banner>
      <GallerySection></GallerySection>
    </div>
  );
};

export default Home;
