import React from "react";
import { MdOutlineClose } from "react-icons/md";

const ModalOffCanvas = ({ isOpen, setIsOpen }) => {
  return (
    <div className="relative">
      {/* Button to open/close the off-canvas */}
      {/* <button
        onClick={toggleCanvas}
        className="p-4 bg-blue-500 text-white rounded-md"
      >
        Toggle Off-Canvas
      </button> */}

      {/* The Off-Canvas Menu */}
      <div
        className={`fixed top-0 right-0 z-50 w-full md:w-[420px] h-full bg-gray-400 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Off-Canvas content */}
        <div className="text-white p-6">
          <div className="mb-16">
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer float-end mb-4"
            >
              <MdOutlineClose size={40} />
            </button>
          </div>
          <h4 className="text-1xl font-bold">BASIC INFORMATION</h4>
          <p className="mt-4">Info will caome from API</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod
            eos necessitatibus quibusdam dolorum totam, laudantium error et quam
            ex veniam esse officiis. Laudantium quaerat rerum possimus tempora
            ullam quod.
          </p>
        </div>
      </div>

      {/* Overlay background when the canvas is open */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ModalOffCanvas;
