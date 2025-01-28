import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-500 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden border border-black pb-2">
        <img
          className="hover:scale-110 transition ease-in-out border border-b-black mb-2"
          src={image[0]}
          alt=""
        />

        <p className="pt-1 pb-2 text-sm">{name} ...</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
