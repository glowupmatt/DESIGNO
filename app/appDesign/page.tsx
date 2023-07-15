"use client";

import BaseLayout from "@/components/BaseLayout";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import TitleHeader from "@/components/TitleHeader";
import WorkDisplayComp from "@/components/WorkDisplayComp";
import { appDesignData } from "@/data/designData/appDesign";
import { smallServicePageProjectDisplay } from "@/data/homePageInfo";
import { useState } from "react";

const AppDesign = () => {
  const titleHeaderInfo = {
    title: "App Design",
    desc: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
  };

  return (
    <BaseLayout>
      <>
        <div className="max-w-[65rem] w-full">
          <TitleHeader titleHeaderInfo={titleHeaderInfo} />
        </div>
        <div className="flex flex-col items-center justify-center gap-8  lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:justify-center lg:items-center py-[2.44rem] lg:mb-[15rem]">
          {appDesignData.map((data, index) => {
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
        <div className="flex flex-col p-[2.44rem] lg:p-0 lg:py-[2.44rem] gap-[1.5rem] lg:flex-row">
          {smallServicePageProjectDisplay
            .filter((data) => data.title !== "APP DESIGN")
            .map((data, index) => {
              return <ServiceCard key={data.title} data={data} />;
            })}
        </div>
      </>
    </BaseLayout>
  );
};

export default AppDesign;
