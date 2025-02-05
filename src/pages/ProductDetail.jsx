import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { IoLogInSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        console.log("item:", item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 px-0 sm:px-16 mt-10 sm:mt-48 transition-opacity ease-in duration-500 opacity-100">
      {/* ---------------------- Product Data ----------------- */}
      <div className="flex gap-0 xl:gap-12 flex-col sm:flex-row">
        {/* --------------- Description & Review Section ------------------ */}
        <div className="hidden lg:block w-80">
          <div className="flex flex-col gap-4 border border-black h-60 px-6 py-6 text-sm text-gray-500">
            <div className="flex">
              <b className="border border-black px-5 py-3 text-sm">
                Description
              </b>
              <p className="border border-black px-5 py-3 text-sm">
                Reviews (122)
              </p>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              voluptatibus doloribus laboriosam necessitatibus officiis eveniet.
            </p>
          </div>
        </div>
        {/* ----------- Product Images ----------------- */}
        <div className=" flex flex-col-reverse md:gap-3 sm:flex-row w-full md:w-[500px] justify-center flex-shrink-0">
          <div className="w-full sm:w-[70%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll relative left-7 mb-4 sm:mb-0 w-80 sm:w-8 gap-4 sm:gap-0">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[13%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border border-orange-500"
                alt=""
              />
            ))}
          </div>
        </div>
        {/* ----------- Product Info ---------- */}
        <div className="hidden md:block border border-black px-5 w-80">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-l mt-2">{productData.name}</h1>
            <Link to="/login_rigister" className="cursor-pointer">
              <IoLogInSharp size={25} />
            </Link>
          </div>

          <div className="flex items-center gap-1 mt-2">
            <MdOutlineStar className="text-red-600" />
            <MdOutlineStar className="text-red-600" />
            <MdOutlineStar className="text-red-600" />
            <MdOutlineStar className="text-red-600" />
            <MdOutlineStar className="text-gray-300" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-2 text-xl font-medium">
            {currency}
            {productData.price}
          </p>
          <div className="my-5 text-gray-500 md:w-4/5">
            {productData.description}
            <div>
              <b>
                <u>See More</u>
              </b>
            </div>
          </div>
          <div className="flex flex-col gap-4 my--8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.size.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500 active:bg-slate-300" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-6"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original produt.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7days.</p>
          </div>
        </div>
        <div className="block md:hidden py-5 px-5 w-80">
          <div className="flex flex-col">
            <h1 className="font-medium text-l mt-2">{productData.name}</h1>
            <p className="text-sm text-gray-600 font-medium">
              {currency}
              {productData.price}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="mr-6">
              <button
                onClick={() => addToCart(productData._id, size)}
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
        </div>
      </div>

      {/* --------------- Display Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductDetail;
