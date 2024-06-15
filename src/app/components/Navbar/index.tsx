"use client";
import React, { useEffect, useState } from "react";
import { appContent } from "../variants";
import Image from "next/image";
import ToggleTheme from "../ToggleTheme";
import { useTheme } from "next-themes";
import SecondaryNav from "./SecondaryNav";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

interface RootProps {
  bgcolor?: string; // Define the known props
}

const Navbar = () => {
  const { theme } = useTheme();
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [checkTheme, setCheckTheme] = useState<string | undefined>(undefined);
  const pathname = usePathname();

  function close() {
    setOpenNav(false);
  }
  console.log(theme);
  useEffect(() => {
    if (theme) {
      setCheckTheme(theme);
    }
  }, [theme]);

  return (
    <Root bgcolor={checkTheme} className="fixed top-0 w-[100%] z-10">
      <div
        className={appContent({
          class: "py-3 flex justify-between items-center ",
        })}
      >
        {theme === "dark" ? (
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

        <div className=" gap-8 items-center hidden sm:flex ">
          {TABS.map((item, indx) => {
            return (
              <Link
                href={item.link}
                key={item.id}
                className={`${
                  pathname === item.link
                    ? "bg-gradient-to-r from-[#0091ff] to-[#9cfeff] bg-clip-text text-transparent"
                    : "text-foreground-primary hover:font-semibold"
                } font-poppins cursor-pointer font-medium `}
              >
                {item.lable}
              </Link>
            );
          })}
          <ToggleTheme />
        </div>
        <div
          className="sm:hidden cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        >
          <RiMenu3Line className=" text-3xl text-foreground-primary " />
        </div>
        {openNav && (
          <div
            className="w-[100%] h-[100vh] absolute top-0 right-0 bg-black/20 "
            onClick={() => setOpenNav(false)}
          ></div>
        )}
        <div className="absolute top-0 right-0">
          <SecondaryNav open={openNav} closeButton={close} />
        </div>
      </div>
    </Root>
  );
};

export default Navbar;

const TABS = [
  { lable: "MakeMyWeb.", link: "", id: 1 },
  { lable: "Home", link: "/", id: 2 },
  { lable: "Company", link: "/company", id: 3 },
  { lable: "Blog", link: "/blogs", id: 4 },
];

const Root = styled.div<RootProps>`
  background: ${(props) =>
    props.bgcolor === "light" ? "white" : "hsla(0, 11%, 88%, .06)"};
  -webkit-backdrop-filter: ${(props) =>
    props.bgcolor === "dark" ? "blur(80px)" : "blur(0px)"};
  backdrop-filter: ${(props) =>
    props.bgcolor === "dark" ? "blur(80px)" : "blur(0px)"};
`;
