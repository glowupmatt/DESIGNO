import React from "react";
import Image from "next/image";
import classNames from "classnames";

type TitleHeaderProps = {
  titleHeaderInfo: {
    title: string;
    desc: string;
    textContainer: string;
    textStyles: string;
  };
};

const TitleHeader = ({ titleHeaderInfo }: TitleHeaderProps) => {
  return (
    <div
      className={classNames(
        "bg-peach w-full flex flex-col justify-center items-center text-white p-[1.5rem] text-center gap-[1.5rem] lg:h-full",
        `${titleHeaderInfo.textContainer}`
      )}
    >
      <div
        className={classNames(
          "lg:w-[40%] flex flex-col gap-4 h-full",
          `${titleHeaderInfo.textStyles}`
        )}
      >
        <h1>{titleHeaderInfo.title}</h1>
        <p className="text-[0.9375rem]">{titleHeaderInfo.desc}</p>
      </div>
    </div>
  );
};

export default TitleHeader;
