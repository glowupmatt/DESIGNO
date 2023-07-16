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
    textContainer: "",
    textStyles: "",
  };

  return (
    <BaseLayout>
      <div className="max-w-[65rem] w-full">
        <TitleHeader titleHeaderInfo={titleHeaderInfo} />
        <div>
          <div className="flex flex-col items-center justify-center gap-8  lg:flex-row lg:justify-center lg:items-center py-[2.44rem]">
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
          <div className="flex flex-col lg:pb-[2.44rem] lg:pt-[6.44rem] mb-0 gap-[1.5rem] lg:flex-row">
            {smallServicePageProjectDisplay
              .filter((data) => data.title !== "GRAPHIC DESIGN")
              .map((data, index) => {
                return <ServiceCard key={data.title} data={data} />;
              })}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default GraphicDesign;
