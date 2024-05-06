"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const MeetAi = () => {
  const { theme } = useTheme();
  return (
    <StyledContainer
      className={`${
        theme === "dark" ? "bg-[#242424]" : "bg-[#272e5c]"
      }  py-16 flex justify-between text-center align-bottom items-end md:items-center lg:items-end px-3 sm:px-0`}
    >
      <div className="relative aspect-[2/2] w-[300px] ml-20 hidden xl:block">
        <Image src="/images/vectorAi.webp" alt="" fill />
      </div>
      <div className="sm:w-[50%]">
        <div className="flex justify-center gap-2 text-4xl md:text-6xl mb-2 font-medium">
          <div className=" text-[#fff]">Meet</div>
          <div>
            <div className=" bg-gradient-to-r from-[#9747ff] to-[#2f80ed] bg-clip-text text-transparent">
              Tru-AI
            </div>
            <img
              src="images/underline.svg"
              alt="line"
              className="md:w-[180px] w-[120px]"
            />
          </div>
        </div>
        <p className="text-2xl text-white mb-4">Design. Create. Deploy.</p>
        <p className="mb-4 text-2xl font-medium  bg-gradient-to-r from-[#9747ff] to-[#2f80ed] bg-clip-text text-transparent">
          {" "}
          the Future of AI | Power to EDIT
        </p>
        <p className="text-[#fff] mb-6">
          Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website
        </p>
        <button className="border-white border p-2 px-5 rounded-lg text-lg text-white hover:scale-110 duration-150 transition-all">
          Learn More
        </button>
      </div>
      <div className="hidden sm:block">
        <video
          className=" md:max-w-[25.5rem] lg:max-w-[35rem] max-w-[20rem] rounded-l-full"
          autoPlay
          muted
          loop
        >
          <source
            src={
              "https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
    </StyledContainer>
  );
};

export default MeetAi;

const StyledContainer = styled.div`
  margin: 6rem 0;
  position: relative;
  width: 100%;
  z-index: 2;

  @media (min-width: 500px) {
    height: 550px;
    -webkit-clip-path: polygon(0 22.5%, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 22.5%, 100% 0, 100% 100%, 0 100%);
  }
`;
