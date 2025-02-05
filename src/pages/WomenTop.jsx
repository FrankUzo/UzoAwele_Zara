// import React, { useContext } from "react";
// import ProductItem from "../components/ProductItem";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";

// const WomenTop = () => {
//   const { filterProducts } = useContext(ShopContext);

//   console.log(filterProducts);
//   return (
//     <div>
//       <div className="relative top-40">
//         <div className="text-center py-8 text-3xl">
//           <Title text1={"WOMEN"} text2={"TOP WEARS COLLECTIONS"} />
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
//           {filterProducts.map((item, index) => (
//             <ProductItem
//               key={index}
//               id={item._id}
//               image={item.image}
//               name={item.name.slice(0, 16)}
//               price={item.price}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WomenTop;

import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItemTwo from "../components/ProductItemTwo";
import { useState } from "react";
import { FaRegSquare } from "react-icons/fa";
import { GoColumns } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const WomenTop = () => {
  const { filterProducts, className, setClassName, mdClass, smClass, lgClass } =
    useContext(ShopContext);
  const [classVisibility, setClassVisibility] = useState(false);

  return (
    <div>
      <div className="relative top-40">
        <div className="text-center py-8 text-3xl">
          <Title text1={"WOMEN"} text2={"TOP WEARS COLLECTIONS"} />
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {filterProducts.map((item, index) => (
            <ProductItemTwo
              key={index}
              id={item._id}
              image={item.image}
              name={item.name.slice(0, 20)}
              price={item.price}
              size={item.size}
              classVisibility={classVisibility}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenTop;
