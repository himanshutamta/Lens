"use client";
import React from "react";
import { appContent, gradientText } from "../variants";
import { IoMdPeople } from "react-icons/io";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdBalance } from "react-icons/md";
import { useTheme } from "next-themes";

const Vision = () => {
  const theme = useTheme();
  return (
    <div className={`text-center mx-auto pb-10 `}>
      <div className="mb-10">
        <h2 className="text-2xl font-raleway text-foreground-primary/90 font-semibold mb-1">
          OUR VISION
        </h2>
        <div
          className={gradientText({
            class: "w-[80px] mx-auto h-1 rounded-full",
          })}
        ></div>
      </div>
      <p className="text-4xl md:text-5xl mb-10">AI for Social Good</p>
      <p className="max-w-[1000px] mx-3 md:mx-auto text-lg md:text-xl text-[#8a8a8a] font-normal mb-10">
        Explainable AI (XAI) is an emerging subject of machine learning research
        that refers to strategies that try to provide transparency to typically
        opaque AI models and their predictions.
      </p>
      {SOCIALTOPIC.map((item, indx) => {
        return (
          <div
            key={indx}
            className={`max-w-[900px] mx-3  md:mx-auto flex flex-col  ${
              item.title === "Regulatory Compliance"
                ? "md:items-end "
                : "md:items-start"
            } `}
          >
            <div className="w-[90%] sm:w-[53%] mx-auto md:mx-0 flex gap-7 sm:gap-4 px-1 items-center md:items-start">
              <div
                className={`text-start py-7  ${
                  item.title === "Regulatory Compliance" ? "order-2" : ""
                }`}
              >
                <p className="text-3xl font-semibold mb-7">{item.title}</p>
                <p className="text-[#8a8a8a]">{item.para}</p>
              </div>
              <div className="relative ">
                <p className="relative text-bgVision  z-[1] bg-white border-4 border-[#717171] rounded-full p-2 ">
                  {item.icon}
                </p>
                <div className="hidden h-[260px] md:block absolute left-[50%] top-0 right-[50%] border border-dashed w-0 border-[#717171] "></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Vision;

const SOCIALTOPIC = [
  {
    title: "Diversity & Fairness",
    para: "When training our AI models, we consider ethical and social implications of algorithm-based decision making. Our solutions use high-quality and fairly-represented data sets to eliminate human cognitive biases.",
    icon: <IoMdPeople className="text-2xl" />,
  },
  {
    title: "Regulatory Compliance",
    para: "Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. We also ensure our algorithms allow for the required level of decision-making transparency and explainability.",
    icon: <AiOutlineFileProtect className="text-xl" />,
  },
  {
    title: "Code of Ethics",
    para: "LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone.",
    icon: <MdBalance className="text-xl" />,
  },
];
