import React from "react";
import Image from "next/image";
import { homePageProjectDisplay } from "@/data/homePageInfo";

const Services = () => {
  return (
    <div className="mt-[6rem]">
      <div className="flex flex-col justify-center items-center gap-[1.5rem]">
        {homePageProjectDisplay.map((data, index) => {
          return (
            <div
              className="flex items-center justify-center rounded-md w-full h-[12.625rem] cursor-pointer"
              key={data.title}
            >
              <div className="relative text-white z-10 text-center gap-4 flex flex-col">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
              </div>
              <div className="absolute h-[12.625rem] w-[80%]">
                <div className="bg-[#00000088] w-full absolute h-full z-[8] rounded-md"></div>
                <Image
                  alt=""
                  src={data.images.mobileImg}
                  fill
                  quality={100}
                  className="object-fill rounded-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
