"use client";

import BaseLayout from "@/components/BaseLayout";
import TextBox from "@/components/TextBox";
import { locations } from "@/data/locations";
import classNames from "classnames";
import Image from "next/image";

const Locations = () => {
  const data = locations.map((data) => {
    const locationsData = {
      title: data.title,
      tabletImgLocation: data.locationImages.tablet,
      titleLocation: data.locationInformation.name,
      bodyOneLocation: data.locationInformation.street,
      bodyTwoLocation: data.locationInformation.city,
      titleContact: data.contactInformation.name,
      bodyOneContact: data.contactInformation.number,
      bodyTwoContact: data.contactInformation.email,
      bodyStyles:
        "text-center flex flex-col gap-4 h-full justify-center items-center md:rounded-b-md md:w-full lg:rounded-r-xl lg:rounded-bl-none lg:items-start lg:text-start lg:p-[5rem]",
      titleStyles: "text-[0.9375rem] font-bold",
      bodyOneStyles: "text-[0.9375rem] font-light",
      bodyTwoStyles: "text-[0.9375rem] font-light",
    };
    return locationsData;
  });

  console.log(data);

  return (
    <BaseLayout>
      <>
        <div className="flex flex-col items-center gap-[7.5rem] w-full text-center justify-center lg:gap-[3rem]">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  "flex flex-col gap-[3rem]  lg:w-full lg:flex-row",
                  { "lg:flex-row-reverse": index === 1 }
                )}
              >
                <div
                  className={classNames(
                    "w-screen h-[320px] relative md:w-[698px] lg:w-[50%] lg:h-[326px]"
                  )}
                >
                  <Image
                    alt={data.titleLocation}
                    src={data.tabletImgLocation}
                    fill
                    quality={100}
                    className="object-cover md:rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4 p-[3rem] md:justify-center md:items-start md:h-[326px] bg-[#FDF3F0] md:rounded-lg lg:w-full ">
                  <h2 className="text-[2rem] text-peach">{data.title}</h2>
                  <div className="flex flex-col md:flex-row md:justify-between md:w-[80%] md:text-start">
                    <div className="flex flex-col gap-[1rem]">
                      <p className={data.titleStyles}>{data.titleLocation}</p>
                      <div className="flex flex-col md:w-full">
                        <p className={data.bodyOneStyles}>
                          {data.bodyOneLocation}
                        </p>
                        <p className={data.bodyTwoStyles}>
                          {data.bodyTwoLocation}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                      <p className={data.titleStyles}>{data.titleContact}</p>
                      <div className="flex flex-col">
                        <p className={data.bodyOneStyles}>
                          {data.bodyOneContact}
                        </p>
                        <p className={data.bodyTwoStyles}>
                          {data.bodyTwoContact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </BaseLayout>
  );
};

export default Locations;
