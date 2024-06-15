"use client";
import React from "react";
import { appContent } from "./variants";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const theme = useTheme();
  return (
    <div className={`${theme.theme === "dark" ? "" : "bg-bgColor"} py-10`}>
      <div className={appContent()}>
        <div className="sm:flex justify-between text-center sm:text-start">
          <div className="flex flex-col justify-center items-center  sm:justify-around">
            {theme.theme === "dark" ? (
              <Link href={"/"}>
                <div className="relative h-[70px] w-[80px]">
                  <Image src="/images/newLogo.webp" alt="logo" fill />
                </div>
              </Link>
            ) : (
              <Link href={"/"}>
                <div className="relative h-[70px] w-[80px]">
                  <Image src="/images/nav_logo.webp" alt="logo" fill />
                </div>
              </Link>
            )}
            <p className="mb-5 sm:mb-0">Tomorrow&apos;s Vision, Today!</p>
            <div className="flex gap-3 mb-9 sm:mb-0">
              <div className="cursor-pointer hover:text-plus text-3xl">
                <FaFacebook />
              </div>
              <div className="cursor-pointer hover:text-plus text-3xl">
                <BsInstagram />
              </div>
              <div className="cursor-pointer hover:text-plus text-3xl">
                <IoLogoLinkedin />
              </div>
              <div className="cursor-pointer hover:text-plus text-3xl">
                <SiDiscord />
              </div>
              <div className="cursor-pointer hover:text-plus text-3xl">
                <BsTwitterX />
              </div>
            </div>
          </div>
          <div className="mb-7 ">
            <div className="tracking-wider mb-7 text-lg font-medium">
              SITEMAP
            </div>
            <div className="flex gap-3 flex-col">
              {SITEMAP.map((tab, indx) => {
                return (
                  <Link
                    key={indx}
                    href={tab.link}
                    className="text-sm hover:bg-gradient-to-r from-[#0091ff] to-[#9cfeff] bg-clip-text hover:text-transparent"
                  >
                    {tab.text}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <div className="tracking-wider mb-7 text-lg font-medium">
              CONNECT
            </div>
            <p className="cursor-pointer mb-3">+1-517-9300-792</p>
            <p className="cursor-pointer mb-3">+91-9990-736-796</p>
            <p className="cursor-pointer mb-3">solutions@lenscorp.ai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const SITEMAP = [
  {
    text: "MakeMyWeb.",
    link: "",
  },
  {
    text: "Services",
    link: "#services",
  },
  {
    text: "Products",
    link: "",
  },
  {
    text: "Blogs",
    link: "/blogs",
  },
  {
    text: "Life at LENS",
    link: "/company",
  },
];
