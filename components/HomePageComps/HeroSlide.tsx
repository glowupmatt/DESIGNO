"use client";
import Image from "next/image";
import LearnMoreButton from "../LearnMoreButton";

const HeroSlide = () => {
  return (
    <div className="md:p-[2.44rem] lg:justify-center lg:items-center lg:flex">
      <div className="flex flex-col justify-center items-center bg-peach relative overflow-hidden md:rounded-[2rem] md:px-[2.44rem] md:py-0 lg:relative lg:h-[40rem] lg:w-full">
        <div className="w-[40rem] h-[40rem] left-0 top-[3rem] absolute md:left-[12rem] md:top-[9rem] lg:top-0 lg:left-[30rem]">
          <Image
            alt=""
            src="/assets/home/desktop/bg-pattern-hero-home.svg"
            fill
            className="object-fill"
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:relative lg:justify-start">
          <div className="flex flex-col gap-[2rem] items-center text-center text-white h-[44.6875rem] mt-[5rem] px-[1.5rem] z-10 md:px-[4rem] md:py-[3.75rem] md:mt-[0] md:gap-[2.5rem] md:h-[52.6875rem] lg:justify-center lg:w-[57%] lg:text-start lg:items-start">
            <h3 className="tracking-normal leading-8 text-[1.5rem] md:text-[2.5rem] md:tracking-normal md:leading-[3rem] md:drop-shadow-2xl">
              Award-winning custom designs and digital branding solutions
            </h3>
            <p className="leading-[1.5625rem] text-[.8rem] md:text-[1rem]">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <div className="mt-0.625">
              <LearnMoreButton />
            </div>
          </div>
          <div className="hidden lg:block lg:absolute lg:w-[40rem] lg:h-full lg:right-[-8rem] lg:top-[7rem]">
            <Image
              alt=""
              src="/assets/home/desktop/image-hero-phone.png"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
        <div className="h-[35.77544rem] w-[30rem] absolute top-[28rem] md:top-[19rem] md:h-[55.77544rem] md:w-[31rem] lg:hidden">
          <Image
            alt=""
            src="/assets/home/desktop/image-hero-phone.png"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
