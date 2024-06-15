"use client";
import { delay } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";

type dataT = {
  id: number;
  img: string;
  head: string;
  para: string;
  color: string;
  blurBg: string;
  delay: number;
};
const Card = ({ data }: { data: dataT }) => {
  return (
    <Root
      $delay={data.delay}
      key={data.id}
      className={`${data.color} max-w-[320px] bg-foreground-100 hover:bg-transparent h-[435px] flex flex-col items-center text-start  p-6 rounded-3xl justify-between relative`}
    >
      <div
        className={`absolute -z-10 ${data.blurBg} rounded-[100px] flex-shrink-0 blur-[160px]`}
      ></div>
      <p className="text-3xl text-foreground-primary font-medium px-2 mb-6">
        {data.head}
      </p>
      <div className="imgVisible ">
        <img src={data.img} alt="img" />
      </div>
      <p className="left-[40px] text-[#828282] ">{data.para}</p>
    </Root>
  );
};

export default Card;

const showHide = keyframes`
 0% { opacity: 0 }
 30% { opacity: 0 }
 40% { opacity: 1 }
 80% {opacity: 1}
 100% { opacity: 0 }`;
const Root = styled.div<{ $delay: number }>`
  .imgVisible {
    animation-name: ${showHide};
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-delay: ${(p) => p.$delay}s;
  }

  &:hover {
    .imgVisible {
      animation-duration: 0s;
    }
  }
`;
