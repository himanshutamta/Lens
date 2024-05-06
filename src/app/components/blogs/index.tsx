import React from "react";
import { gradientText } from "../variants";
import Cards from "./Cards";
import HoverEffect from "../HoverEffect";

const Blogs = () => {
  return (
    <div className="w-[80%] mx-auto text-center flex flex-col justify-center mb-16">
      <div className="mb-10">
        <h2 className="text-2xl font-raleway text-foreground-primary/90 font-semibold mb-1">
          OUR BLOGS
        </h2>
        <div
          className={gradientText({
            class: "w-[80px] mx-auto h-1 rounded-full",
          })}
        ></div>
      </div>
      <p className="text-5xl mb-10">Inhouse Mindscape</p>
      <div className="md:grid  md:grid-cols-2 gap-4 mb-5">
        {BLOGSDATA.map((item) => {
          return <Cards data={item} />;
        })}
      </div>
      <div className="mx-auto">
        <HoverEffect text={"Explore More"} />
      </div>
    </div>
  );
};

export default Blogs;

const BLOGSDATA = [
  {
    update: "New!",
    title: "The Evolution of AI in Games",
    detail:
      "The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...",
    color: "bg-[#FFF6CD]",
    blurBg: "bottom-[0] -right-[10%] bg-[#fbc976] blur-[70px]",
  },
  {
    update: "Apirl 18, 2024",
    title:
      "Unmasking the Misconceptions of Artificial Intelligence in the Workplace",
    detail:
      "The rise of Artificial Intelligence (AI) has sparked both excitement and apprehension. Many professionals are unsure how AI impacts their work....",
    color: "bg-[#E2F2FF]",
    blurBg: "-top-[12%] -right-[10%] bg-[#00b2fc] blur-[100px]",
  },
  {
    update: "April 11, 2024",
    title: "The Rise of Deepfakes: Friend or Foe",
    detail:
      "Deepfakes are no longer science fiction. Check out our latest blog to gain a deeper understanding of this powerful technology and its far-reaching implications....",
    sectionClass: "col-span-2 ",
    color: "bg-[#FFECEB]",
    blurBg: "-bottom-[12%] -left-[10%] bg-[#ff6160] blur-[100px]",
  },
];
