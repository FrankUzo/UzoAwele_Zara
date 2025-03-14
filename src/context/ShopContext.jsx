import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
// import { use } from "react";

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
  console.log("search:", search);
  const [showSearch, setShowSearch] = useState(false);
  const [showAddToCartBtn, setshowAddToCartBtn] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const [filterProducts, setFilterProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log("totalAmount totalAmount:", totalAmount);
  const [subFilterProducts, setSubFilterProducts] = useState([]);
  console.log("shop filterProducts:", filterProducts);
  const [className, setClassName] = useState(
    "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
  );
  const [cartItems, setCartItems] = useState([]);
  // localStorage.setItem("CARTCOUNT", JSON.stringify(cartCount));

  const [showSize, setShowSize] = useState(false);

  const navigate = useNavigate();

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

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (firstCategoryPathName !== null) {
      productsCopy = productsCopy.filter((item) =>
        firstCategoryPathName.includes(item.category)
      );
    }

    setFilterProducts(productsCopy);
  };

  const applySubFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (firstCategoryPathName !== null && secondCategoryPathName) {
      productsCopy = productsCopy.filter(
        (item) =>
          firstCategoryPathName.includes(item.category) &&
          secondCategoryPathName.includes(item.subCategory)
      );
    }
    setSubFilterProducts(productsCopy);
  };

  function addToCart(cartitem, size) {
    console.log("B4 addedPrdts cartitem:", cartitem);
    console.log("B4 addedPrdts addedPrdts:", cartItems);

    const localStoragecartItems =
      JSON.parse(localStorage.getItem("CARTITEMS")) ?? [];

    // var localStoragecartItems = JSON.parse(localStorage.getItem("CARTITEMS"));
    console.log(
      "localStoragecartItems localStoragecartItems:",
      localStoragecartItems
    );

    let alreadyInCartIndex = localStoragecartItems.findIndex(
      (obj) => obj._id === cartitem._id
    );

    if (alreadyInCartIndex != -1) {
      //its in cart
      let item = localStoragecartItems[alreadyInCartIndex];
      console.log("item.selectedSize item.selectedSize:", item.selectedSize);
      if (!item.selectedSize.includes(size)) {
        item.selectedSize.push(size);
        item["selectedQty"] = item.selectedQty + 1;
        localStoragecartItems[alreadyInCartIndex] = item;
      } else {
        //throw pop up
        //product is in cart
        //trying re-add it with same size again
        //let user know that prdt with same size is already in cart

        toast.error("Product with same size already in cart!!!", {
          position: "top-center",
        });
        return;
      }
    } else {
      //new item to cart - not in cart
      cartitem["selectedSize"] = [size];
      cartitem["selectedQty"] = 1;
      localStoragecartItems.push(cartitem);
    }

    console.log("AFTER addedPrdts addedPrdts:", cartItems);
    // const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    setCartItems(localStoragecartItems);
    localStorage.setItem("CARTITEMS", JSON.stringify(localStoragecartItems));
    getCartAmount();
    getCartCount();
  }

  const getCartCount = () => {
    const localStoragecartItems =
      JSON.parse(localStorage.getItem("CARTITEMS")) ?? [];

    setCartCount(localStoragecartItems.length);
    localStorage.setItem(
      "CARTCOUNT",
      JSON.stringify(localStoragecartItems.length)
    );

    // return cartItems.length;
  };

  const updateQuantity = async (item, quantity) => {
    // console.log("updateQuantity updateQuantity: ", item);
    // console.log("updateQuantity updateQuantit qty: ", quantity);

    const localStoragecartItems =
      JSON.parse(localStorage.getItem("CARTITEMS")) ?? [];

    let newCartItem = localStoragecartItems.find((element) => {
      console.log("element Id element Id element Id:", element._id);
      console.log("item Id item Id item Id:", item._id);
      return (
        element._id == item._id //&& element.selectedSize == item.selectedSize
      );
    });

    newCartItem["selectedQty"] = quantity;

    if (quantity == 0) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          let elementIndex = localStoragecartItems.findIndex(
            (obj) => obj._id === item._id
          );
          // cartItems[elementIndex] = newCartItem;
          localStoragecartItems.splice(elementIndex, 1);

          setCartItems(localStoragecartItems);
          localStorage.setItem(
            "CARTITEMS",
            JSON.stringify(localStoragecartItems)
          );

          getCartCount();
          getCartAmount();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } else {
      setCartItems(localStoragecartItems);
      localStorage.setItem("CARTITEMS", JSON.stringify(localStoragecartItems));

      getCartCount();
      getCartAmount();
    }
  };

  const getCartAmount = () => {
    const localStoragecartItems =
      JSON.parse(localStorage.getItem("CARTITEMS")) ?? [];
    var totalCartPrices = 0;
    for (let index = 0; index < localStoragecartItems.length; index++) {
      const item = localStoragecartItems[index];
      console.log(" item.price: ", item.price);
      console.log(" item.selectedQty: ", item.selectedQty);
      totalCartPrices += item.price * item.selectedQty;
      console.log("totalCartPrices : ", totalCartPrices);
    }
    setTotalAmount(totalCartPrices);
    localStorage.setItem("TOTALCARTPRICE", JSON.stringify(totalCartPrices));
  };

  // useEffect(() => {
  //   localStorage.setItem("CARTITEMS", JSON.stringify(cartItems));
  // }, [cartItems]);

  useEffect(() => {
    applyFilter();
  }, [firstCategoryPathName, search, showSearch]);

  useEffect(() => {
    applySubFilter();
  }, [firstCategoryPathName, secondCategoryPathName, search, showSearch]);

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
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    totalAmount,
    setTotalAmount,
    cartCount,
    setCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopConextProvider;
