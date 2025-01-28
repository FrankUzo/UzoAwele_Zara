import React, { useState } from "react";

const Carousel = () => {
  // Define your array of images and sub-images (vertical slides)
  const images = [
    {
      title: "Image 1",
      subImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yj859RoUzBCfFf2PqIhL2NzHOfDbIR6lSg&s",
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/1920x1080-HD-Wallpapers-Free-Download.jpg",
        "https://i.pinimg.com/736x/47/a5/39/47a539aad6dd420ac552aaf4f0f62a2f.jpg",
      ],
    },
    {
      title: "Image 2",
      subImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ohWF9IsGmsVr4zcKZ1thzydJIV2io3piAw&s",
        "https://c8.alamy.com/comp/D43WB4/fashion-model-in-modern-clothes-sitting-posing-in-the-studio-highfashion-D43WB4.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1yMX4DxX4UhqDJryTHUFas8m4W7dKmNQyA&s",
      ],
    },
    {
      title: "Image 3",
      subImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjvJRKq5OrbciTZOFGri0hw_Q26Ev16iO3Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTYcAhj58sg4a-Ts8qd1l30yHuFNX1G-Row&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBSIw_QsYFiZNuRe7IaAby40Kln8MQnOJoaA&s",
      ],
    },
  ];

  // Track current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subImageIndex, setSubImageIndex] = useState(0);

  // Change the main image
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSubImageIndex(0); // Reset sub-image index when switching images
  };

  const goPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSubImageIndex(0); // Reset sub-image index when switching images
  };

  // Change the sub-image
  const goSubImageNext = () => {
    setSubImageIndex(
      (prevIndex) => (prevIndex + 1) % images[currentIndex].subImages.length
    );
  };

  const goSubImagePrevious = () => {
    setSubImageIndex((prevIndex) =>
      prevIndex === 0
        ? images[currentIndex].subImages.length - 1
        : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="flex justify-center mb-4">
        <div className="w-64 h-64 overflow-hidden relative">
          <img
            src={images[currentIndex].subImages[subImageIndex]}
            alt={images[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2">
            <button
              onClick={goSubImagePrevious}
              className="text-white bg-gray-500 p-2 rounded-full"
            >
              ←
            </button>
            <button
              onClick={goSubImageNext}
              className="text-white bg-gray-500 p-2 rounded-full"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel for Images */}
      <div className="flex space-x-4 overflow-x-auto p-4">
        <button
          onClick={goPrevious}
          className="text-white bg-gray-500 p-2 rounded-full"
        >
          ←
        </button>
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer transition-transform duration-300 ${
              index === currentIndex ? "scale-110" : "scale-100"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setSubImageIndex(0); // Reset to the first sub-image on image change
            }}
          >
            <img
              src={image.subImages[0]}
              alt={image.title}
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>
        ))}
        <button
          onClick={goNext}
          className="text-white bg-gray-500 p-2 rounded-full"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
