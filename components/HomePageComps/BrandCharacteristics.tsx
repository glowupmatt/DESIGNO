import React from "react";
import Image from "next/image";
import { homePageCharacteristics } from "@/data/homePageInfo";

const BrandCharacteristics = () => {
  return (
    <div className="mt-[7.5rem] p-[1.5rem] flex flex-col gap-[5rem] mb-[14rem]">
      {homePageCharacteristics.map((data, index) => {
        return (
          <div
            key={index}
            className="flex justify-center items-center flex-col gap-[4rem]"
          >
            <div className="w-[12.625rem] h-[12.625rem] relative">
              <Image
                alt={data.title}
                src={data.img}
                fill
                quality={100}
                className="object-cover"
              />
              <Image
                alt={data.title}
                src="/assets/home/desktop/bg-pattern-hero-home.svg"
                fill
                quality={100}
                className="object-cover rotate-[-100deg]"
              />
            </div>
            <div className="relative flex flex-col gap-[3rem] text-center">
              <h3>{data.title}</h3>
              <p>{data.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandCharacteristics;
