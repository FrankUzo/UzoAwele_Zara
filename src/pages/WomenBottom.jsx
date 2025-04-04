import React, { useContext } from "react";
import ProductItem from "../components/ProductItem";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const WomenBottom = () => {
  const { subFilterProducts, showSearch } = useContext(ShopContext);

  console.log(subFilterProducts);
  return (
    <div>
      <div className={`${showSearch ? "top-20" : "relative top-24 sm:top-44"}`}>
        <div className="text-center py-8 text-3xl">
          <Title text1={"WOMEN"} text2={"BOTTOM-WEARS COLLECTIONS"} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {subFilterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name.slice(0, 16)}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenBottom;
