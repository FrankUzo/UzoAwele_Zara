import React from "react";
import Carousel from "../components/Carousel";
// import { slides } from "../assets/carousel";
import carousel_img1 from "../assets/Cp_img1.jpg";
import carousel_img2 from "../assets/Cp_img2.jpg";
import carousel_img3 from "../assets/Cp_img3.jpg";
import carousel_img4 from "../assets/Cp_img4.jpg";
import carousel_img5 from "../assets/Cp_img5.jpg";
import sub_carousel_img1 from "../assets/SCp_img1.jpg";
import sub_carousel_img2 from "../assets/SCp_img2.jpg";
import sub_carousel_img3 from "../assets/SCp_img3.jpg";
import sub_carousel_img4 from "../assets/SCp_img4.jpg";
import sub_carousel_img5 from "../assets/SCp_img5.jpg";
import sub_carousel_img6 from "../assets/SCp_img6.jpg";
import sub_carousel_img7 from "../assets/SCp_img7.jpg";
import sub_carousel_img8 from "../assets/SCp_img8.jpg";
import sub_carousel_img9 from "../assets/SCp_img9.jpg";
import sub_carousel_img10 from "../assets/SCp_img10.webp";
import sub_carousel_img11 from "../assets/SCp_img11.jpg";
import sub_carousel_img12 from "../assets/SCp_img12.jpg";
import Footer from "../components/Footer";
// import NewCarousel from "../components/NewCarousel";

// const Secondslides = [
//   carousel_img1,
//   carousel_img2,
//   carousel_img3,
//   carousel_img4,
//   carousel_img5,
// ];

// let slides = [
//   "https://c4.wallpaperflare.com/wallpaper/703/641/109/lonely-tree-sunset-lake-birds-in-flight-horizon-art-images-hd-wallpapers-and-background-computer-smartphone-and-tablet-1920%C3%971080-wallpaper-preview.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yj859RoUzBCfFf2PqIhL2NzHOfDbIR6lSg&s",
//   "https://www.pixelstalk.net/wp-content/uploads/2016/07/1920x1080-HD-Wallpapers-Free-Download.jpg",
//   "https://i.pinimg.com/736x/47/a5/39/47a539aad6dd420ac552aaf4f0f62a2f.jpg",
//   "https://www.pixelstalk.net/wp-content/uploads/2016/07/1920x1080-HD-Wallpapers-Free-Download.jpg",
// ];

const Secondslides = [
  {
    mainImage: carousel_img1,
    subImages: [sub_carousel_img1, sub_carousel_img2, sub_carousel_img3],
  },
  {
    mainImage: carousel_img2,
    subImages: [sub_carousel_img4, sub_carousel_img5, sub_carousel_img6],
  },
  {
    mainImage: carousel_img3,
    subImages: [sub_carousel_img7, sub_carousel_img8, sub_carousel_img9],
  },
  {
    mainImage: carousel_img4,
    subImages: [sub_carousel_img10, sub_carousel_img11, sub_carousel_img12],
  },
  {
    mainImage: carousel_img5,
    subImages: [carousel_img3, carousel_img2, carousel_img4],
  },
];

const Home = () => {
  return (
    // <div className="absolute min-h-screen w-screen">
    //   <NewCarousel />
    // </div>
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

        {/* Sub Images (Slide up effect on active main image)
        <div className="sub-images-container overflow-hidden mt-4 relative h-32">
          <div
            className="sub-images"
            style={{
              transform: `translateY(-${activeIndex * 100}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {images[activeIndex].subImages.map((subImage, idx) => (
              <div key={idx} className="sub-image">
                <img
                  src={subImage}
                  alt={`Sub ${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div> */}

        <Footer />
      </div>
    </div>
  );
};

export default Home;
