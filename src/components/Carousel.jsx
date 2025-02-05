import React, { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "react-feather";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  Secondslides,
}) => {
  const [index, setIndex] = useState(0);
  // const [subImageIndex, setSubImageIndex] = useState(0);

  const prev = () => {
    setIndex((index) => (index == 0 ? Secondslides.length - 1 : index - 1));
    //goto implementation
    // setIndex((curr) => (curr = 2));
    // setSubImageIndex(subImageIndex==0 ? );
  };

  const next = () => {
    setIndex((index) => (index == Secondslides.length - 1 ? 0 : index + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="mainContainer">
      <div className="overflow-hidden relative">
        {/* --------- Carousel slides display ------------- */}
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides}
        </div>

        {/* ----------- Arrow Buttons ------------ */}
        <div className="fixed inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={40} color="brown" />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={40} color="brown" />
          </button>
        </div>

        {/* --------------- Circular Bottom Buttons ---------------- */}
        <div className="fixed bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${index == i ? "p-2" : "bg-opacity-50"}
                    `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sub Images (Slide up effect on active main image) */}
      <div
        className="flex flex-col transition-transform ease-out duration-500"
        // style={{ transform: `translateY(-${curr * 100}%)` }}
        // className="sub-images"
        // style={{
        //   transform: `translateY(-${curr * 100}%)`,
        //   transition: "transform 0.5s ease",
        // }}
      >
        {Secondslides[index].subImages.map((image, i) => (
          <img
            // autoSlide={true}
            className="relaive w-screen h-screen object-cover"
            key={i}
            src={image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
