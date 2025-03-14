import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const CartTotalFooter = () => {
  const { currency, navigate, setTotalAmount, totalAmount, delivery_fee } =
    useContext(ShopContext);
  console.log(
    "totalAmounttotalAmounttotalAmounttotalAmounttotalAmount:",
    totalAmount
  );
  useEffect(() => {
    var totalAmount = JSON.parse(localStorage.getItem("TOTALCARTPRICE")) ?? [];
    setTotalAmount(totalAmount);
  }, []);
  return (
    <div className="flex justify-between xl:grid grid-cols-3 bg-white w-screen px-10 xl:px-28">
      <div className="hidden xl:block text-start">
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

      <div className="hidden md:block text-start xl:text-center">
        <p className="text-[12px] w-96 py-6 px-4 text-gray-700 items-center">
          <Link>IS YOUR ORDER A GIFT? ADD</Link>
        </p>
      </div>

      <div className="flex w-full md:w-auto justify-between py-6">
        <div className="flex flex-col text-gray-700">
          <p className="text-[13px]">
            TOTAL
            <b>
              {currency}
              {totalAmount === 0 ? 0 : totalAmount + delivery_fee}.00
            </b>
          </p>
          <p className="text-[10px]">* Tax not included</p>
        </div>
        <button
          onClick={() => navigate("/place-order")}
          className="bg-black text-white text-center w-52 px-2 py-3 font-medium text-[12px] tracking-widest"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default CartTotalFooter;
