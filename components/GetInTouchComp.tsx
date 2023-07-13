import React from "react";
import Image from "next/image";
import GetInTouchButton from "./GetInTouchButton";

const GetInTouchComp = () => {
  return (
    <div className="p-[1.5rem] absolute top-[-13rem] z-10 md:default md:top-[-18rem]">
      <div className="text-white bg-peach rounded-md relative overflow-hidden md:flex md:justify-center md:items-center">
        <div className="w-full h-full absolute scale-[2.3] rotate-[190deg] contrast-100 right-[4rem]">
          <Image
            alt=""
            src="/assets/shared/desktop/bg-pattern-three-circles.svg"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center text-center py-[3rem] px-[1.5rem] gap-[2rem] md:w-[70%]">
          <p className="text-[2rem] z-[20] md:text-[2.5rem] md:leading-[3rem] md:w-[90%]">
            Let’s talk about your project
          </p>
          <p className="z-[20]">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
          <div className="z-[20]">
            <GetInTouchButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchComp;
