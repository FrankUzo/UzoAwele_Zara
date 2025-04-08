import React, { useContext, useEffect } from "react";
import { Link } from "react-feather";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import { ShopContext } from "../context/ShopContext";

const AddToCartOffcanvas = ({
  isOpen2,
  setIsOpen2,
  productData,
  size,
  // image,
}) => {
  const { image, fetchRelatedProducts, item } = useContext(ShopContext);
  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 z-50 w-full md:w-[420px] h-full bg-white transform transition-transform duration-300 ease-in-out overflow-y-scroll ${
          isOpen2 ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Off-Canvas content */}
        <div className="text-gray-600 p-6">
          <div className="mb-24">
            <button
              onClick={() => setIsOpen2(false)}
              className="cursor-pointer float-end mb-4"
            >
              <MdOutlineClose size={40} />
            </button>
          </div>
          <h4 className="text-1xl font-bold">ADDED TO YOUR CART</h4>
          <div className="flex mt-10">
            <img src={image} className="w-40 me-5" alt="" />
            <div className="flex flex-col">
              <p className="mt-5">{productData.name}</p>
              <p className="font-semibold text-[12px]">SIZE: {size}</p>
            </div>
          </div>

          <div className="px-4 py-2 text-[12px] mt-6 border border-black w-40 bg-white rounded-md text-gray-600 font-medium">
            <NavLink to="/cart">See Shopping Cart</NavLink>
          </div>

          {/* --------------- Display Related Products */}
          <div className="mt-10">
            <p>PRODUCTS YOU MIGHT LIKE.</p>

            {productData ? (
              <RelatedProducts
                category={productData.category}
                subCategory={productData.subCategory}
                productDataId={productData._id}
                setIsOpen2={setIsOpen2}
                isOpen2={isOpen2}
                item={item}
                fetchRelatedProducts={fetchRelatedProducts}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* Overlay background when the canvas is open */}
      <div
        className={`fixed inset-0 bg-black opacity-30 z-40 ${
          isOpen2 ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen2(false)}
      />
    </div>
  );
};

export default AddToCartOffcanvas;
