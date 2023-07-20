import React from "react";
import Image from "next/image";
import { locations } from "@/data/locations";
import SubmitButton from "./SubmitButton";
import Link from "next/link";

const buttonStyles = "bg-peach text-white";
const Locations = () => {
  return (
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
            <Link href={`/locations#${data.title}`}>
              <SubmitButton buttonStyles={buttonStyles}>
                <>SEE LOCATION</>
              </SubmitButton>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Locations;
