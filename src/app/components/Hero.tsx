"use client";
import HoverEffect from "@/app/components/HoverEffect";
import { appContent } from "@/app/components/variants";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Hero = () => {
  const theme = useTheme();
  return (
    <div>
      {theme.theme === "dark" ? (
        <div className="h-[100vh] w-[100%] relative  items-center">
          <video
            className="h-[100vh] w-[100%]  absolute object-cover"
            autoPlay
            muted
            loop
          >
            <source
              src={`/images/hero_video.mp4`}
              type="video/mp4"
              className=""
            />
          </video>
          <div className={appContent({ class: "flex justify-center" })}>
            <div className="flex justify-center absolute top-0 bottom-0 z-[1] flex-col text-center items-center ">
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[60px]  font-raleway font-semibold mb-10 text-white px-3">
                We are at the forefront of AI
              </h1>
              <p className="text-2xl hidden md-block text-white font-poppins mb-8 font-medium">
                From Conserving Wildlife to Automatically Generating
                Caricatures- <span className="font-semibold">We Do It All</span>
              </p>
              <Link href={"/company"}>
                <HoverEffect text={"Learn More"} />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[100vh] w-[100%] relative flex items-center justify-center md:justify-start">
          <Image
            src="/images/desktop.webp"
            alt="desktop"
            fill
            className="-z-10"
          />
          <div className={appContent()}>
            <div className="flex text-center justify-center md:text-start md:max-w-[50%] flex-col lg:ml-20 items-start ">
              <h1 className="text-5xl md:text-7xl leading-[60px] 2xl:text-[6.5rem] 2xl:leading-[115px] font-raleway text-primary font-semibold mb-10">
                We are at the forefront of AI
              </h1>
              <p className="text-xl lg:text-2xl text-primary font-poppins mb-8 font-medium">
                From Conserving Wildlife to Automatically Generating
                Caricatures- <span className="font-semibold">We Do It All</span>
              </p>
              <div className="mx-auto md:mx-0">
                <Link href={"/company"}>
                  <HoverEffect text={"Learn More"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
