// import React from "react";

// const ProductItemTwo = () => {
//   return <div>ProductItemTwo</div>;
// };

// export default ProductItemTwo;

import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { IoLogInSharp } from "react-icons/io5";
import { Plus } from "react-feather";
import SizesModal from "./SizesModal";

const ProductItemTwo = ({ id, image, name, price, size, classVisibility }) => {
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
          <Link className=" cursor-pointer" to={`/product/${id}`}>
            <img
              className="relative hover:scale-110 transition ease-in-out min-w-full h-full"
              src={image}
              alt=""
            />
          </Link>

          <div className="absolute top-56 insert-0">
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
          <div className="absolute top-72 left-24 inset-0 w-8 h-8 rounded-full text-3xl font-semibold bg-black opacity-50">
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="relative bottom-[6px] left-[5px] bg-black"
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
          <div className="flex flex-row items-center justify-between">
            <Link to={`/product/${id}`}>
              <p className="pt-1 pb-2 text-sm">{name} ...</p>
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
  );
};

export default ProductItemTwo;
