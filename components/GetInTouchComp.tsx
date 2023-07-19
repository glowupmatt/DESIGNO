import React from "react";
import Image from "next/image";
import GetInTouchButton from "./GetInTouchButton";
import Link from "next/link";

const GetInTouchComp = () => {
  return (
    <div className="p-[2.55rem] h-[20rem] top-[8rem] w-full max-w-[69.438rem] relative z-10 md:top-[4rem] md:default lg:p-0 lg:top-[8rem]">
      <div className="text-white bg-peach rounded-md relative overflow-hidden md:flex md:justify-center md:items-center">
        {/* <div className="w-full h-full absolute scale-[2.3] rotate-[190deg] contrast-100 right-[4rem]">
          <Image
            alt=""
            src="/assets/shared/desktop/bg-pattern-three-circles.svg"
            fill
            quality={100}
            className="object-cover"
          />
        </div> */}
        <div className="w-full h-full flex flex-col justify-center items-center text-center py-[3rem] px-[1.5rem] gap-[2rem]  lg:flex-row  max-w-[69.438rem] lg:p-[4rem] lg:justify-between">
          <div className="flex flex-col gap-4 justify-center items-center md:w-[61%] lg:w-[28.688rem] lg:text-start lg:items-start">
            <p className="text-[2rem] z-[20] leading-[2rem] md:text-[2.9rem] md:leading-[3rem] md:w-[90%]">
              Let&apos;s talk about your project
            </p>
            <p className="z-[20] text-[15px]">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <Link href="/contact" className="z-[20]">
            <GetInTouchButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchComp;
