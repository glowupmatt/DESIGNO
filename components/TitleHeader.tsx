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
    <div className="bg-peach h-[20rem] w-full flex flex-col justify-center items-center text-white p-[1.5rem] text-center gap-[1.5rem]">
      <h2>{titleHeaderInfo.title}</h2>
      <p className="text-[0.9375rem]">{titleHeaderInfo.desc}</p>
    </div>
  );
};

export default TitleHeader;
