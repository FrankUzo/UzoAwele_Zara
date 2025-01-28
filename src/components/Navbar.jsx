import React, { useRef, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { IoIosPersonAdd } from "react-icons/io";
import {
  AlignJustify,
  X,
  PlusCircle,
  MinusCircle,
  ShoppingCart,
  Search,
} from "react-feather";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [categoryPathName, setCategoryPathName] = useState("HOME");
  const [showSalesfilter, setShowSalesfilter] = useState(false);
  const [showCollectionsfilter, setShowCollectionsfilter] = useState(false);
  console.log(categoryPathName);
  const targetRef1 = useRef(null);

  return (
    <div className="px-0 sm:px-5 fixed top-0 left-0 w-full text-white flex flex-col z-10  bg-black bg-opacity-20">
      <div
        className={`flex h-[90px] sm:h-[140px] items-start justify-between pt-5 sm:bg-transparent ${
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

        {/* <div
          className={`overflow-hidden  transition-all py-2 ${
            visible
              ? "w-full sm:w-[350px] border sm:border-black absolute top-20 left-0 sm:left-[100px] sm:top-2"
              : "w-0"
          }`}
        >
          <ul className="flex gap-4 mt-15 sm:mt-32 px-4 pt-8 pb-2 overflow-x-scroll">
            <NavLink
              onClick={() => targetRef1.current?.scrollIntoView()}
              to="/women"
              className="flex-shrink-0 items-center gap-1 cursor-pointer text-md"
            >
              WOMAN
            </NavLink>
            <NavLink
              onClick={() => targetRef1.current?.scrollIntoView()}
              to="/men"
              className="flex-shrink-0 items-center gap-1 cursor-pointer text-md"
            >
              MAN
            </NavLink>
            <NavLink
              onClick={() => targetRef1.current?.scrollIntoView()}
              to="/kids"
              className="flex-shrink-0 items-center gap-1 cursor-pointer text-md"
            >
              KIDS
            </NavLink>
            <NavLink
              onClick={() => targetRef1.current?.scrollIntoView()}
              to="/"
              className="flex-shrink-0 items-center gap-1 cursor-pointer text-md"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => targetRef1.current?.scrollIntoView()}
              to="/massimo-dutti"
              className="flex-shrink-0 items-center gap-1 cursor-pointer text-md"
            >
              MASSIMO DUTTI
            </NavLink>
            <NavLink
              to="/beauty"
              className="iflex-shrink-0 items-center gap-1 cursor-pointer text-md"
            >
              BEAUTY
            </NavLink>
            <NavLink
              ref={targetRef1}
              to="/zara-pre-owned"
              className="flex-shrink-0 items-center gap-1 cursor-pointer text-md"
            >
              ZARA PRE-OWNED
            </NavLink>
          </ul>
          <hr className="h-[1px] border-none bg-black" />
        </div>

        <div className="flex flex-col mt-[-8px]">
          <img
            src={assets.logo_icon}
            className={`w-[280px]  sm:w-[280px] ${
              visible ? "hidden sm:block" : "block"
            }`}
            alt=""
          />
        </div> */}

        <div
          className={`overflow-hidden  transition-all py-2  mt-[10px] sm:mt-[10px] bg-white text-black ${
            visible
              ? "w-full md:w-[400px] sm:w-[300px] border sm:border-black absolute top-20 left-0 sm:left-[100px] sm:top-2"
              : ""
          }`}
        >
          <div className="flex flex-col mt-[-8px]">
            <img
              src={assets.logo_icon}
              className={`pl-6 w-[280px]  sm:w-[280px] ${
                visible ? "hidden sm:block absolue left-0" : "w-full"
              }`}
              alt=""
            />
          </div>
          <ul
            className={`flex gap-4 mt-15 sm:mt-[70px] px-4 pt-8 pb-2  overflow-x-scroll ${
              visible ? "w-full sm:w-[350px]" : "hidden"
            }`}
          >
            <li
              onClick={() => {
                targetRef1.current?.scrollIntoView();
                setCategoryPathName("WOMAN");
              }}
              className={`flex-shrink-0 items-center gap-1 cursor-pointer text-md text-gray-600 ${
                categoryPathName === "WOMAN" ? "text-black font-bold" : ""
              }`}
            >
              WOMAN
            </li>
            <li
              onClick={() => {
                targetRef1.current?.scrollIntoView();
                setCategoryPathName("MAN");
              }}
              className={`flex-shrink-0 items-center gap-1 cursor-pointer text-md text-gray-600 ${
                categoryPathName === "MAN" ? "text-black font-bold" : ""
              }`}
            >
              MAN
            </li>
            <li
              onClick={() => {
                targetRef1.current?.scrollIntoView();
                setCategoryPathName("KIDS");
              }}
              className={`flex-shrink-0 items-center gap-1 cursor-pointer text-md text-gray-600 ${
                categoryPathName === "KIDS" ? "text-black font-bold" : ""
              }`}
            >
              KIDS
            </li>
            <li
              onClick={() => {
                targetRef1.current?.scrollIntoView();
                setCategoryPathName("HOME");
              }}
              className={`flex-shrink-0 items-center gap-1 cursor-pointer text-md text-gray-600 ${
                categoryPathName === "HOME" ? "text-black font-bold" : ""
              }`}
            >
              HOME
            </li>
            <li
              onClick={() => targetRef1.current?.scrollIntoView()}
              className={`flex-shrink-0 items-center gap-1 cursor-pointer text-md text-gray-600 ${
                categoryPathName === "MASSIMO DUTTI"
                  ? "text-black font-bold"
                  : ""
              }`}
            >
              MASSIMO DUTTI
            </li>
            <li
              className={`flex-shrink-0 items-center gap-1 cursor-pointer text-md text-gray-600 ${
                categoryPathName === "BEAUTY" ? "text-black font-bold" : ""
              }`}
            >
              BEAUTY
            </li>
            <li
              ref={targetRef1}
              className={`flex-shrink-0 items-center gap-1 cursor-pointer text-md text-gray-600 ${
                categoryPathName === "ZARA PRE-OWNED"
                  ? "text-black font-bold"
                  : ""
              }`}
            >
              ZARA PRE-OWNED
            </li>
          </ul>

          <div
            className={`${
              visible ? "h-screen sm:h-[250px] overflow-y-scroll" : "h-0"
            }`}
          >
            <hr
              className={`h-[1px] border-none bg-black ${
                visible ? "block" : "hidden"
              }`}
            />

            {/* General Filter Container */}
            <div className="max-h-screen overflow-y-auto p-4">
              {/* women filter */}
              <div className="womens-filter-container">
                {/* sales filter */}
                <div
                  className={`m-6 px-2 pt-2  bg-green-400 text-black ${
                    visible && categoryPathName === "WOMAN" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className={`${
                      categoryPathName === "WOMAN" ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex justify-between font-bold mb-7 cursor-pointer pb-2">
                      <p onClick={() => setShowSalesfilter(true)}>SALE</p>
                      <PlusCircle
                        onClick={() => setShowSalesfilter(true)}
                        color="red"
                        className={` ${showSalesfilter ? "hidden" : "block"}`}
                      />
                      <MinusCircle
                        onClick={() => setShowSalesfilter(false)}
                        color="red"
                        className={` ${showSalesfilter ? "block" : "hidden"}`}
                      />
                    </div>
                    <ul
                      className={`flex flex-col text-[12px] ${
                        showSalesfilter ? "block" : "hidden"
                      }`}
                    >
                      <Link className="border-b-2 border-red-800 pb-1 mb-2">
                        OUTERWEAR
                      </Link>
                      <Link className="border-b-2 border-red-800 pb-1 mb-2">
                        DRESSES
                      </Link>
                      <Link className="border-b-2 border-red-800 pb-1 mb-2">
                        BLAZERS/VESTS
                      </Link>
                      <Link className="border-b-2 border-red-800 pb-1 mb-2">
                        CARDIGANS/SWEATERS
                      </Link>
                      <Link className="border-b-2 border-red-800 pb-1 mb-2">
                        TOPS/BODYSUITS
                      </Link>
                      <Link className="border-b-2 border-red-800 pb-1 mb-2">
                        SHIRTS/BLOUSES
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* New Collections filter */}
                <div
                  className={`m-6 px-2 pt-2  bg-red-800 text-black ${
                    visible && categoryPathName === "WOMAN" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className={`${
                      categoryPathName === "WOMAN" ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex justify-between font-bold mb-7 cursor-pointer pb-2">
                      <p onClick={() => setShowCollectionsfilter(true)}>
                        NEW COLLECTIONS
                      </p>
                      <PlusCircle
                        onClick={() => setShowCollectionsfilter(true)}
                        color="green"
                        className={` ${
                          showCollectionsfilter ? "hidden" : "block"
                        }`}
                      />
                      <MinusCircle
                        onClick={() => setShowCollectionsfilter(false)}
                        color="green"
                        className={` ${
                          showCollectionsfilter ? "block" : "hidden"
                        }`}
                      />
                    </div>
                    <ul
                      className={`flex flex-col text-[12px] ${
                        showCollectionsfilter ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        onClick={() => setVisible(false)}
                        to="/women/view_all_new"
                        className="border-b-2 border-green-400 pb-1 mb-2"
                      >
                        /// NEW
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        TOP
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        BOTTOM
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        WINTER
                      </Link>
                      <Link className="border-b-2 border-green-400 mb-2">
                        TOPS/BODYSUITS
                      </Link>

                      <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                        <Link className="">GIFT CARD</Link>
                      </button>
                    </ul>
                  </div>
                </div>

                {/* Filter footer buttons */}
                <div
                  className={`m-6 px-2 pt-2  text-black ${
                    visible && categoryPathName === "WOMAN" ? "block" : "hidden"
                  }`}
                >
                  <div className="flex gap-2 text-[12px]">
                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">JOIN LIFE</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">+ INFO</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">CAREERS</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">STORES</Link>
                    </button>
                  </div>
                </div>
              </div>

              {/* men filter */}
              <div className="mens-filter-container">
                {/* sales filter */}
                <div
                  className={`m-6 px-2 pt-2  bg-green-400 text-black ${
                    visible && categoryPathName === "MAN" ? "block" : "hidden"
                  }`}
                >
                  <div className="flex justify-between font-bold mb-7 cursor-pointer pb-2">
                    <p onClick={() => setShowSalesfilter(true)}>SALE</p>
                    <PlusCircle
                      onClick={() => setShowSalesfilter(true)}
                      color="red"
                      className={` ${showSalesfilter ? "hidden" : "block"}`}
                    />
                    <MinusCircle
                      onClick={() => setShowSalesfilter(false)}
                      color="red"
                      className={` ${showSalesfilter ? "block" : "hidden"}`}
                    />
                  </div>
                  <ul
                    className={`flex flex-col text-[12px] ${
                      showSalesfilter ? "block" : "hidden"
                    }`}
                  >
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      FROM 60% OFF
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      VIEW ALL
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      NEW ITEMS
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      SHIRTS
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      CARDIGANS/SWEATERS
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      T-SHIRTS
                    </Link>
                  </ul>
                </div>

                {/* New Collections filter */}
                <div
                  className={`m-6 px-2 pt-2  bg-red-800 text-black ${
                    visible && categoryPathName === "MAN" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className={`${
                      categoryPathName === "MAN" ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex justify-between font-bold mb-7 cursor-pointer pb-2">
                      <p onClick={() => setShowCollectionsfilter(true)}>
                        NEW COLLECTIONS
                      </p>
                      <PlusCircle
                        onClick={() => setShowCollectionsfilter(true)}
                        color="green"
                        className={` ${
                          showCollectionsfilter ? "hidden" : "block"
                        }`}
                      />
                      <MinusCircle
                        onClick={() => setShowCollectionsfilter(false)}
                        color="green"
                        className={` ${
                          showCollectionsfilter ? "block" : "hidden"
                        }`}
                      />
                    </div>
                    <ul
                      className={`flex flex-col text-[12px] ${
                        showCollectionsfilter ? "block" : "hidden"
                      }`}
                    >
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        /// NEW
                      </Link>
                      <Link className="border-b-2 border-green-400 mb-2">
                        VIEW ALL
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        TOP
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        BOTTOM
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        WINTER
                      </Link>

                      <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                        <Link className="">GIFT CARD</Link>
                      </button>
                    </ul>
                  </div>
                </div>

                {/* Filter footer buttons */}
                <div
                  className={`m-6 px-2 pt-2  text-black ${
                    visible && categoryPathName === "MAN" ? "block" : "hidden"
                  }`}
                >
                  <div className="flex gap-2 text-[12px]">
                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">JOIN LIFE</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">+ INFO</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">CAREERS</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">STORES</Link>
                    </button>
                  </div>
                </div>
              </div>

              {/* Kids filter */}
              <div className="kids-filter-container">
                {/* sales filter */}
                <div
                  className={`m-6 px-2 pt-2  bg-green-400 text-black ${
                    visible && categoryPathName === "KIDS" ? "block" : "hidden"
                  }`}
                >
                  <div className="flex justify-between font-bold mb-7 cursor-pointer pb-2">
                    <p onClick={() => setShowSalesfilter(true)}>SALE</p>
                    <PlusCircle
                      onClick={() => setShowSalesfilter(true)}
                      color="red"
                      className={` ${showSalesfilter ? "hidden" : "block"}`}
                    />
                    <MinusCircle
                      onClick={() => setShowSalesfilter(false)}
                      color="red"
                      className={` ${showSalesfilter ? "block" : "hidden"}`}
                    />
                  </div>

                  <ul
                    className={`flex flex-col text-[12px] justify-start ${
                      showSalesfilter ? "block" : "hidden"
                    }`}
                  >
                    <p className="start font-bold border-b-2 border-red-800 pb-1 mb-2">
                      GIRL
                    </p>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      1 - 6 YEARS
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      6 - 14 YEARS
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      Z3D 14+ YEARS
                    </Link>
                    <p className="start font-bold border-b-2 border-red-800 pb-1 mb-2 mt-5">
                      BOY
                    </p>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      1 - 6 YEARS
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      6 - 14 YEARS
                    </Link>
                    <p className="start font-bold border-b-2 border-red-800 pb-1 mb-2 mt-5">
                      BABY
                    </p>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      0 - 6 MONTHS
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      6 - 18 MONTHS
                    </Link>
                  </ul>
                </div>

                {/* New Collections filter */}
                <div
                  className={`m-6 px-2 pt-2  bg-red-800 text-black ${
                    visible && categoryPathName === "KIDS" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className={`${
                      categoryPathName === "KIDS" ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex justify-between font-bold mb-7 cursor-pointer pb-2">
                      <p onClick={() => setShowCollectionsfilter(true)}>
                        NEW COLLECTIONS
                      </p>
                      <PlusCircle
                        onClick={() => setShowCollectionsfilter(true)}
                        color="green"
                        className={` ${
                          showCollectionsfilter ? "hidden" : "block"
                        }`}
                      />
                      <MinusCircle
                        onClick={() => setShowCollectionsfilter(false)}
                        color="green"
                        className={` ${
                          showCollectionsfilter ? "block" : "hidden"
                        }`}
                      />
                    </div>
                    <ul
                      className={`flex flex-col text-[12px] ${
                        showCollectionsfilter ? "block" : "hidden"
                      }`}
                    >
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        /// NEW
                      </Link>
                      <Link className="border-b-2 border-green-400 mb-2">
                        VIEW ALL
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        TOP
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        BOTTOM
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        WINTER
                      </Link>

                      <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                        <Link className="">GIFT CARD</Link>
                      </button>
                    </ul>
                  </div>
                </div>

                {/* Filter footer buttons */}
                <div
                  className={`m-6 px-2 pt-2  text-black ${
                    visible && categoryPathName === "KIDS" ? "block" : "hidden"
                  }`}
                >
                  <div className="flex gap-2 text-[12px]">
                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">JOIN LIFE</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">+ INFO</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">CAREERS</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">STORES</Link>
                    </button>
                  </div>
                </div>
              </div>

              {/* Home filter */}
              <div className="home-filter-container">
                {/* sales filter */}
                <div
                  className={`m-6 px-2 pt-2  bg-green-400 text-black ${
                    visible && categoryPathName === "HOME" ? "block" : "hidden"
                  }`}
                >
                  <div className="flex justify-between font-bold mb-7 cursor-pointer pb-2">
                    <p onClick={() => setShowSalesfilter(true)}>SALE</p>
                    <PlusCircle
                      onClick={() => setShowSalesfilter(true)}
                      color="red"
                      className={` ${showSalesfilter ? "hidden" : "block"}`}
                    />
                    <MinusCircle
                      onClick={() => setShowSalesfilter(false)}
                      color="red"
                      className={` ${showSalesfilter ? "block" : "hidden"}`}
                    />
                  </div>

                  <ul
                    className={`flex flex-col text-[12px] justify-start ${
                      showSalesfilter ? "block" : "hidden"
                    }`}
                  >
                    <p className="start font-bold border-b-2 border-red-800 pb-1 mb-2">
                      GIRL
                    </p>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      1 - 6 YEARS
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      6 - 14 YEARS
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      Z3D 14+ YEARS
                    </Link>
                    <p className="start font-bold border-b-2 border-red-800 pb-1 mb-2 mt-5">
                      BOY
                    </p>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      1 - 6 YEARS
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      6 - 14 YEARS
                    </Link>
                    <p className="start font-bold border-b-2 border-red-800 pb-1 mb-2 mt-5">
                      BABY
                    </p>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      0 - 6 MONTHS
                    </Link>
                    <Link className="border-b-2 border-red-800 pb-1 mb-2">
                      6 - 18 MONTHS
                    </Link>
                  </ul>
                </div>

                {/* New Collections filter */}
                <div
                  className={`m-6 px-2 pt-2  bg-red-800 text-black ${
                    visible && categoryPathName === "HOME" ? "block" : "hidden"
                  }`}
                >
                  <div
                    className={`${
                      categoryPathName === "HOME" ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex justify-between font-bold mb-7 cursor-pointer pb-2">
                      <p onClick={() => setShowCollectionsfilter(true)}>
                        NEW COLLECTIONS
                      </p>
                      <PlusCircle
                        onClick={() => setShowCollectionsfilter(true)}
                        color="green"
                        className={` ${
                          showCollectionsfilter ? "hidden" : "block"
                        }`}
                      />
                      <MinusCircle
                        onClick={() => setShowCollectionsfilter(false)}
                        color="green"
                        className={` ${
                          showCollectionsfilter ? "block" : "hidden"
                        }`}
                      />
                    </div>
                    <ul
                      className={`flex flex-col text-[12px] ${
                        showCollectionsfilter ? "block" : "hidden"
                      }`}
                    >
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        /// NEW
                      </Link>
                      <Link className="border-b-2 border-green-400 mb-2">
                        VIEW ALL
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        TOP
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        BOTTOM
                      </Link>
                      <Link className="border-b-2 border-green-400 pb-1 mb-2">
                        WINTER
                      </Link>

                      <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                        <Link className="">GIFT CARD</Link>
                      </button>
                    </ul>
                  </div>
                </div>

                {/* Filter footer buttons */}
                <div
                  className={`m-6 px-2 pt-2  text-black ${
                    visible && categoryPathName === "HOME" ? "block" : "hidden"
                  }`}
                >
                  <div className="flex gap-2 text-[12px]">
                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">JOIN LIFE</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">+ INFO</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">CAREERS</Link>
                    </button>

                    <button className="border border-black pb-1 mt-5 mb-2 w-[80px]">
                      <Link className="">STORES</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-[0px] sm:p-[60px] md:p-[120px] lg:p-[180px] "></div>

        {/* <button className="w-1/4 px-5 mt-8 lg:mt-0 hidden sm:flex justify-end border border-black bg-white cursor-pointer flex-shrink-0">
          <p className="text-gray-700 text-xs py-1 font-medium content-end">
            SEARCH
          </p>
        </button> */}

        <div className="md:flex w-full sm:w-1/4 mt-[80px] mr-0 lg:mr-24 sm:mr-0 xl:mt-11 mx-auto md:translate-x-52 sm:translate-x-72 fixed bottom-10 sm:relative border border-white sm:border-black bg-transparent sm:bg-white cursor-pointer">
          <button className="text-gray-700 text-xs py-2 font-medium w-full text-end px-5">
            SEARCH
          </button>
        </div>

        <div className="flex gap-2 sm:gap-4 ml-28">
          <Search
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
                <Link className="flex-shrink-0 cursor-pointer hover:text-black">
                  Login
                </Link>
                <Link className="flex-shrink-0 cursor-pointer hover:text-black">
                  Help
                </Link>
              </div>
            </div>
          </div>

          <ShoppingCart
            size={30}
            color="black"
            className=" sm:hidden cursor-pointer mr-4"
          />

          <Link className="flex-shrink-0 text-xs hidden sm:flex cursor-pointer">
            LOG IN
          </Link>
          <Link className="flex-shrink-0 text-xs hidden sm:flex cursor-pointer">
            HELP
          </Link>
          <Link className="flex-shrink-0 text-xs hidden sm:flex cursor-pointer">
            SHOPING CART(10)
          </Link>
        </div>
      </div>

      <div
        className={`mt-[1px] lg:mt-2 md:mt-1 xl:mt-7 ${
          visible ? "hidden" : "w-full pl-[30px] lg:pl-[62px] md:pl-[36px]"
        }`}
      >
        <ul className="hidden sm:flex gap-3">
          <li
            onClick={() => {
              setCategoryPathName("WOMAN");
              setVisible(true);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer text-xs hover:text-gray-600 hover:bg-gray-200 hover:px-3 hover:py-1 hover:rounded ${
              categoryPathName === "WOMAN" ? "text-black font-bold" : ""
            }`}
          >
            WOMAN
            {categoryPathName === "WOMAN" ? (
              <hr className=" w-2/4 border-none h-[2.5px] bg-red-700" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setCategoryPathName("MAN");
              setVisible(true);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer text-xs hover:text-gray-600 hover:bg-gray-200 hover:px-3 hover:py-1 hover:rounded ${
              categoryPathName === "MAN" ? "text-black font-bold" : ""
            }`}
          >
            MAN
            {categoryPathName === "MAN" ? (
              <hr className=" w-2/4 border-none h-[2.5px] bg-red-700" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setCategoryPathName("KIDS");
              setVisible(true);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer text-xs hover:text-gray-600 hover:bg-gray-200 hover:px-3 hover:py-1 hover:rounded ${
              categoryPathName === "KIDS" ? "text-black font-bold" : ""
            }`}
          >
            KIDS
            {categoryPathName === "KIDS" ? (
              <hr className=" w-2/4 border-none h-[2.5px] bg-red-700" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setCategoryPathName("HOME");
              setVisible(true);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer text-xs hover:text-gray-600 hover:bg-gray-200 hover:px-3 hover:py-1 hover:rounded ${
              categoryPathName === "HOME" ? "text-black font-bold" : ""
            }`}
          >
            HOME
            {categoryPathName === "HOME" ? (
              <hr className=" w-2/4 border-none h-[2.5px] bg-red-700" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setCategoryPathName("MASSIMO DUTTI");
              setVisible(true);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer text-xs hover:text-gray-600 hover:bg-gray-200 hover:px-3 hover:py-1 hover:rounded ${
              categoryPathName === "MASSIMO DUTTI" ? "text-black font-bold" : ""
            }`}
          >
            MASSIMO DUTTI
            {categoryPathName === "MASSIMO DUTTI" ? (
              <hr className=" w-2/4 border-none h-[2.5px] bg-red-700" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setCategoryPathName("BEAUTY");
              setVisible(true);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer text-xs hover:text-gray-600 hover:bg-gray-200 hover:px-3 hover:py-1 hover:rounded ${
              categoryPathName === "BEAUTY" ? "text-black font-bold" : ""
            }`}
          >
            BEAUTY
            {categoryPathName === "BEAUTY" ? (
              <hr className=" w-2/4 border-none h-[2.5px] bg-red-700" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setCategoryPathName("ZARA PRE-OWNED");
              setVisible(true);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer text-xs hover:text-gray-600 hover:bg-gray-200 hover:px-3 hover:py-1 hover:rounded ${
              categoryPathName === "ZARA PRE-OWNED"
                ? "text-black font-bold"
                : ""
            }`}
          >
            ZARA PRE-OWNED
            {categoryPathName === "ZARA PRE-OWNED" ? (
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
