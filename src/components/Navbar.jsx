import React, { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { IoIosPersonAdd } from "react-icons/io";
import {
  AlignJustify,
  X,
  PlusCircle,
  MinusCircle,
  ShoppingCart,
  Search,
} from "react-feather";
import { ShopContext } from "../context/ShopContext";
// import SearchBar from "./SearchBar";
// import Carousel from "./Carousel";

const Navbar = () => {
  // const [showSalesfilter, setShowSalesfilter] = useState(false);
  // const [showCollectionsfilter, setShowCollectionsfilter] = useState(false);

  const {
    // firstCategoryPathName,
    setShowSearch,
    // secondCategoryPathName,
    // setFirstCategoryPathName,
    // setSecondCategoryPathName,
    cartCount,
    num,
    // setNum,
    // index,
    setIndex,
    goBack,
    showCategoryFilter,
    setShowCategoryFilter,
    visible,
    setVisible,
  } = useContext(ShopContext);

  console.log("showCategoryFilter:", showCategoryFilter);

  return (
    <div className="px-0 sm:px-5 fixed top-0 left-0 w-full text-white flex flex-col z-10  bg-black bg-opacity-20">
      <div
        className={`flex h-[65px] sm:h-[140px] items-start justify-between pt-5 sm:bg-transparent ${
          visible ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex flex-col ">
          <AlignJustify
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className={`w-10 cursor-pointer ${visible ? "hidden" : ""}`}
            alt="menu-icon img"
          />
          <X
            onClick={() => setVisible(false)}
            src={assets.cross_icon}
            className={`w-10 cursor-pointer text-black sm:text-white ${
              visible ? "" : "hidden"
            }`}
            alt=""
          />
        </div>

        {/* ---------Logo icon ---------------- */}
        <div className="group flex flex-col mt-[-8px]">
          <Link to="/">
            <img
              onClick={() => {
                // setShowCategoryFilter("HOME");
                // setIndex(0);
                // carouselToggleByCategory();
              }}
              src={assets.logo_icon}
              className={`w-[70px] sm:w-[180px] cursor-pointer ${
                visible ? "hidden sm:block absolue left-0" : "w-full"
              }`}
              alt=""
            />
          </Link>
          <p className="hidden group-hover:block absolute dropdown-menu left-36 top-24 py-1 px-3 rounded bg-white font-semibold text-sm text-gray-500">
            CLICK TO GO TO HOME PAGE
          </p>
        </div>

        <div
          className={`overflow-hidden  transition-all py-2  mt-[10px] sm:mt-[185px] text-black ${
            visible
              ? "bg-white w-full md:w-[400px] sm:w-[300px absolute top-[55px] left-0 sm:top-2"
              : ""
          }`}
        >
          <ul
            className={`flex ml-12 gap-4 mt-4 sm:mt-[20px]  overflow-x-scroll bg-transparent font-medium ${
              visible ? "w-full sm:w-[350px] bg-white" : "hidden"
            }`}
          >
            <li
              onClick={() => {
                setShowCategoryFilter("WOMAN");
                setIndex(0);
                carouselToggleByCategory();
              }}
              className={`flex-shrink-0 items-center gap-1 cursor-pointer text-md text-gray-600 ${
                showCategoryFilter === "WOMAN" || showCategoryFilter === "HOME"
                  ? "text-black font-bold bg-slate-300 px-2 py-1 rounded-md"
                  : ""
              }`}
            >
              WOMAN
            </li>
            <li
              onClick={() => {
                setShowCategoryFilter("MAN");
                setIndex(1);
                carouselToggleByCategory();
              }}
              className={`flex-shrink-0 items-center gap-1 cursor-pointer text-md text-gray-600 ${
                showCategoryFilter === "MAN"
                  ? "text-black font-bold bg-slate-300 px-2 py-1 rounded-md"
                  : ""
              }`}
            >
              MAN
            </li>
            <li
              onClick={() => {
                setShowCategoryFilter("KIDS");
                setIndex(2);
                carouselToggleByCategory();
              }}
              className={`flex-shrink-0 items-center gap-1 cursor-pointer text-md text-gray-600 ${
                showCategoryFilter === "KIDS"
                  ? "text-black font-bold bg-slate-300 px-2 py-1 rounded-md"
                  : ""
              }`}
            >
              KIDS
            </li>
          </ul>

          <div
            className={`${
              visible ? "h-screen sm:h-[368px] overflow-y-scroll" : "h-0"
            }`}
          >
            {/* General Filter Container */}
            <div className="max-h-screen overflow-y-auto px-4 py-1">
              {/* women filter */}
              <div className="womens-filter-container">
                {/* New Collections filter */}
                <div
                  className={`m-6 px-2 text-black ${
                    (visible && showCategoryFilter === "WOMAN") ||
                    (visible && showCategoryFilter === "HOME")
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <div className="block">
                    <div className="flex justify-between font-bold mb-3 pb-2">
                      <p className="text-gray-600 font-bold shadow-slate-400 shadow-xl p-1">
                        NEW COLLECTIONS
                      </p>
                    </div>
                    <ul className="flex flex-col text-[12px]">
                      <Link
                        onClick={() => {
                          setVisible(false);
                          // setShowCategoryFilter("WOMAN");
                          // setFirstCategoryPathName("Women");
                        }}
                        to="/Women/view_all_new"
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        /// WOMEN NEW
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                          // setFilter("Topwear");
                        }}
                        to="/Women/Topwear"
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        WOMEN TOP
                      </Link>
                      <Link
                        to="/Women/Bottomwear"
                        onClick={() => {
                          setVisible(false);
                          // setFilter("Bottomwear");
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        WOMEN BOTTOM
                      </Link>
                      <Link
                        to="/Women/Winterwear"
                        onClick={() => {
                          setVisible(false);
                          // setFilter("Winterwear");
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        WOMEN WINTER
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                          setFilter("Tops/Bodysuits");
                        }}
                        className="border-b-2 mb-2 text-gray-600 font-semibold"
                      >
                        WOMEN TOPS/BODYSUITS
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* sales filter */}
                <div
                  className={`m-6 px-2 text-black ${
                    (visible && showCategoryFilter === "WOMAN") ||
                    (visible && showCategoryFilter === "HOME")
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <div
                    className={`${
                      showCategoryFilter === "WOMAN" ||
                      showCategoryFilter === "HOME"
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    <div className="flex justify-between font-bold mb-3 pb-2">
                      <p className="text-gray-600 font-bold shadow-slate-400 shadow-xl p-1">
                        SALES
                      </p>
                    </div>
                    <ul className="flex flex-col text-[12px]">
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        WOMEN OUTERWEAR
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        WOMEN DRESSES
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        WOMEN BLAZERS/VESTS
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        WOMEN CARDIGANS/SWEATERS
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        WOMEN TOPS/BODYSUITS
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        WOMEN SHIRTS/BLOUSES
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* Filter footer buttons */}
                <div
                  className={`ms-3 text-black ${
                    (visible && showCategoryFilter === "WOMAN") ||
                    (visible && showCategoryFilter === "HOME")
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <div className="flex flex-col text-[12px]">
                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">GIFT CARD</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">JOIN LIFE</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">+ INFO</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">CAREERS</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">STORES</Link>
                    </button>
                  </div>
                </div>
              </div>

              {/* men filter */}
              <div className="mens-filter-container">
                {/* New Collections filter */}
                <div
                  className={`m-6 px-2 text-black ${
                    visible && showCategoryFilter === "MAN" ? "block" : "hidden"
                  }`}
                >
                  <div className="block">
                    <div className="flex justify-between font-bold mb-3 pb-2">
                      <p className="text-gray-600 font-bold shadow-slate-400 shadow-xl p-1">
                        NEW COLLECTIONS
                      </p>
                    </div>
                    <ul className="flex flex-col text-[12px]">
                      <Link
                        onClick={() => {
                          setVisible(false);
                          // setShowCategoryFilter("WOMAN");
                          // setFirstCategoryPathName("Women");
                        }}
                        to="/Men/view_all_new"
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        /// MEN NEW
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                          // setFilter("Topwear");
                        }}
                        to="/Men/Topwear"
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        MEN TOP
                      </Link>
                      <Link
                        to="/Men/Bottomwear"
                        onClick={() => {
                          setVisible(false);
                          // setFilter("Bottomwear");
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        MEN BOTTOM
                      </Link>
                      <Link
                        to="/Men/Winterwear"
                        onClick={() => {
                          setVisible(false);
                          // setFilter("Winterwear");
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        MEN WINTER
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                          // setFilter("Tops/Bodysuits");
                        }}
                        className="border-b-2 mb-2 text-gray-600 font-semibold"
                      >
                        MEN TOPS/BODYSUITS
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* sales filter */}
                <div
                  className={`m-6 px-2 text-black ${
                    visible && showCategoryFilter === "MAN" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className={`${
                      showCategoryFilter === "MAN" ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex justify-between font-bold mb-3 pb-2">
                      <p className="text-gray-600 font-bold shadow-slate-400 shadow-xl p-1">
                        SALES
                      </p>
                    </div>
                    <ul className="flex flex-col text-[12px]">
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        MEN OUTERWEAR
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        MEN DRESSES
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        MEN BLAZERS/VESTS
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        MEN CARDIGANS/SWEATERS
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        MEN TOPS/BODYSUITS
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        MEN SHIRTS/BLOUSES
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* Filter footer buttons */}
                <div
                  className={`ms-3 text-black ${
                    visible && showCategoryFilter === "MAN" ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-col text-[12px]">
                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">GIFT CARD</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">JOIN LIFE</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">+ INFO</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">CAREERS</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">STORES</Link>
                    </button>
                  </div>
                </div>
              </div>

              {/* Kids filter */}
              <div className="kids-filter-container">
                {/* New Collections filter */}
                <div
                  className={`m-6 px-2 text-black ${
                    visible && showCategoryFilter === "KIDS"
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <div className="block">
                    <div className="flex justify-between font-bold mb-3 pb-2">
                      <p className="text-gray-600 font-bold shadow-slate-400 shadow-xl p-1">
                        NEW COLLECTIONS
                      </p>
                    </div>
                    <ul className="flex flex-col text-[12px]">
                      <Link
                        onClick={() => {
                          setVisible(false);
                          // setShowCategoryFilter("WOMAN");
                          // setFirstCategoryPathName("Women");
                        }}
                        to="/Kids/view_all_new"
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        /// KIDS NEW
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                          // setFilter("Topwear");
                        }}
                        to="/Kids/Topwear"
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        KIDS TOP
                      </Link>
                      <Link
                        to="/Kids/Bottomwear"
                        onClick={() => {
                          setVisible(false);
                          // setFilter("Bottomwear");
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        KIDS BOTTOM
                      </Link>
                      <Link
                        to="/Kids/Winterwear"
                        onClick={() => {
                          setVisible(false);
                          // setFilter("Winterwear");
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        KIDS WINTER
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                          // setFilter("Tops/Bodysuits");
                        }}
                        className="border-b-2 mb-2 text-gray-600 font-semibold"
                      >
                        KIDS TOPS/BODYSUITS
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* sales filter */}
                <div
                  className={`m-6 px-2 text-black ${
                    visible && showCategoryFilter === "KIDS"
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <div
                    className={`${
                      showCategoryFilter === "KIDS" ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex justify-between font-bold mb-3 pb-2">
                      <p className="text-gray-600 font-bold shadow-slate-400 shadow-xl p-1">
                        SALES
                      </p>
                    </div>
                    <ul className="flex flex-col text-[12px]">
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        KIDS OUTERWEAR
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        KIDS DRESSES
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        KIDS BLAZERS/VESTS
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        KIDS CARDIGANS/SWEATERS
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        KIDS TOPS/BODYSUITS
                      </Link>
                      <Link
                        onClick={() => {
                          setVisible(false);
                        }}
                        className="border-b-2 pb-1 mb-2 text-gray-600 font-semibold"
                      >
                        KIDS SHIRTS/BLOUSES
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* Filter footer buttons */}
                <div
                  className={`ms-3 text-black ${
                    visible && showCategoryFilter === "KIDS"
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <div className="flex flex-col text-[12px]">
                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">GIFT CARD</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">JOIN LIFE</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">+ INFO</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">CAREERS</Link>
                    </button>

                    <button className="text-start ms-4 mb-2 cursor-pointer text-gray-600 font-semibold">
                      <Link className="">STORES</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-[0px] sm:p-[60px] md:p-[120px] lg:p-[180px] "></div>

        {/* <SearchBar /> */}
        <div
          onClick={() => {
            setShowSearch(true);
            goBack();
          }}
          className="md:flex w-full sm:w-1/4 mt-[80px] mr-0 lg:mr-24 sm:mr-0 xl:mt-11 mx-auto md:translate-x-52 sm:translate-x-72 hidden sm:relative border border-white sm:border-black bg-transparent sm:bg-white cursor-pointer"
        >
          <button className="text-gray-700 text-xs py-2 font-medium w-full text-end px-5">
            SEARCH
          </button>
        </div>

        <div className="flex gap-2 sm:gap-4 ml-28 flex-shrink-0">
          <Search
            onClick={() => {
              setShowSearch(true);
              goBack();
            }}
            size={30}
            color="black"
            className=" sm:hidden cursor-pointer"
          />

          <div className="group">
            <IoIosPersonAdd
              size={30}
              color="black"
              className=" sm:hidden cursor-pointer"
            />

            <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col bg-slate-100 text-gray-500 w-20 py-3 px-5 gap-2 border border-black rounded">
                <Link
                  to="/login_rigister"
                  className="flex-shrink-0 cursor-pointer hover:text-black"
                >
                  Login
                </Link>
                <Link className="flex-shrink-0 cursor-pointer hover:text-black">
                  Help
                </Link>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative">
            <ShoppingCart
              size={30}
              color="black"
              className=" sm:hidden cursor-pointer mr-4"
            />
            <p className="sm:hidden absolute right-[19px] top-[-6px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {cartCount}
            </p>
          </Link>

          <Link
            to="/login_rigister"
            className="flex-shrink-0 text-xs hidden sm:flex cursor-pointer"
          >
            LOG IN
          </Link>
          <Link className="flex-shrink-0 text-xs hidden sm:flex cursor-pointer">
            HELP
          </Link>
          <Link
            to="/cart"
            className="flex-shrink-0 text-xs hidden sm:flex cursor-pointer"
          >
            SHOPPING CART({cartCount})
          </Link>
        </div>
      </div>

      <div className="mt-[1px] lg:mt-2 md:mt-1 xl:mt-7 w-full pl-[30px] lg:pl-[62px] md:pl-[36px]">
        <ul className="hidden sm:flex gap-3">
          <li
            onClick={() => {
              setShowCategoryFilter("WOMAN");
              setVisible(true);
              setIndex(0);
              carouselToggleByCategory(num);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer text-xs hover:text-gray-600 hover:bg-gray-200 hover:px-3 hover:py-1 hover:rounded ${
              showCategoryFilter === "WOMAN" || showCategoryFilter === "HOME"
                ? "text-black font-bold"
                : ""
            }`}
          >
            WOMAN
            {showCategoryFilter === "WOMAN" || showCategoryFilter === "HOME" ? (
              <hr className=" w-2/4 border-none h-[2.5px] bg-red-700" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setShowCategoryFilter("MAN");
              setVisible(true);
              setIndex(1);
              carouselToggleByCategory(num);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer text-xs hover:text-gray-600 hover:bg-gray-200 hover:px-3 hover:py-1 hover:rounded ${
              showCategoryFilter === "MAN" ? "text-black font-bold" : ""
            }`}
          >
            MAN
            {showCategoryFilter === "MAN" ? (
              <hr className=" w-2/4 border-none h-[2.5px] bg-red-700" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setShowCategoryFilter("KIDS");
              setVisible(true);
              setIndex(2);
              carouselToggleByCategory();
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer text-xs hover:text-gray-600 hover:bg-gray-200 hover:px-3 hover:py-1 hover:rounded ${
              showCategoryFilter === "KIDS" ? "text-black font-bold" : ""
            }`}
          >
            KIDS
            {showCategoryFilter === "KIDS" ? (
              <hr className=" w-2/4 border-none h-[2.5px] bg-red-700" />
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
