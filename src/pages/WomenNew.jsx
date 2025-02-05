import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { FaRegSquare } from "react-icons/fa";
import { GoColumns } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const WomenNew = () => {
  const { filterProducts, className, setClassName, mdClass, smClass, lgClass } =
    useContext(ShopContext);
  const [classVisibility, setClassVisibility] = useState(false);

  console.log(filterProducts);

  return (
    <div className="relative top-44">
      <div className="text-center pt-8 pb-2 text-3xl">
        <Title text1={"WOMEN"} text2={"NEW COLLECTIONS"} />
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

export default WomenNew;
