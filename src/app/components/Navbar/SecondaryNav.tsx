"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ToggleTheme from "../ToggleTheme";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SecondaryNav = ({
  open,
  closeButton,
}: {
  open: boolean;
  closeButton: () => void;
}) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {open && (
        <div className="">
          <motion.div
            className="back absolute bg-black/30 -z-[2]  backdrop-blur-sm  left-0 top-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => closeButton()}
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 250 }}
            exit={{ width: 0 }}
            transition={{
              delay: 0.2,
              ease: "easeInOut",
              duration: 0.4,
              delayChildren: 0.3,
              staggerChildren: 0.3,
            }}
            className="bg-black top-0 right-0 bottom-0 absolute h-[100vh]"
          >
            {open && (
              <div className="flex justify-end m-6">
                <button
                  className="text-right top-5 right-6 p-1  text-white transition-all delay-100"
                  onClick={() => closeButton()}
                >
                  <IoClose className="text-3xl" />
                </button>
              </div>
            )}
            <div className=" gap-5 px-4 flex flex-col  ">
              {TABS.map((item, indx) => {
                return (
                  <Link
                    href={item.link}
                    key={item.id}
                    className={`${
                      pathname === item.link
                        ? "bg-gradient-to-r from-[#0091ff] to-[#9cfeff] bg-clip-text text-transparent"
                        : "text-white hover:font-semibold"
                    } font-poppins cursor-pointer font-medium`}
                  >
                    {item.lable}
                  </Link>
                );
              })}
              <div>
                <ToggleTheme />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SecondaryNav;

const TABS = [
  { lable: "MakeMyWeb.", link: "", id: 1 },
  { lable: "Home", link: "/", id: 2 },
  { lable: "Company", link: "/company", id: 3 },
  { lable: "Blog", link: "/blogs", id: 4 },
];
