import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";
import Title from "../components/Title";
import { ImBin } from "react-icons/im";
import CartTotal from "../components/CartTotal";
import RelatedProducts from "../components/RelatedProducts";
import CartTotalFooter from "../components/CartTotalFooter";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    setCartItems,
    updateQuantity,
    showSearch,
    cartCount,
    setCartCount,
    navigate,
    sizeQuantity,
    setSizeQuantity,
    finalProductQty,
    setFinalProductQty,
  } = useContext(ShopContext);
  // const [onlyCartItems, setOnlyCartItems] = useState([]);
  const [productData, setProductData] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (cartItems.length > 0) {
        if (item._id === cartItems[cartItems.length - 1]._id) {
          setProductData(item);
          return null;
        }
      }
    });
  };

  useEffect(() => {
    console.log("USE EFFECT FIRED!!!!");

    const localCartItems =
      cartItems.length == 0
        ? JSON.parse(localStorage.getItem("CARTITEMS")) ?? []
        : cartItems;
    setCartItems(localCartItems);
    setCartCount(localCartItems.length);
    console.log("Local storage CART onlyCartItems onlyCartItems:", cartItems);
  }, []);

  useEffect(() => {
    fetchProductData();
  }, [cartItems, products]);

  return cartItems.length > 0 ? (
    <div>
      <div>
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
              SHOPPING BAG [{cartCount}]
            </p>
          </div>

          <div className="flex flex-col md:grid grid-cols-[1fr_1fr_1fr] gap-5 gap-y-12 my-10">
            {cartItems.map((product, index) => {
              var finalSizes = 0;
              return (
                <div
                  key={index}
                  className="grid grid-cols-2 md:flex flex-col gap-5 md:gap-0"
                >
                  <img className="w-96" src={product.image[0]} alt="" />
                  <div className="mt-0 sm:mt-4 md:mt-0">
                    <div className="flex flex-col md:grid grid-cols-2 items-start justify-between mt-0">
                      <p className="text-[12px] sm:text-[14px] font-medium">
                        {product.name}
                      </p>
                      <div className="w-full mt-3 md:mt-0">
                        <p className="flex flex-col w-26 px-2 sm:px-2 sm:py-1 md:flex border bg-slate-50 float-start md:float-end">
                          {/* {product.selectedSize.join(", ")} */}
                          {product.selectedSize.map((item, index) => {
                            return (
                              <div className="flex" key={index}>
                                <div className="me-4 w-6">{item.title}</div>
                                <input
                                  onChange={(e) => {
                                    if (e.target.value === "") {
                                      return null;
                                    } else {
                                      // setSizeQuantity(
                                      //   // product,
                                      //   Number(e.target.value)
                                      // );

                                      updateQuantity(
                                        product,
                                        Number(e.target.value),
                                        item
                                      );
                                    }
                                  }}
                                  className="w-10 cursor-pointer"
                                  type="number"
                                  min={1}
                                  defaultValue={sizeQuantity}
                                />
                                <div>
                                  <ImBin className="w-4 cursor-pointer" />
                                </div>
                              </div>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="items-center text-gray-500 font-semibold mt-4 md:mt-0">
                      <p>
                        {currency} {product.price}
                      </p>
                    </div>

                    <div className="flex flex-col md:grid grid-cols-2 items-start mt-4 md:mt-0 md:items-center">
                      <input
                        onChange={(e) =>
                          e.target.value === ""
                            ? null
                            : updateQuantity(product, Number(e.target.value))
                        }
                        className="border max-w-20 md:max-w-full px-1 sm:px-2 p-1"
                        type="number"
                        min={1}
                        // value={finalProductQty}
                        defaultValue={product.selectedQty}
                        readOnly={true}
                      />

                      <div className="w-full">
                        <ImBin
                          onClick={() => updateQuantity(product, 0)}
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

          {productData.category && productData.subCategory ? (
            <RelatedProducts
              category={productData.category}
              subCategory={productData.subCategory}
            />
          ) : (
            <div></div>
          )}
        </div>
        <p className="mb-32 mx-14 lg:mx-28 block xl:hidden ">
          <div className=" text-start">
            <p className="text-[11px] w-full py-6 text-gray-700">
              By continuing, I state that I have read and accept the
              <Link>
                <u>
                  <i> Purchase Conditions </i>
                </u>
              </Link>
              and I understand the
              <Link>
                <u>
                  <i> Privacy and Cookies Policy </i>
                </u>
              </Link>
              of Zara.
            </p>
          </div>
        </p>
      </div>

      <div className="fixed bottom-0">
        <CartTotalFooter />
      </div>
    </div>
  ) : (
    <div
      className={`borderborder-t-2 border-b-2 py-10 justify-center items-center bg-gray-400 text-3xl text-white font-medium ${
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
