import Image from "next/image";
import React from "react";

type dataT = {
  id: number;
  img: string;
  head: string;
  para: string;
  color: string;
  blurBg: string;
};
const Card = ({ data }: { data: dataT }) => {
  return (
    <div
      key={data.id}
      className={`${data.color} max-w-[320px] bg-foreground-100 hover:bg-transparent h-[435px] flex flex-col items-center text-start  p-6 rounded-3xl justify-between relative`}
    >
      <div
        className={`absolute -z-10 ${data.blurBg} rounded-[100px] flex-shrink-0 blur-[160px]`}
      ></div>
      <p className="text-3xl text-foreground-primary font-medium px-2 mb-6">
        {data.head}
      </p>
      <div className=" ">
        <img src={data.img} alt="img" />
      </div>
      <p className="left-[40px] text-[#828282]">{data.para}</p>
    </div>
  );
};

export default Card;
