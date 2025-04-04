import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { FaRegSquare } from "react-icons/fa";
import { GoColumns } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const KidsNew = () => {
  const {
    filterProducts,
    className,
    setClassName,
    mdClass,
    smClass,
    lgClass,
    showSearch,
  } = useContext(ShopContext);
  const [classVisibility, setClassVisibility] = useState(false);

  console.log("filterProducts:", filterProducts);

  return (
    <div className={`${showSearch ? "top-20" : "relative top-24 sm:top-44"}`}>
      <div className="text-center pt-3 sm:pt-8 pb-2 text-2xl sm:text-3xl">
        <Title text1={"KIDS"} text2={"NEW COLLECTIONS"} />
      </div>
      <div className="flex justify-end mr-4 mb-4">
        <FaRegSquare
          onClick={() => {
            setClassName(lgClass);
            setClassVisibility(true);
          }}
          className="mr-4 cursor-pointer text-xl sm:text-3xl"
        />
        <GoColumns
          onClick={() => {
            setClassName(mdClass);
            setClassVisibility(false);
          }}
          className="mr-4 cursor-pointer text-xl sm:text-3xl"
        />
        <HiOutlineSquares2X2
          onClick={() => {
            setClassName(smClass);
            setClassVisibility(true);
          }}
          className="mr-4 cursor-pointer text-xl sm:text-3xl"
        />
      </div>
      <div className={className}>
        {filterProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name.slice(0, 20)}
            price={item.price}
            classVisibility={classVisibility}
          />
        ))}
      </div>
    </div>
  );
};

export default KidsNew;
