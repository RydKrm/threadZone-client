import { useState } from "react";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";
import RecommendedProduct from "../RecommendedProduct/RecommendedProduct";
import NewArrival from "../NewArrival/NewArrival";
const Home = () => {
  const [data, setData] = useState();
  //const find = 'logging';
  return (
    <div>
      <Banner></Banner>
      <RecommendedProduct></RecommendedProduct>
      <NewArrival></NewArrival>
      <GallerySection></GallerySection>
    </div>
  );
};

export default Home;
