"use client";

import ServiceCard from "@/components/ServiceCard";
import WorkDisplayComp from "@/components/WorkDisplayComp";
import { graphicDesignData } from "@/data/designData/graphicDesign";
import { smallServicePageProjectDisplay } from "@/data/homePageInfo";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import TitleHeader from "@/components/TitleHeader";
import React from "react";
import Footer from "@/components/Footer";

const GraphicDesign = () => {
  const titleHeaderInfo = {
    title: "Graphic Design",
    desc: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
  };
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="max-w-[65rem] w-full">
        <Navigation setNavOpen={setNavOpen} navOpen={navOpen} />
        <div>
          <div className="p-[2.44rem]">
            <TitleHeader titleHeaderInfo={titleHeaderInfo} />
          </div>
          <div className="flex flex-col items-center justify-center gap-8  lg:flex-row lg:justify-center lg:items-center py-[2.44rem] lg:mb-[8rem]">
            {graphicDesignData.map((data, index) => {
              return (
                <div
                  key={data.title}
                  className="flex items-center justify-center cursor-pointer"
                >
                  <WorkDisplayComp data={data} />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col p-[2.44rem] lg:py-[2.44rem] mb-0 gap-[1.5rem] lg:mb-[10rem] lg:flex-row">
            {smallServicePageProjectDisplay
              .filter((data) => data.title !== "GRAPHIC DESIGN")
              .map((data, index) => {
                return <ServiceCard key={data.title} data={data} />;
              })}
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default GraphicDesign;
