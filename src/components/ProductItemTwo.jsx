import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useLocation } from "react-router-dom";
import { IoLogInSharp } from "react-icons/io5";
import { Plus } from "react-feather";
import SizesModal from "./SizesModal";
import { use } from "react";

const ProductItemTwo = ({
  id,
  image,
  name,
  price,
  size,
  classVisibility,
  lgClass,
  setIsOpen2,
  isOpen2,
}) => {
  const [openModal, setOpenModal] = useState(false);
  console.log("openModal:", openModal);
  const { currency } = useContext(ShopContext);

  return (
    <div className="text-gray-500">
      <div
        className={`relative overflow-hidden border border-black ${
          classVisibility === true ? "pb-0" : "pb-2"
        }`}
      >
        <div className=" inline-block">
          <Link
            className=" cursor-pointer"
            to={`/product/${id}`}
            onClick={() => setIsOpen2(false)}
          >
            <img
              className="relative hover:scale-110 transition ease-in-out min-w-full h-full"
              src={image}
              alt=""
            />
          </Link>

          <div className="absolute top-56 insert-0 w-full">
            {openModal === true ? (
              <SizesModal
                className="relative insert-0"
                size={size}
                setOpenModal={setOpenModal}
              />
            ) : (
              <></>
            )}
          </div>
          <div
            className={`absolute top-72 left-24 inset-0 w-8 h-8 rounded-full text-3xl font-semibold bg-black opacity-50 ${
              openModal !== true ? "block" : "hidden"
            }`}
          >
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="relative  bottom-[6px] left-[5px] bg-black"
            >
              <Plus color="brown" size={20} />
            </button>
          </div>
        </div>

        <div
          className={`${
            classVisibility === true ? "hidden" : "block border border-t-black"
          }`}
        >
          <div
            className={`${
              isOpen2 ? "flex flex-row-reverse justify-between" : ""
            }`}
          >
            <div className="flex flex-row items-center justify-between">
              <Link to={`/product/${id}`}>
                <p className={`pt-1 pb-2 text-sm ${isOpen2 ? "hidden" : ""}`}>
                  {name} ...
                </p>
              </Link>
              <Link to="/login_rigister" className="cursor-pointer">
                <IoLogInSharp size={25} />
              </Link>
            </div>
            <p className="text-sm font-medium">
              {currency}
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemTwo;
