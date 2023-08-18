import { useState } from "react";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";
import RecommendedProduct from "../RecommendedProduct/RecommendedProduct";
const Home = () => {
  const [data, setData] = useState();
  //const find = 'logging';
  return (
    <div>
      <Banner></Banner>
      <RecommendedProduct></RecommendedProduct>
      <GallerySection></GallerySection>
    </div>
  );
};

export default Home;
