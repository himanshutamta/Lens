import React from "react";
import { gradientText } from "../variants";

const Services = () => {
  return (
    <div className="mx-auto w-[100%] text-center py-2 pb-12 overflow-hidden">
      <div className="mb-16">
        <h2 className="text-2xl font-raleway text-foreground-primary/90 font-semibold mb-1">
          SERVICES
        </h2>
        <div
          className={gradientText({
            class: "w-[80px] mx-auto h-1 rounded-full",
          })}
        ></div>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16">
        We provide Artificial Intelligence Services
      </h2>
      <div className="md:grid-cols-2 grid-cols-1 grid mx-4  text-start max-w-[1000px] lg:mx-auto justify-center gap-4">
        {SERVICETOPICS.map((item) => {
          return (
            <div
              key={item.id}
              className={`relative leading-[40px]  bg-foreground-100 max-w-[500px] mx-auto rounded-xl px-5 md:px-10 py-5 group hover:bg-transparent hover:outline hover:outline-1 ${item.outline}`}
            >
              <div
                className={`absolute -z-10 w-[250px] h-[200px] ${item.blurBg} rounded-[100px] flex-shrink-0 blur-[200px]`}
              ></div>
              <div className="text-8xl font-medium flex mb-9 ">
                0
                <span className="relative flex  items-center">
                  {item.id}
                  <span
                    className={`before:block before:absolute ${item.text} -ml-6 font-semibold group-hover:ml-0 duration-200  text-[32px] leading-[40px]  before:top-10 before:bottom-0 -left-10`}
                  >
                    {item.title}
                  </span>
                </span>
              </div>
              <p className="text-[#8a8a8a] font-semibold text-lg w-[80%]">
                {item.para}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

const SERVICETOPICS = [
  {
    id: 1,
    title: "Biometrics",
    para: "Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.",
    text: "text-[#01c99b]",
    blurBg: "-top-[12%] -left-[10%] bg-[#01c99b]",
    outline: "hover:outline-[#01c99b]",
  },
  {
    id: 2,
    title: "Image Analysis",
    para: "Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.",
    blurBg: "-top-[12%] -right-[10%] bg-[#3FBDF1]",
    text: "text-[#3FBDF1]",
    outline: "hover:outline-[#3FBDF1]",
  },
  {
    id: 3,
    title: "Cross - Media Translation",
    para: "Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.",
    blurBg: "-bottom-[12%] -left-[10%] bg-[#FF605F]",
    text: "text-[#FF605F]",
    outline: "hover:outline-[#FF605F]",
  },
  {
    id: 4,
    title: "3D Modelling and Design.",
    para: "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.",
    blurBg: "-bottom-[12%] -right-[10%] bg-[#FF9F31]",
    text: "text-[#FF9F31]",
    outline: "hover:outline-[#FF9F31]",
  },
];
