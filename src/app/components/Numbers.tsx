"use client";
import { Divider } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";

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
        <div className="flex-col sm:flex sm:flex-row  justify-between space-y-10 sm:space-y-0">
          <div>
            <p className="text-4xl font-semibold mb-2 flex justify-center">
              <AnimatedNumbers
                className=""
                transitions={(index: any) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={32}
              />
              <span className="text-plus font-normal">+</span>
            </p>
            <p className="text-lg sm:w-[150px]">Solutions for Global crises</p>
          </div>
          <Divider
            className=" bg-secondary h-28 hidden sm:block"
            orientation="vertical"
          />
          <div>
            <p className="text-4xl font-semibold mb-2 flex justify-center">
              <AnimatedNumbers
                className=""
                transitions={(index: any) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={10}
              />
              <span className="text-plus font-normal">+</span>
            </p>
            <p className="text-lg sm:w-[150px]"> University Collaborations</p>
          </div>
          <Divider
            className=" bg-secondary h-28 hidden sm:block"
            orientation="vertical"
          />
          <div>
            <p className="text-4xl font-semibold mb-2 flex justify-center">
              <AnimatedNumbers
                className=""
                transitions={(index: any) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={25}
              />
              <span className="text-plus font-normal">+</span>
            </p>
            <p className="text-lg sm:w-[150px]">Employees Worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
