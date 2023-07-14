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
    <div className="flex flex-col justify-center items-center drop-shadow-md">
      <div className="w-full h-[29.875rem] flex flex-col justify-center align-center">
        <div className="h-full w-[20.4375rem] relative self-center">
          <Image
            alt={data.title}
            src={data.img}
            fill
            quality={100}
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="w-[20.438rem] text-center p-[2rem] bg-[#FDF3F0] rounded-b-lg gap-4 flex flex-col">
          <h3 className="text-peach">{data.title}</h3>
          <p className="font-light">{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkDisplayComp;
