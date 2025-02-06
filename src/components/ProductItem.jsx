import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { IoLogInSharp } from "react-icons/io5";

const ProductItem = ({ id, image, name, price, classVisibility }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-500 cursor-pointer" to={`/product/${id}`}>
      <div
        className={`overflow-hidden border border-black ${
          classVisibility === true ? "pb-0" : "pb-2"
        }`}
      >
        <img
          className="hover:scale-110 transition ease-in-out min-w-full "
          src={image[0]}
          alt=""
        />

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
    </Link>
  );
};

export default ProductItem;
