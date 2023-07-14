"use client";

import React from "react";
import Image from "next/image";

type WorkDisplayCompProps = {
  data: {
    title: string;
    desc: string;
    img: string;
  };
};

const WorkDisplayComp = ({ data }: WorkDisplayCompProps) => {
  return (
    <div className="flex flex-col justify-center items-center drop-shadow-md lg:w-full">
      <div className="w-full h-[29.875rem] flex flex-col justify-center align-center md:flex-row md:w-[43.0625rem] md:h-[29.875rem] lg:flex-col lg:w-full">
        <div className="h-full w-full relative self-center md:w-full md:h-full md:items-start lg:h-[320px] lg:w-full">
          <Image
            alt={data.title}
            src={data.img}
            fill
            quality={100}
            className="object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg lg:rounded-t-lg lg:rounded-bl-none "
          />
        </div>
        <div className="w-[20.438rem] text-center p-[2rem] bg-[#FDF3F0] rounded-b-lg gap-4 flex flex-col md:w-[21.125rem] md:justify-center md:rounded-b-none md:rounded-tr-lg md:rounded-br-lg lg:w-full lg:rounded-b-lg lg:rounded-tr-none lg:rounded-br-lg lg:h-[12rem] hover:bg-peach hover:text-white">
          <h3 className="">{data.title}</h3>
          <p className="font-light">{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkDisplayComp;
