import React from "react";
import Loginbackground from "../assets/loginBackground.avif";

const Login = () => {
  return (
    <div className="flex flex-col-reverse md:grid grid-cols-[2fr_3fr] my-10 mt-[0px]">
      <div className="w-screen sm:w-[400px] relative top-7 md:top-48 px-14">
        <p>ENJOY THE BEST EXPERIENCE</p>
        <p className="text-[16px] sm:text-[12px]">
          Sign in to enjoy a personalized experience and to gain access to all
          our services.
        </p>
        <button className="w-full text-center py-[6px] bg-black text-white text-[12px] my-5">
          {/* <Link to="/login_rigister/login">LOG IN</Link> */}
        </button>
        <button className="w-full text-center py-[6px] bg-black text-white text-[12px]">
          REGISTER
        </button>
      </div>

      <img src={Loginbackground} className="w-[800px]" />
    </div>
  );
};

export default Login;
