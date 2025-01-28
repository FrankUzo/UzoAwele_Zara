import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const WomenNew = () => {
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  console.log(filterProducts);
  return (
    <div className="relative top-40">
      <div className="text-center py-8 text-3xl">
        <Title text1={"WOMEN"} text2={"NEW COLLECTIONS"} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {filterProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name.slice(0, 20)}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default WomenNew;
