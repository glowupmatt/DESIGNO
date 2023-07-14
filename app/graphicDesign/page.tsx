"use client";

import ServiceCard from "@/components/ServiceCard";
import WorkDisplayComp from "@/components/WorkDisplayComp";
import { graphicDesignData } from "@/data/designData/graphicDesign";
import { homePageProjectDisplay } from "@/data/homePageInfo";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import TitleHeader from "@/components/TitleHeader";
import React from "react";
import Footer from "@/components/Footer";

const page = () => {
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
          <TitleHeader titleHeaderInfo={titleHeaderInfo} />
          <div className="flex flex-col items-center justify-center gap-8  lg:flex-row lg:justify-center lg:items-center p-[2.44rem] lg:mb-[8rem]">
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
          <div className="flex flex-col p-[2.44rem] mb-[16rem] gap-[1.5rem] lg:mb-0 lg:flex-row">
            {homePageProjectDisplay
              .filter((data) => data.title !== "GRAPHIC DESIGN")
              .map((data, index) => {
                return <ServiceCard key={data.title} data={data} />;
              })}
          </div>
        </div>
      </div>
      <div className="lg:mt-[25rem]">
        <Footer />
      </div>
    </div>
  );
};

export default page;
