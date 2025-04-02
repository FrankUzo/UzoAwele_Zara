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
  const [firstCategoryPathName, setFistCategoryPathName] = useState("");
  const [secondCategoryPathName, setSecondCategoryPathName] = useState("");
  const [showCategoryFilter, setShowCategoryFilter] = useState("WOMAN");
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showAddToCartBtn, setshowAddToCartBtn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [filterProducts, setFilterProducts] = useState([]);
  const [subFilterProducts, setSubFilterProducts] = useState([]);
  const [sizeQuantity, setSizeQuantity] = useState(1);
  const [finalProductQty, setFinalProductQty] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [className, setClassName] = useState(
    "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
  );
  const [cartItems, setCartItems] = useState([]);
  const [num, setNum] = useState(0);
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const currentURL = location.pathname;

  useEffect(() => {
    var splittedUrl = currentURL.split("/");
    var firstWanted = splittedUrl[1];
    setFistCategoryPathName(firstWanted);
    var secondWanted = splittedUrl[2];
    setSecondCategoryPathName(secondWanted);
  }, [currentURL]);

  let mdClass = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6";
  let smClass =
    "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12";
  let lgClass = "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  const carouselToggleByCategory = (num) => {
    if (curr != num) {
      setIndex((curr) => (curr = num));
    } else {
    }

    // setSubImageIndex(subImageIndex==0 ? );
  };

  const [previousLocation, setPreviousLocation] = useState(null);

  const [actualPreviouslocation, setActualPreviouslocation] = useState(null);

  useEffect(() => {
    // Update previous location when the location changes
    console.log("useEffect FIRED!!! prev --- location:", location);
    // setPreviousLocation(location);
    setPreviousLocation(location);
    setActualPreviouslocation(previousLocation);
    console.log("after useEffect FIRED!!! previousLocation:", previousLocation);
    console.log(
      "after useEffect FIRED!!! actualPreviouslocation:",
      actualPreviouslocation
    );
  }, [location]);

  function goBack() {
    console.log("PREV currentURL:", currentURL);
    // console.log("PREV actual prev location:", previousLocation);
    console.log(
      "PREV actual prev location actualPreviouslocation:",
      actualPreviouslocation
    );

    if (currentURL != "/") {
      return;
    } else if (currentURL == "/" && actualPreviouslocation != null) {
      if (actualPreviouslocation.pathname != "/") {
        //do ur routing here instead of going back to google
        console.log("prev go back");
        window.history.back();
      } else {
        // navigate("/Women/view_all_new");
        console.log("prev Push to women page");
        navigate("/Women/view_all_new");
      }
    } else {
      console.log("prev else return");
      // return;
      navigate("/Women/view_all_new");
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

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
    const localStoragecartItems =
      JSON.parse(localStorage.getItem("CARTITEMS")) ?? [];

    let alreadyInCartIndex = localStoragecartItems.findIndex(
      (obj) => obj._id === cartitem._id
    );

    if (alreadyInCartIndex != -1) {
      //item in cart local storage
      let item = localStoragecartItems[alreadyInCartIndex];

      let cartSizeItem = item.selectedSize.find(
        (eachSizeObject) => eachSizeObject.title == size
      );
      if (cartSizeItem == null) {
        item.selectedSize.push({ title: size, qty: 1 });
        item["selectedQty"] = item.selectedQty + 1;
        localStoragecartItems[alreadyInCartIndex] = item;
      } else {
        /*
        throw pop up
        product is in cart
        trying re-add it with same size again
        let user know that prdt with same size is already in cart
        */
        toast.error("Product with same size already in cart!!!", {
          position: "top-center",
        });
        return;
      }
    } else {
      //new item to cart - not in cart
      cartitem["selectedSize"] = [{ title: size, qty: 1 }];
      cartitem["selectedQty"] = 1;
      localStoragecartItems.push(cartitem);
    }
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

  const increaseQuantityBtn = async (item, _quantity, sizeObject) => {
    const localStoragecartItems =
      JSON.parse(localStorage.getItem("CARTITEMS")) ?? [];

    let elementIndex = localStoragecartItems.findIndex(
      (obj) => obj._id === item._id
    );

    let itemFromCartItems = localStoragecartItems[elementIndex];

    //cartSizeItem is the exact object from selectedSize we want to update i.e {title:M, qty:3}
    let cartSizeItem = itemFromCartItems.selectedSize.find((eachSizeObject) => {
      return eachSizeObject.title === sizeObject.title;
    });

    //updating the qty
    cartSizeItem["qty"] += 1;
    console.log("cartSizeItem qty cartSizeItem qty:", cartSizeItem["qty"]);
    // setSizeQuantity(sizeQuantity + 1);

    let prdtIndex = itemFromCartItems.selectedSize.findIndex(
      (obj) => obj.title === sizeObject.title
    );

    itemFromCartItems.selectedSize[prdtIndex] = cartSizeItem;

    setCartItems(localStoragecartItems);
    localStorage.setItem("CARTITEMS", JSON.stringify(localStoragecartItems));

    getCartCount();
    getCartAmount();
  };

  const decreaseQuantityBtn = async (item, _quantity, sizeObject) => {
    const localStoragecartItems =
      JSON.parse(localStorage.getItem("CARTITEMS")) ?? [];

    let elementIndex = localStoragecartItems.findIndex(
      (obj) => obj._id === item._id
    );

    let itemFromCartItems = localStoragecartItems[elementIndex];

    /* First
     *lets handle delete from cart first
     */
    if (_quantity == 1 && sizeObject == null) {
      deleteFromCart(localStoragecartItems, elementIndex);
      return;
    }

    /* Second
     *lets handle delete a size from cart second
     */
    if (_quantity == 1 && sizeObject != null) {
      deleteSizeItemFromCart(
        itemFromCartItems,
        sizeObject,
        localStoragecartItems,
        elementIndex
      );
      return;
    }

    /* Third
     *lets handle update cart item qty
     */

    //cartSizeItem is the exact object from selectedSize we want to update i.e {title:M, qty:3}
    let cartSizeItem = itemFromCartItems.selectedSize.find((eachSizeObject) => {
      return eachSizeObject.title === sizeObject.title;
    });

    //if cartSizeItem is not null lets update the qty

    if (cartSizeItem != null) {
      //updating the qty
      cartSizeItem["qty"] -= 1;
      console.log("cartSizeItem qty cartSizeItem qty:", cartSizeItem["qty"]);

      //lets also get the index where the object we retrieved is from, so we can fix the updated one back to cartitems
      let prdtIndex = itemFromCartItems.selectedSize.findIndex(
        (obj) => obj.title === sizeObject.title
      );

      //fixing updated one back to cartItems
      // item.selectedSize[prdtIndex] = cartSizeItem;
      itemFromCartItems.selectedSize[prdtIndex] = cartSizeItem;
      // might not be necessary - lets see
      // localStoragecartItems[elementIndex] = itemFromCartItems;

      setCartItems(localStoragecartItems);
      localStorage.setItem("CARTITEMS", JSON.stringify(localStoragecartItems));

      getCartCount();
      getCartAmount();
    }
  };

  const updateQuantity = async (item, quantity, sizeObject) => {
    const localStoragecartItems =
      JSON.parse(localStorage.getItem("CARTITEMS")) ?? [];
    let elementIndex = localStoragecartItems.findIndex(
      (obj) => obj._id === item._id
    );

    let itemFromCartItems = localStoragecartItems[elementIndex];

    /* First
     *lets handle delete from cart first
     */
    if (quantity == 0 && sizeObject == null) {
      deleteFromCart(localStoragecartItems, elementIndex);
      return;
    }

    /* Second
     *lets handle delete a size from cart second
     */
    if (quantity == 0 && sizeObject != null) {
      deleteSizeItemFromCart(
        itemFromCartItems,
        sizeObject,
        localStoragecartItems,
        elementIndex
      );
      return;
    }

    /* Third
     *lets handle update cart item qty
     */

    //cartSizeItem is the exact object from selectedSize we want to update i.e {title:M, qty:3}
    let cartSizeItem = itemFromCartItems.selectedSize.find((eachSizeObject) => {
      return eachSizeObject.title === sizeObject.title;
    });

    //if cartSizeItem is not null lets update the qty
    if (cartSizeItem != null) {
      //updating the qty
      cartSizeItem["qty"] = quantity;

      //lets also get the index where the object we retrieved is from, so we can fix the updated one back to cartitems
      let prdtIndex = itemFromCartItems.selectedSize.findIndex(
        (obj) => obj.title === sizeObject.title
      );

      //fixing updated one back to cartItems
      // item.selectedSize[prdtIndex] = cartSizeItem;
      itemFromCartItems.selectedSize[prdtIndex] = cartSizeItem;

      // might not be necessary - lets see
      // localStoragecartItems[elementIndex] = itemFromCartItems;

      setCartItems(localStoragecartItems);
      localStorage.setItem("CARTITEMS", JSON.stringify(localStoragecartItems));

      getCartCount();
      getCartAmount();
    }
  };

  function deleteSizeItemFromCart(
    itemFromCartItems,
    sizeObject,
    localStoragecartItems,
    elementIndex
  ) {
    let deleteProductIndex = itemFromCartItems.selectedSize.findIndex(
      (obj) => obj.title === sizeObject.title
    );

    var newSizesArray = [];
    for (
      let index = 0;
      index < itemFromCartItems.selectedSize.length;
      index++
    ) {
      const element = itemFromCartItems.selectedSize[index];
      if (index != deleteProductIndex) {
        newSizesArray.push(element);
      }
    }

    // itemFromCartItems.selectedSize.splice(deleteProductIndex, 1);
    itemFromCartItems.selectedSize = newSizesArray;
    localStoragecartItems[elementIndex] = itemFromCartItems; //might not be necessary

    setCartItems(localStoragecartItems);
    localStorage.setItem("CARTITEMS", JSON.stringify(localStoragecartItems));
    getCartCount();
    getCartAmount();

    if (itemFromCartItems.selectedSize.length == 0) {
      deleteFromCart(localStoragecartItems, elementIndex);
    }
  }

  function deleteFromCart(localStoragecartItems, elementIndex) {
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
          text: "Item removed from your Cart.",
          icon: "success",
          imageUrl: emptyCartImageUrl,
          imageWidth: 150, // Adjust the image size
          imageHeight: 150, // Adjust the image size
          imageAlt: "Custom image", // Alt text for the image
        });
      }
    });
  }

  const getCartAmount = () => {
    const localStoragecartItems =
      JSON.parse(localStorage.getItem("CARTITEMS")) ?? [];
    var totalCartPrices = 0;
    for (let index = 0; index < localStoragecartItems.length; index++) {
      const item = localStoragecartItems[index];
      totalCartPrices += item.price * item.selectedQty;
    }
    setTotalAmount(totalCartPrices);
    localStorage.setItem("TOTALCARTPRICE", JSON.stringify(totalCartPrices));
  };

  useEffect(() => {
    applyFilter();
  }, [firstCategoryPathName, search, showSearch]);

  useEffect(() => {
    applySubFilter();
  }, [firstCategoryPathName, secondCategoryPathName, search, showSearch]);

  useEffect(() => {}, [cartItems]);

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
    sizeQuantity,
    setSizeQuantity,
    finalProductQty,
    setFinalProductQty,
    increaseQuantityBtn,
    decreaseQuantityBtn,
    num,
    setNum,
    carouselToggleByCategory,
    index,
    setIndex,
    goBack,
    showCategoryFilter,
    setShowCategoryFilter,
    visible,
    setVisible,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopConextProvider;

