import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import { BtnWithBG, BtnWithoutBG } from "./Buttons";
import { BiHomeAlt } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { BsFillFilePostFill } from "react-icons/bs";

const Layout = () => {
  return (
    <div>
      <div className="px-5 py-5 pt-5 items-center flex justify-between">
        <div>
          <Link to="/">
            <img src={Logo} className="w-[7rem] " />
          </Link>
        </div>

        <div className="text-white hidden md:flex">
          <Link
            to="about"
            className="mx-2 font-[500] text-[15px] text-[#707070] transition duration-300 hover:text-[#3C82F4]"
          >
            About
          </Link>
          <Link
            to="pricing"
            className="mx-2 font-[500] text-[15px] text-[#707070] transition duration-300 hover:text-[#3C82F4]"
          >
            Pricing
          </Link>
          <Link
            to="blog"
            className="mx-2 font-[500] text-[15px] text-[#707070] transition duration-300 hover:text-[#3C82F4]"
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center">
          <Link
            to="login"
            className="mx-2 font-[500] text-[15px] text-[#707070] transition duration-300 hover:text-[#3C82F4]"
          >
            Log in
          </Link>
          <Link to="signup">
            <BtnWithBG text="Sign Up" />
          </Link>
        </div>
      </div>

      <ResponsiveNavbar />

      <ResponsiveNavbar />

      <Outlet />
    </div>
  );
};

export const ResponsiveNavbar = () => {
  return (
    <div className="fixed inset-x-0 bottom-4 w-[100%] px-auto md:hidden">
      <div class="flex justify-around bg-[#00000098] py-4 backdrop-blur-sm border-t-solid border-[1px] border-[#ffffff31] rounded-xl mx-5">
        <Link
          to="/"
          className="block items-center text-3xl text-[#707070] duration-300 hover:text-[#3C82F4]"
        >
          <BiHomeAlt />
        </Link>

        <Link
          to="about"
          className="text-3xl text-[#707070] duration-300 hover:text-[#3C82F4]"
        >
          <BsInfoCircle />
        </Link>

        <Link
          to="pricing"
          className="text-3xl text-[#707070] duration-300 hover:text-[#3C82F4]"
        >
          <ImPriceTags />
        </Link>

        <Link
          to="pricing"
          className="text-3xl text-[#707070] duration-300 hover:text-[#3C82F4]"
        >
          <BsFillFilePostFill />
        </Link>
      </div>
    </div>
  );
};

export default Layout;
