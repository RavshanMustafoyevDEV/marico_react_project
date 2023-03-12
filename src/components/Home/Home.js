import React from "react";
import { BtnWithBG, BtnWithoutBG } from "../Buttons";
import "./home.css";
import ScreenImg from "./img/Screen.svg";

export const Home = () => {
  return (
    <div className="px-5">
      <HomeSection_1 />
      <HomeSection_2 />
      <HomeSection_3 />
    </div>
  );
};

export const HomeSection_1 = () => {
  return (
    <div className="py-[3rem]">
      <div>
        <span className="text-3xl block text-center font-[700] sm:text-4xl md:text-5xl lg:text-7xl">
          Own your audience.
        </span>

        <div className="bg-gradient-text text-3xl block text-center font-[700] sm:text-4xl md:text-5xl lg:text-7xl">
          <span>So you don't lose them.</span>
        </div>
      </div>

      <div className="mt-[1rem] md:mt-[3rem] lg:mt-[5rem]">
        <span className="block text-center text-[1rem] md:text-[1.5rem] lg:text-2xl">
          Turn your audience into email and
        </span>
        <span className="block text-center text-[1rem] md:text-[1.5rem] lg:text-2xl">
          text message subscribers.
        </span>
      </div>

      <div className="flex justify-center mt-6">
        <BtnWithBG text={"Get started now"} />
        <BtnWithoutBG text={"View A Demo"} />
      </div>

      <div className="flex items-center justify-center mt-6">
        <div className="online-icon mx-1 px-1 py-1 bg-[#0FC65C] rounded-full md:px-2 md:py-2"></div>
        <div className="mx-1 font-[600] text-[0.8rem] md:text-1xl">1000+</div>
        <div className="mx-1 text-[0.8rem] md:text-1xl">
          creators have already started
        </div>
      </div>
    </div>
  );
};

export const HomeSection_2 = () => {
  return (
    <div className="py-[2rem]">
      <div className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Why Creators Love Marico
      </div>

      <div className="block mt-[1rem] md:flex md:justify-evenly">
        <div className="text-center px-7 py-5">
          <div className="font-bold text-2xl">😄 Reduced Anxiety</div>
          <div className="font-light text-[1rem] text-[#707070]">
            Never worry about losing your audience.
          </div>
        </div>

        <div className="text-center px-7 py-5">
          <div className="font-bold text-2xl">😃 Lower Workload</div>
          <div className="font-light text-[1rem] text-[#707070]">
            Just share one link. We'll handle the rest.
          </div>
        </div>

        <div className="text-center px-7 py-5">
          <div className="font-bold text-2xl">🥳 More Time</div>
          <div className="font-light text-[1rem] text-[#707070]">
            Spend less time on marketing tools
          </div>
        </div>
      </div>

      <div className="mt-[5rem]">
        <div className="text-[#3D82F2] text-center text-1xl font-[500]">
          STEP 1
        </div>
        <div className="font-[600] text-center mt-4 text-5xl">
          Connect Your Content
        </div>
        <div className=" mt-4 text-[0.8rem] font-[400] text-[#707070] mx-auto text-center px-4 md:text-1xl md:px-[5rem] lg:text-[1.2rem] lg:px-[15rem]">
          Bring all of your content together and get a Homepage that
          automatically updates whenever you create anywhere online.
        </div>

        <div className="mx-auto mt-4 max-w-xs text-center text-[10px] border-solid border-[1px] cursor-pointer border-[#707070] font-[500] text-[#707070] transition duration-300 hover:border-[#306EF7] hover:text-white hover:bg-[#306EF7] rounded-[5px] px-[1rem] py-[0.6rem] md:text-[14px]  ">
          View Avaliable Sources
        </div>
      </div>
    </div>
  );
};

export const HomeSection_3 = () => {
  return (
    <div className="block md:flex md:justify-between">
      <div className="text-content text-center">
        <div className="text-1xl">Your Homepage</div>
        <div className="font-[600] text-4xl mt-3">
          <div className="">Your Content.</div>
          <div>All in <span className="text-[#3C82F4]">One Spot</span></div>
        </div>
      </div>

      <img src={ScreenImg} className='mt-5 md:max-w-[30rem]' />
    </div>
  );
};

export default Home;
