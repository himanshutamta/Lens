"use client";
import { Divider } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";

const Numbers = () => {
  const theme = useTheme();
  return (
    <div
      className={` text-secondary mb-16 ${
        theme.theme === "dark" ? "bg-secondaryBg" : "bg-bgVision"
      }`}
    >
      <div className="max-w-[1000px] mx-auto py-16 text-center">
        <p className="text-4xl mb-10">By the numbers</p>
        <div className="flex justify-between">
          <div>
            <p className="text-4xl font-semibold mb-2">
              15<span className="text-plus font-normal">+</span>
            </p>
            <p className="text-lg w-[150px]">Solutions for Global crises</p>
          </div>
          <Divider className=" bg-secondary h-28" orientation="vertical" />
          <div>
            <p className="text-4xl font-semibold mb-2">
              10<span className="text-plus font-normal">+</span>
            </p>
            <p className="text-lg w-[150px]"> University Collaborations</p>
          </div>
          <Divider className=" bg-secondary h-28" orientation="vertical" />
          <div>
            <p className="text-4xl font-semibold mb-2">
              25<span className="text-plus font-normal">+</span>
            </p>
            <p className="text-lg w-[150px]">Employees Worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
