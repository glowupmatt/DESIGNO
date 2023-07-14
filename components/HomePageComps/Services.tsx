import React from "react";
import Image from "next/image";
import { homePageProjectDisplay } from "@/data/homePageInfo";
import classNames from "classnames";
import Link from "next/link";

const Services = () => {
  return (
    <div className="lg:justify-center lg:flex lg:w-full lg:mt-0 ">
      <div
        className={classNames(
          "flex flex-col justify-center items-center gap-[1.5rem] lg:w-full lg:h-[40rem]",
          {
            "lg:grid lg:grid-cols-2	lg:grid-rows-2":
              homePageProjectDisplay.length === 3,
          },
          { "lg:grid lg:grid-cols-2": homePageProjectDisplay.length === 2 }
        )}
      >
        {homePageProjectDisplay.map((data, index) => {
          return (
            <div
              className={classNames(
                "flex items-center justify-center rounded-md w-full h-[12.625rem] cursor-pointer lg:w-full lg:h-full lg:relative",
                {
                  "lg:row-start-1 lg:row-end-3": index === 0,
                }
              )}
              key={data.title}
            >
              <span className="relative text-white z-10 text-center gap-4 flex flex-col lg:absolute">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
              </span>

              <Link
                href={`/${data.link}`}
                className={classNames(
                  "absolute h-[12.625rem] w-[90%] lg:w-full",
                  {
                    "lg:h-[40rem]": index === 0,
                  },
                  {
                    "lg:h-[19.25rem]": index === 1,
                  },
                  {
                    "lg:h-[19.25rem]": index === 2,
                  }
                )}
              >
                <div className="bg-[#00000088] w-full absolute h-full z-[8] rounded-md lg:hover:bg-[#e7826b76]"></div>
                <Image
                  alt=""
                  src={data.images.mobileImg}
                  fill
                  quality={100}
                  className="object-fill rounded-md md:hidden"
                />
                <Image
                  alt=""
                  src={data.images.tabletImg}
                  fill
                  quality={100}
                  className="hidden object-fill rounded-md md:block lg:hidden"
                />
                <Image
                  alt=""
                  src={data.images.desktopImg}
                  fill
                  quality={100}
                  className="hidden object-fill rounded-md lg:block"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
