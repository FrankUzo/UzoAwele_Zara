import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useLocation } from "react-router-dom";
import { IoLogInSharp } from "react-icons/io5";
import { Plus } from "react-feather";
import SizesModal from "./SizesModal";
import { use } from "react";
// import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.css";

const ProductItemTwo = ({
  id,
  image,
  name,
  price,
  size,
  classVisibility,
  lgClass,
  setIsOpen2,
  isOpen2,
  fetchRelatedProducts,
  item,
  path,
  currentBackPath,
  setCurrentBackPath,
}) => {
  const [openModal, setOpenModal] = useState(false);
  console.log("openModal:", openModal);
  const { currency, navigate } = useContext(ShopContext);

  return (
    <div className="text-gray-500">
      <div
        className={`relative overflow-hidden border border-black ${
          classVisibility === true ? "pb-0" : ""
        }`}
      >
        <div className=" inline-block">
          <button
            className="cursor-pointer"
            // to={`/product/${id}`}
            onClick={() => {
              console.log("inside prdtTwo on Click id: ", id);
              console.log("inside prdtTwo on Click path: ", path);
              {
                navigate(`/product/${id}`);
              }
              console.log("clicked item is 4 IMG: ", item);
              fetchRelatedProducts(item);
              setIsOpen2(false);
              setCurrentBackPath(path);
            }}
          >
            <img
              className="relative hover:scale-110 transition ease-in-out min-w-full h-full"
              src={image}
              alt=""
            />
          </button>

          <div className="absolute top-56 insert-0 w-full">
            {openModal === true ? (
              <SizesModal
                className="relative insert-0"
                size={size}
                setOpenModal={setOpenModal}
              />
            ) : (
              <></>
            )}
          </div>
          <div
            className={`absolute top-72 left-24 inset-0 w-8 h-8 rounded-full text-3xl font-semibold bg-black opacity-50 ${
              openModal !== true ? "block" : "hidden"
            }`}
          >
            <button
              onClick={() => {
                console.log("clicked item is 4 btn: ", item);
                fetchRelatedProducts(item);
                setOpenModal(true);
              }}
              className="relative  bottom-[6px] left-[5px] bg-black"
            >
              <Plus color="brown" size={20} />
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen2 === true ? "hidden" : "block border border-t-black"
          }`}
        >
          <div
            className={`${
              isOpen2 ? "flex flex-row-reverse justify-between" : ""
            }`}
          >
            <div className="flex flex-row items-center justify-between">
              <Link to={`/product/${id}`}>
                <p className={`text-sm ${isOpen2 ? "hidden" : ""}`}>
                  {name} ...
                </p>
              </Link>
              <Link
                to="/login_rigister"
                className={`cursor-pointer ${isOpen2 ? "hidden" : ""}`}
              >
                <IoLogInSharp size={25} />
              </Link>
            </div>
            <p className={`text-sm font-medium ${isOpen2 ? "hidden" : ""}`}>
              {currency}
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemTwo;
