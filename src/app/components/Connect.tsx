"use client";
import { useTheme } from "next-themes";
import React from "react";

const Connect = () => {
  const theme = useTheme();
  return (
    <div
      className={`  ${
        theme.theme === "light" ? " bg-bgColor" : ""
      } w-[90%] mx-auto`}
    >
      <div className="  gap-5   mx-auto md:flex justify-between items-center">
        <div className="md:w-[50%] bg-foreground-100 py-10 px-3 ">
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[400px] font-medium mb-6 md:mb-10 text-foregroup-primary">
            Get in touch with us
          </div>
          <p className="text-lg mb-7">Send your enquiry now!</p>
          <div className="bg-inputBg p-1 rounded-full md:w-[80%] flex justify-between">
            <input
              placeholder="Enter email address"
              className="ml-4 bg-transparent w-[50%] md:w-[60%]"
            />
            <button className="bg-bgVision text-secondary rounded-full p-2 px-4">
              Request Demo
            </button>
          </div>
        </div>
        <div className=" px-3">
          <img src="/images/map_white.webp" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Connect;
