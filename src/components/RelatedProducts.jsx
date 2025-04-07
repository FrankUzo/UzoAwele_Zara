import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItemTwo from "./ProductItemTwo";
import { FaRegSquare } from "react-icons/fa";
import { GoColumns } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const RelatedProducts = ({
  category,
  subCategory,
  image,
  productDataId,
  setIsOpen2,
  isOpen2,
  fetchRelatedProducts,
}) => {
  const {
    products,
    className,
    setClassName,
    mdClass,
    smClass,
    lgClass,
    related,
  } = useContext(ShopContext);
  console.log("related related related:", related);

  const [classVisibility, setClassVisibility] = useState(false);

  return (
    <div className="my-24 block">
      <div className="text-center text-xl sm:text-3xl py-2">
        <Title text1={"Related"} text2={"PRODUCTS"} />
      </div>
      <div className="flex justify-end mr-4 mb-4">
        {/* <FaRegSquare
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
        /> */}
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
            setIsOpen2={setIsOpen2}
            isOpen2={isOpen2}
            fetchRelatedProducts={fetchRelatedProducts}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
