import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const CartTotalFooter = () => {
  const { currency, delivery_fee, getCartAmount, navigate } =
    useContext(ShopContext);
  return (
    <div className="grid grid-cols-3 bg-white">
      <div>
        <p className="text-[11px] w-96 py-6 px-4 text-gray-700">
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

      <div>
        <p className="text-[12px] w-96 py-6 px-4 text-gray-700 text-center items-center">
          <Link>IS YOUR ORDER A GIFT? ADD</Link>
        </p>
      </div>

      <div className="flex justify-between py-6 px-4">
        <div className="flex flex-col text-gray-700">
          {" "}
          <p className="text-[13px]">
            TOTAL{" "}
            <b>
              {currency}{" "}
              {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
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
