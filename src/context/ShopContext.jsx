import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useLocation } from "react-router-dom";

export const ShopContext = createContext(null);

const ShopConextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  console.log(products);
  // const [category, setCategory] = useState([]);
  const [firstCategoryPathName, setFistCategoryPathName] = useState("");
  console.log("firstCategoryPathName:", firstCategoryPathName);
  const [secondCategoryPathName, setSecondCategoryPathName] = useState("");

  const [filterProducts, setFilterProducts] = useState([]);
  const [subFilterProducts, setSubFilterProducts] = useState([]);
  console.log("shop filterProducts:", filterProducts);
  const [className, setClassName] = useState(
    "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
  );
  // const [modalButtonClassName, setModalButtonClassName] = useState(
  //   "absolute top-72 left-24 inset-0 w-8 h-8 rounded-full text-3xl font-semibold bg-black opacity-50"
  // );

  const location = useLocation();

  const currentURL = location.pathname;
  console.log("currentURL:", currentURL);

  useEffect(() => {
    var splittedUrl = currentURL.split("/");
    console.log("Loging out splittedUrl:", splittedUrl);

    var firstWanted = splittedUrl[1];
    console.log("firstWanted:", firstWanted);
    setFistCategoryPathName(firstWanted);

    var secondWanted = splittedUrl[2];
    console.log("secondWanted:", secondWanted);
    setSecondCategoryPathName(secondWanted);
  }, [currentURL]);

  // let modalButtonMdClass =
  //   "absolute top-72 left-24 inset-0 w-8 h-8 rounded-full text-3xl font-semibold bg-black opacity-50";
  // let modalButtonLgClass =
  //   "absolute top-72 left-24 inset-0 w-8 h-8 rounded-full text-3xl font-semibold bg-black opacity-50";
  let mdClass = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6";
  let smClass =
    "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12";
  let lgClass = "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  // const toggleCategory = () => {
  //   // if (category.includes(e.target.value)) {
  //   //   setCategory((prev) => prev.filter((item) => item !== e.target.value));
  //   // } else {
  //   //   setCategory((prev) => [...prev, e.target.value]);
  //   // }
  //   setCategoryPathName(categoryPathName);
  // };
  // console.log("category", category);

  const applyFilter = () => {
    let productsCopy = products.slice();
    console.log("shop productsCopy", productsCopy);

    console.log("firstCategoryPathName", firstCategoryPathName);

    if (firstCategoryPathName !== null) {
      productsCopy = productsCopy.filter((item) =>
        firstCategoryPathName.includes(item.category)
      );
    } else {
    }
    console.log("productsCopy", productsCopy);
    setFilterProducts(productsCopy);
  };

  const applySubFilter = () => {
    let productsCopy = products.slice();

    if (firstCategoryPathName !== null && secondCategoryPathName) {
      productsCopy = productsCopy.filter(
        (item) =>
          firstCategoryPathName.includes(item.category) &&
          secondCategoryPathName.includes(item.subCategory)
      );
    }
    setSubFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [firstCategoryPathName]);

  useEffect(() => {
    applySubFilter();
  }, [firstCategoryPathName, secondCategoryPathName]);

  const value = {
    products,
    currency,
    delivery_fee,
    filterProducts,
    subFilterProducts,
    firstCategoryPathName,
    setFistCategoryPathName,
    secondCategoryPathName,
    setSecondCategoryPathName,
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
