// import React from "react";

// const RelatedProducts = () => {
//   return <div>RelatedProducts</div>;
// };

// export default RelatedProducts;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItemTwo from "./ProductItemTwo";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

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
      <div className="grid grid-col-2 sm:grid-cols-3  md: grid-cols-2 lg:grid-cols-5  gap-y-0">
        {related.map((item, index) => (
          <ProductItemTwo
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
