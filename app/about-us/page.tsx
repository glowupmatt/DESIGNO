import React from "react";
import Image from "next/image";
import TitleHeader from "@/components/TitleHeader";
import BaseLayout from "@/components/BaseLayout";
import TextBox from "@/components/TextBox";
import { locations } from "@/data/locations";
import SubmitButton from "@/components/SubmitButton";

const aboutUs = () => {
  const titleHeaderInfo = {
    title: "About Us",
    desc: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.",
    textContainer:
      "py-[2rem] md:rounded-b-md lg:rounded-l-xl lg:rounded-br-none lg:p-[4rem]",
    textStyles:
      "flex flex-col items-center  gap-4 lg:w-[40%] md:h-full lg:w-full lg:h-full lg:justify-center lg:items-start lg:text-start ",
  };

  const textBoxData = {
    title: "World-Class Talent",
    bodyOne:
      "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
    bodyTwo:
      "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
    bodyStyles:
      "p-[2.44rem] text-center flex flex-col gap-4 h-full justify-center items-center md:rounded-b-md md:w-full lg:rounded-r-xl lg:rounded-bl-none lg:items-start lg:text-start lg:p-[5rem]",
    titleStyles: "text-peach text-[2rem]",
    bodyOneStyles: "text-[0.9375rem]",
    bodyTwoStyles: "text-[0.9375rem]",
  };

  const bottomTitleHeaderInfo = {
    title: "The Real Deal",
    bodyOne:
      "As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
    bodyTwo:
      "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
    bodyStyles:
      "p-[3rem] text-center flex flex-col gap-4 h-full justify-center items-center md:rounded-b-md md:w-full lg:rounded-l-xl lg:rounded-br-none lg:items-start lg:text-start lg:p-[5rem]",
    titleStyles: "text-peach text-[2rem]",
    bodyOneStyles: "text-[0.9375rem]",
    bodyTwoStyles: "text-[0.9375rem]",
  };

  const buttonStyles = "bg-peach text-white";
  return (
    <BaseLayout>
      <>
        <div className="md:flex md:flex-col md:justify-center md:items-center md:gap-[7.5rem] md:p-[2.44rem] lg:p-0">
          <div className="lg:flex lg:h-[480px] lg:w-full lg:flex-row-reverse">
            <div className="h-[20rem] w-full relative lg:h-[480px] lg:w-[100rem]">
              <Image
                alt=""
                src="/assets/about/mobile/image-about-hero.jpg"
                fill
                quality={100}
                className="object-cover md:hidden"
              />
              <Image
                alt=""
                src="/assets/about/tablet/image-about-hero.jpg"
                fill
                quality={100}
                className="object-cover hidden md:block lg:hidden rounded-t-md"
              />
              <Image
                alt=""
                src="/assets/about/desktop/image-about-hero.jpg"
                fill
                quality={100}
                className="object-cover hidden md:hidden lg:block rounded-r-xl"
              />
            </div>
            <div className="">
              <TitleHeader titleHeaderInfo={titleHeaderInfo} />
            </div>
          </div>
          <div className="lg:flex lg:h-[640px] lg:w-full lg:flex-row">
            <div className="h-[20rem] w-full relative lg:h-full ">
              <Image
                alt=""
                src="/assets/about/mobile/image-world-class-talent.jpg"
                fill
                quality={100}
                className="object-cover md:hidden"
              />
              <Image
                alt=""
                src="/assets/about/tablet/image-world-class-talent.jpg"
                fill
                quality={100}
                className="object-cover hidden md:block lg:hidden rounded-t-md"
              />
              <Image
                alt=""
                src="/assets/about/desktop/image-world-class-talent.jpg"
                fill
                quality={100}
                className="object-cover hidden md:hidden lg:block rounded-l-xl"
              />
            </div>
            <TextBox textBoxData={textBoxData} />
          </div>
          <div className="flex flex-col items-center mb-[7.5rem] md:mb-0 justify-center gap-[4rem] mt-[3rem] lg:flex-row lg:w-full">
            {locations.map((data, index) => {
              return (
                <div
                  key={data.title}
                  className="w-full flex flex-col items-center gap-8"
                >
                  <div className="relative w-[12.625rem] h-[12.625rem]">
                    <Image alt={data.title} src={data.img} fill quality={100} />
                    <Image
                      alt={data.title}
                      src="/assets/home/desktop/bg-pattern-hero-home.svg"
                      fill
                      quality={100}
                      className="object-cover rotate-[-100deg]"
                    />
                  </div>
                  <h3>{data.title}</h3>
                  <SubmitButton buttonStyles={buttonStyles}>
                    <>SEE LOCATION</>
                  </SubmitButton>
                </div>
              );
            })}
          </div>
          <div className="lg:flex lg:h-[640px] lg:w-full lg:flex-row-reverse">
            <div className="h-[20rem] w-full relative lg:h-full lg:w-[100rem]">
              <Image
                alt=""
                src="/assets/about/mobile/image-real-deal.jpg"
                fill
                quality={100}
                className="object-cover md:hidden"
              />
              <Image
                alt=""
                src="/assets/about/tablet/image-real-deal.jpg"
                fill
                quality={100}
                className="object-cover hidden md:block lg:hidden rounded-t-md"
              />
              <Image
                alt=""
                src="/assets/about/desktop/image-real-deal.jpg"
                fill
                quality={100}
                className="object-cover hidden md:hidden lg:block rounded-r-xl"
              />
            </div>
            <div>
              <TextBox textBoxData={bottomTitleHeaderInfo} />
            </div>
          </div>
        </div>
      </>
    </BaseLayout>
  );
};

export default aboutUs;
