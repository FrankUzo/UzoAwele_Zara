import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { Secondslides } from "../assets/assets";

const Home = () => {
  return (
    <div className="home">
      <div className="absolute top-0 h-screen w-full">
        <Carousel Secondslides={Secondslides}>
          {Secondslides.map((slide, index) => (
            <img
              className="relative w-screen h-screen object-cover flex-shrink-0"
              key={index}
              src={slide.mainImage}
              alt=""
            />
          ))}
        </Carousel>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
