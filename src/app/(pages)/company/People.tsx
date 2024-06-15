import { gradientText } from "@/app/components/variants";
import Image from "next/image";
import React from "react";

const People = () => {
  return (
    <div className=" mx-auto text-center bg-primary py-16">
      <div className="mb-14">
        <h2 className="text-3xl font-poppins text-[#fff] font-normal  text-center">
          TEAM
        </h2>
        <div
          className={gradientText({
            class: "w-[70px] mx-auto h-1 rounded-full",
          })}
        ></div>
      </div>
      <p className="text-5xl text-[#fff] mb-16">Meet Our Researchers</p>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 max-w-[1100px] lg:mx-auto mx-3">
        {COMPANYMEMBER.map((i) => {
          return (
            <div key={i.id} className="group">
              <div className="flex flex-col justify-center gap-2">
                <div className="w-[100%]  overflow-hidden">
                  <div className="relative aspect-[3/4] w-[280px] mx-auto group-hover:scale-110 duration-300 transition-all">
                    <Image
                      src={i.image}
                      alt="name"
                      fill
                      className="rounded-t-xl"
                    />
                  </div>
                </div>
                <div className="bg-[#fff] rounded-xl py-4 group-hover:-translate-y-5 duration-300 transition-all ">
                  <p className="text-2xl font-semibold mb-3 text-primary">
                    {i.name}
                  </p>
                  <p className="text-[#717171] mb-2">{i.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;

const COMPANYMEMBER = [
  {
    id: 1,
    name: "Debayan Deb",
    title: "Chief Executive Officer",
    image: "/images/debayan.webp",
  },
  {
    id: 2,
    name: "Aishvary Pratap",
    title: "Chief Operating Officer",
    image: "/images/aishvary.webp",
  },
  {
    id: 3,
    name: "Suvidha Tripathi",
    title: "Sr. Computer Vision Researcher",
    image: "/images/didi.webp",
  },
  {
    id: 4,
    name: "Mahak Kothari",
    title: "Computer Vision Research Engineer",
    image: "/images/mahak.webp",
  },
  {
    id: 5,
    name: "Pranit Puri",
    title: "Artificial Intelligence Research Engineer",
    image: "/images/pranit.webp",
  },
  {
    id: 6,
    name: "Pratham Rohatgi",
    title: "Frontend Developer",
    image: "/images/pratham.webp",
  },
];
