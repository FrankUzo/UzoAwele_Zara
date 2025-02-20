import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";
import { X, Search } from "react-feather";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("Women")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  //   return showSearch && visible ? (
  //     <div className="md:flex w-full sm:w-1/4 mt-[80px] mr-0 lg:mr-24 sm:mr-0 xl:mt-11 mx-auto md:translate-x-52 sm:translate-x-72 fixed bottom-10 sm:relative border border-white sm:border-black bg-transparent sm:bg-white cursor-pointer">
  //       <button className="text-gray-700 text-xs py-2 font-medium w-full text-end px-5">
  //         SEARCH
  //       </button>
  //     </div>
  //   ) : null;
  // };

  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center mt-24 sm:mt-48">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        {/* <img src={assets.search_icon} alt="" /> */}
        <Search className="w-8" />
      </div>
      {/* <img src={assets.cross_icon} alt="" /> */}
      <X
        onClick={() => setShowSearch(false)}
        className="inline  w-6 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
