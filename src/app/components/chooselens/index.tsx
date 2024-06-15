import React from "react";
import { appContent, gradientText } from "../variants";
import { FaCheck } from "react-icons/fa6";
import Card from "./Card";

const ChooseLens = () => {
  return (
    <div className="text-center pb-16 w-[100%] overflow-hidden">
      <div className="mb-16">
        <h2 className="text-2xl  font-raleway text-foreground-primary/90 font-semibold mb-1">
          WHY CHOOSE LENS
        </h2>
        <div
          className={gradientText({
            class: "w-[80px] mx-auto  h-1 rounded-full",
          })}
        ></div>
      </div>
      <h2 className="text-4xl lg:text-6xl leading-[50px] md:leading-0 mb-10 md:mb-16 mx-4">
        AI-driven solutions backed by science
      </h2>
      <p className="text-[#8a8a8a] max-w-[80%] md:max-w-[50%] mx-auto text-lg md:text-xl leading-[30px] mb-9">
        Every piece of AI technology shipped from LENS is thoroughly benchmarked
        via rigorous evaluations. With a global network of experts and
        academicians, we guarantee the most accurate and robust solutions in the
        market.
      </p>
      <div className="grid grid-cols-1  sm:grid-cols-2 max-w-[700px] md:mx-auto gap-2 mb-10 mx-3">
        {SOLUTIONS.map((i, indx) => {
          return (
            <div
              key={indx}
              className="flex gap-2 items-center text-start justify-center  md:justify-start"
            >
              <FaCheck />
              <p className="text-lg">{i}</p>
            </div>
          );
        })}
      </div>
      <div
        className={appContent({
          class: "flex gap-3 flex-wrap justify-center text-start items-center ",
        })}
      >
        {CARDDATA.map((item) => (
          <div key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseLens;

const SOLUTIONS = [
  "State-of-the-art solutions",
  "Lifetime support & upgrades",
  "Fast & Efficient",
  "Plug-and-Play",
  "No extra computation fee",
  "24x7 Progress Monitoring",
  "No licensing fee",
  "Incremental Updates",
];

const CARDDATA = [
  {
    id: 1,
    head: "Exclusive Rights",
    para: "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.",
    img: "/images/green_view.webp",
    color:
      "hover:outline outline-1 outline-[#01c99b] hover:bg-gradient-to-b from-[#01c99b]/60 to-transparent",
    blurBg: "-top-[12%] -left-[10%] bg-[#01c99b] w-[250px] h-[200px] ",
    delay: 1,
  },
  {
    id: 2,
    head: "Research Driven",
    para: "We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.",
    img: "/images/blue_girl.webp",
    color:
      "hover:outline outline-1 outline-[#3FBDF1] hover:bg-gradient-to-b  from-[#3FBDF1]/60 to-transparent",
    blurBg: "-top-[12%] -right-[15%] bg-[#3FBDF1] w-[250px] h-[200px] ",
    delay: 2,
  },
  {
    id: 3,
    head: "Plug-and-Play",
    para: "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.",
    img: "/images/red_hand.webp",
    color:
      "hover:outline outline-1 outline-[#FF605F] hover:bg-gradient-to-b  from-[#FF605F]/60 to-transparent",
    blurBg: "-bottom-[12%] left-5 bg-[#FF605F] w-[140px] h-[140px] ",
    delay: 3,
  },
  {
    id: 4,
    head: "Lifetime Support",
    para: "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.",
    img: "/images/yellow_phone.webp",
    color:
      "hover:outline outline-1 outline-[#FF9F31] hover:bg-gradient-to-b  from-[#FF9F31]/60 to-transparent",
    blurBg: "-top-[15%] -right-[50%] bg-[#FF9F31] w-[250px] h-[250px] ",
    delay: 4,
  },
];
