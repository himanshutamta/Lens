"use client";
import React from "react";
import { appContent } from "./variants";
import { useTheme } from "next-themes";

const BottomSection = () => {
  const theme = useTheme();
  return (
    <div
      className={` py-10 ${
        theme.theme === "dark" ? "bg-secondaryBg" : " bg-bgVision"
      }`}
    >
      <div className={appContent()}>
        <div className="sm:flex justify-between items-center ">
          <div className="text-[#717171] mb-3">
            2023{" "}
            <span className="text-secondary tracking-wider	">LENS, Inc.</span>{" "}
            All rights reserved.
          </div>
          <div className="sm:flex gap-5 text-secondary">
            <p className="tracking-wider cursor-pointer">Code of conduct</p>
            <p className="tracking-wider cursor-pointer">
              Sustainability Goals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
