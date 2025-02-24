import React, { useContext, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import ModalOffCanvas from "./ModalOffCanvas";

const CartBtnOffCanvas = ({ isOpen1, setIsOpen1, productData }) => {
  const { addToCart } = useContext(ShopContext);
  const [size, setSize] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  //   if (productData !== null) {
  //     <h1>Not null</h1>;
  //     console.log(available);
  //   } else {
  //     <h1>available</h1>;
  //     console.log(notavailable);
  //   }

  console.log("small code offcanvas productData:", productData.size);
  return (
    <div className="relative">
      {/* The Off-Canvas Menu */}
      <div
        className={`fixed right-0 z-50 w-full md:w-[420px] h-[400px] overflow-y-scroll bg-gray-400 transform transition-transform duration-300 ease-in-out ${
          isOpen1 ? "translate-y-0 bottom-[84px]" : "translate-y-full bottom-0"
        }`}
      >
        {/* Off-Canvas content */}
        {/* <div className="text-white p-6">
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
        </div> */}

        <div className="flex flex-col gap-4 my-8 px-8 text-center">
          <p className="bg-white py-2 rounded-br-2xl rounded-tl-2xl text-orange-800 font-bold text-xl mb-2">
            Select Size
          </p>

          {Array.isArray(productData.size) &&
            productData.size?.map((item, index) => (
              <ul
                className={`py-2 border text-gray-500 font-bold bg-slate-200 rounded-lg active:bg-slate-300 hover:bg-slate-500 hover:text-white ${
                  item === size ? "border-orange-500 active:bg-slate-300" : ""
                }`}
                key={index}
              >
                <li
                  onClick={() => {
                    setSize(item);
                    addToCart(productData._id, size);
                  }}
                >
                  {item}
                </li>
              </ul>
            ))}

          <div className="flex">
            <p
              onClick={() => setIsOpen(true)}
              className="bg-white text-gray-700 font-medium py-2 px-2 rounded cursor-pointer me-2"
            >
              FIT FINDER
            </p>
            <p className="bg-white text-gray-700 font-medium py-2 px-2 rounded cursor-pointer">
              PRODUCT MEASUREMENTS
            </p>
          </div>
        </div>

        <div className="text-center text-gray-600 font-medium bg-white px-2 py-2 rounded w-72 m-auto mb-5">
          <Link to="/cart">View Your Shopping Cart</Link>
        </div>
        <ModalOffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Overlay background when the canvas is open */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-40 ${
          isOpen1 ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen1(false)}
      />
    </div>
  );
};

export default CartBtnOffCanvas;
