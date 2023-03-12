import React from "react";

export const BtnWithBG = ({ text }) => {
  return (
    <div className="mx-3 text-white bg-[#306EF7] px-[1rem] py-[0.6rem] rounded-[5px] text-[10px] cursor-pointer md:text-[14px]">
      {text}
    </div>
  );
};

export const BtnWithoutBG = ({ text }) => {
  return (
    <div className="text-[10px] border-solid border-[1px] cursor-pointer border-[#707070] mx-3 font-[500] text-[#707070] transition duration-300 hover:border-[#306EF7] hover:text-white hover:bg-[#306EF7] rounded-[5px] px-[1rem] py-[0.6rem] md:text-[14px] ">
      {text}
    </div>
  );
};