let emptyCartImageUrl =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhURExMVFhUXFxcYFhcYGBoXHhgWFh4dFhoWIBgdHSgiGB8lHhcbITEiJSkrLi4uHx8zODMtNyktLisBCgoKDQ0NDg0NDisdFRktLS0tKysrKy0rKzArLTcrNysrKy03Kys3Nzc3LSsrKysrNysrKysrKysrKy0rLSsrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABQQGAgMHAQj/xABHEAACAQMCBAMFBQUFBgQHAAABAgMABBESIQUTIjEGQVEUIzJhcQdCUoGRJDNygqFDU2KSsRU0c4OiwRaTstFUo7PC0/Dx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDuNFFQr/isUIOt9/wjqY/RRuaCbRXOuJ/a1BGWWO0u5CpwzMgiQEbEFnORv8qqVx9qXE7s6bO3Cg/3UbXLf+YV0D81oO4k1A4hxu2g/fXEMWcfHIq9+3c1xg+G/EN9vK8san+9uOUvr+6hz/Vc0z4V9iB73F5jPdYIwv8A1tnP6UFw4n9qXDIc4n5xHlCpfPy17J/1Vjw77TbOdUZRIA2R1mJSrBtOk5kwN/n2rzhf2V8MhwTBzmHnMzSf9JOn+lWd+E2wh5JghEOMcsxoEx6acacUG2w4jHMuqNsj+o/Kpdc2uZrWzmUWlymhnIeJXVzE7Y6w2c6cDJQ5AUMcYBxdeAcXW4TUPiGNQ+uQDjuN1IwdwQw8qBpRXmah33FoIQTJKi4BOCd8AZPSNz+lBNoqtXvjCNUaSOKaRVjMpbAjXlLjVIC5BZQDnpByO2ajz8VvGflgwwnnJCdOqY5dOYcMdI1KvUekjFBbaKT+Erx5rWOWRg5fWQwAGpNbctsDbJTSdqcUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQeGuew2EUk7xXDSq6vIdSuULamL6iw7jDYx5KE+7nHQ6Tce4IJsSIQsy/C3kwG+lsb49CNwfzBCNY+CeHxHWLWNnyW1yAytqYkk5fOMk+VPlVUGwCgfQAVy/jvE5kaN1kKcktr1My8pXGg5CnSyBwBqYHQMsOjFNo24a0YmlkmuiFDOGMlwUyAx1xxjQmAQTlRtvQWS78U2iHTzg7/giDTP/AJIwTWn/AG3cyfuLKTGNnuGWEf5OqT9VFQF4y0brDDaxwodA62VNJmJET6ItQ0MUZe4OrT5HIarwy5fHOuyO+Vt41iBHoWcyP+asv/aghXMV2VZri/itkHxchFBX1zLNqH/QKVTxcOw0jCe+IUuXkM08WF3zqI9nT16RnGTgivUsIra+y0asGkQF3620zLphkLtkl1mjMOc/DImc4FXhkBBBGQRgjyx2xQU3nG5WO2FtHbIzMBkhjHJDgsmiMBQ2CxHUVZQe4ODXeF8TW1kZ4ZSRKgkDyqFQoWQF+k7sdQcnAXBZgMGmMgMAnjJ3iVnQ4/tbVMqSfvGW1ZF2/u5Pyi+KOEJHa2TJ8PJSEMPLEfSfmNIJ/kFBNh4vHcOqHiHN13ChQkixA2+nmM+hcNpyGiDEkE48628Dt0h5TCNF5Z4lMDjJ5cczRwnX3IEUmAM9selIrHgdlcRwJNAmZFuOfoZk93FIoiQFT2DSRYx659aixeFRoaRJJkdfZHdVfSrPcNpMJGN4+WU6QdySKCzJAVjZGJA5HDbUrjOHkkPM/IiZAf4a84neiNJLjbUsl/dAeZFtGbRWH+aMfnSKXh97Dr0cQchHdRzow2uSBDKLljuSAIjEFx3jBrVHPcykRE27jOhFCuHCzsJ+W4wuGd7fqOy4Vsb9g6nwGxFvbQQDtFFHH/kUL/2qfXM4ftKvUVHn4PcaXUMjQOJgykasgAehz3qRF9sfDwdM63Nu3pJC22Nj8OexoOiUVWLH7QeGTY0XsGT2DNoP6Nin9rexyDMciOP8LBv9DQSKKKKAooooCiiigKKKKAooooCiiigKKKKCh+LMWt4t0f3bj3mxOCmAxI9NIUH5FqX8O8dw2zXEDQXMkImcoVRWCCTqeM5fcCQuR/hIGBird404eJrV9slOr8gMMP8AKT/SqP4fvNMKzSdXskhEurBHss2ElznbCugnPoPruGmPxTYyRxx+0mMoslvqkSRCISdUE2WXBeNo4tyfNz510XgHH4bqKN1kiLsqlkWRW0tjqXY74O2aqvHeDxc9o2iQqdQA0BiDIObEw8hkx3EXz92PKkdl4HsLmYRSwqheEupj2xLCwinQZHUAxDA+jCgvHjOz1KkmdO/JdsZKrMQEkHponEL58grfUN+DXvOgSQjDEEOvfTIpKSJ/K6sPyrmrfZ+Y4pJIb67iCOyPHzGZQobSWKkkEaDrwQdjWXDLLi6M0cF+hbMjFZol6mR+W+6gZOdLZ2yHU+ZoLB9oVnheaFZuaqQkJ8WvV7rH1WSZD661FROK6GQwlxylWe5hYZIMUigJjHkGnZAPTFK+KX3FXVI7iKB1MuI2ilMbmWInbGk9ipOMjt3pRxqGW6j5IhntG1MdSLHKZFLN7s8uUSMFxpB9FwfMUE7hMTMsyO8mowDlKki6lDYUh1B2XOjyz2x2p0YpZDyubtNNEqawr9UCpON0EedOnOMeTeQya7bTRwyRsXZERoVJmjlhZki5ZbdkCsS0erY4IpseNjlxezhJpFu7qXCOpCrcNKqO2WB6Y58lVycpp2ByASeIuIOFslLZaeaBpBGz50TO0xQqDjLYcYHfVnAyKk+D47mKaBrwSTToXTShRtKQKVWMkkayrXL9RPlhc71F8J8CYAzXKtzFvonhVyCeWWjV5SM5GmKFgB3UZx3FWqxZmmvJu/JVJVGOoZnmmZe+4McUeO3c+lBLi47EiQhxNHyJyOuKRQIzriUF9OnaOVDjPkKzfi1rNFdKk8MgSYSookRs6OXOy4z+NWBHz+dNr2ElrqJdjLEsiHP9oAYyfljRF+tYvFFcSxuyK6XFtkagGHSQy4BHciZj+VBAv/B9lPPIslrAQ0KFDywCGDSBiCMfjSq3H9mfDnW1dY5YTMnUYpHU8zRr7EkD4X2xTzh/h+2VbQrCIyweKTknke8CEliYiu+qFht5mvW4UUjJS4nQw3QXeTmhVZwob3quc8qX8/Ogrx8GXUMcj23FbtOXKYyjYlAXUoB3IxhGDGpgtuPwymGO7tLgqiv72Mxkhiy4BA79P9acXljc/tcKXCPmNXYPD1MXQxgho3UA+5/DW9L689oikMMDq8L6eXMwLDMbA6XjABGTtqOxO9BX4fGXGEVHl4YkqPjS0MoyxIJwFO+cA/pW9PtXjQ6bmxvICDg5jLDPfGR54OampxUrDGJLW4QRXI0sFjkU+/MQUcuRmzhsbqMkbZyKkjxBb8y5VpeXzEQqJVeE6irxnaRV/uxQYWP2ocLlx+0qhPYSAp3+oqx2fGreUZjnif8AhdT/AN6rKcNs7pLImO3lBwJOlGzmBzgkfMUp4l9nfDil5ILcI8JYoY2ZMYhSQDAOMaiTQdKBr2uYf+AWieFLbiF3EZQzbuJANKg4wd+5pN4k4txPh78tr/mDWyg8sauhIpCSWzt77G2O1B2iiuPcK8c8UKhysTRlgoeVCgYnsF041fUA4rqPAL8z28czABmG4GcZBIOM742oGFFFFAUUUUHjrkEHsa5ItikHEPZ5QTE76CNTLkP7sZKkZBDRZB2wGzXXK599qHD8aLgZA+FyO+ADkj5lGb9BQeWnD3KcszS86OUwOXbUC8fv7aUgg4VsIcLgAuQMYxUS3ndDHMrY0e/AZPhCokEyNpYDpikRioxlo2I+E0xlnZzDcrjN1EIZPRby3JkgPpjUsqE7Z92PSo3EJkSYsCND8u8hUkbiTUk8RXO+tJZDvtlhvsMA8ke4RpVljgZZkLPplKDCgRs3WmBlSmxby+tVyPjKJNHPlQxaNnxJE/NKpyJ3AjdiVMaxMAQN4x5bhO/BOYZG9quJItehFciUKdYfXGpWRnGNHSqLhdQ1EjIyfhMkLllId0iBZCmmWQqzOuiJDIVB6l68YAXO29FNOO8Sd5C8AXSG1Jrwp96oSU6WYHsDjbOWY77VX7nhEjABzLK4eSRXkWRsyYbqyodUU81mCjfIzp8qkyTSNkRxFpEYaVRgmrbUja0KjDK5I1HAwQRkYGm3snxzyZBGkJSRYyVSPT0ltQ0gMRpwVbV07DcUQjSSS2MUgnYItvawlFkZCXEkYbCKQD7jJz5etTYmuJOcJ9LKtyFiM0cUg5SsVOdak4b4t98KSD62SzSZxoR3kYo47s68yLCsOZKdEi7E4jBOk/zV7wC61iSY5TTHFMjqkXwx4WaPUUyWUAsBn7wGDigXycOU5f2eRVDHPKYo2nYKVSNouYSUlOBkkKFAJ7yOGWEsmgrLPCjzclXDalbaTvzELY1R6SM/fG/lVo4hFJBK7hw+mPn6jHuwiJbTlSo1HXKcAAHUO2c1A4cZVs2jCBhDy7lizkuCG5+dowrsWjYkbfH5bUEaGC+WQCO5XUpMal0Y4DO0end9lLW48sbptucFvxHiCKrCOJ47eRowQx6XXMBQroB05bvuPhOcU04i0omcmJgWUyBVKtl1aKRGDAglcwOSMZ6u1DXiFb2LDgTBnj905w7oDqOlSAMtGc5x29aBcfENxGOXJZOuibm6spsS/OcAay2CGYZIGAc717N4wiZLpDFPGZgSCYnCrIEEerW6qp+BDtmmXEbu3nmRjKuiRAsgyoABjmQls+R5y/LapHCpVkukLqCZLeMuCoI5jA7Z7ZHs7fqPWg1QeNbJrjXzgA0WlgdyCjZTZcncSPv8vnW3hnEYeXYqsiZiPLclgCEWJ01b+rLH+tL+IWCex6hGrsktyjEjORFzwuc990TvUTifhmzU4ESofa+SSp0e7KGfYjcEL5/KgsM0imK704YR3CSruCDpENySPlqJ/SmiRgXkhP37eIY8sRvL/wDlqm3HgiJZJYopp15cKyjLs5OsyqVy5Ix7v08zVP8AEjT23J0Xk76jNgkqpAjKAHKquQdWceVB0CHgsLwcOaSCJnJjWRii5IEEgwWxn4sH617PwRAOIaGmQqOlVml0kchTgxlip3yO2fKuX2fjC9XA55IU5XUAwBHY4P51I4Xx+4vTIbkhyBqyNSqSNKDMYOhiAe5BNFX+4u2RomivWmZA4CuiSAFlACAxopbcb7swx28qh31utwxlmWKSWMs2ML0sVhyBnVpyrQt1lu+dI7VnYXarJGoSUZKD91ISdLAnqAOwABxnAwfKoPtEUSykyxs2gkxrIuSUgtwVJ+tv93Ox7gjFEQ+OW91JPCFQhUJLxo6SNIyyGNcltLFVAbYYXKghRuR1LgFkYLeOItqKrucacknV2ycd/WqYJibmEJnQXfONwxS6hIYnzOk5/Nj5muh0BRRRQFFFFAUr8SWPOt5Exk41L/Eu4H59vzppRQcp8J27XEctnznTQFeNMrpZ4znXnTzFIPJbUrD4u2c532tn7tOIKIg0BUspjIcI+BKJH5hDiNiSRgNmAdW2+u//AGDiQk7IWyf+G2SRj5Kzn6otPZ4XhvZLaMRaLtHkXXkqDn3y6FwW3Yv3GTK2T6xSi34cY5zbmKNyVFuoLFAvLRpYnV9BK+6YxjyPLAJBG/pvYgeXiTUNXNjjkS43GGYtGSSN8HSxGcjGc748U4c+heYxlYSeyOrkBdUfXasQNyr9IIYsffEb1Ou51WNzCuFjSK+t0AAAhI0zRBR30lS+n8TLVQmjSUBgXAYYVI+U8qI6oZY0XD46wA26sAqkb9xLEkXNSSVjKoETgzlc43gnj0lQmE1iTMaqMjHyOiBSpzAc6ppok1HHvYistiS3mnu2izv8ZHkaaWU8elWx7pCJFz962uPczKfoSkzZ/EtBDhvzEutMyGKRZV3Ll/Z29jmcEZBMls6uAO7a/Q4SXtvFbX45iqYVuAuGAKtBd4KMAduh5T1dxyzTa8t+Wzcwa3U4YtjLyW6PGX0gYZpLVZZceoj7eUXiYZI1MTtGNTRNy8oCJQLiCTGcMeU+ktvlozntgBI4jwaNbCJliVZQ5tZ9HSWeU+zrIdONR1sjfPUfImmVhwpOfyi1woPu3xNKM55igk53B9mJxsPeKPTCh73UkS69MjsHZTJlRJBG0zN1EqMycoK+M7bGnt7EBIXimZ8xc5CSjF5I8OqZ09wE899x88hHs7SZo7Kb2qbPNNvNjlERsBJEzIGjJ3lRV0tqwrHsd69sIbmOVUjnUFDycyQhwEzJEmQjJkt7PBtkfH9KkSQyLHcqkilY2NzgxnLsrCfIYONPwoTgY6uw8suJpMszZ0OWj540lkDmFo2GldLdQ5KnGrB1H1oIEct0LaFi0DLDdLbAGN1YYn9lUsxkYMrHQ2wGAR3xvjPBIkrK9rbtpk3AkIyC6OcZh3AF2o3Pl/hFTndxFeRcoHc3DFHDaWPvVK5AL40ofun9a2cYdpJn9zKjzW8kceNDEsRvKCrEEDTH6HbsaBZdAiO8Atp1MTnOmVWWNSiyaWQy4YYLbhTsfUVjxGTLEEXQJCyKHi5mXeKWLVlFJ7AKDn4SfTIc2vEoWmuSwfRcou3LkY6RGi5wF2HvDv8Aw+tRE4nG62Ts8assUPOBIGGDRbZ7MAHlOQSNs5oMRx1RPzDdxqHgGp7iB4xpRshTlkA/fE6u1IOIxwT22c2rlBOEPMLOnuy+QFK5GYwRvgnHrkWvhEyiaxIZSEt5IGIYED4SMnPnyRj61H4pZJ7FPkDpurjBIB/fO6jv5ZlBoKze+DI8n9mKdbAmG7L7alGAsqEDAcAHbORnYVnwbwpDayOpSdSyoCk7RO+GbTnVEAg3wQerswI7U64twu3jnucQRD3dzJ0oqnEaWhG4wdi7n8zWHF7VEvniQSAaItOmST7s1uX+9vhZdWPLTnFFa4LolICAEybcsqk4GprOUDJ3OOacZz3NeCIzW5AxkwsN+wzblQxJ2ADBd/LNabG0EZgDPIxIjwoZSmUitTktjJ3RWGk4IxuMEHKRpR7sSKB8IUxLhcrcQ4AVlPZcZJJ3HpQTrbhFu06I8asS7dgFADGNx2AOR047Y6hvkY6GBXNuELcPPFLmJupCMhk1ZjBOBlvIHftlWHcYrpVEFFFFAUUUUBRRRQUn7TeG64kmXGpTpO2e+6k/LII/mpVBNPNZJeLIr+yNrVOWRJpjG4L6zrzEdRBUZIHYjNX/AIvZCaF4j95SAfRu4P5HFc/+zu85VzLatssgJAPkwy2jHrjmZ/hFAx4zbTydBNuwvVVY2UugEsQM0coBV+sKuoeR5Y3FL7G/YNFNy9ojIzjUu0NyX5kbauwWaKTbPTpC9t6ZNbPHZz2qZMti4lt+wzCjc6FB8tAaAn5NS/jMyoslxGTynjM8eADiO5AOAPMrcxxuc7ATNnbsEGz3towI5FGgJzlCHqybiCRQW1Aok0h6lxkgbkVIilTMvMRgjM5Yct20wXK8q5jJA2VZoww8jywO9TbKHUkdvlMyQezZByoubQCa3cD/ABxuX+gUHyrRw2ZWaKSRcLMmJFJx03REFzHgfeS5SJifLmt6nIaFvXIidmHN5IEuRpzeWxR0OSMHmxoykA5CkDatU8KchoY2U4jkjQA+UBa4tDjyxGzQk/iwPSpj8REAfmuFkWQbscarqBlO2f79JGUf4QPUUuNxLK5jtk0LKQ0JnVlyFZ7uB1QbqNQkiGrpKKg3+Ehh4Mtik68yJ0jQ5CPCVUm5McbAalAOluskE/E3zpwnCLcxw67eFuTeNbzBokbXEzNHEWyvVgvC2T6GqlwvEc0g62WTIiGBjlzJ0YDEKrKTnJPxZGRtVqLq7TBbSYNLCrwAIuYmA0kjS+y6tOwx2O1Blw/gVss6xG2h0hjEcIq7HnKJDjzJgj9STKfU15wrhERi4e5U/vHt7gh3UsVSRNWzDBMsSf5jWni3EbeKTWRcRIyCSMES9RDxDbSThewz5GUHbY1jb8ds9JVbmUFpFlgGmTDIXyDuh6ukjU2+T6igk8K4FHzkiZ7kAlozi5uF1FdaAsBJ2/ZHAB2wyjsABlw6zZo+HTc+fUztC51g6G5bhtOpTga4QMelRDx215jSJedOuIhyoB05BLNmIb4a4YHzwc5rbb8XgCGMXkI0ziVExkspcS88dQPYuxA2wCMAUG3hdtIk8cSXMy6W5GQkBwo9oUDeLt+yIPzrG39oNpbuJxoS7EIVoQSpSZrdTkOMrkKcemO1Ynj8QdpFvLVhzIjrBwrYYZI69sGVyRncA9q1LxmLlvALqy/3lJgPaFVmKzJPlRg+7On64JOTQZz2cqzBH9mbEsgw8DaW500YwRzDkE3QIHl2rGSyk03Wi3tQYJ+Wzo8kLKNMUulQsZyuJMYyMAmt1xfK0skxaB9xKdE6uo5ZtWBU4Gd4Acfxem+dxxHlpf8AR8ZMzsGjYIRmPVgNqfaEDpGdhtQauI2cqyTIYdJW2dysd3IwAbpDZZVLL7s5Q7HbI2GPA7xzACC4K6xkNNHKS2u1dSXklyxHUAT2EgGwBw4vLlmuJX9nmBe0MWkaHOzPhsq5UjrPnn5Ust5CzKWDrkmQDAyAggGTgnziG2+QTuCKKWcPlaSO2IR+hFJcgBNItVTXqDHbIVsd8HONjicbqHmZYSNiRc5glK4MkgbA0dZ966799sDIpczlkt10qOiVcKNKqVtr6LAHkBytI+W1NE15ycqBPIRkHLcu8JXA8wcgavLUp7UGXh/ikftMSu+WIt92DAljFcKw3G3Vj9c10Wuc2nGILaaAuwxI8VuCuHZpMypHrIOy/CfQFsj4q6NRBRRRQFFFFAUUUUBXLPGVu1rfLcRjcsHX0JY5K/m6gH5SfOup1VPtF4YJbcP5ocE/4H6T+jaG/loIPEL2eOS3vWWErMq250u+hhOQ8TOSmVAbYEZ+PfvkIeMMyRexOVjb3qKQxZuXNnmKAVAIDJzNRIwNAwc7t/DuL3hcts/xICMDuCDrXHppYMg/gpLfxS3MtvPLhYyTDPpYNkq8URlKlRpDERE/EOWM7b0Gy+4kQdHwzcxCiAqSJ7Z26hGDr0lGMZ8iqrjzNZcQWWTLLHyrduZP2DOIbgrzB8QCKXXmkYJVtJyMA0cDgKgxBAZGi1Bd8m7sm97HkklBNHIpxns796YLxCONUZ2DxhnB2PvbW7Dayo88Sx69uyY7ZFFQ+EWONM4R3m0gl5DrY3UL/tCI7b6XUOhGBgICF9NckqRxQhXCmLWsLOSgeEftNuc+YSWFVxv7sOd96jW3G5YYkAU51RyJLJ3EmHhVyB0nnIqrsw3Zsas0vkiORJJGUY7YcnJAypU/D7sh20qV7KoxjNEbuPoJJWMOkL1oQ08KlRIwlZdJfYrzX9Djl9sCrFZce0yxy8iQBWm1AS2zEpIWZB0y/iY7eWR3xSWytCPi0EsT8Q3GQBq1EZjbCswcDSdO7DfG1rZdshBk6CMIDnPqAdD9RbIDhtAywNFLeIWNxNJrMT6FgWCJBg6I00uoyrEai0a5YbbjcgZpfb8AuENueRcExFs4jc5HN5qrshHmR6bd6fSQQjuoLdsCNVCn4SpbUVhZcsSpL6tOxBqO9orYBjVdWMKueodIYhSQZB1bhtKjGd8CpgVR+HZ1jdRG25CqGKoek7ZD6Sq6GbcgD59qmHwy6HWbiFxBGqOBqzMyKWIQb56TjPbOd9jh1ZRjRqVT8a5JxgY26cjQNpBs2RkHG423sOphlQSMjAJIY87srYJPSOliF22Parg22lotvF7Ok6MfY2hDAjD3YOtio8yWOdu2DnscMLl1WK/IcY69JyMc3XK+lT5nDJSiMaghBYgsR0pkElZTp1bGQgqPd4GMbMaJotpDpbK53L4IGlNs9lHV8HxfPY5IceJbZGmuVCRnNlKBlVOJx2X5N1p8+oetQbjhELLee5iDEaFPLQaMTSJscdJw+PoPlUcxDUuOnOSMM53AjboUuCv3viwc577VrbOmTEj45mOjUylgSB8R96+UGxAPbc4oLBa8AtHmjDWsOGtQ+OWo6ywycY2O9VqPh8RELJEoX2eTOMgKxEgDEg7YZMfmaZOjmRhzJwSoViZUVsaiMM2jIGHBCbHc7nNLbmVwG3IC6znJzut0p7nbYaSWw2R596K3W3Do4+oZdhJMBkvhSXvAByycEjBQkghhv5msLRFcysWlLc2fGJpPhVoNA+LbY4z8h6VsUtqLFiq8xsHBOTzpB0qfj63HUcDEmcnzwtUeb3NuhOpeo57LJGYy0kmADsF2AxlPXcgjufDjwPDJCkk/LlyyxRRgJHFywCUwXkbrjOVxp0kYOBjt9JfD3AvZwWdy8rZLHJ0gsF1BVJ2BKA/kOwAFOqIKKKKAooooCiiigK03dusiNG3wspU/QjBrdXhoOS+H5pra8MKOqNIxRmdC66kJU9IdSMuFwc/2p286mcUX2eV7eV4sTFi2FbDe7ELYQMWXMUhQZP8AYqNjgnT40ET3DtHKACUOoZwsi9LLkEHBVQCVOQTkdQ202vE7WMqwtYWZdR1tNM7MWxqLMyEyZx94nz+dRWuTiUjOjAspJEodNGdWh05vUDjWHwQAfu7AA1q5vVqyxIC6DqC6GXfUvRlfLYY2wNsZr2SeE6RHFHEoBzpd3ZiSNy7Jk4C4AOaxU+hH9f8AutBJjuRqyEx6DVnG+SBkdjvkbk5O4NYQxYIbHbTtgYOBjBySSDjtnz9d63GMBchgxGNgDuD3OoqoGM+vy+dQrniGgE6QFB+IyRhRn1ydv6mgm5BGCB3811dGd4yC3vFwWHXqxqOMVrmkyWOooG6TiPOr7ulmLNJKudR2wBqO43qFZ37XC4twWckBXMZ0kZwSqEhnHcBjjJ8sCrhwbwST13DFcj4FOTvnu5zgbnpBIHljtVFctojIQFMmcNtoV2x22KuQPizqGphtk5zXnLUEopyxbqxGGLYyoY9WWOMAM2TsMDFTvF7w2pW3iaSSTOoqT0pqyFGlACZDqwMb4Aye2XnCPBhMA5zsjsOqNNOhc4wuMHcYGSCN80CHScOoVicbM3LbBIjUAkyBW6ozt8fpv3zaUEhlVgHjYAaY21DTkZBlJkGGJ0yEfKrWfCa6tXNcnbuqHYOZAvw4xvjONWMb53Mc+DBp0iY/Dp3iRsjRowQ2RJ2B69XywOxFfUE4JDNhgg1E74eRBHq9BqwEHbffetQh+IFAOgZz/Z5RCMhhhf3WevLDOxqzv4SbJInxvke73+MS4169RXVnp7b9tq1r4QcEYlTACrjl6cBQ6jQA2E2f0I27b0UgO+jKgatSEFVbVqVkDYZtUgPTtJhR5HtRNMMSsWfY5Y4X4Rol6mDHAwGOlQw3G43w6HhGYBcSxkp22dQegL1ENq7rnCkLjYqe9Yv4Qmw6hosNkqd8odOkALo0r3bqQK+MdWRRHNfEXGJGkeEHlckvEeVIw1LldOVwChAABGSM5IOMVN8FXWq21S5ZllZAX36hzFwQThyVdhg7dWd6u3FPBEtwFEhj2JzpZlbPSobmaCznC/f1fUUy8LeCILQZ0h3J1HOWGs6SW6iSTlQfIDuAN8lKeFeH5bo8yUlIzg5O7yD3bKRkdI6B5DBG2RV3sLGOFBHGoVR6eZO5JPmfnUjFe0QUUUUBRRRQFFFFAUUUUBVO8c+IdANtGeo/vGHdVOwQY31Nkdt8fMim3ifjoto9sGV8iNf9XP8AhGfzOBVd8D8DMrC9lJYZLRZ3Ls3ec+v+Hy3LfhwDTwd4dEKCWVRzWHwkA8pfJB/i/EfXbsKsphX8I/QVsqu8e8Y21q3JLc24OAsEZDOSxCqCCQEyzAZYjvQOmsoj3jQ/yj/2qvcU4pZRvyUgW4n/ALqGJXKnv1tjTEPmxFKuMJfyoJrxxa2oYc2G3c8xYjsZHuPRdiyoBhdR1bbt5uCRWapPaJHGIg2tc6VlifBfU++XBAZWbO4IyA5NBVfDN3Ek91JcIAqc0shxKFk5pHKTbGVPQMY7eVaL3hcnFJ1XDKq5JU4EUKnsAi/E+B8THLHOAq1HVE5juXRBLPJIXkIUIJXZxk5xsDgDzI/S88Ht54I/2f2a5iLFgVJic58y2ZFlb59A7DYCoGnA+BxWqaYwScAF2OWbGw38h6KMAeQqL4x48LK3MmxkY6IgexcgnJ/wgAsfpjzrZ/4ijTPPSS3xuTKuEA9ecpaMDY92FVL7U1EyWsqOrRFpEyGBUs4VlOrsNo2GfnVGf2eeHGZv9oXOpnYlog43JbvOwxsW+6NsA9txjodaLOYOiuvZgCP/AG/LtW+gKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCo3Eb1YYnmf4UUscd9vIepPapNV3x//ALk/8cP6c1KCrcHsZOJXDzTD3QI5noQN1t19QAcsfn6scWrj3i21tPdsxeXGVghXmSYA76F+EAeZwKrHhjhV5dQKguvZ7QNLkQDE0rcx9eqQ/uhnto3+Ypt4fit+GF7eVI4cnUlyQFE6k9pJD/ar2IY9WzDuQsGmS14lfxl2mSzhZcxxxNzJHBGVMk42RT5iPJwfiqX4a4fYtbPaxwpEWDJcQ596H7Es2dbHzWTO40sDuKk2tlPACbJ4JYGOpIZGZQmrdlSZA2EySwUocZwCFwF1cRkjk/33hrkLuJBGlyoI810ZlBHroHyqiTHJeQrpkjS5RVxzEcRyNj8UTgR5x3IkAJzsBVL4hPCem3iEEAAOhelSdmJMasUGD6Dvnc5FbOMzoHMcEk3IwCVeWVgXOSV0ynMYUAdGyjJyNgaSvMCM5IUDUTg9vLbv57DGcntk4qKh3991L0yEHAXTjOpm07rkdxg5ydhjHrPuOCXdsxflSxnzkjzvjz1RHOPripnhBYHeWWeSXA0GEQrMOUrf2jMih0ckMDq6QMjcE1drKV2ybW/jmA7rKEkx8tUZRl/mDGgoth4zvI+0okA/Gof8sgq36k1ndcetZlk51iqswGqS3IDkj4WKMFDaScgMzDvVg4hde1Zzw6OZhsbmPEsa986WxHLIRgZEYI3xqyDUFPDtpKBHFeskp7xzJoLH/hOEkx6bkY3370FdtfEtzZgxpOAn4mhKrqyAGXV0qT5rq7nuTk1YuFfaLKi/tMQkI7vGOV8gCjMy5+esVDvPBV3FunUPWI5GPVlOlvyUPVdvOCuW0vAkjYOwGmTHcjlnTIRt+DB2oO0cH4zDcoHicHIBK5UsmfusATgjtTAVxGTjkhZRLpd0+EXEQDp5dMihZE9O9ObDxjNEMZkwNgC3tK/XLlZR+cjefeqOq0VTLLx/CdpFI79UeXAHllSqvk+iqw+dWXh3F4JxmGVH9QDuPqvdfzFETqKM0UBRRRQFFFFAUUUUBRRRQFFFFAUg8cpmzk+TRH9JENP6QeOLhFs5VZ1VmU6ASAWZcNgDuTt5UET7Nm/Yyv4Zpx+rlv8A7qtBUHbFcl4Xxma3VlhdlDMWZSqOC52J3AIzgbZppB44ul+PkP8ALlvGfzIkf/01BcJ/DNqxLLFy2JyXhZoGJ9S0RUt+ec+dYDhVzGSYrx2G2EnjSUD6Mmhz/MzUhg+0A/ftx/JMv+kip/rTKDxvbn4knT/lGQfrHqqih+IRLrmyTzNcmooDn4hnSM58xj5bee6u+nadwUji5LMraSQwAUfdIbUTkAgjYdRPkBbPFN5ZyyCWO5jV2wHikYQs/YDSJNOo4ABXzwuNxug/2UjsxSdmQ9xtn+EuqMx+YLHPrWaqd4RuJYZZZYY9TnKLEwfVLli2xA92BgEsy6RqAyM1Y7+0MsvNv7Jyig6BCqTLgjHUU9/IcE9IQLv2YgGlXC5IEGhrdR2w0EvLlz56jzgx+mfyqwcGleeFbi1vZtEmdC3MaSqNDFD20SHdT3kOdsVYVhYtb5WO14hLC2MiCVtZI9DFcjnKBnspXHbbtTC7iuipSe3truPzA92SPTlyakP5uPyry5a4ZdM1rBcp56GAJP8Awphgf5zS4iziB6rrh5x3OuONfmNQe3/1+dVHjNbRHAe84e2PPVyhjyBcSWy/lgnvU8iaVM/sd9CcEfcJGxzn3iOfP7vlWdmbogNDdW91HjbWulm+fOiOj9Iqh3UEeovPw+WN/Oa2Jc/5oSsrfmlBEvLW2I0ypdWmd8SIJ4QFxtlhLDEPkpQ7nG+TS6Twesi82ApIp3D2sunPpiOQvGf5ZEH0p9aXWWKW3ElZ9jyblVdlHbGkcqUZwd2Lb+vavbuxOovLYgt/fWkul/qf3b/kC1BSL3gbRkh3QdtrhGtj8gJt43P0f09aiXXB5o8O8M0ePhfTzVHzEsedP1zV9XiAU6Vv9JY4EN/FpJ/wKSInb6kv+dZNYlDr9leIn+0spcr/ABGEhdR+Wh6iqbwzxTexfu5ROg8ied/X94PzNWCx+0odpoCPnGdQ/Q4x+ZrZLDFM4Rntbh8bR3MZtbn661APy2iH1qLfeHYvvpdQeQ1KLuL661zIo+ZZaqLRYeL7SUZEwX+MaQP5/h/rTuKZWGpWDA9iCCP1FcguvDGyvBLFPqOlTA+WLDuAhOVx3JMu3nUa5gu7WXbUhI6RJ0MxXqYhwUMhxuQsjYGPmSHa6K5Pw3xveK/KaKYvjOl49S6cga+oI6LuOss4GRV14B4vhuVB1KDq05Dak1A6dOvAwc9gwGcgjIIJCx0UUUBRRRQFBorxu21BR/Evjoxu8NrGrtGSryvnQrjugAILkdjuMdt98VW4uHlkaVyGd8attu2NIUk4UeQyf1pLw22keblBS0mpVAAGTiMTSd9stJzM+uPlUq8vgGWBGxK6u+rBOhEAY752dgcL6ZzttnK4ZcK4Iby5CwvpEJXnkFtI31GJtJVXcjPT3UE5I2Bv0/gm0bsrr/DI+35EkUh+yGYJbz2+AqxTFkA3wkvUBq7t1BtzvjFXaS49KsRVp/AcI+GeUfxBG/0UUtl8DSDdZ429Mxsn9QzVdtVAqiht4cvUGAAw9ElyPTs4Xyx5Uqu+ANq1S2Kk/iNsp/64gD/WupVkBQcfEcSnA5qN6Lcyrj+SUyAfpTThXFpLaJIYpJFjRQqK8cUwAHlqHLJ/WumSIGGGAYehAP8AQ0ul8PWrd7eIH1VdB/VMVBWIPF0o7m3Y+hWaH+vvBTK18ZZ7xA/KOeKT+j8s/wBK2z+DLZvhMqfR9X/rDUvn8C/guD9HjB/qrD/SqJst1YyHmS20kb/3nJdGH/NiyR+tbYLmL+w4kVPkkxWUfo+mQ/56rzeDLlDmNoj81doz+mnH9a0y8O4guxSZh9UmH6Esf6UFxuEuJF0zW9rdx43KtpJ8topAy/8AzKgYt4//AIyxPy1GMf8A1IAP0qnNO8Ry8KqfVomiP6rpqXbeI5B8Lyj5rOzY/lcMKC5QSzyITDcWl5GRsrDQT9ZYy6n/AMv9ahm0SP4rO4tj3L2j6kyfPRGQW+rRfWq5NxWORg8iK7js8lvGWXPfEkTK69h2qXa8aZcCO4ZQD5yuw/S4jc/LZwKB0kwm90t5b3H4oLqJeYc9s6dBXb1jNQJXkiYwwwPFOF1YtZzLDGuQAXjdBpyNwiplsEA+da7/AIrPcR8pkt5lPd9K6huMhUYyISRnDEgA46TUC6YLDy7aC8t2PS4aYspQDBO0kiFmAA1HS2PMbUGcvEYA7yExXcrEByY5beZCuRp1ZJUKdWFAXG/ckmoNtNNzTJI+p0UpmSNmKgsrcnSzEAHSPvM2wznvWVhOsS6Y1XGnBV4wuhRtpXTK6suR8IAX1OwFQuMcRS3CqQDIwJjjC4WNWyBI4GNKEjAAGWweyjeK38E8Ie1aIUDRWaSa5FB081/PJXGTvsBhV222rX4q8Gy2H7TCxkjBOp99YRthHIg6JE3K6gBgHqUgE10ngPE4fYYrj93HylY6iOkjZlJHchsjbuarvEuJy3bhFUqmxSM5Bb0klx2H4Y/PYnfYVDfwFxCSS3CSghkC99zpbOM+e2CP/wBzVmpbwLhogjwd3Y6nY9ye35AAAY8qZUBRRRQFeGvaKDlnjnw81tM15EDy3JZiu3KZjliSASqlmZ9ZBALOGwCCKfayIrc0kFyrJGA6OTzNzpCM2STuT54AFfQLIDUBeDRKxdERWPdlRQT/ADAZNZsXVV8F8Ne3hcyDTJK+tl81VRpRT8+7EeWrHcGrEr1ubhno1YewuPStI9Vq2Ka1chh5VkAfSg3CshWtTWQNBnRXmaM0HteGjNeZoCvKKM0Huqod1w2CT44YnPq0ak/rjNSs1iTQJp/C9o39kV/gd1/oGx/Sll/4Vt41aQzvEi92coVA+uFP9c1aWNc18dcQMl3yTgrEdKKxOkMEEkszAEasCREH1PlkGWjXFZcxeZCrzRaiqyrE3UV+L3eC64IIyRgkbVhz9OAWZTthTrU5bYdDAMCfpV58JwaLGAAfFHrxgLvMxl7Dt8dIrzxZHPdQwhj7Os6qTjaVx+7kWTziWUYIGC3fJTIIKpJJAcF2PcdQDnIOO7DVsR6+VLLrhkU0sk0jSiSXGtkKsCRj7jkaRgAYVsAdhVw4l4MV3aS3ma2ZiSyBFkiZzuX5TY0k9zpIB9M71u4d4NwPfzmQ+scYhH5hmcn8sVQm4ZbsUhtlYskZblggDLuxcvywx1MNRxnCqN66BwXhCwLnu53JO5z658z/APyseFcLigHu0wT3Yksx/mPl8htTVaD2iiigKKKKAooooCiiigKKKKDzFGK9ooMSg9KxMQrZRQaTAKx5FSKKCMYTWBjNTKKCCVNYE0wxXhUUC0tXhemJhHpWtrRTQLy1cx+0Gz5d0Zj8Eisxb8KsiRSn+Vo4mP8Ahcn7tdZNiPWl/F/DyXEfLkzjIZWU4ZHGQHVvI4JHoQSCCCalHPOM+LWNkLWJJElMQjYjGAoTT7tgfv7dRxpXJ771XxZMIoIFPvNKouPx5Crj+djVpuvAF4hCxciSMdsyyW+P+UEcL/IwBOekU+8NeDTA4nnZXlGyKgISPbGQTu577kDHpnes3aurQUySfma3Rx0Rx1IRa2gVazoooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKDw0V7RQYmgUUVR7XtFFQFFFFAUUUUBRRRQf/2Q==";
