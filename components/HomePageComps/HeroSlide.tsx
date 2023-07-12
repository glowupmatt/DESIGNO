"use client";
import Image from "next/image";
import LearnMoreButton from "../LearnMoreButton";

const HeroSlide = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-peach relative overflow-hidden">
        <div className="w-[40rem] h-[40rem] left-0 top-[3rem] absolute">
          <Image
            alt=""
            src="/assets/home/desktop/bg-pattern-hero-home.svg"
            fill
            className="object-fill"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[2rem] items-center text-center text-white h-[44.6875rem] mt-[5rem] px-[1.5rem]  z-10">
            <h3 className="tracking-normal leading-8 text-[2rem]">
              Award-winning custom designs and digital branding solutions
            </h3>
            <p className="leading-[1.5625rem]">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <div className="mt-0.625">
              <LearnMoreButton />
            </div>
          </div>
        </div>
        <div className="h-[35.77544rem] w-[17.41981rem] absolute top-[28rem]">
          <Image
            alt=""
            src="/assets/home/desktop/image-hero-phone.png"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
