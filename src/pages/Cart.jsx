import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";
import Title from "../components/Title";
import { ImBin } from "react-icons/im";
import CartTotal from "../components/CartTotal";
import RelatedProducts from "../components/RelatedProducts";
import CartTotalFooter from "../components/CartTotalFooter";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    showSearch,
    getCartCount,
    navigate,
  } = useContext(ShopContext);
  console.log("Cart cartItems:", cartItems);
  console.log("Cart showSearch:", showSearch);
  const [cartData, setCartData] = useState([]);
  console.log("Cart cartData:", cartData);
  const [productData, setProductData] = useState(false);
  console.log("Cart productData:", productData);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === cartData[cartData.length - 1]._id) {
        setProductData(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [cartData, products]);

  return cartData.length > 0 ? (
    <div
      className={`pt-8 mx-14 lg:mx-28  ${
        showSearch ? "mt-0" : "mt-16 sm:mt-40"
      }`}
    >
      <div className="text-center pt-3 sm:pt-8 pb-2 text-2xl sm:text-3xl">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        <p className="text-[11px] font-medium text-gray-800">
          SHOPPING BAG [{getCartCount()}]
        </p>
      </div>

      <div className="flex flex-col md:grid grid-cols-[1fr_1fr_1fr] gap-5 gap-y-12 my-10">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="grid grid-cols-2 md:flex flex-col gap-5 md:gap-0"
            >
              <img className="w-96" src={productData.image[0]} alt="" />
              <div className="mt-0 sm:mt-4 md:mt-0">
                <div className="flex flex-col md:grid grid-cols-2 items-start justify-between mt-0">
                  <p className="text-[12px] sm:text-[14px] font-medium">
                    {productData.name}
                  </p>
                  <div className="w-full mt-3 md:mt-0">
                    <p className="px-2 sm:px-2 sm:py-1 md:flex border bg-slate-50 float-start md:float-end">
                      {item.size}
                    </p>
                  </div>
                </div>
                <div className="items-center text-gray-500 font-semibold mt-4 md:mt-0">
                  <p>
                    {currency} {productData.price}
                  </p>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 items-start mt-4 md:mt-0 md:items-center">
                  <input
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className="border max-w-20 md:max-w-full px-1 sm:px-2 p-1"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />

                  <div className="w-full">
                    <ImBin
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="w-4 mr-4 sm:w-5 cursor-pointer mt-1 sm:mt-5 md:mt-1 float-start md:float-end"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      {/* --------------- Display Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
      <div className="fixed bottom-0">
        <CartTotalFooter />
      </div>
    </div>
  ) : (
    <div
      className={`border border-t-2 border-b-2 py-10 justify-center items-center bg-gray-400 text-3xl text-white font-medium ${
        showSearch ? "mt-5" : "mt-48"
      }`}
    >
      <marquee behavior="" direction="">
        YOU HAVE AN EMPTY CART!!!
      </marquee>
    </div>
  );
};

export default Cart;
