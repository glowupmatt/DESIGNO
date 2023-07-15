import React from "react";
import Image from "next/image";

type TitleHeaderProps = {
  titleHeaderInfo: {
    title: string;
    desc: string;
  };
};

const TitleHeader = ({ titleHeaderInfo }: TitleHeaderProps) => {
  return (
    <div className="bg-peach h-[20rem] w-full flex flex-col justify-center items-center text-white p-[1.5rem] text-center gap-[1.5rem] md:rounded-lg lg:h-[15.75rem]">
      <div className="lg:w-[40%] flex flex-col gap-4">
        <h1>{titleHeaderInfo.title}</h1>
        <p className="text-[0.9375rem]">{titleHeaderInfo.desc}</p>
      </div>
    </div>
  );
};

export default TitleHeader;
