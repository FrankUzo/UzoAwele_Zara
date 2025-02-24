import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoLogInSharp } from "react-icons/io5";
import { ShopContext } from "../context/ShopContext";
import CartBtnOffCanvas from "./CartBtnOffCanvas";

const AddToCartBtn = ({ size, setOpenModal }) => {
  //   const { productId } = useParams();
  const { showAddToCartBtn, setshowAddToCartBtn, addToCart, products } =
    useContext(ShopContext);
  const [isOpen1, setIsOpen1] = useState(false);
  const [productData, setProductData] = useState(false);
  const [productId, setProductId] = useState("");

  console.log("add to cart btn productData:", productData);
  console.log("add to cart btn products:", products);
  console.log("add to cart btn productId:", productId);

  const location = useLocation();

  const currentURL = location.pathname;
  console.log("currentURL:", currentURL);

  useEffect(() => {
    var splittedUrl = currentURL.split("/");
    console.log("Loging out splittedUrl:", splittedUrl);

    var productId = splittedUrl[2];
    console.log("productId:", productId);
    setProductId(productId);
  }, [currentURL]);

  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        console.log("item:", item);
        // setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    if (location.pathname.includes("product")) {
      setshowAddToCartBtn(true);
    } else {
      setshowAddToCartBtn(false);
    }
  }, [location]);

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return showAddToCartBtn ? (
    <div className="block sm:hidden mt-20">
      <div className="flex fixed bottom-0 pb-4  px-5 items-center justify-between bg-white">
        <div className="mr-6">
          <button
            onClick={() => {
              setIsOpen1(true);
              // addToCart(productData._id, size);
            }}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-6 w-64 "
          >
            ADD TO CART
          </button>
        </div>
        <div className="cursor-pointer border border-black p-2 w-12 mt-6">
          <Link to="/login_rigister">
            <IoLogInSharp size={25} />
          </Link>
        </div>
      </div>
      <div>
        <CartBtnOffCanvas
          isOpen1={isOpen1}
          setIsOpen1={setIsOpen1}
          productData={productData}
        />
      </div>
    </div>
  ) : null;
};

export default AddToCartBtn;
