"use client";
import { useTheme } from "next-themes";
import React from "react";

type cardT = {
  update: string;
  title: string;
  detail: string;
  sectionClass?: string;
  color: string;
  blurBg: string;
};
const Cards = ({ data, indx }: { data: cardT; indx: any }) => {
  const theme = useTheme();
  return (
    <div
      key={indx}
      className={`${data.sectionClass} ${
        theme.theme === "dark" ? "bg-aboutBg" : "bg-secondary/20"
      } relative text-start mb-5 md:mb-0  group p-5  rounded-2xl `}
    >
      <div
        className={`absolute -z-10 w-[150px] h-[100px] ${data.blurBg} rounded-[100px] flex-shrink-0 `}
      ></div>
      <div className="overflow-hidden ">
        <div className="h-[90%] gap-10 group-hover:-translate-y-12 duration-300 transition-all flex flex-col justify-between ">
          <div className="">
            <p
              className={`${
                data.update === "New!" ? "text-red-400" : "text-[#666464e3]"
              } text-lg mb-5 `}
            >
              {data.update}
            </p>
            <h3 className="text-3xl font-light">{data.title}</h3>
          </div>
          <div
            className={` ${
              theme.theme === "dark" ? "bg-secon" : `${data.color}`
            } px-5  rounded-xl py-8 text-[#8a8a8a]`}
          >
            {data.detail}
          </div>
        </div>
        <div className="text-red-400 cursor-pointer opacity-0 group-hover:opacity-100 hover:text-primary hover:-translate-y-2 duration-150 transition-all text-lg ">
          Read More...
        </div>
      </div>
    </div>
  );
};

export default Cards;
