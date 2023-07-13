import React from "react";
import Image from "next/image";
import GetInTouchButton from "./GetInTouchButton";

const GetInTouchComp = () => {
  return (
    <div className="p-[3rem]">
      <div className="text-white bg-peach rounded-md w-full h-full flex flex-col justify-center items-center text-center py-[3rem] px-[3rem] gap-[2rem] relative overflow-hidden">
        <div className="w-full h-full absolute scale-[2.3] rotate-[190deg] contrast-100 right-[4rem]">
          <Image
            alt=""
            src="/assets/shared/desktop/bg-pattern-three-circles.svg"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
        <p className="text-[2rem] z-[20]">Let’s talk about your project</p>
        <p className="z-[20]">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <div className="z-[20]">
          <GetInTouchButton />
        </div>
      </div>
    </div>
  );
};

export default GetInTouchComp;
