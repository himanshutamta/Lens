"use client";
import React from "react";
import { appContent, gradientText } from "./variants";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

const About = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" ? "bg-primary" : "bg-[#fcfbf7]"}`}>
      <div className="text-center py-20">
        <div className="mb-16">
          <h2 className="text-7xl font-poppins text-foreground-primary/90 font-normal mb-3">
            About Us
          </h2>
          <div
            className={gradientText({
              class: "w-[200px] mx-auto h-2 rounded-full",
            })}
          ></div>
        </div>
        <div
          className={`${
            theme === "dark" ? "bg-aboutBg" : "bg-aboutBackground"
          } group flex-col md:flex-row lg:w-[80%] mx-5 lg:mx-auto rounded-2xl items-center lg:items-start px-10 py-7 gap-8 flex justify-between hover:scale-105 transition-all duration-150`}
        >
          <div className="md:w-[50%] text-center md:text-start sm:py-6 order-2 sm:order-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl md:leading-[60px] font-medium mb-4 sm:mb-12 text-foreground-primary">
              Welcome To LENS
            </h3>
            <p className="text-foreground-para/80 opacity-50 mb-8 max-w-[400px] font-normal  sm:text-lg">
              We put our hearts, souls and sweat into designing and developing
              custom AI - powered solutions for your business so you don&#39;t
              have to.
            </p>
            <button className="px-6 py-2.5 border border-foreground-800 rounded-lg hover:scale-110 duration-150 transition-all">
              <Link href={"/company"}>Learn More</Link>
            </button>
          </div>
          <div className="bg-secondary h-[300px] order-1 sm:order-2 w-[300px]  sm:h-[400px] sm:w-[470px] rounded-xl p-3 group-hover:p-0 transition-all duration-150">
            <div className="relative w-[100%] h-[100%]">
              <Image
                src="/images/about_img.webp"
                alt="about_pic"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
