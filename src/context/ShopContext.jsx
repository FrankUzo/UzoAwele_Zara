import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useLocation } from "react-router-dom";

export const ShopContext = createContext(null);

const ShopConextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  console.log(products);
  // const [category, setCategory] = useState([]);
  const [categoryPathName, setCategoryPathName] = useState("");
  console.log("categoryPathName", categoryPathName);
  const [filter, setFilter] = useState("");
  console.log("filter", filter);
  const [filterProducts, setFilterProducts] = useState([]);
  const [className, setClassName] = useState("mdClass");

  // const location = useLocation();
  // // console.log("location:", location);

  // const currentURL = location.pathname;
  // // console.log("currentURL:", currentURL);

  // const urlSplittedPart = currentURL.split("/");
  // // console.log("logging out splitted Location:" + urlSplittedPart);

  // setCategoryPathName(urlSplittedPart[1]);
  // console.log("categoryPathName:", categoryPathName);

  let mdClass = "grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6";
  let smClass = "grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12";
  let lgClass = "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  // const toggleCategory = () => {
  //   // if (category.includes(e.target.value)) {
  //   //   setCategory((prev) => prev.filter((item) => item !== e.target.value));
  //   // } else {
  //   //   setCategory((prev) => [...prev, e.target.value]);
  //   // }
  //   setCategoryPathName(categoryPathName);
  // };
  // console.log("category", category);

  const applyFiler = () => {
    let productsCopy = products.slice();
    // console.log("productsCopy", productsCopy);
    // console.log("categoryPathName", categoryPathName);

    if (categoryPathName !== null) {
      productsCopy = productsCopy.filter((item) =>
        categoryPathName.includes(item.category)
      );
    } else {
    }
    // console.log("productsCopy", productsCopy);
    setFilterProducts(productsCopy);
  };

  const applySubFiler = () => {
    let productsCopy = products.slice();

    if (categoryPathName !== null && filter) {
      productsCopy = productsCopy.filter(
        (item) =>
          categoryPathName.includes(item.category) &&
          filter.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFiler();
  }, [categoryPathName]);

  useEffect(() => {
    applySubFiler();
  }, [filter]);

  const value = {
    products,
    currency,
    delivery_fee,
    filterProducts,
    categoryPathName,
    setCategoryPathName,
    filter,
    setFilter,
    className,
    setClassName,
    mdClass,
    smClass,
    lgClass,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopConextProvider;
