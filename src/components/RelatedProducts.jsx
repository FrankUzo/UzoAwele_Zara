// import React from "react";

// const RelatedProducts = () => {
//   return <div>RelatedProducts</div>;
// };

// export default RelatedProducts;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItemTwo from "./ProductItemTwo";
import { FaRegSquare } from "react-icons/fa";
import { GoColumns } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const RelatedProducts = ({ category, subCategory }) => {
  const { products, className, setClassName, mdClass, smClass, lgClass } =
    useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const [classVisibility, setClassVisibility] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      //   console.log(productsCopy.slice(0, 5));
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24 hidden sm:block">
      <div className="text-center text-xl sm:text-3xl py-2">
        <Title text1={"Related"} text2={"PRODUCTS"} />
      </div>
      <div className="flex justify-end mr-4 mb-4">
        <FaRegSquare
          onClick={() => {
            setClassName(lgClass);
            setClassVisibility(true);
          }}
          className="mr-4 cursor-pointer"
          size={30}
        />
        <GoColumns
          onClick={() => {
            setClassName(mdClass);
            setClassVisibility(false);
          }}
          className="mr-4 cursor-pointer"
          size={30}
        />
        <HiOutlineSquares2X2
          onClick={() => {
            setClassName(smClass);
            setClassVisibility(true);
          }}
          className="mr-4 cursor-pointer"
          size={30}
        />
      </div>
      <div className={className}>
        {related.map((item, index) => (
          <ProductItemTwo
            key={index}
            id={item._id}
            image={item.image[0]}
            name={item.name.slice(0, 20)}
            price={item.price}
            size={item.size}
            classVisibility={classVisibility}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
