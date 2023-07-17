"use client";

import ServiceCard from "@/components/ServiceCard";
import WorkDisplayComp from "@/components/WorkDisplayComp";
import { graphicDesignData } from "@/data/designData/graphicDesign";
import { smallServicePageProjectDisplay } from "@/data/homePageInfo";
import TitleHeader from "@/components/TitleHeader";
import React from "react";
import BaseLayout from "@/components/BaseLayout";

const GraphicDesign = () => {
  const titleHeaderInfo = {
    title: "Graphic Design",
    desc: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    textContainer: "h-[20rem]",
    textStyles: "justify-center",
  };

  return (
    <BaseLayout>
      <>
        <div className="flex flex-col lg:gap-[10rem]">
          <div className="md:p-[2.44rem] lg:p-0">
            <TitleHeader titleHeaderInfo={titleHeaderInfo} />
          </div>

          <div className="flex flex-col items-center justify-center gap-8  p-[2.44rem] lg:p-0   lg:flex-row lg:justify-center lg:items-center">
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
          <div className="flex flex-col mb-0 gap-[1.5rem] lg:flex-row">
            {smallServicePageProjectDisplay
              .filter((data) => data.title !== "GRAPHIC DESIGN")
              .map((data, index) => {
                return <ServiceCard key={data.title} data={data} />;
              })}
          </div>
        </div>
      </>
    </BaseLayout>
  );
};

export default GraphicDesign;
