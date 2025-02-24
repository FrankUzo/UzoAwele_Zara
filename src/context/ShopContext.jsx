import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext(null);

const ShopConextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  console.log(products);
  // const [category, setCategory] = useState([]);
  const [firstCategoryPathName, setFistCategoryPathName] = useState("");
  console.log("firstCategoryPathName:", firstCategoryPathName);
  const [secondCategoryPathName, setSecondCategoryPathName] = useState("");

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showAddToCartBtn, setshowAddToCartBtn] = useState(false);

  const [filterProducts, setFilterProducts] = useState([]);
  const [subFilterProducts, setSubFilterProducts] = useState([]);
  console.log("shop filterProducts:", filterProducts);
  const [className, setClassName] = useState(
    "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
  );
  const [cartItems, setCartItems] = useState({});

  const [showSize, setShowSize] = useState(false);

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

  let mdClass = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6";
  let smClass =
    "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12";
  let lgClass = "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

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

  const applyShowSize = (size) => {
    setShowSize(true);
  };

  const addToCart = async (itemId, size) => {
    // if (!size) {
    //   toast.error("Select Product Size", {
    //     position: "top-center",
    //   });
    //   return;
    // }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    // console.log("cartData:", cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  useEffect(() => {
    applyFilter();
  }, [firstCategoryPathName]);

  useEffect(() => {
    applySubFilter();
  }, [firstCategoryPathName, secondCategoryPathName]);

  useEffect(() => {
    console.log("cartItems:", cartItems);
  }, [cartItems]);

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
    addToCart,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    showAddToCartBtn,
    setshowAddToCartBtn,
    cartItems,
    getCartCount,
    updateQuantity,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopConextProvider;
